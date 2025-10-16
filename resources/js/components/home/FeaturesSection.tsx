import { homeData } from './constants';

export function FeaturesSection() {
    const { featureList, featureIcons } = homeData;

    return (
        <section id="features" className="grid gap-10 lg:grid-cols-[1fr,1fr]">
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">核心功能矩阵</h2>
                <p className="text-sm leading-relaxed text-slate-300">
                    我们将风控、认购与治理工具整合在同一终端, 通过模块化组合构建适合你团队的工作流。
                </p>
                <div className="feature-grid">
                    {featureList.map((feature) => (
                        <div key={feature.title} className="feature-card">
                            <div className="feature-card__icon" aria-hidden>
                                {featureIcons[feature.icon]}
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-base font-medium text-sky-100">{feature.title}</h3>
                                <p className="text-xs leading-relaxed text-slate-300">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div
                id="overview"
                className="space-y-4 rounded-3xl border border-sky-400/25 bg-slate-900/70 p-6 shadow-xl shadow-blue-900/40 backdrop-blur"
            >
                <h3 className="text-lg font-semibold text-sky-100">链上状态速览</h3>
                <p className="text-sm leading-relaxed text-slate-300">
                    所有监控数据均来自链上, 支持导出报告与阈值告警, 帮助你识别波动并保护认购参与者。
                </p>
                <div className="grid gap-3">
                    {overviewItems.map(({ label, value }) => (
                        <div key={label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-2">
                            <span className="text-xs tracking-[0.24em] text-slate-400 uppercase">{label}</span>
                            <span className="font-medium text-sky-200">{value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const overviewItems = [
    { label: '当前区块', value: '#12,445,776' },
    { label: '平均确认', value: '2.3 s' },
    { label: 'Gas 价格', value: '18 gwei' },
    { label: '守护节点', value: '在线 142' },
];
