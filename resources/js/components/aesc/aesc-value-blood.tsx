import { BarChart3, Link2, TrendingUp, Users, Zap } from 'lucide-react';

/**
 * AESC 生态价值血液组件(简版)
 *
 * 展示 AESC 代币的基本效用
 */
export function AescValueBlood() {
    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">AESC: 生态的价值血液</h2>
                    <p className="mx-auto max-w-2xl text-base text-slate-300">立体化分配结构,兼顾流动性与长期价值</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            icon: Zap,
                            title: '支付与消费',
                            description: '支付数据服务,知识付费,DeFi手续费',
                        },
                        {
                            icon: TrendingUp,
                            title: '激励与奖励',
                            description: '奖励数据贡献者,内容创作者,社区推广者',
                        },
                        {
                            icon: Users,
                            title: '质押与治理',
                            description: '质押分享平台收益,投票决定生态发展方向',
                        },
                        {
                            icon: Link2,
                            title: '资产锚定',
                            description: '作为农业RWA资产的计价和交易单位',
                        },
                        {
                            icon: BarChart3,
                            title: '通缩销毁',
                            description: '平台收入的部分用于回购销毁,驱动价值上升',
                        },
                    ].map((utility, index) => (
                        <div
                            key={index}
                            className="rounded-lg border-2 border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-emerald-500/50"
                        >
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded bg-white/10">
                                <utility.icon className="h-5 w-5 text-emerald-300" />
                            </div>
                            <h3 className="mb-2 text-base font-bold text-white">{utility.title}</h3>
                            <p className="text-xs text-slate-300">{utility.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
