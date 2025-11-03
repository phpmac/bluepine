import { CheckCircle2 } from 'lucide-react';

export function InvestmentCriteria() {
    const investmentCriteria = [
        {
            title: '强大的团队',
            description: '拥有深厚技术背景与农业领域执行力的创始人',
        },
        {
            title: '清晰的价值主张',
            description: '能够明确解决我们关注的核心行业痛点',
        },
        {
            title: '可验证的技术优势',
            description: '产品/服务具备技术壁垒和可量化的效果',
        },
        {
            title: '规模化潜力',
            description: '具备从试点走向全球市场的潜力与路径',
        },
        {
            title: '生态协同效应',
            description: '能够与BLUEPINE生态 (特别是AESC平台) 产生协同价值',
        },
    ];

    return (
        <div className="mb-32">
            <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">投资阶段与标准</h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
                {/* 左侧 - 投资阶段 */}
                <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-md md:p-6">
                    <h3 className="mb-4 text-xl font-bold text-white">我们投资的阶段</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="mb-1 text-lg font-semibold text-emerald-200">种子轮 & A轮</h4>
                            <p className="mb-2 text-sm leading-relaxed text-slate-300">我们主要投资于处于早期和成长期的创新企业.</p>
                        </div>
                        <div>
                            <h4 className="mb-1 text-lg font-semibold text-emerald-200">选择性B轮跟投</h4>
                            <p className="mb-2 text-sm leading-relaxed text-slate-300">对于生态具有战略意义的杰出项目, 我们会持续支持.</p>
                        </div>
                        <div className="border-t border-white/10 pt-4">
                            <h4 className="mb-1 text-lg font-semibold text-white">投资规模</h4>
                            <p className="text-xl font-bold text-emerald-300">50万 - 500万美元</p>
                            <p className="mt-1 text-xs text-slate-400">单笔投资额度通常在此范围之间</p>
                        </div>
                    </div>
                </div>

                {/* 右侧 - 投资标准 */}
                <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-md md:p-6">
                    <h3 className="mb-4 text-xl font-bold text-white">我们寻找什么样的项目</h3>
                    <ul className="space-y-3">
                        {investmentCriteria.map((criterion, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle2 className="mt-1 mr-2 h-4 w-4 shrink-0 text-emerald-400" />
                                <div>
                                    <h4 className="mb-0.5 text-sm font-semibold text-white">{criterion.title}</h4>
                                    <p className="text-xs leading-relaxed text-slate-300">{criterion.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
