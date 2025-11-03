import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Database, Globe, Network, Shield } from 'lucide-react';

export function PostInvestment() {
    const { t } = useLaravelReactI18n();

    const postInvestmentServices = [
        {
            icon: Network,
            titleKey: 'strategy.postInvestment.service1.title',
            descriptionKey: 'strategy.postInvestment.service1.description',
        },
        {
            icon: Globe,
            titleKey: 'strategy.postInvestment.service2.title',
            descriptionKey: 'strategy.postInvestment.service2.description',
        },
        {
            icon: Database,
            titleKey: 'strategy.postInvestment.service3.title',
            descriptionKey: 'strategy.postInvestment.service3.description',
        },
        {
            icon: Shield,
            titleKey: 'strategy.postInvestment.service4.title',
            descriptionKey: 'strategy.postInvestment.service4.description',
        },
    ];

    return (
        <div className="mb-32">
            <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">{t('strategy.postInvestment.title')}</h2>
                <p className="mx-auto max-w-3xl text-lg text-slate-300">{t('strategy.postInvestment.description')}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {postInvestmentServices.map((service, index) => (
                    <div
                        key={index}
                        className="group rounded-lg border-2 border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50 md:p-6"
                    >
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-white/10 transition-colors group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-teal-600">
                            <service.icon className="h-7 w-7 text-emerald-300 transition-colors group-hover:text-white" strokeWidth={2} />
                        </div>
                        <h3 className="mb-2 text-lg font-bold text-white">{t(service.titleKey)}</h3>
                        <p className="text-sm leading-relaxed text-slate-300">{t(service.descriptionKey)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
