import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Download } from 'lucide-react';

export function ResourceCenter() {
    const { t } = useLaravelReactI18n();

    const downloadResources = [
        {
            nameKey: 'insights.resource.item1.name',
            categoryKey: 'insights.resource.item1.category',
            format: 'ZIP',
            size: '2.5 MB',
            url: '#',
        },
        {
            nameKey: 'insights.resource.item2.name',
            categoryKey: 'insights.resource.item2.category',
            format: 'PDF',
            size: '8.5 MB',
            url: '#',
        },
        {
            nameKey: 'insights.resource.item3.name',
            categoryKey: 'insights.resource.item3.category',
            format: 'PDF',
            size: '3.2 MB',
            url: '#',
        },
    ];

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">{t('insights.resource.title')}</h2>
                </div>

                <div className="overflow-hidden rounded-lg border-2 border-white/10 bg-white/5 backdrop-blur-sm">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-white/10 bg-white/5">
                                <th className="px-4 py-3 text-left text-sm font-semibold text-white">{t('insights.resource.table.name')}</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-white">{t('insights.resource.table.category')}</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-white">{t('insights.resource.table.format')}</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-white">{t('insights.resource.table.size')}</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-white">{t('insights.resource.table.action')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {downloadResources.map((resource, index) => (
                                <tr key={index} className="border-b border-white/10 transition-colors hover:bg-white/5">
                                    <td className="px-4 py-3 text-sm text-white">{t(resource.nameKey)}</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">{t(resource.categoryKey)}</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">{resource.format}</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">{resource.size}</td>
                                    <td className="px-4 py-3">
                                        <a
                                            href={resource.url}
                                            download
                                            className="flex cursor-pointer items-center text-sm font-medium text-emerald-300 transition-colors hover:text-emerald-200"
                                        >
                                            <Download className="mr-2 h-4 w-4" />
                                            {t('insights.resource.download')}
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
