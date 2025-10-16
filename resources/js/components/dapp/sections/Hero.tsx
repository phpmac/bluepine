import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Globe2, ShieldCheck } from 'lucide-react';
import React from 'react';
import { ieoStages } from '../../../data/icoData';
import { links } from '../../../data/links';
import { Button } from '../common/Button';
import { ProgressBar } from '../common/ProgressBar';

export const Hero: React.FC = () => {
    const scrollToICO = () => {
        const element = document.getElementById('ieo-overview');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const activeStage = ieoStages.find((stage) => stage.progress > 0 && stage.progress < 100) ?? ieoStages[0];
    const stageRaised = (activeStage.target * activeStage.progress) / 100;

    const heroStats = [
        {
            label: '已解锁募集额度',
            value: `$${(stageRaised / 1000000).toFixed(1)}M`,
            description: `${activeStage.stage} 公募进度`,
        },
        {
            label: '全球节点网络',
            value: '240+',
            description: '分布式验证节点',
        },
        {
            label: '高性能处理',
            value: '8,500+',
            description: '峰值 TPS',
        },
    ];

    const highlights = [
        {
            icon: Cpu,
            title: '模块化执行层',
            description: '兼容多虚拟机环境，企业业务可无缝上链。',
        },
        {
            icon: ShieldCheck,
            title: '原生合规框架',
            description: '可验证身份与权限控制，满足监管审计需求。',
        },
        {
            icon: Globe2,
            title: '多链互操作',
            description: '跨链桥与消息层原生支持，实现价值自由流动。',
        },
    ];

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
                            新一代链上基础设施
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.7 }}
                            className="mt-6 text-4xl leading-tight font-black text-white sm:text-5xl xl:text-6xl"
                        >
                            构建现实资产的
                            <span className="block bg-gradient-to-r from-[#6a74ff] via-[#4fe3ff] to-[#20e3b2] bg-clip-text text-transparent">
                                链上价值网络
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.55, duration: 0.7 }}
                            className="mt-8 max-w-xl text-lg leading-relaxed text-slate-200/90"
                        >
                            Agri-Eco Smart Chain 通过模块化架构将真实世界资产、合规金融与去中心化网络无缝连接，
                            为企业和社区提供性能、合规与开放性兼具的 Web3 基础设施。
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.75, duration: 0.7 }}
                            className="mt-10 flex flex-col gap-4 sm:flex-row"
                        >
                            <Button variant="primary" className="gap-2 px-7 py-3 text-base" onClick={scrollToICO}>
                                <span>立即参与代币认购</span>
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="secondary"
                                className="gap-2 px-7 py-3 text-base"
                                onClick={() => window.open(links.enWhitepaper, '_blank')}
                            >
                                <span>获取白皮书</span>
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.7 }}
                            className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
                        >
                            {heroStats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                                    <div className="relative">
                                        <p className="mb-2 text-xs tracking-[0.3em] text-slate-300/70 uppercase">{stat.label}</p>
                                        <p className="mb-1 text-2xl font-bold text-white">{stat.value}</p>
                                        <p className="text-sm text-slate-300">{stat.description}</p>
                                    </div>
                                </motion.div>
                            ))}
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
                                <p className="mb-4 text-sm tracking-[0.3em] text-slate-200/80 uppercase">Token Sale</p>
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div>
                                        <h3 className="mb-1 text-2xl font-bold text-white">{activeStage.stage}</h3>
                                        <p className="text-sm text-slate-300">
                                            当前价格&nbsp;/&nbsp;
                                            <span className="font-semibold text-[#56f1ff]">${activeStage.price.toFixed(3)}</span>
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="bg-gradient-to-r from-[#6b7dff] via-[#56f1ff] to-[#22edc7] bg-clip-text text-3xl font-black text-transparent">
                                            {activeStage.progress}%
                                        </p>
                                        <p className="text-xs text-slate-400">阶段完成度</p>
                                    </div>
                                </div>

                                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <div className="mb-3 flex justify-between text-xs text-slate-300">
                                        <span>已募集</span>
                                        <span>
                                            ${(stageRaised / 1000000).toFixed(2)}M&nbsp;/&nbsp;${(activeStage.target / 1000000).toFixed(2)}M
                                        </span>
                                    </div>
                                    <ProgressBar
                                        progress={activeStage.progress}
                                        color="from-[#6f89ff] via-[#4fe3ff] to-[#20e3b2]"
                                        height="h-2.5"
                                        showPercentage={false}
                                    />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                            className="grid grid-cols-1 gap-4"
                        >
                            {highlights.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={item.title}
                                        className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                                    >
                                        <div className="mt-1 flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5f66ff80] to-[#24e4d380] text-white">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-base font-semibold text-white">{item.title}</h4>
                                            <p className="mt-1 text-sm leading-relaxed text-slate-300/90">{item.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
