import { useLaravelReactI18n } from 'laravel-react-i18n';
import { CheckCircle2, Code, Download, FileText } from 'lucide-react';

export function KnowledgeBase() {
    const { t, currentLocale } = useLaravelReactI18n();
    const isEnglish = currentLocale() === 'en';
    const fileDir = isEnglish ? '/files/en/' : '/files/cn/';

    const contentCategories = [
        {
            icon: FileText,
            titleKey: 'insights.knowledge.category1.title',
            descriptionKey: 'insights.knowledge.category1.description',
            items: [
                {
                    key: 'insights.knowledge.category1.item1',
                    fileKey: 'insights.knowledge.category1.item1.file',
                },
                {
                    key: 'insights.knowledge.category1.item2',
                    fileKey: 'insights.knowledge.category1.item2.file',
                },
                {
                    key: 'insights.knowledge.category1.item3',
                    fileKey: 'insights.knowledge.category1.item3.file',
                },
            ],
        },
        {
            icon: Code,
            titleKey: 'insights.knowledge.category2.title',
            descriptionKey: 'insights.knowledge.category2.description',
            items: [
                {
                    key: 'insights.knowledge.category2.item1',
                    fileKey: 'insights.knowledge.category2.item1.file',
                },
                {
                    key: 'insights.knowledge.category2.item2',
                    fileKey: 'insights.knowledge.category2.item2.file',
                },
                {
                    key: 'insights.knowledge.category2.item3',
                    fileKey: 'insights.knowledge.category2.item3.file',
                },
                {
                    key: 'insights.knowledge.category2.item4',
                    fileKey: 'insights.knowledge.category2.item4.file',
                },
            ],
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
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-emerald-500 to-teal-600">
                                <category.icon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-white">{t(category.titleKey)}</h3>
                            <p className="mb-5 text-sm leading-relaxed text-slate-300">{t(category.descriptionKey)}</p>

                            {category.items.length === 0 ? (
                                <div className="rounded-lg border-2 border-dashed border-white/10 bg-white/5 p-5 text-center">
                                    <p className="text-sm text-slate-400">{t('insights.knowledge.comingSoon')}</p>
                                </div>
                            ) : (
                                <ul className="space-y-3">
                                    {category.items.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start justify-between rounded-lg border border-white/10 bg-white/5 p-3 transition-all hover:border-emerald-500/50"
                                        >
                                            <div className="flex items-start">
                                                <CheckCircle2 className="mt-0.5 mr-2 h-4 w-4 shrink-0 text-emerald-400" />
                                                <span className="text-sm text-slate-300">{t(item.key)}</span>
                                            </div>
                                            <a
                                                href={fileDir + t(item.fileKey)}
                                                download
                                                className="ml-2 shrink-0 text-emerald-300 transition-colors hover:text-emerald-200"
                                                title={t('insights.resource.download')}
                                            >
                                                <Download className="h-4 w-4" />
                                            </a>
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
