import { motion } from 'framer-motion';
import { Lock, PieChart as PieChartIcon, Rocket, Shield, Users } from 'lucide-react';
import React, { useState } from 'react';
import { tokenInfo, tokenomicsData } from '../../../data/icoData';
import { AnimatedCounter } from '../common/AnimatedCounter';

const formatMillions = (value: number) => `${(value / 1000000).toLocaleString(undefined, { maximumFractionDigits: 1 })}M`;

const highlights = [
    {
        icon: Rocket,
        title: '生态推进',
        subtitle: '孵化与战略基金',
        key: 'ecosystem',
    },
    {
        icon: Users,
        title: '社区激励',
        subtitle: 'DAO 治理与奖励',
        key: 'community',
    },
    {
        icon: Lock,
        title: '团队承诺',
        subtitle: '长期锁仓释放',
        key: 'team',
    },
    {
        icon: Shield,
        title: '安全与流动性',
        subtitle: '风险缓冲与市场护航',
        key: 'liquidity',
    },
] as const;

const highlightValue = (key: string) => {
    switch (key) {
        case 'ecosystem':
            return tokenomicsData.find((item) => item.name === '生态基金');
        case 'community':
            return tokenomicsData.find((item) => item.name === '社区奖励');
        case 'team':
            return tokenomicsData.find((item) => item.name === '团队激励');
        case 'liquidity': {
            const liquidity = tokenomicsData.find((item) => item.name === '流动性池');
            const tech = tokenomicsData.find((item) => item.name === '技术开发');
            if (!liquidity || !tech) return undefined;
            return {
                name: '安全与流动性',
                value: liquidity.value + tech.value,
                percentage: liquidity.percentage + tech.percentage,
                color: '#6b74ff',
            };
        }
        default:
            return undefined;
    }
};

export const Tokenomics: React.FC = () => {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <section id="tokenomics" className="relative z-10 overflow-hidden py-16">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030914] to-[#050a1a]" />
            <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,rgba(80,117,255,0.16),transparent_60%)]" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-[0.3em] text-slate-200/80 uppercase backdrop-blur-xl">
                        Token Allocation
                    </span>
                    <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">立体化分配结构，兼顾流动性与长期价值</h2>
                    <p className="mt-4 text-base leading-relaxed text-slate-300/85">
                        AESC 通过多维度的分配策略，将代币价值在生态建设、社区激励、团队投入与安全保障之间实现动态平衡。
                    </p>
                </motion.div>

                <div className="mt-10 grid grid-cols-1 items-stretch gap-6 xl:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative flex h-full flex-col gap-5 overflow-hidden rounded-[26px] border border-white/12 bg-white/[0.07] p-5 shadow-[0_26px_70px_-55px_rgba(60,110,255,0.55)] backdrop-blur-xl md:p-6"
                    >
                        <div className="absolute -top-24 -right-12 size-52 rounded-full bg-[#56f1ff]/16 blur-3xl" />
                        <div className="relative flex flex-col gap-4">
                            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="rounded-2xl bg-gradient-to-br from-[#616bff95] to-[#43f0ff7a] p-2">
                                        <PieChartIcon className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs tracking-[0.28em] text-slate-300/80 uppercase">总供应量</p>
                                        <AnimatedCounter
                                            end={tokenInfo.totalSupply / 1000000000}
                                            decimals={1}
                                            suffix="B AESC"
                                            className="bg-gradient-to-r from-[#6b7dff] via-[#56f1ff] to-[#22edc7] bg-clip-text text-xl font-bold text-transparent"
                                        />
                                    </div>
                                </div>
                                <div className="rounded-2xl border border-white/12 bg-white/10 px-4 py-3 text-left">
                                    <p className="text-[11px] tracking-[0.28em] text-slate-300/70 uppercase">公募额度</p>
                                    <p className="text-sm font-semibold text-white">
                                        {tokenomicsData.find((item) => item.name === 'ICO销售')?.percentage}% ·{' '}
                                        {formatMillions(tokenomicsData.find((item) => item.name === 'ICO销售')?.value ?? 0)}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex-1">
                            <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-[0.45fr_1fr]">
                                <div className="flex flex-col justify-between rounded-2xl border border-white/12 bg-white/[0.07] px-4 py-4 backdrop-blur-xl">
                                    <div>
                                        <p className="mb-3 text-[11px] tracking-[0.3em] text-slate-300/75 uppercase">分配速览</p>
                                        <div className="space-y-2 text-sm text-slate-300/80">
                                            <div className="flex items-center justify-between">
                                                <span>生态基金</span>
                                                <span className="font-semibold text-white">
                                                    {tokenomicsData.find((item) => item.name === '生态基金')?.percentage}%
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span>社区奖励</span>
                                                <span className="font-semibold text-white">
                                                    {tokenomicsData.find((item) => item.name === '社区奖励')?.percentage}%
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span>团队激励</span>
                                                <span className="font-semibold text-white">
                                                    {tokenomicsData.find((item) => item.name === '团队激励')?.percentage}%
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span>安全与流动性</span>
                                                <span className="font-semibold text-white">
                                                    {(tokenomicsData.find((item) => item.name === '流动性池')?.percentage ?? 0) +
                                                        (tokenomicsData.find((item) => item.name === '技术开发')?.percentage ?? 0)}
                                                    %
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.08] px-3 py-3 text-[12px] leading-relaxed text-slate-300/75">
                                        锁仓、月度释放与长期储备三位一体，帮助生态在扩张与风险控制之间取得平衡。
                                    </div>
                                </div>

                                <div className="max-h-[260px] space-y-2 overflow-y-auto pr-1">
                                    {tokenomicsData.map((item, index) => (
                                        <motion.div
                                            key={item.name}
                                            onMouseEnter={() => setHovered(index)}
                                            onMouseLeave={() => setHovered(null)}
                                            whileHover={{ y: -2 }}
                                            className={`group rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3 transition-all duration-300 ${hovered === index ? 'border-white/35 shadow-[0_18px_40px_-28px_rgba(90,120,255,0.55)]' : ''}`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <span
                                                        className="inline-flex size-2.5 rounded-full"
                                                        style={{
                                                            background: item.color,
                                                            boxShadow: `0 0 10px ${item.color}80`,
                                                        }}
                                                    />
                                                    <div>
                                                        <p className="text-sm font-semibold text-white">{item.name}</p>
                                                        <p className="mt-0.5 text-[11px] text-slate-400">{formatMillions(item.value)}</p>
                                                    </div>
                                                </div>
                                                <span className="text-sm font-semibold text-white/85">{item.percentage}%</span>
                                            </div>
                                            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/12">
                                                <motion.div
                                                    className="h-full rounded-full"
                                                    style={{ background: item.color }}
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${item.percentage}%` }}
                                                    transition={{ duration: 1, ease: 'easeOut', delay: index * 0.05 }}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 gap-3 md:grid-cols-2"
                    >
                        {highlights.map((item) => {
                            const data = highlightValue(item.key);
                            if (!data) {
                                return null;
                            }
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-white/12 bg-white/[0.07] px-4 py-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_48px_-32px_rgba(90,120,255,0.55)]"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    <div className="relative flex items-start gap-3">
                                        <div className="flex size-8 items-center justify-center rounded-2xl bg-gradient-to-br from-[#616bff95] to-[#43f0ff7a] text-white">
                                            <Icon className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <p className="text-[11px] tracking-[0.28em] text-slate-300/80 uppercase">{item.subtitle}</p>
                                            <h3 className="mt-1 text-sm font-semibold text-white">{item.title}</h3>
                                        </div>
                                    </div>

                                    <div className="flex items-end justify-between">
                                        <p className="bg-gradient-to-r from-[#6b7dff] via-[#56f1ff] to-[#22edc7] bg-clip-text text-lg font-bold text-transparent">
                                            {data.percentage}%
                                        </p>
                                        <span className="text-[11px] text-slate-400">{formatMillions(data.value)}</span>
                                    </div>

                                    <p className="text-sm leading-relaxed text-slate-300/80">
                                        {item.key === 'ecosystem' && '持续投入生态孵化、合作伙伴拓展与现实资产接入。'}
                                        {item.key === 'community' && '通过激励、治理与节点计划深度绑定社区共识。'}
                                        {item.key === 'team' && '锁仓与线性释放结合，确保团队与项目成长保持一致。'}
                                        {item.key === 'liquidity' && '技术研发与流动性储备双重保障，稳定市场表现。'}
                                    </p>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
