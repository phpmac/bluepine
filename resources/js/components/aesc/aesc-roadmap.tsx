import { useLaravelReactI18n } from 'laravel-react-i18n';
import { CheckCircle2 } from 'lucide-react';

/**
 * AESC 发展路线图组件
 *
 * 展示 AESC 生态的发展阶段和里程碑
 */
export function AescRoadmap() {
    const { t } = useLaravelReactI18n();

    const roadmapPhases = [
        {
            phaseKey: 'aesc.roadmap.phase1.phase',
            periodKey: 'aesc.roadmap.phase1.period',
            titleKey: 'aesc.roadmap.phase1.title',
            milestoneKey: 'aesc.roadmap.phase1.milestone',
            status: 'completed',
        },
        {
            phaseKey: 'aesc.roadmap.phase2.phase',
            periodKey: 'aesc.roadmap.phase2.period',
            titleKey: 'aesc.roadmap.phase2.title',
            milestoneKey: 'aesc.roadmap.phase2.milestone',
            status: 'current',
        },
        {
            phaseKey: 'aesc.roadmap.phase3.phase',
            periodKey: 'aesc.roadmap.phase3.period',
            titleKey: 'aesc.roadmap.phase3.title',
            milestoneKey: 'aesc.roadmap.phase3.milestone',
        },
        {
            phaseKey: 'aesc.roadmap.phase4.phase',
            periodKey: 'aesc.roadmap.phase4.period',
            titleKey: 'aesc.roadmap.phase4.title',
            milestoneKey: 'aesc.roadmap.phase4.milestone',
        },
        {
            phaseKey: 'aesc.roadmap.phase5.phase',
            periodKey: 'aesc.roadmap.phase5.period',
            titleKey: 'aesc.roadmap.phase5.title',
            milestoneKey: 'aesc.roadmap.phase5.milestone',
        },
    ];

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">{t('aesc.roadmap.title')}</h2>
                </div>

                <div className="relative">
                    {/* 时间轴线 */}
                    <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-600 md:left-1/2"></div>

                    <div className="space-y-12">
                        {roadmapPhases.map((phase, index) => (
                            <div key={index} className={`relative grid gap-8 md:grid-cols-2 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                {/* 左侧内容 */}
                                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                                    <div className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm md:ml-8">
                                        <div className="mb-2 flex items-center gap-3">
                                            <span className="text-sm font-semibold text-emerald-300">{t(phase.phaseKey)}</span>
                                            <span className="text-sm text-slate-400">·</span>
                                            <span className="text-sm text-slate-400">{t(phase.periodKey)}</span>
                                        </div>
                                        <h3 className="mb-3 text-lg font-bold text-white">{t('aesc.roadmap.coreTask')}</h3>
                                        <p className="mb-3 text-sm text-slate-300">{t(phase.titleKey)}</p>
                                        <h4 className="mb-2 flex items-center text-xs font-semibold text-emerald-300">
                                            <CheckCircle2 className="mr-2 h-3 w-3" />
                                            {t('aesc.roadmap.keyMilestone')}
                                        </h4>
                                        <p className="text-sm text-slate-300">{t(phase.milestoneKey)}</p>
                                    </div>
                                </div>

                                {/* 时间节点 */}
                                <div
                                    className={`absolute left-6 flex h-6 w-6 items-center justify-center rounded border-2 border-emerald-500 bg-slate-950 md:left-1/2 md:-translate-x-1/2 ${index % 2 === 1 ? 'md:order-1' : ''}`}
                                >
                                    <div className="h-3 w-3 rounded-sm bg-emerald-500"></div>
                                </div>

                                {/* 右侧占位 */}
                                <div className={index % 2 === 1 ? 'md:order-1' : ''}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
