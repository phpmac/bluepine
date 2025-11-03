import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Brain, CheckCircle2, CircuitBoard, Link2 } from 'lucide-react';

export function InvestmentPillars() {
    const { t } = useLaravelReactI18n();

    const investmentPillars = [
        {
            icon: CircuitBoard,
            titleKey: 'strategy.pillars.pillar1.title',
            descriptionKey: 'strategy.pillars.pillar1.description',
            focusAreas: [
                {
                    nameKey: 'strategy.pillars.pillar1.area1.name',
                    detailsKey: 'strategy.pillars.pillar1.area1.details',
                },
                {
                    nameKey: 'strategy.pillars.pillar1.area2.name',
                    detailsKey: 'strategy.pillars.pillar1.area2.details',
                },
                {
                    nameKey: 'strategy.pillars.pillar1.area3.name',
                    detailsKey: 'strategy.pillars.pillar1.area3.details',
                },
            ],
        },
        {
            icon: Link2,
            titleKey: 'strategy.pillars.pillar2.title',
            descriptionKey: 'strategy.pillars.pillar2.description',
            focusAreas: [
                {
                    nameKey: 'strategy.pillars.pillar2.area1.name',
                    detailsKey: 'strategy.pillars.pillar2.area1.details',
                },
                {
                    nameKey: 'strategy.pillars.pillar2.area2.name',
                    detailsKey: 'strategy.pillars.pillar2.area2.details',
                },
                {
                    nameKey: 'strategy.pillars.pillar2.area3.name',
                    detailsKey: 'strategy.pillars.pillar2.area3.details',
                },
                {
                    nameKey: 'strategy.pillars.pillar2.area4.name',
                    detailsKey: 'strategy.pillars.pillar2.area4.details',
                },
            ],
        },
        {
            icon: Brain,
            titleKey: 'strategy.pillars.pillar3.title',
            descriptionKey: 'strategy.pillars.pillar3.description',
            focusAreas: [
                {
                    nameKey: 'strategy.pillars.pillar3.area1.name',
                    detailsKey: 'strategy.pillars.pillar3.area1.details',
                },
                {
                    nameKey: 'strategy.pillars.pillar3.area2.name',
                    detailsKey: 'strategy.pillars.pillar3.area2.details',
                },
                {
                    nameKey: 'strategy.pillars.pillar3.area3.name',
                    detailsKey: 'strategy.pillars.pillar3.area3.details',
                },
            ],
        },
    ];

    return (
        <div className="mb-32">
            <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">{t('strategy.pillars.title')}</h2>
                <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-300">{t('strategy.pillars.description')}</p>
            </div>

            <div className="space-y-8">
                {investmentPillars.map((pillar, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-lg border-2 border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50"
                    >
                        <div className="grid gap-4 p-4 md:grid-cols-3 md:gap-6 md:p-8">
                            <div>
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600">
                                    <pillar.icon className="h-8 w-8 text-white" strokeWidth={2} />
                                </div>
                                <h3 className="mb-2 text-xl font-bold text-white">{t(pillar.titleKey)}</h3>
                                <p className="mt-6 text-sm leading-relaxed text-slate-300">{t(pillar.descriptionKey)}</p>
                            </div>
                            <div className="md:col-span-2">
                                <div className="grid gap-4 md:grid-cols-2">
                                    {pillar.focusAreas.map((area, areaIndex) => (
                                        <div key={areaIndex} className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                                            <h4 className="mb-2 flex items-center text-base font-bold text-white">
                                                <CheckCircle2 className="mr-2 h-4 w-4 text-emerald-300" />
                                                {t(area.nameKey)}
                                            </h4>
                                            <p className="text-xs leading-relaxed text-slate-300">{t(area.detailsKey)}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
