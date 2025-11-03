import { ArrowRight } from 'lucide-react';

export function FeaturedContent() {
    const featuredContent = [
        {
            title: 'Agri-Eco Smart Chain 项目白皮书 V1.0',
            description: '全面解读AESC平台的技术架构,商业模式与生态愿景',
            tag: '白皮书',
            action: '立即下载',
        },
        {
            title: '农业数字化的范式转移: 从Web2到Web3',
            description: '深度解析农业Web3革命的技术路径与商业机遇',
            tag: '深度报告',
            action: '阅读全文',
        },
        {
            title: 'RWA如何重塑农业资产格局?',
            description: '最新行业报告,探讨真实世界资产在农业领域的应用前景',
            tag: '行业报告',
            action: '免费获取',
        },
    ];

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">编辑推荐</h2>
                </div>
                <div className="grid gap-6 lg:grid-cols-3">
                    {featuredContent.map((content, index) => (
                        <div
                            key={index}
                            className="rounded-lg border-2 border-white/10 bg-gradient-to-br from-emerald-500/10 to-teal-600/10 p-6 backdrop-blur-sm transition-all hover:border-emerald-500/50"
                        >
                            <div className="mb-3 inline-block rounded border border-emerald-500/30 bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-200">
                                {content.tag}
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-white">{content.title}</h3>
                            <p className="mb-5 text-sm leading-relaxed text-slate-300">{content.description}</p>
                            <button className="flex cursor-pointer items-center text-sm font-medium text-emerald-300 transition-colors hover:text-emerald-200">
                                {content.action}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
