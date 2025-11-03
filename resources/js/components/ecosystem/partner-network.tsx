import { useLaravelReactI18n } from 'laravel-react-i18n';
import { BookOpen, CheckCircle2, Coins, Handshake, Settings } from 'lucide-react';

export function PartnerNetwork() {
    const { t } = useLaravelReactI18n();

    const partnerCategories = [
        {
            icon: BookOpen,
            titleKey: 'ecosystem.partners.category1.title',
            directions: [
                'ecosystem.partners.category1.direction1',
                'ecosystem.partners.category1.direction2',
                'ecosystem.partners.category1.direction3',
            ],
        },
        {
            icon: Handshake,
            titleKey: 'ecosystem.partners.category2.title',
            directions: [
                'ecosystem.partners.category2.direction1',
                'ecosystem.partners.category2.direction2',
                'ecosystem.partners.category2.direction3',
            ],
        },
        {
            icon: Settings,
            titleKey: 'ecosystem.partners.category3.title',
            directions: [
                'ecosystem.partners.category3.direction1',
                'ecosystem.partners.category3.direction2',
                'ecosystem.partners.category3.direction3',
            ],
        },
        {
            icon: Coins,
            titleKey: 'ecosystem.partners.category4.title',
            directions: [
                'ecosystem.partners.category4.direction1',
                'ecosystem.partners.category4.direction2',
                'ecosystem.partners.category4.direction3',
            ],
        },
    ];

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">{t('ecosystem.partners.title')}</h2>
                    <p className="mx-auto max-w-3xl text-base text-slate-300">{t('ecosystem.partners.description')}</p>
                </div>

                {/* 四栏合作伙伴类别 */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {partnerCategories.map((category, index) => (
                        <div
                            key={index}
                            className="rounded-lg border-2 border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50"
                        >
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600">
                                <category.icon className="h-5 w-5 text-white" />
                            </div>
                            <h3 className="mb-3 text-lg font-bold text-white">{t(category.titleKey)}</h3>
                            <ul className="space-y-2">
                                {category.directions.map((directionKey, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-slate-300">
                                        <CheckCircle2 className="mt-0.5 mr-2 h-4 w-4 shrink-0 text-emerald-400" />
                                        <span>{t(directionKey)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
