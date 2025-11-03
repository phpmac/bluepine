import { useLaravelReactI18n } from 'laravel-react-i18n';

export function InvestmentProcess() {
    const { t } = useLaravelReactI18n();

    const investmentProcess = [
        {
            step: '01',
            titleKey: 'strategy.process.step1.title',
            descriptionKey: 'strategy.process.step1.description',
        },
        {
            step: '02',
            titleKey: 'strategy.process.step2.title',
            descriptionKey: 'strategy.process.step2.description',
        },
        {
            step: '03',
            titleKey: 'strategy.process.step3.title',
            descriptionKey: 'strategy.process.step3.description',
        },
        {
            step: '04',
            titleKey: 'strategy.process.step4.title',
            descriptionKey: 'strategy.process.step4.description',
        },
        {
            step: '05',
            titleKey: 'strategy.process.step5.title',
            descriptionKey: 'strategy.process.step5.description',
        },
        {
            step: '06',
            titleKey: 'strategy.process.step6.title',
            descriptionKey: 'strategy.process.step6.description',
        },
    ];

    return (
        <div className="mb-32">
            <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">{t('strategy.process.title')}</h2>
            </div>

            <div className="relative">
                {/* 连接线 */}
                <div className="absolute top-0 left-6 hidden h-full w-0.5 bg-gradient-to-b from-emerald-500 to-teal-600 md:block lg:hidden"></div>
                <div className="absolute top-1/2 left-0 hidden h-0.5 w-full bg-gradient-to-r from-emerald-500 to-teal-600 lg:block"></div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {investmentProcess.map((step, index) => (
                        <div key={index} className="relative">
                            <div className="rounded-lg border-2 border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-emerald-500/50">
                                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-lg font-bold text-white">
                                    {step.step}
                                </div>
                                <h3 className="mb-1 text-base font-bold text-white">{t(step.titleKey)}</h3>
                                <p className="text-xs leading-relaxed text-slate-300">{t(step.descriptionKey)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
