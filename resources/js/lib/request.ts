import { useDisconnect } from '@reown/appkit/react';
import axios from 'axios';

// 設置默認請求頭
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// 創建 axios 實例
const instance = axios.create({
    baseURL: '/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

// 請求攔截器
instance.interceptors.request.use(
    (config) => {
        // 獲取 CSRF Token
        const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
        if (token) {
            config.headers['X-CSRF-TOKEN'] = token;
        }

        // 獲取認證令牌
        const authToken = localStorage.getItem('token');
        if (authToken) {
            config.headers['Authorization'] = `Bearer ${authToken}`;
        }

        return config;
    },
    (error) => {
        console.error('請求錯誤：', error);
        return Promise.reject(error);
    },
);

// 響應攔截器
instance.interceptors.response.use(
    (response) => {
        // 處理成功響應
        // 如果後端返回的數據有統一的格式，可以在這裡進行處理
        // 例如：{ code: 10000, message: 'success', data: {} }
        if (response.data && [10000, 20000].includes(response.data.code)) {
            alert(response.data.message);
        }

        return response.data;
    },
    async (error) => {
        // 處理錯誤響應
        if (error.response) {
            switch (error.response.status) {
                // 401: 未登入
                case 401: {
                    const { disconnect } = useDisconnect();
                    localStorage.removeItem('token');
                    await disconnect();
                    // 看看这里如何处理
                    throw new Error('未登入');
                }
                // 403: 權限不足或 token 過期
                case 403:
                    // 看看这里如何处理
                    throw new Error('權限不足');
                    break;
                // 404: 請求不存在
                case 404:
                    // 可以選擇重定向到 404 頁面或者只是提示錯誤
                    console.error('請求的資源不存在');
                    alert('請求的資源不存在');
                    break;
                // 422: 請求參數錯誤
                case 422:
                    console.error(error.response.data.errors);
                    alert(Object.values(error.response.data.errors)[0] as string);
                    break;
                // 500: 伺服器錯誤
                case 500:
                    console.error('伺服器錯誤', error.response.data.message);
                    alert(error.response.data.message);
                    break;
                default:
                    console.error(`未處理的錯誤狀態碼: ${error.response.status}`);
                    alert(`未處理的錯誤: ${error.response.status}`);
                    break;
            }
        } else if (error.request) {
            // 請求已發送但沒有收到回應
            console.error('網路錯誤，未收到回應');
            alert('網路錯誤，未收到回應');
        } else {
            // 請求配置出錯
            console.error('請求配置錯誤：', error.message);
            alert(`請求配置錯誤: ${error.message}`);
        }

        return Promise.reject(error.response ? error.response.data : error);
    },
);

export default {
    get: instance.get,
    post: instance.post,
    put: instance.put,
    delete: instance.delete,
    patch: instance.patch,
};
