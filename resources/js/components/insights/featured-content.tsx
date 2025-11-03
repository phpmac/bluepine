import { useLaravelReactI18n } from 'laravel-react-i18n';
import { ArrowRight } from 'lucide-react';

export function FeaturedContent() {
    const { t } = useLaravelReactI18n();

    const featuredContent = [
        {
            titleKey: 'insights.featured.item1.title',
            descriptionKey: 'insights.featured.item1.description',
            tagKey: 'insights.featured.item1.tag',
            actionKey: 'insights.featured.item1.action',
        },
        {
            titleKey: 'insights.featured.item2.title',
            descriptionKey: 'insights.featured.item2.description',
            tagKey: 'insights.featured.item2.tag',
            actionKey: 'insights.featured.item2.action',
        },
        {
            titleKey: 'insights.featured.item3.title',
            descriptionKey: 'insights.featured.item3.description',
            tagKey: 'insights.featured.item3.tag',
            actionKey: 'insights.featured.item3.action',
        },
    ];

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">{t('insights.featured.title')}</h2>
                </div>
                <div className="grid gap-6 lg:grid-cols-3">
                    {featuredContent.map((content, index) => (
                        <div
                            key={index}
                            className="rounded-lg border-2 border-white/10 bg-gradient-to-br from-emerald-500/10 to-teal-600/10 p-6 backdrop-blur-sm transition-all hover:border-emerald-500/50"
                        >
                            <div className="mb-3 inline-block rounded border border-emerald-500/30 bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-200">
                                {t(content.tagKey)}
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-white">{t(content.titleKey)}</h3>
                            <p className="mb-5 text-sm leading-relaxed text-slate-300">{t(content.descriptionKey)}</p>
                            <button className="flex cursor-pointer items-center text-sm font-medium text-emerald-300 transition-colors hover:text-emerald-200">
                                {t(content.actionKey)}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
