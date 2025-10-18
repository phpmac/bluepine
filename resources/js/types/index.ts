import { LucideIcon } from 'lucide-react';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    url: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    // 可选: 服务端共享的语言与文案
    locale?: string;
    locales?: string[];
    i18n?: {
        title: string;
        tagline?: string;
        nav?: {
            hero: string;
            private_sale_overview: string;
            tokenomics: string;
            vesting: string;
            about: string;
        };
        buttons?: {
            connect_wallet: string;
            join_whitelist: string;
        };
        [key: string]: unknown;
    };
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface StageData {
    index: bigint; // 当前阶段
    cap: bigint; // 阶段额度
    sold: bigint; // 阶段已售
    available: bigint; // 阶段剩余
    priceNumerator: bigint; // 价格分子
    priceDenominator: bigint; // 价格分母
}
