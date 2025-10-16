export function IeoHeroSection() {
    return (
        <section className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
                <span className="tag">AUR IEO · 2024</span>
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Aurora 协议 IEO 认购全流程</h1>
                <p className="text-base leading-relaxed text-slate-300">
                    通过 Aurora Launchpad, 你可以在同一界面完成资格审核、额度锁定与抽签确认。我们提供链上托管、风控监测与详尽的时间表, 让 IEO
                    过程清晰可控。
                </p>
                <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
                    <button type="button" className="wallet-button">
                        连接钱包
                    </button>
                    <a href="#timeline" className="cta-ghost">
                        查看时间轴
                    </a>
                    <a href="#faqs" className="cta-ghost">
                        常见问题
                    </a>
                </div>
            </div>
            <div className="hero-card">
                <div className="hero-meta">
                    <span>总额度 $12M</span>
                    <span>TGE 40% Unlock</span>
                    <span>DEX &amp; CEX 同步上线</span>
                </div>
                <div className="hero-stats">
                    {heroStats.map(({ label, value }) => (
                        <div key={label} className="flex items-center justify-between">
                            <span>{label}</span>
                            <span className="font-semibold text-sky-100">{value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const heroStats = [
    { label: '申购代币', value: 'AUR' },
    { label: '发行价格', value: '0.18 USDT' },
    { label: '最少参与', value: '200 USDT' },
    { label: '单户封顶', value: '2,500 USDT' },
];
