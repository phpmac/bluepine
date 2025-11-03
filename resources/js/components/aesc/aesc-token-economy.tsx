import { Award, Coins, Link2, Shield, TrendingUp } from 'lucide-react';

/**
 * AESC 代币经济模型组件
 *
 * 展示代币分发结构和详细效用
 */
export function AescTokenEconomy() {
    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* 代币分发模型 */}
                <div className="mb-24">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">代币经济模型核心一览</h2>
                        <p className="mx-auto max-w-3xl text-base text-slate-300">立体化分配结构,兼顾流动性与长期价值</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                category: '生态建设基金',
                                percentage: '40%',
                                amount: '6.4 亿枚',
                                color: 'from-emerald-500 to-teal-600',
                                unlock: '每月解锁1/40,分40个月解锁',
                            },
                            {
                                category: '私募',
                                percentage: '20%',
                                amount: '3.2 亿枚',
                                color: 'from-teal-600 to-cyan-700',
                                unlock: '上线即解锁10%,剩下分12个月线性解锁',
                            },
                            {
                                category: '团队激励',
                                percentage: '15%',
                                amount: '2.4 亿枚',
                                color: 'from-cyan-600 to-blue-700',
                                unlock: '上线解锁10%,剩余分18个月线性解锁',
                            },
                            {
                                category: '交易所',
                                percentage: '10%',
                                amount: '1.6 亿枚',
                                color: 'from-blue-600 to-indigo-700',
                                unlock: '上线即解锁50%,用于市值管理,剩下分12个月线性解锁',
                            },
                            {
                                category: '储备额',
                                percentage: '10%',
                                amount: '1.6 亿枚',
                                color: 'from-indigo-600 to-purple-700',
                                unlock: '通过社区投票决定解锁额度,用于风险应对与应急补贴',
                            },
                            {
                                category: '合作伙伴',
                                percentage: '3%',
                                amount: '0.48 亿枚',
                                color: 'from-purple-600 to-pink-700',
                                unlock: '按合作进度解锁,最高分12个月',
                            },
                            {
                                category: '社区空投',
                                percentage: '2%',
                                amount: '0.32 亿枚',
                                color: 'from-pink-600 to-rose-700',
                                unlock: '完成任务后,分6个月线性释放',
                            },
                        ].map((allocation, index) => (
                            <div
                                key={index}
                                className="group rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-emerald-500/50"
                            >
                                <div className="mb-3 flex items-center justify-between">
                                    <div
                                        className={`inline-flex items-center rounded bg-gradient-to-r ${allocation.color} px-3 py-1.5 text-sm font-bold text-white`}
                                    >
                                        {allocation.percentage}
                                    </div>
                                    <div className="text-right text-xs font-semibold text-emerald-300">{allocation.amount}</div>
                                </div>
                                <h3 className="mb-3 text-lg font-bold text-white">{allocation.category}</h3>
                                <div className="border-l-2 border-emerald-500/50 pl-3">
                                    <p className="text-xs leading-relaxed text-slate-300">{allocation.unlock}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 代币效用 - AESC:生态的价值血液(详版) */}
                <div>
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">AESC:生态的价值血液</h2>
                        <p className="mx-auto max-w-3xl text-base text-slate-300">多维度效用设计,驱动生态价值循环</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                icon: Coins,
                                title: '支付与消费',
                                description: '支付数据服务, 知识付费, DeFi 手续费',
                                color: 'from-emerald-500 to-teal-600',
                            },
                            {
                                icon: Award,
                                title: '激励与奖励',
                                description: '奖励数据贡献者, 内容创作者, 社区推广者',
                                color: 'from-teal-600 to-cyan-700',
                            },
                            {
                                icon: Shield,
                                title: '质押与治理',
                                description: '质押分享平台收益,投票决定生态发展方向',
                                color: 'from-cyan-600 to-blue-700',
                            },
                            {
                                icon: Link2,
                                title: '资产锚定',
                                description: '作为农业 RWA 资产的计价和交易单位',
                                color: 'from-blue-600 to-indigo-700',
                            },
                            {
                                icon: TrendingUp,
                                title: '通缩销毁',
                                description: '平台收入的部分用于回购销毁, 驱动价值上升',
                                color: 'from-indigo-600 to-purple-700',
                            },
                        ].map((utility, index) => (
                            <div
                                key={index}
                                className="group rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:border-emerald-500/50"
                            >
                                <div
                                    className={`mb-4 flex h-14 w-14 items-center justify-center bg-gradient-to-br ${utility.color}`}
                                    style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
                                >
                                    <utility.icon className="h-7 w-7 text-white" />
                                </div>
                                <h3 className="mb-2 text-base font-bold text-white">{utility.title}</h3>
                                <p className="text-xs leading-relaxed text-slate-300">{utility.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
