import { Database, Globe, Network, Shield } from 'lucide-react';

export function PostInvestment() {
    const postInvestmentServices = [
        {
            icon: Network,
            title: '技术赋能与整合',
            description: '提供AESC平台技术接入支持, 共享我们的 AI 模型与区块链基础设施, 协助进行技术架构优化',
        },
        {
            icon: Globe,
            title: '生态资源与网络',
            description: '对接全球农业合作社, 大型农企, 研究机构及潜在客户, 帮助项目快速实现商业落地与市场拓展',
        },
        {
            icon: Database,
            title: '代币经济与金融模型设计',
            description: '为需要设计通证经济模型的项目提供顶级专家顾问,并协助对接交易所,做市商等金融资源',
        },
        {
            icon: Shield,
            title: '全球合规与战略',
            description: '提供在全球主要市场 (尤其是 RWA 与加密货币监管前沿地区) 的合规咨询与战略导航',
        },
    ];

    return (
        <div className="mb-32">
            <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">超越资本: 我们的价值共创承诺</h2>
                <p className="mx-auto max-w-3xl text-lg text-slate-300">我们为被投项目提供全方位的战略支持,共同加速成长</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {postInvestmentServices.map((service, index) => (
                    <div
                        key={index}
                        className="group rounded-lg border-2 border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50 md:p-6"
                    >
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-white/10 transition-colors group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-teal-600">
                            <service.icon className="h-7 w-7 text-emerald-300 transition-colors group-hover:text-white" strokeWidth={2} />
                        </div>
                        <h3 className="mb-2 text-lg font-bold text-white">{service.title}</h3>
                        <p className="text-sm leading-relaxed text-slate-300">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
