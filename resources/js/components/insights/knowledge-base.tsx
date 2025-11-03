import { useLaravelReactI18n } from 'laravel-react-i18n';
import { CheckCircle2, Code, FileText } from 'lucide-react';

export function KnowledgeBase() {
    const { t } = useLaravelReactI18n();

    const contentCategories = [
        {
            icon: FileText,
            titleKey: 'insights.knowledge.category1.title',
            descriptionKey: 'insights.knowledge.category1.description',
            items: ['insights.knowledge.category1.item1', 'insights.knowledge.category1.item2', 'insights.knowledge.category1.item3'],
        },
        {
            icon: Code,
            titleKey: 'insights.knowledge.category2.title',
            descriptionKey: 'insights.knowledge.category2.description',
            items: ['insights.knowledge.category2.item1', 'insights.knowledge.category2.item2', 'insights.knowledge.category2.item3'],
        },
    ];

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">{t('insights.knowledge.title')}</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {contentCategories.map((category, index) => (
                        <div
                            key={index}
                            className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-emerald-500/50"
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600">
                                <category.icon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-white">{t(category.titleKey)}</h3>
                            <p className="mb-5 text-sm leading-relaxed text-slate-300">{t(category.descriptionKey)}</p>

                            {category.items.length === 0 ? (
                                <div className="rounded-lg border-2 border-dashed border-white/10 bg-white/5 p-5 text-center">
                                    <p className="text-sm text-slate-400">{t('insights.knowledge.comingSoon')}</p>
                                </div>
                            ) : (
                                <ul className="space-y-2">
                                    {category.items.map((itemKey, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-slate-300">
                                            <CheckCircle2 className="mt-0.5 mr-2 h-4 w-4 shrink-0 text-emerald-400" />
                                            <span>{t(itemKey)}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
