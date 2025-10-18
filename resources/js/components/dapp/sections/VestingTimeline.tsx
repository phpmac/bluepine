import { motion } from 'framer-motion';
import { CalendarDays, Clock, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import React from 'react';

const phases = [
    {
        id: 1,
        range: '1',
        title: '初始释放',
        description: '私募结束后 7 天内, 立即释放投资者购买代币总量的 10%.',
        percentage: '10%',
        tag: '一次性释放',
    },
    {
        id: 2,
        range: '2',
        title: '线性释放',
        description: '自第 8 天起, 每月释放 7.5%, 12 个月合计 90%.',
        percentage: '90%',
        tag: '线性释放',
    },
];

// 精简: 去除重复的概览与月度卡片, 仅保留核心时间线与节奏说明

export const VestingTimeline: React.FC = () => (
    <section id="vesting" className="relative z-10 overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020712] to-[#050a1a]" />
        <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,rgba(80,117,255,0.16),transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mx-auto max-w-3xl text-center"
            >
                <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-[0.3em] text-slate-200/80 uppercase backdrop-blur-xl">
                    Release Strategy
                </span>
                <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl">渐进式释放, 守护代币长期价值</h2>
                <p className="mt-4 text-base leading-relaxed text-slate-300/85">
                    我们采用"私募结束 7 天内释放 10% + 剩余 90% 在 12 个月线性释放"的策略, 线性释放自第 8 天起按月进行.
                </p>
            </motion.div>

            <div className="mt-12 grid grid-cols-1 items-stretch gap-6 xl:grid-cols-[0.9fr_1.1fr] xl:gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative flex flex-col gap-5 overflow-hidden rounded-[24px] border border-white/12 bg-gradient-to-br from-[#111a38] via-[#081022] to-[#050b18] p-6 shadow-[0_24px_60px_-40px_rgba(60,110,255,0.55)]"
                >
                    <div className="absolute -top-24 -right-16 size-56 rounded-full bg-[#56f1ff]/12 blur-3xl" />
                    <div className="relative">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs tracking-[0.32em] text-slate-200/80 uppercase">
                            <ShieldCheck className="h-4 w-4" />
                            Token Security
                        </div>
                        <h3 className="mt-4 text-xl leading-tight font-bold text-white">三段式释放模型，兼顾增长与流动性安全</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-300/80">初始释放, 锁定期与稳定月度发放组合, 平衡社区回报与市场供需.</p>
                    </div>

                    <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/7 px-5 py-4">
                        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex items-center gap-3">
                                <div className="flex size-8 items-center justify-center rounded-2xl bg-gradient-to-br from-[#37e7ff99] to-[#22edc780] text-white">
                                    <Clock className="h-4 w-4" />
                                </div>
                                <div>
                                    <p className="text-xs tracking-[0.3em] text-slate-300/75 uppercase">释放节奏</p>
                                    <p className="text-sm font-semibold text-white">私募结束后第 8 天起 · 12 个月线性释放</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 text-xs text-slate-300/70">
                                <span className="inline-flex items-center gap-2">
                                    <span className="inline-flex size-2 rounded-full bg-[#22edc7]" /> 私募+7天 · 10%
                                </span>
                                <span className="inline-flex items-center gap-2">
                                    <span className="inline-flex size-2 rounded-full bg-[#56f1ff]" /> 第8天起 · 每月 7.5%
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 text-[11px] text-slate-300/70">
                            <span className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1">
                                <Sparkles className="h-3.5 w-3.5 text-[#56f1ff]" />
                                社区持有人福利
                            </span>
                            <span className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1">
                                <Layers className="h-3.5 w-3.5 text-[#22edc7]" />
                                市场流动性防护
                            </span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative flex flex-col gap-5 overflow-hidden rounded-[24px] border border-white/12 bg-white/[0.08] px-5 py-6 shadow-[0_24px_60px_-45px_rgba(60,110,255,0.45)] backdrop-blur-xl"
                >
                    <div className="absolute inset-y-8 left-16 hidden w-px bg-gradient-to-b from-white/15 via-white/45 to-white/5 md:block" />
                    <div className="relative space-y-5">
                        {phases.map((phase, index) => (
                            <motion.div
                                key={phase.id}
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: index * 0.05 }}
                                className="relative pl-14"
                            >
                                <div className="absolute top-1 left-3 flex size-8 items-center justify-center rounded-2xl border border-white/15 bg-white/8 text-xs font-semibold text-white/80">
                                    {phase.range}
                                </div>
                                <div className="rounded-2xl border border-white/12 bg-white/[0.08] px-4 py-4 backdrop-blur-xl">
                                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                                        <div>
                                            <h3 className="text-sm font-semibold text-white">{phase.title}</h3>
                                            <p className="mt-1 text-sm leading-relaxed text-white/85">{phase.description}</p>
                                        </div>
                                        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                                            {phase.percentage}
                                        </span>
                                    </div>
                                    <span className="mt-3 inline-flex items-center gap-2 text-[11px] tracking-[0.28em] text-slate-300/70 uppercase">
                                        <CalendarDays className="h-3.5 w-3.5" />
                                        {phase.tag}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);
