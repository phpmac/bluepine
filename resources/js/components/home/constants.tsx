import type { ReactNode } from 'react';
import type { FeatureIconKey, FeatureItem, IeoHighlight, IeoHighlightIconKey, IeoPhase, IeoPhaseIconKey, MetricIconKey, MetricItem } from './types';

const featureIcons: Record<FeatureIconKey, ReactNode> = {
    shieldPulse: (
        <svg viewBox="0 0 52 52" role="img" aria-hidden="true" className="feature-icon__svg">
            <defs>
                <radialGradient id="featureShieldGlow" cx="50%" cy="18%" r="75%">
                    <stop offset="0%" stopColor="rgba(125,211,252,0.9)" />
                    <stop offset="45%" stopColor="rgba(56,189,248,0.65)" />
                    <stop offset="100%" stopColor="rgba(56,189,248,0)" />
                </radialGradient>
            </defs>
            <path
                d="M26 5.5 10.2 12.4v12.5c0 11.7 7.1 18.7 15.8 22.6 8.7-3.9 15.8-10.9 15.8-22.6V12.4L26 5.5Z"
                fill="url(#featureShieldGlow)"
                opacity="0.7"
            />
            <path
                d="M26 6.5 11.5 12.8v12.1c0 10.3 6 16.5 14.5 20.2 8.5-3.7 14.5-9.8 14.5-20.2V12.8L26 6.5Z"
                stroke="rgba(191,219,254,0.85)"
                strokeWidth="1.5"
                fill="rgba(14,165,233,0.12)"
            />
            <path d="M20.4 26.8 24.8 31l7.1-10.2" stroke="rgba(224,242,254,0.9)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="26" cy="15.5" r="4.6" stroke="rgba(125,211,252,0.9)" strokeWidth="1.4" fill="rgba(14,165,233,0.25)" />
        </svg>
    ),
    orbitSwap: (
        <svg viewBox="0 0 52 52" role="img" aria-hidden="true" className="feature-icon__svg">
            <defs>
                <linearGradient id="featureOrbitTrail" x1="12%" y1="12%" x2="92%" y2="78%">
                    <stop offset="0%" stopColor="rgba(59,130,246,0.85)" />
                    <stop offset="45%" stopColor="rgba(14,165,233,0.9)" />
                    <stop offset="100%" stopColor="rgba(56,189,248,0.35)" />
                </linearGradient>
            </defs>
            <ellipse cx="26" cy="26" rx="18.5" ry="11.5" stroke="url(#featureOrbitTrail)" strokeWidth="2.2" fill="none" />
            <ellipse transform="rotate(58 26 26)" cx="26" cy="26" rx="18.5" ry="11.5" stroke="rgba(56,189,248,0.3)" strokeWidth="1.4" fill="none" />
            <ellipse transform="rotate(-58 26 26)" cx="26" cy="26" rx="18.5" ry="11.5" stroke="rgba(14,165,233,0.4)" strokeWidth="1.2" fill="none" />
            <circle cx="15.6" cy="24.2" r="3" fill="rgba(14,165,233,0.65)" />
            <circle cx="34.9" cy="17.1" r="2.3" fill="rgba(34,211,238,0.85)" />
            <circle cx="36.7" cy="34.8" r="3.4" fill="rgba(59,130,246,0.75)" />
            <path d="M18.4 28.6c4.8 2.9 9.7 3.1 14.6.1" stroke="rgba(226,232,240,0.8)" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M19.3 20.1c5.2-2.2 10.4-2.1 15.6.2" stroke="rgba(226,232,240,0.55)" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
        </svg>
    ),
    identityMesh: (
        <svg viewBox="0 0 52 52" role="img" aria-hidden="true" className="feature-icon__svg">
            <circle cx="26" cy="18.5" r="7.5" stroke="rgba(224,242,254,0.85)" strokeWidth="1.8" fill="rgba(14,165,233,0.22)" />
            <path
                d="M13.4 39.6c2.5-6.4 7.8-10 12.6-10s10.1 3.6 12.6 10"
                stroke="rgba(125,211,252,0.8)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
            />
            <g opacity="0.9" strokeWidth="1.5" strokeLinecap="round">
                <path d="M9.2 24.5 18.6 20" stroke="rgba(56,189,248,0.85)" />
                <path d="M33.4 19.8 42.8 24.4" stroke="rgba(14,165,233,0.7)" />
                <path d="M26 8.2v6.2" stroke="rgba(59,130,246,0.75)" />
                <path d="M26 34.5v7.6" stroke="rgba(96,165,250,0.6)" />
            </g>
            <circle cx="9.2" cy="24.5" r="2.6" fill="rgba(34,211,238,0.75)" />
            <circle cx="42.8" cy="24.4" r="2.6" fill="rgba(59,130,246,0.75)" />
            <circle cx="26" cy="8.3" r="2.2" fill="rgba(56,189,248,0.8)" />
            <circle cx="26" cy="42.1" r="2.4" fill="rgba(125,211,252,0.7)" />
        </svg>
    ),
    workflowGrid: (
        <svg viewBox="0 0 52 52" role="img" aria-hidden="true" className="feature-icon__svg">
            <rect x="11" y="12" width="12" height="12" rx="3.2" fill="rgba(56,189,248,0.2)" stroke="rgba(14,165,233,0.7)" strokeWidth="1.5" />
            <rect x="29" y="12" width="12" height="12" rx="3.2" fill="rgba(14,165,233,0.12)" stroke="rgba(37,99,235,0.65)" strokeWidth="1.5" />
            <rect x="11" y="28" width="12" height="12" rx="3.2" fill="rgba(14,116,144,0.3)" stroke="rgba(125,211,252,0.6)" strokeWidth="1.5" />
            <rect x="29" y="28" width="12" height="12" rx="3.2" fill="rgba(14,165,233,0.26)" stroke="rgba(59,130,246,0.7)" strokeWidth="1.5" />
            <path d="M23 18h5" stroke="rgba(226,232,240,0.8)" strokeWidth="2" strokeLinecap="round" />
            <path d="M17 24v4.2" stroke="rgba(125,211,252,0.8)" strokeWidth="2" strokeLinecap="round" />
            <path d="M35 24v4.2" stroke="rgba(56,189,248,0.8)" strokeWidth="2" strokeLinecap="round" />
            <path d="M23.2 34H32" stroke="rgba(226,232,240,0.6)" strokeWidth="2" strokeLinecap="round" />
            <path d="M32.5 17.8 35.8 14.5" stroke="rgba(226,232,240,0.7)" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M19.4 33.8 22.7 30.5" stroke="rgba(226,232,240,0.7)" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    ),
};

const metricIcons: Record<MetricIconKey, ReactNode> = {
    speed: (
        <svg viewBox="0 0 48 48" role="img" aria-hidden="true" className="metric-icon__svg">
            <path
                d="M10.8 34.7c-1-1.9-1.5-4-1.5-6.2 0-8.8 7.2-16 16-16s16 7.2 16 16c0 2.2-0.5 4.3-1.5 6.2"
                stroke="rgba(125,211,252,0.7)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
            />
            <path d="M24 22.2 31.4 27" stroke="rgba(226,232,240,0.85)" strokeWidth="2.6" strokeLinecap="round" />
            <circle cx="24" cy="27.8" r="6.3" stroke="rgba(34,211,238,0.5)" strokeWidth="1.8" fill="rgba(14,165,233,0.18)" />
            <path d="M13.2 31.6h-3.2" stroke="rgba(96,165,250,0.55)" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M41.8 31.6H39" stroke="rgba(14,165,233,0.55)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    nodes: (
        <svg viewBox="0 0 48 48" role="img" aria-hidden="true" className="metric-icon__svg">
            <circle cx="24" cy="12" r="5" fill="rgba(56,189,248,0.35)" stroke="rgba(14,165,233,0.7)" strokeWidth="1.6" />
            <circle cx="14" cy="26" r="4.4" fill="rgba(14,165,233,0.2)" stroke="rgba(56,189,248,0.6)" strokeWidth="1.4" />
            <circle cx="34" cy="26" r="4.4" fill="rgba(59,130,246,0.28)" stroke="rgba(125,211,252,0.7)" strokeWidth="1.4" />
            <circle cx="24" cy="38" r="4.8" fill="rgba(14,116,144,0.4)" stroke="rgba(125,211,252,0.7)" strokeWidth="1.4" />
            <path d="M24 17v6" stroke="rgba(226,232,240,0.6)" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M18 26h12" stroke="rgba(226,232,240,0.6)" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M20.8 32.2 17 28.4" stroke="rgba(34,211,238,0.55)" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M27.2 32.2 31 28.4" stroke="rgba(96,165,250,0.55)" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
    ),
    volume: (
        <svg viewBox="0 0 48 48" role="img" aria-hidden="true" className="metric-icon__svg">
            <rect x="12" y="18" width="5" height="18" rx="1.6" fill="rgba(56,189,248,0.25)" />
            <rect x="21" y="12" width="6" height="24" rx="1.6" fill="rgba(34,211,238,0.3)" />
            <rect x="31" y="21" width="5" height="15" rx="1.6" fill="rgba(59,130,246,0.3)" />
            <path
                d="M17.5 24.6 21 22l4 5.8 5.8-8.2 5.2 4"
                stroke="rgba(226,232,240,0.75)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            <path d="M10.5 33.5h27" stroke="rgba(148,163,184,0.35)" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
    ),
    tvl: (
        <svg viewBox="0 0 48 48" role="img" aria-hidden="true" className="metric-icon__svg">
            <path d="M24 10 12 16v12l12 6 12-6V16L24 10Z" fill="rgba(14,165,233,0.24)" stroke="rgba(56,189,248,0.6)" strokeWidth="1.6" />
            <path d="M12 28v6l12 6 12-6v-6" stroke="rgba(59,130,246,0.65)" strokeWidth="1.4" fill="rgba(2,132,199,0.18)" />
            <path d="M18 22.4 24 25l6-2.6" stroke="rgba(224,242,254,0.8)" strokeWidth="2" strokeLinecap="round" />
            <path d="M18 28.8 24 31l6-2.6" stroke="rgba(226,232,240,0.6)" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="24" cy="18.4" r="4" fill="rgba(14,165,233,0.2)" stroke="rgba(224,242,254,0.8)" strokeWidth="1.4" />
        </svg>
    ),
};

const ieoPhaseIcons: Record<IeoPhaseIconKey, ReactNode> = {
    priority: (
        <svg viewBox="0 0 52 52" role="img" aria-hidden="true" className="ieo-phase__glyph">
            <circle cx="26" cy="26" r="22" fill="rgba(14,165,233,0.18)" stroke="rgba(56,189,248,0.4)" strokeWidth="1.8" />
            <path d="M16 28.5 26.2 17l9.8 11.5" stroke="rgba(224,242,254,0.85)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.6 28.4 26.2 34l5.8-5.6" stroke="rgba(14,165,233,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M26.2 12v6" stroke="rgba(56,189,248,0.55)" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M26.2 34v6" stroke="rgba(56,189,248,0.55)" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
    ),
    public: (
        <svg viewBox="0 0 52 52" role="img" aria-hidden="true" className="ieo-phase__glyph">
            <defs>
                <radialGradient id="ieoPhasePublic" cx="50%" cy="35%" r="60%">
                    <stop offset="0%" stopColor="rgba(224,242,254,0.9)" />
                    <stop offset="60%" stopColor="rgba(56,189,248,0.45)" />
                    <stop offset="100%" stopColor="rgba(14,165,233,0.05)" />
                </radialGradient>
            </defs>
            <circle cx="26" cy="26" r="18" fill="url(#ieoPhasePublic)" />
            <path
                d="M10 36c6-3.6 11.4-5.4 16-5.4S36 32.4 42 36"
                stroke="rgba(125,211,252,0.65)"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
            />
            <circle cx="26" cy="18" r="6.4" fill="rgba(14,165,233,0.35)" stroke="rgba(224,242,254,0.8)" strokeWidth="1.4" />
            <circle cx="15.6" cy="26.7" r="3" fill="rgba(125,211,252,0.5)" />
            <circle cx="36.4" cy="26.7" r="3" fill="rgba(59,130,246,0.5)" />
        </svg>
    ),
    tge: (
        <svg viewBox="0 0 52 52" role="img" aria-hidden="true" className="ieo-phase__glyph">
            <path d="M14 34h24l-12 12Z" fill="rgba(56,189,248,0.3)" opacity="0.4" />
            <path d="M26 8 12 34h28Z" fill="rgba(14,165,233,0.22)" stroke="rgba(56,189,248,0.55)" strokeWidth="1.6" />
            <path d="M26 16v8l6 3.6" stroke="rgba(224,242,254,0.85)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="26" cy="12.6" r="3" fill="rgba(224,242,254,0.85)" />
            <path d="M18 34h16" stroke="rgba(148,163,184,0.45)" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
    ),
};

const ieoHighlightIcons: Record<IeoHighlightIconKey, ReactNode> = {
    allocation: (
        <svg viewBox="0 0 44 44" role="img" aria-hidden="true" className="ieo-highlight__glyph">
            <circle cx="22" cy="22" r="18" fill="rgba(14,116,144,0.4)" stroke="rgba(56,189,248,0.45)" strokeWidth="1.4" />
            <path d="M12 18.5h20" stroke="rgba(224,242,254,0.75)" strokeWidth="2" strokeLinecap="round" />
            <path d="M14.5 25.5h15" stroke="rgba(125,211,252,0.6)" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M17.5 13.5h9" stroke="rgba(59,130,246,0.7)" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    ),
    price: (
        <svg viewBox="0 0 44 44" role="img" aria-hidden="true" className="ieo-highlight__glyph">
            <circle cx="22" cy="22" r="18" fill="rgba(14,165,233,0.18)" stroke="rgba(59,130,246,0.5)" strokeWidth="1.4" />
            <path d="M22 12v20" stroke="rgba(224,242,254,0.85)" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M16 18h9c2.2 0 4 1.3 4 4s-1.8 4-4 4h-4" stroke="rgba(125,211,252,0.75)" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M18 28h5" stroke="rgba(96,165,250,0.6)" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
    ),
    vesting: (
        <svg viewBox="0 0 44 44" role="img" aria-hidden="true" className="ieo-highlight__glyph">
            <circle cx="22" cy="22" r="18" fill="rgba(37,99,235,0.18)" stroke="rgba(59,130,246,0.45)" strokeWidth="1.4" />
            <path d="M22 12v10l7 4" stroke="rgba(224,242,254,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 16h5" stroke="rgba(125,211,252,0.7)" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M15 22h4" stroke="rgba(125,211,252,0.7)" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M15 28h8" stroke="rgba(59,130,246,0.6)" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
    ),
};

const featureList: FeatureItem[] = [
    {
        title: '实时链上风控',
        description: '通过多维数据流自动捕捉异常资产波动,并结合零知识证明提供可验证的安全审计。',
        icon: 'shieldPulse',
    },
    {
        title: '跨链流动性聚合',
        description: '统一聚合主流公链与侧链流动性池,在单一界面完成交换、抵押与流动性管理。',
        icon: 'orbitSwap',
    },
    {
        title: '全链身份凭证',
        description: '用户可在一键交互式面板中生成可复用的 DID 与可验证凭证,实现隐私友好的访问控制。',
        icon: 'identityMesh',
    },
    {
        title: '自定义执行编排',
        description: '通过策略引擎拖拽组合事件触发器,自动化执行批量合约调用与跨链消息。',
        icon: 'workflowGrid',
    },
];

const metrics: MetricItem[] = [
    { label: '链上TPS', value: '2,480+', icon: 'speed' },
    { label: '治理节点', value: '148', icon: 'nodes' },
    { label: '24h成交量', value: '$326M', icon: 'volume' },
    { label: 'TVL锁仓', value: '$1.9B', icon: 'tvl' },
];

const ieoPhases: IeoPhase[] = [
    {
        title: '私募抢先轮',
        window: '04.02 12:00 - 04.05 12:00 (UTC+8)',
        allocation: '白名单额度 · 可加倍配售',
        cap: '$3.5M',
        status: '进行中',
        icon: 'priority',
    },
    {
        title: '公众认购轮',
        window: '04.06 12:00 - 04.10 12:00 (UTC+8)',
        allocation: 'KYC 通过用户 · 上限 2,500 USDT',
        cap: '$6M',
        status: '即将开始',
        icon: 'public',
    },
    {
        title: 'TGE & 开盘',
        window: '04.12 20:00 (UTC+8)',
        allocation: '40% 首次解锁 · 60% 线性释放 6 个月',
        cap: '初始流通 18%',
        status: '预告',
        icon: 'tge',
    },
];

const ieoHighlights: IeoHighlight[] = [
    {
        label: '代币代码',
        value: 'AUR',
        detail: '总量 1,000,000,000 · IEO 额度 12%',
        icon: 'allocation',
    },
    {
        label: '认购价格',
        value: '0.18 USDT',
        detail: '每账户最低 200 USDT · 公众轮封顶 2,500 USDT',
        icon: 'price',
    },
    {
        label: '释放机制',
        value: '40% TGE / 60% 线性',
        detail: '剩余部分每月解锁 10%, 共 6 期完成',
        icon: 'vesting',
    },
];

export const homeData = {
    featureIcons,
    metricIcons,
    ieoPhaseIcons,
    ieoHighlightIcons,
    featureList,
    metrics,
    ieoPhases,
    ieoHighlights,
};

export const ieoStatusTone: Record<IeoPhase['status'], string> = {
    进行中: 'border-emerald-400/40 bg-emerald-400/15 text-emerald-200',
    即将开始: 'border-sky-400/40 bg-sky-400/10 text-sky-200',
    预告: 'border-cyan-300/35 bg-cyan-300/10 text-cyan-100',
};
