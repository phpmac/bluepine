import { Link } from '@inertiajs/react';

import { homeData, ieoStatusTone } from './constants';

export function IeoSection() {
    const { ieoPhases, ieoPhaseIcons, ieoHighlights, ieoHighlightIcons } = homeData;

    return (
        <section id="ieo" className="ieo-panel">
            <div className="grid gap-6 lg:grid-cols-[1.05fr,1fr] lg:items-start">
                <div className="space-y-5">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1 text-xs font-semibold tracking-[0.26em] text-sky-200 uppercase">
                        IEO Launch
                    </span>
                    <h2 className="text-3xl font-semibold text-white">AUR 代币全球认购日程</h2>
                    <p className="text-sm leading-relaxed text-slate-300">
                        通过锁定额度、积分抽签与链上托管的组合机制, Aurora Launchpad 将申购体验压缩至数分钟。无须担心流程繁琐,
                        所有动作均在统一页面完成。
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
                        <Link href="/ieo" className="cta-primary">
                            查看认购详情
                        </Link>
                        <a href="#overview" className="cta-ghost">
                            代币治理面板
                        </a>
                    </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                    {ieoPhases.map((phase) => (
                        <div key={phase.title} className="ieo-phase">
                            <span className="ieo-phase__icon" aria-hidden>
                                {ieoPhaseIcons[phase.icon]}
                            </span>
                            <div className="flex items-center justify-between gap-2">
                                <h3 className="text-base font-semibold text-sky-100">{phase.title}</h3>
                                <span className={`ieo-phase__status ${ieoStatusTone[phase.status]}`}>{phase.status}</span>
                            </div>
                            <p className="text-xs font-medium tracking-[0.22em] text-slate-400 uppercase">{phase.window}</p>
                            <p className="text-sm text-slate-200">{phase.allocation}</p>
                            <p className="text-xs tracking-[0.24em] text-slate-400 uppercase">{phase.cap}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
                {ieoHighlights.map((highlight) => (
                    <div key={highlight.label} className="ieo-highlight">
                        <span className="ieo-highlight__icon" aria-hidden>
                            {ieoHighlightIcons[highlight.icon]}
                        </span>
                        <div className="text-xs tracking-[0.28em] text-slate-400 uppercase">{highlight.label}</div>
                        <div className="text-xl font-semibold text-sky-100">{highlight.value}</div>
                        <p className="text-xs leading-relaxed text-slate-300">{highlight.detail}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
