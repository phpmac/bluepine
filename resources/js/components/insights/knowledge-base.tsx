import { CheckCircle2, Code, FileText } from 'lucide-react';

export function KnowledgeBase() {
    const contentCategories = [
        {
            icon: FileText,
            title: '行业报告',
            description: '深度, 系统的研究产出, 涵盖宏观趋势, 细分赛道分析与市场规模预测',
            items: ['"农业RWA (真实世界资产) 2025年度发展报告"', '"全球智慧农业政策白皮书: 机遇与挑战"', '"区块链在农产品溯源中的ROI分析"'],
        },
        {
            icon: Code,
            title: '技术解读',
            description: '深入浅出地解析核心技术原理, 创新点与在农业场景中的应用实践',
            items: ['"零知识证明 (ZKP) 如何守护农户数据隐私?"', '"联邦学习: 破解农业 "数据孤岛" 的密钥"', '"语义区块链: 提升农业数据处理效率"'],
        },
    ];

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">探索我们的知识库</h2>
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
                            <h3 className="mb-3 text-xl font-bold text-white">{category.title}</h3>
                            <p className="mb-5 text-sm leading-relaxed text-slate-300">{category.description}</p>

                            {category.items.length === 0 ? (
                                <div className="rounded-lg border-2 border-dashed border-white/10 bg-white/5 p-5 text-center">
                                    <p className="text-sm text-slate-400">即将推出</p>
                                </div>
                            ) : (
                                <ul className="space-y-2">
                                    {category.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-slate-300">
                                            <CheckCircle2 className="mt-0.5 mr-2 h-4 w-4 shrink-0 text-emerald-400" />
                                            <span>{item}</span>
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
