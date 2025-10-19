import { StageData } from '@/types';
import { motion } from 'framer-motion';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import { formatEther } from 'viem';
import { ieoStages } from '../../../data/icoData';
import { links } from '../../../data/links';
import { Button } from '../common/Button';
import { ProgressBar } from '../common/ProgressBar';

export const Hero: React.FC<{ currentStageData: StageData | null }> = ({ currentStageData }) => {
    const { t } = useLaravelReactI18n();
    const scrollToPrivateSale = () => {
        const element = document.getElementById('private-sale-overview');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const activeStage = ieoStages.find((stage) => stage.progress > 0 && stage.progress < 100) ?? ieoStages[0];
    const stageRaised = (activeStage.target * activeStage.progress) / 100;

    // 基于链上数据的阶段信息与进度(有则用链上,无则回退本地预设)
    const chainStageIndex = currentStageData ? Number(currentStageData.index) + 1 : null;
    const chainPrice = currentStageData ? Number(currentStageData.priceNumerator) / Number(currentStageData.priceDenominator) : null;
    const chainProgress =
        currentStageData && currentStageData.cap > 0n ? Number((currentStageData.sold * 10000n) / currentStageData.cap) / 100 : null;
    const toMillions = (amount: bigint): string => {
        const tokens = Number(formatEther(amount)); // 18位精度 -> 代币数量
        return (tokens / 1_000_000).toFixed(2);
    };

    return (
        <section id="hero" className="relative z-10 flex min-h-screen items-center overflow-hidden pt-36 pb-24">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050613]/70 via-[#0a1733]/18 to-[#030814]/75" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#081a3a]/28 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(76,112,255,0.18),transparent_62%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(35,216,244,0.14),transparent_60%)]" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] xl:gap-20">
                    {/* 左侧内容 */}
                    <motion.div initial={{ opacity: 0, x: -45 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} className="text-left">
                        <motion.span
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-[0.3em] text-slate-100/80 uppercase backdrop-blur-xl"
                        >
                            {t('hero.badge')}
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.7 }}
                            className="mt-6 text-2xl leading-tight font-black text-white sm:text-3xl xl:text-5xl"
                        >
                            {t('hero.title1')}
                            <span className="block bg-gradient-to-r from-[#6a74ff] via-[#4fe3ff] to-[#20e3b2] bg-clip-text text-transparent">
                                {t('hero.title2')}
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.55, duration: 0.7 }}
                            className="mt-8 max-w-xl text-lg leading-relaxed text-slate-200/90"
                        >
                            {t('hero.desc')}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.75, duration: 0.7 }}
                            className="mt-10 flex flex-col gap-4 sm:flex-row"
                        >
                            <Button variant="primary" className="gap-2 px-7 py-3 text-base" onClick={scrollToPrivateSale}>
                                <span>{t('hero.cta.primary')}</span>
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="secondary"
                                className="gap-2 px-7 py-3 text-base"
                                onClick={() => window.open(links.enWhitepaper, '_blank')}
                            >
                                <span>{t('hero.cta.whitepaper')}</span>
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* 右侧内容 */}
                    <motion.div
                        initial={{ opacity: 0, x: 45 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.3 }}
                        className="space-y-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 35 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.45 }}
                            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#5f66ff33] via-[#1a1f3b] to-[#071321] p-8 shadow-[0_30px_70px_-35px_rgba(68,107,255,0.65)]"
                        >
                            <div className="absolute -top-24 -right-24 size-48 rounded-full bg-[#52e3ff]/20 blur-3xl" />
                            <div className="relative">
                                <p className="mb-4 text-sm tracking-[0.3em] text-slate-200/80 uppercase">{t('hero.token_sale')}</p>
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div>
                                        <h3 className="mb-1 text-2xl font-bold text-white">{t('hero.stage_fmt', { num: chainStageIndex ?? 0 })}</h3>
                                        <p className="text-sm text-slate-300">
                                            {t('hero.current_price_prefix')}&nbsp;
                                            <span className="font-semibold text-[#56f1ff]">
                                                ${chainPrice !== null ? chainPrice.toFixed(3) : activeStage.price.toFixed(3)}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="bg-gradient-to-r from-[#6b7dff] via-[#56f1ff] to-[#22edc7] bg-clip-text text-3xl font-black text-transparent">
                                            {chainProgress !== null ? chainProgress : activeStage.progress}%
                                        </p>
                                        <p className="text-xs text-slate-400">{t('hero.stage_progress')}</p>
                                    </div>
                                </div>

                                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <div className="mb-3 flex justify-between text-xs text-slate-300">
                                        <span>{t('hero.sold_label')}</span>
                                        <span>
                                            {currentStageData
                                                ? `${toMillions(currentStageData.sold)}M\u00A0/\u00A0${toMillions(currentStageData.cap)}M`
                                                : `${(stageRaised / 1000000).toFixed(2)}M\u00A0/\u00A0${(activeStage.target / 1000000).toFixed(2)}M`}
                                        </span>
                                    </div>
                                    <ProgressBar
                                        progress={chainProgress !== null ? chainProgress : activeStage.progress}
                                        color="from-[#6f89ff] via-[#4fe3ff] to-[#20e3b2]"
                                        height="h-2.5"
                                        showPercentage={false}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
