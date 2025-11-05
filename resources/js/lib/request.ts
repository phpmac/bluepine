import { useDisconnect } from '@reown/appkit/react';
import axios from 'axios';

// 设置默认请求头
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// 创建 axios 实例
const instance = axios.create({
    baseURL: '/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

// 请求拦截器
instance.interceptors.request.use(
    (config) => {
        // 获取 CSRF Token
        const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
        if (token) {
            config.headers['X-CSRF-TOKEN'] = token;
        }

        // 获取认证令牌
        const authToken = localStorage.getItem('token');
        if (authToken) {
            config.headers['Authorization'] = `Bearer ${authToken}`;
        }

        return config;
    },
    (error) => {
        console.error('请求错误:', error);
        return Promise.reject(error);
    },
);

// 响应拦截器
instance.interceptors.response.use(
    (response) => {
        // 处理成功响应
        // 如果后端返回的数据有统一的格式, 可以在这里进行处理
        // 例如: { code: 10000, message: 'success', data: {} }
        if (response.data && [10000, 20000].includes(response.data.code)) {
            alert(response.data.message);
        }

        return response;
    },
    async (error) => {
        // 处理错误响应
        if (error.response) {
            switch (error.response.status) {
                // 401: 未登录
                case 401: {
                    const { disconnect } = useDisconnect();
                    localStorage.removeItem('token');
                    await disconnect();
                    // 看看这里如何处理
                    throw new Error('未登录');
                }
                // 403: 权限不足或 token 过期
                case 403:
                    // 看看这里如何处理
                    throw new Error('权限不足');
                    break;
                // 404: 请求不存在
                case 404:
                    // 可以选择重定向到 404 页面或者只是提示错误
                    console.error('请求的资源不存在');
                    alert('请求的资源不存在');
                    break;
                // 422: 请求参数错误
                case 422:
                    console.error(error.response.data.errors);
                    alert(Object.values(error.response.data.errors)[0] as string);
                    break;
                // 500: 服务器错误
                case 500:
                    console.error('服务器错误', error.response.data.message);
                    alert(error.response.data.message);
                    break;
                default:
                    console.error(`未处理的错误状态码: ${error.response.status}`);
                    alert(`未处理的错误: ${error.response.status}`);
                    break;
            }
        } else if (error.request) {
            // 请求已发送但没有收到响应
            console.error('网络错误, 未收到响应');
            alert('网络错误, 未收到响应');
        } else {
            // 请求配置出错
            console.error('请求配置错误:', error.message);
            alert(`请求配置错误: ${error.message}`);
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
