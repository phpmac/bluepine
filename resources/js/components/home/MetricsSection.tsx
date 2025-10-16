import { homeData } from './constants';

export function MetricsSection() {
    const { metrics, metricIcons } = homeData;

    return (
        <section id="metrics" className="space-y-6">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold text-white">链上关键指标</h2>
                <p className="max-w-2xl text-sm leading-relaxed text-slate-300">
                    内置监控实时同步执行数据, 帮助你在认购与治理过程中快速评估网络健康度与用户活跃情况。
                </p>
            </div>
            <div className="metric-grid">
                {metrics.map((metric) => (
                    <div key={metric.label} className="metric-card">
                        <span className="metric-card__icon" aria-hidden>
                            {metricIcons[metric.icon]}
                        </span>
                        <div className="text-3xl font-semibold text-sky-100">{metric.value}</div>
                        <div className="mt-2 text-xs tracking-[0.28em] text-slate-400 uppercase">{metric.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
