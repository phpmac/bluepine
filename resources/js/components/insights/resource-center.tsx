import { getBrandAssetsUrl, getWhitepaperUrl } from '@/config/links';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Download } from 'lucide-react';

export function ResourceCenter() {
    const { t, currentLocale } = useLaravelReactI18n();
    const isEnglish = currentLocale() === 'en';
    const fileDir = isEnglish ? '/files/en/' : '/files/cn/';

    const downloadResources = [
        {
            nameKey: 'insights.resource.item1.name',
            categoryKey: 'insights.resource.item1.category',
            format: 'PDF',
            size: '1.0 MB',
            url: getBrandAssetsUrl(isEnglish),
        },
        {
            nameKey: 'insights.resource.item2.name',
            categoryKey: 'insights.resource.item2.category',
            format: 'PDF',
            size: '1.18 MB',
            url: getWhitepaperUrl(isEnglish),
        },
        {
            nameKey: 'insights.resource.item3.name',
            categoryKey: 'insights.resource.item3.category',
            format: 'PDF',
            size: '16.2 KB',
            url: fileDir + t('insights.resource.item3.file'),
        },
    ];

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">{t('insights.resource.title')}</h2>
                </div>

                {/* 桌面端表格布局 */}
                <div className="hidden overflow-hidden rounded-lg border-2 border-white/10 bg-white/5 backdrop-blur-sm md:block">
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

                {/* 移动端卡片布局 */}
                <div className="space-y-4 md:hidden">
                    {downloadResources.map((resource, index) => (
                        <div key={index} className="rounded-lg border-2 border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                            <div className="mb-3">
                                <h3 className="mb-1 text-base font-semibold text-white">{t(resource.nameKey)}</h3>
                                <p className="text-sm text-slate-300">{t(resource.categoryKey)}</p>
                            </div>
                            <div className="mb-3 flex items-center gap-4 text-sm text-slate-300">
                                <span>
                                    {t('insights.resource.table.format')}: {resource.format}
                                </span>
                                <span>
                                    {t('insights.resource.table.size')}: {resource.size}
                                </span>
                            </div>
                            <a
                                href={resource.url}
                                download
                                className="flex cursor-pointer items-center justify-center rounded-md bg-emerald-500/10 px-4 py-2.5 text-sm font-medium text-emerald-300 transition-colors hover:bg-emerald-500/20 hover:text-emerald-200"
                            >
                                <Download className="mr-2 h-4 w-4" />
                                {t('insights.resource.download')}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
