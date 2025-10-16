import { Link } from '@inertiajs/react';

const heroStats = [
    { label: '实时订阅深度', value: '98%' },
    { label: '节点覆盖', value: '142' },
    { label: '跨链成功率', value: '99.2%' },
];

export function HeroSection() {
    return (
        <section id="hero" className="hero-grid grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1 text-xs font-semibold tracking-[0.28em] text-sky-200 uppercase">
                    实时链上网络
                </span>
                <h1 className="text-4xl font-semibold tracking-tight text-sky-50 sm:text-5xl lg:text-[3.25rem]">
                    构建顺滑的 IEO 与治理体验, 让资产流转安全、可控又具未来感。
                </h1>
                <p className="max-w-2xl text-base leading-relaxed text-slate-300">
                    Aurora 协议提供统一的跨链资金入口、实时风险引擎以及专业的发行工具。透过简洁的分析面板和友好的认购流程,
                    你可以在几分钟内完成资产发行、监控和社区治理。
                </p>
                <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
                    <button type="button" className="wallet-button">
                        连接钱包
                    </button>
                    <Link href="/ieo" className="cta-ghost">
                        查看认购流程
                    </Link>
                    <a href="#features" className="cta-ghost">
                        功能详情
                    </a>
                </div>
            </div>
            <div className="hero-visual">
                <div className="hero-visual__header">
                    <span className="hero-visual__badge">Launch Pulse</span>
                    <span className="hero-visual__status">实时同步</span>
                </div>
                <div className="hero-visual__summary">
                    <div className="hero-visual__chart" aria-hidden="true">
                        <span className="hero-visual__ring hero-visual__ring--outer" />
                        <span className="hero-visual__ring hero-visual__ring--inner" />
                        <span className="hero-visual__dot hero-visual__dot--one" />
                        <span className="hero-visual__dot hero-visual__dot--two" />
                        <span className="hero-visual__dot hero-visual__dot--three" />
                    </div>
                    <div className="hero-visual__stats">
                        {heroStats.map((item) => (
                            <div key={item.label} className="hero-visual__stat">
                                <span className="hero-visual__stat-label">{item.label}</span>
                                <span className="hero-visual__stat-value">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="hero-visual__footnote">指标来自链上监控节点, 以 5 秒为周期刷新, 帮助你随时评估认购窗口与治理策略。</p>
            </div>
        </section>
    );
}
