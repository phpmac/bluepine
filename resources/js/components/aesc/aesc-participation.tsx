import { useLaravelReactI18n } from 'laravel-react-i18n';
import { CheckCircle2 } from 'lucide-react';

/**
 * AESC 参与方式组件
 *
 * 展示如何参与 AESC 生态的三个步骤
 */
export function AescParticipation() {
    const { t } = useLaravelReactI18n();

    const participationSteps = [
        {
            step: 1,
            titleKey: 'aesc.participation.step1.title',
            subtitleKey: 'aesc.participation.step1.subtitle',
            contentKey: 'aesc.participation.step1.content',
        },
        {
            step: 2,
            titleKey: 'aesc.participation.step2.title',
            subtitleKey: 'aesc.participation.step2.subtitle',
            contentKey: 'aesc.participation.step2.content',
            comingSoon: true,
        },
        {
            step: 3,
            titleKey: 'aesc.participation.step3.title',
            subtitleKey: 'aesc.participation.step3.subtitle',
            contentKey: 'aesc.participation.step3.content',
        },
    ];

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8" id="participate">
            <div className="container mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">{t('aesc.participation.title')}</h2>
                    <p className="mx-auto max-w-3xl text-base text-slate-300">{t('aesc.participation.subtitle')}</p>
                </div>

                <div className="mx-auto max-w-5xl space-y-6">
                    {participationSteps.map((item, index) => (
                        <div
                            key={index}
                            className="group relative rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-emerald-500/50 md:p-8"
                        >
                            {/* 步骤编号 */}
                            <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-xl font-bold text-white shadow-lg">
                                {item.step}
                            </div>

                            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                <div className="flex-1">
                                    <h3 className="mb-2 text-xl font-bold text-white">{t(item.titleKey)}</h3>
                                    <p className="mb-3 text-sm font-medium text-emerald-300">{t(item.subtitleKey)}</p>
                                    <p className="text-sm leading-relaxed text-slate-300">{t(item.contentKey)}</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    {item.comingSoon ? (
                                        <span className="rounded bg-teal-500/20 px-3 py-1 text-xs font-medium text-teal-300">
                                            {t('aesc.participation.comingSoon')}
                                        </span>
                                    ) : (
                                        <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
