import { BookOpen, Network, Sprout, Users } from 'lucide-react';

export function AboutAdvantages() {
    const advantages = [
        {
            icon: Sprout,
            title: '深度产业结合',
            description: '我们不止于财务投资,更通过自有旗舰项目AESC深入产业一线,提供最贴合场景的技术赋能与落地支持.',
        },
        {
            icon: BookOpen,
            title: '顶尖技术洞察',
            description: '我们的团队具备顶尖的技术背景,能精准甄别项目的技术实力与创新性,并提供关键的技术发展指导.',
        },
        {
            icon: Network,
            title: '全球生态网络',
            description: '触达全球的农业合作社,研究机构,交易所与金融机构网络,为被投项目提供独一无二的市场与资源对接.',
        },
        {
            icon: Users,
            title: '长期价值共建',
            description: '我们摒弃短期套利,秉持长期主义,与创业者共同构建能够持续创造真实价值的伟大企业.',
        },
    ];

    return (
        <div className="mb-32">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-white">我们的独特优势</h2>
            <div className="grid gap-6 md:grid-cols-2">
                {advantages.map((advantage, index) => (
                    <div
                        key={index}
                        className="group rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-emerald-500/50 hover:bg-emerald-500/5 md:p-6"
                    >
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 transition-transform group-hover:scale-110">
                            <advantage.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-white">{advantage.title}</h3>
                        <p className="text-sm leading-relaxed text-slate-300">{advantage.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
