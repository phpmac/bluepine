import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Award, Coins, Link2, Shield, TrendingUp } from 'lucide-react';

/**
 * AESC 代币经济模型组件
 *
 * 展示代币分发结构和详细效用
 */
export function AescTokenEconomy() {
    const { t } = useLaravelReactI18n();

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* 代币分发模型 */}
                <div className="mb-24">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">{t('aesc.tokenEconomy.title1')}</h2>
                        <p className="mx-auto max-w-3xl text-base text-slate-300">{t('aesc.tokenEconomy.subtitle1')}</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                categoryKey: 'aesc.tokenEconomy.allocation1.category',
                                percentage: '40%',
                                amountKey: 'aesc.tokenEconomy.allocation1.amount',
                                color: 'from-emerald-500 to-teal-600',
                                unlockKey: 'aesc.tokenEconomy.allocation1.unlock',
                            },
                            {
                                categoryKey: 'aesc.tokenEconomy.allocation2.category',
                                percentage: '20%',
                                amountKey: 'aesc.tokenEconomy.allocation2.amount',
                                color: 'from-teal-600 to-cyan-700',
                                unlockKey: 'aesc.tokenEconomy.allocation2.unlock',
                            },
                            {
                                categoryKey: 'aesc.tokenEconomy.allocation3.category',
                                percentage: '15%',
                                amountKey: 'aesc.tokenEconomy.allocation3.amount',
                                color: 'from-cyan-600 to-blue-700',
                                unlockKey: 'aesc.tokenEconomy.allocation3.unlock',
                            },
                            {
                                categoryKey: 'aesc.tokenEconomy.allocation4.category',
                                percentage: '10%',
                                amountKey: 'aesc.tokenEconomy.allocation4.amount',
                                color: 'from-blue-600 to-indigo-700',
                                unlockKey: 'aesc.tokenEconomy.allocation4.unlock',
                            },
                            {
                                categoryKey: 'aesc.tokenEconomy.allocation5.category',
                                percentage: '10%',
                                amountKey: 'aesc.tokenEconomy.allocation5.amount',
                                color: 'from-indigo-600 to-purple-700',
                                unlockKey: 'aesc.tokenEconomy.allocation5.unlock',
                            },
                            {
                                categoryKey: 'aesc.tokenEconomy.allocation6.category',
                                percentage: '3%',
                                amountKey: 'aesc.tokenEconomy.allocation6.amount',
                                color: 'from-purple-600 to-pink-700',
                                unlockKey: 'aesc.tokenEconomy.allocation6.unlock',
                            },
                            {
                                categoryKey: 'aesc.tokenEconomy.allocation7.category',
                                percentage: '2%',
                                amountKey: 'aesc.tokenEconomy.allocation7.amount',
                                color: 'from-pink-600 to-rose-700',
                                unlockKey: 'aesc.tokenEconomy.allocation7.unlock',
                            },
                        ].map((allocation, index) => (
                            <div
                                key={index}
                                className="group rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-emerald-500/50"
                            >
                                <div className="mb-3 flex items-center justify-between">
                                    <div
                                        className={`inline-flex items-center rounded bg-linear-to-r ${allocation.color} px-3 py-1.5 text-sm font-bold text-white`}
                                    >
                                        {allocation.percentage}
                                    </div>
                                    <div className="text-right text-xs font-semibold text-emerald-300">{t(allocation.amountKey)}</div>
                                </div>
                                <h3 className="mb-3 text-lg font-bold text-white">{t(allocation.categoryKey)}</h3>
                                <div className="border-l-2 border-emerald-500/50 pl-3">
                                    <p className="text-xs leading-relaxed text-slate-300">{t(allocation.unlockKey)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 代币效用 - AESC:生态的价值血液(详版) */}
                <div>
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">{t('aesc.tokenEconomy.title2')}</h2>
                        <p className="mx-auto max-w-3xl text-base text-slate-300">{t('aesc.tokenEconomy.subtitle2')}</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                icon: Coins,
                                titleKey: 'aesc.tokenEconomy.utility1.title',
                                descriptionKey: 'aesc.tokenEconomy.utility1.description',
                                color: 'from-emerald-500 to-teal-600',
                            },
                            {
                                icon: Award,
                                titleKey: 'aesc.tokenEconomy.utility2.title',
                                descriptionKey: 'aesc.tokenEconomy.utility2.description',
                                color: 'from-teal-600 to-cyan-700',
                            },
                            {
                                icon: Shield,
                                titleKey: 'aesc.tokenEconomy.utility3.title',
                                descriptionKey: 'aesc.tokenEconomy.utility3.description',
                                color: 'from-cyan-600 to-blue-700',
                            },
                            {
                                icon: Link2,
                                titleKey: 'aesc.tokenEconomy.utility4.title',
                                descriptionKey: 'aesc.tokenEconomy.utility4.description',
                                color: 'from-blue-600 to-indigo-700',
                            },
                            {
                                icon: TrendingUp,
                                titleKey: 'aesc.tokenEconomy.utility5.title',
                                descriptionKey: 'aesc.tokenEconomy.utility5.description',
                                color: 'from-indigo-600 to-purple-700',
                            },
                        ].map((utility, index) => (
                            <div
                                key={index}
                                className="group rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:border-emerald-500/50"
                            >
                                <div
                                    className={`mb-4 flex h-14 w-14 items-center justify-center bg-linear-to-br ${utility.color}`}
                                    style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
                                >
                                    <utility.icon className="h-7 w-7 text-white" />
                                </div>
                                <h3 className="mb-2 text-base font-bold text-white">{t(utility.titleKey)}</h3>
                                <p className="text-xs leading-relaxed text-slate-300">{t(utility.descriptionKey)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
