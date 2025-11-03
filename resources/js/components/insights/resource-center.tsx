import { Download } from 'lucide-react';

export function ResourceCenter() {
    const downloadResources = [
        {
            name: 'AESC 白皮书 V1.0',
            category: '项目文档',
            format: 'PDF',
            size: '8.5 MB',
            url: '#',
        },
        {
            name: '农业RWA发展报告 2025',
            category: '行业报告',
            format: 'PDF',
            size: '12.3 MB',
            url: '#',
        },
        {
            name: '智慧农业技术白皮书',
            category: '技术文档',
            format: 'PDF',
            size: '6.8 MB',
            url: '#',
        },
    ];

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">一站式资源库</h2>
                </div>

                <div className="overflow-hidden rounded-lg border-2 border-white/10 bg-white/5 backdrop-blur-sm">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-white/10 bg-white/5">
                                <th className="px-4 py-3 text-left text-sm font-semibold text-white">资源名称</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-white">类别</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-white">格式</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-white">大小</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-white">操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {downloadResources.map((resource, index) => (
                                <tr key={index} className="border-b border-white/10 transition-colors hover:bg-white/5">
                                    <td className="px-4 py-3 text-sm text-white">{resource.name}</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">{resource.category}</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">{resource.format}</td>
                                    <td className="px-4 py-3 text-sm text-slate-300">{resource.size}</td>
                                    <td className="px-4 py-3">
                                        <a
                                            href={resource.url}
                                            download
                                            className="flex cursor-pointer items-center text-sm font-medium text-emerald-300 transition-colors hover:text-emerald-200"
                                        >
                                            <Download className="mr-2 h-4 w-4" />
                                            下载
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
