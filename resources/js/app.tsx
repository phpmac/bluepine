import '../css/app.css';

import { metadata, networks, projectId, wagmiAdapter } from '@/config';
import { createInertiaApp } from '@inertiajs/react';
import { configureEcho } from '@laravel/echo-react';
import { createAppKit } from '@reown/appkit/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LaravelReactI18nProvider } from 'laravel-react-i18n';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { WagmiProvider } from 'wagmi';
import { route as routeFn } from 'ziggy-js';
import { initializeTheme } from './hooks/use-appearance';

configureEcho({
    broadcaster: 'reverb',
});

declare global {
    const route: typeof routeFn;
}

const appName = import.meta.env.VITE_APP_NAME || 'Agri-Eco Smart Chain';

// 创建 QueryClient 实例
const queryClient = new QueryClient();

// Web3 配置
const generalConfig = {
    projectId,
    networks,
    metadata,
    themeMode: 'dark' as const,
    themeVariables: {
        '--w3m-accent': '#EAB308', // 黄金色
        '--w3m-color-mix': '#F59E0B',
        '--w3m-color-mix-strength': 20,
        '--w3m-font-family': 'Inter, system-ui, -apple-system, sans-serif',
        '--w3m-border-radius-master': '12px',
    },
};

// 创建 AppKit
createAppKit({
    adapters: [wagmiAdapter],
    ...generalConfig,
    features: {
        analytics: true,
        email: false, // 禁用邮箱登录
        socials: false, // 禁用社交登录
        onramp: false, // 禁用法币入金
        send: false, // 禁用Send
    },
});

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        const stored = typeof window !== 'undefined' ? localStorage.getItem('appLanguage') : null;
        const initialLocale = stored || document.documentElement.lang || 'en';

        root.render(
            <LaravelReactI18nProvider locale={initialLocale} fallbackLocale={'en'} files={import.meta.glob('/lang/*.json', { eager: true })}>
                <WagmiProvider config={wagmiAdapter.wagmiConfig}>
                    <QueryClientProvider client={queryClient}>
                        <App {...props} />
                    </QueryClientProvider>
                </WagmiProvider>
            </LaravelReactI18nProvider>,
        );
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();
