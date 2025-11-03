import { useLaravelReactI18n } from 'laravel-react-i18n';
import { CheckCircle2, Clock, Zap } from 'lucide-react';

/**
 * Airdrop 时间轴组件
 *
 * 展示活动的关键时间点
 */
export function AirdropTimeline() {
    const { t } = useLaravelReactI18n();

    const timeline = [
        { dateKey: 'airdrop.timeline.date1', eventKey: 'airdrop.timeline.event1', status: 'completed' },
        { dateKey: 'airdrop.timeline.date2', eventKey: 'airdrop.timeline.event2', status: 'active' },
        { dateKey: 'airdrop.timeline.date3', eventKey: 'airdrop.timeline.event3', status: 'upcoming' },
        { dateKey: 'airdrop.timeline.date4', eventKey: 'airdrop.timeline.event4', status: 'upcoming' },
        { dateKey: 'airdrop.timeline.date5', eventKey: 'airdrop.timeline.event5', status: 'upcoming' },
    ];

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">{t('airdrop.timeline.title')}</h2>
                </div>

                <div className="relative">
                    {/* 时间轴线 */}
                    <div className="absolute top-8 right-0 left-0 hidden h-0.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 md:block"></div>

                    <div className="grid gap-6 md:grid-cols-5 md:gap-8">
                        {timeline.map((item, index) => (
                            <div key={index} className="relative text-center">
                                {/* 时间节点 */}
                                <div
                                    className={`relative z-10 mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border-4 transition-all md:h-16 md:w-16 ${
                                        item.status === 'completed'
                                            ? 'border-emerald-500 bg-emerald-500 shadow-lg shadow-emerald-500/50'
                                            : item.status === 'active'
                                              ? 'border-teal-500 bg-teal-500 shadow-lg shadow-teal-500/50'
                                              : 'border-slate-600 bg-slate-800'
                                    }`}
                                >
                                    {item.status === 'completed' ? (
                                        <CheckCircle2 className="h-7 w-7 text-white md:h-8 md:w-8" />
                                    ) : item.status === 'active' ? (
                                        <Zap className="h-7 w-7 animate-pulse text-white md:h-8 md:w-8" />
                                    ) : (
                                        <Clock className="h-7 w-7 text-white md:h-8 md:w-8" />
                                    )}
                                </div>

                                <div
                                    className={`rounded border-2 p-3 backdrop-blur-sm transition-all md:p-4 ${
                                        item.status === 'completed'
                                            ? 'border-emerald-500/30 bg-emerald-500/10'
                                            : item.status === 'active'
                                              ? 'border-teal-500/30 bg-teal-500/10'
                                              : 'border-white/10 bg-white/5'
                                    }`}
                                >
                                    <div className="mb-2 text-xs text-slate-400">{t(item.dateKey)}</div>
                                    <div className="text-sm font-semibold text-white">{t(item.eventKey)}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
