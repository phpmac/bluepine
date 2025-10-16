import { motion } from 'framer-motion';
import { Cpu, Globe2, Link2, ShieldCheck, Users, Zap } from 'lucide-react';
import React from 'react';

const stats = [
    { label: '全球节点', value: '240+', note: '分布式验证者' },
    { label: '峰值 TPS', value: '8,500+', note: '模块化执行层' },
    { label: '生态伙伴', value: '60+', note: '金融 · 能源 · 公共服务' },
];

const features = [
    {
        icon: Cpu,
        title: '模块化执行层',
        description: '可插拔虚拟机与共识层，实现企业级性能弹性。',
    },
    {
        icon: Link2,
        title: '跨链互操作',
        description: '原生跨链消息与桥接协议，统一多链价值流动。',
    },
    {
        icon: Globe2,
        title: '现实资产上链',
        description: '完善的合规凭证体系，助力 RWA、供应链、碳资产落地。',
    },
    {
        icon: ShieldCheck,
        title: '合规安全框架',
        description: '身份治理与权限控制模块，满足全球监管审计需求。',
    },
    {
        icon: Zap,
        title: '流动性引擎',
        description: '跨链流动性与收益聚合协议，放大资产效率。',
    },
    {
        icon: Users,
        title: '治理共识',
        description: 'DAO 与节点协同治理，推动生态持续演进。',
    },
];

const roadmap = [
    {
        phase: '阶段一',
        title: '主网与权限层',
        timeline: '2025 Q1-Q2',
        points: ['主网公测上线', '验证者网络部署', '身份与权限层开放'],
        status: 'active',
    },
    {
        phase: '阶段二',
        title: '现实资产整合',
        timeline: '2025 Q3-Q4',
        points: ['RWA 发行工具', '跨链桥稳定运行', '机构级托管集成'],
        status: 'upcoming',
    },
    {
        phase: '阶段三',
        title: '生态规模化',
        timeline: '2026 Q1-Q2',
        points: ['全球节点联盟', '跨链清算系统', '企业级 API 服务'],
        status: 'future',
    },
];

export const About: React.FC = () => {
    return (
        <section id="about" className="relative z-10 overflow-hidden py-24">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030713] to-[#050a1a]" />
            <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.18),transparent_60%)]" />

            <div className="relative z-10 mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-[32px] border border-white/12 bg-gradient-to-br from-[#121938] via-[#080f22] to-[#040915] px-8 py-10 md:px-12"
                >
                    <div className="absolute -top-32 right-12 size-64 rounded-full bg-[#56f1ff]/12 blur-3xl" />
                    <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                        <div>
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs tracking-[0.32em] text-slate-200/80 uppercase">
                                Ecosystem Vision
                            </span>
                            <h2 className="mt-6 text-3xl leading-tight font-bold text-white md:text-4xl">
                                Agri-Eco Smart Chain · 构建可信的多链价值网络
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-slate-300/90">
                                我们把链上合规、跨链互操作与现实资产发行融为一体，提供覆盖金融、供应链、能源与公共治理的下一代 Web3 基础设施。
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            {stats.map((stat) => (
                                <div key={stat.label} className="rounded-2xl border border-white/12 bg-white/10 px-4 py-5 text-left backdrop-blur-lg">
                                    <p className="text-[11px] tracking-[0.28em] text-slate-300/75 uppercase">{stat.label}</p>
                                    <p className="mt-2 bg-gradient-to-r from-[#6b7dff] via-[#56f1ff] to-[#22edc7] bg-clip-text text-2xl font-bold text-transparent">
                                        {stat.value}
                                    </p>
                                    <p className="mt-2 text-[12px] text-slate-400/80">{stat.note}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="space-y-6"
                >
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-white">核心能力矩阵</h3>
                            <p className="mt-2 text-sm text-slate-300/85">从执行层、互操作再到治理，我们提供完整的基础设施能力栈。</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: index * 0.05 }}
                                    className="relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/12 bg-white/10 px-5 py-6 backdrop-blur-lg"
                                >
                                    <div className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#616bff99] to-[#43f0ff7a] text-white">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-semibold text-white">{feature.title}</h4>
                                        <p className="mt-2 text-sm leading-relaxed text-slate-300/80">{feature.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-8"
                >
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-white">发展路线图</h3>
                            <p className="mt-2 text-sm text-slate-300/85">分阶段推进基础设施、现实资产与全球扩展。</p>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-[28px] border border-white/12 bg-white/10 px-6 py-8 backdrop-blur-xl">
                        <div className="absolute top-[74px] right-12 left-12 hidden h-px bg-gradient-to-r from-transparent via-white/35 to-transparent lg:flex" />
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                            {roadmap.map((phase, index) => {
                                const isActive = phase.status === 'active';
                                const isUpcoming = phase.status === 'upcoming';

                                return (
                                    <motion.div
                                        key={phase.phase}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.45, delay: index * 0.08 }}
                                        className={`relative h-full rounded-2xl border px-6 py-6 backdrop-blur-lg ${
                                            isActive
                                                ? 'border-[#56f1ff]/40 bg-gradient-to-br from-[#54e7ff26] via-[#0f1a3c] to-[#041223] shadow-[0_30px_70px_-35px_rgba(86,241,255,0.55)]'
                                                : isUpcoming
                                                  ? 'border-white/15 bg-white/10'
                                                  : 'border-white/10 bg-white/10'
                                        }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span
                                                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${isActive ? 'bg-[#56f1ff]/20 text-[#56f1ff]' : 'bg-white/10 text-slate-200/80'}`}
                                            >
                                                {phase.phase}
                                            </span>
                                            <span className="text-xs tracking-[0.3em] text-slate-300/70 uppercase">{phase.timeline}</span>
                                        </div>
                                        <h4 className="mt-4 text-lg font-semibold text-white">{phase.title}</h4>
                                        <ul className="mt-4 space-y-2 text-sm text-slate-300/80">
                                            {phase.points.map((point) => (
                                                <li key={point} className="flex items-start gap-2">
                                                    <span
                                                        className={`mt-1 inline-flex size-1.5 rounded-full ${isActive ? 'bg-[#56f1ff]' : 'bg-slate-400/60'}`}
                                                    />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
