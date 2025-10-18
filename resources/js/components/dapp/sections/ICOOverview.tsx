import ieoAbi from '@/lib/abi';
import { config as address } from '@/lib/address';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Sparkles, Target, TrendingUp } from 'lucide-react';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { formatEther } from 'viem';
import { usePublicClient, useReadContract } from 'wagmi';
import { ieoStages } from '../../../data/icoData';
import { AnimatedCounter } from '../common/AnimatedCounter';
import { ProgressBar } from '../common/ProgressBar';

import { StageData } from '@/types';
import { useLaravelReactI18n } from 'laravel-react-i18n';

const stageOverlays = [
    'from-[#56f1ff1f] via-[#13264230] to-transparent',
    'from-[#22edc71f] via-[#15353640] to-transparent',
    'from-[#6b7dff1f] via-[#1b1f4140] to-transparent',
];

export const PrivateSaleOverview: React.FC<{ currentStageData?: StageData | null }> = ({ currentStageData }) => {
    const { t } = useLaravelReactI18n();
    const publicClient = usePublicClient();
    const { data: chainStageCount } = useReadContract({
        address: address.aescIeo as `0x${string}`,
        abi: ieoAbi,
        functionName: 'getStageCount',
    });

    const [chainStages, setChainStages] = useState<Array<{ cap: bigint; sold: bigint; priceNumerator: bigint; priceDenominator: bigint }>>([]);

    // 仅对接合约, 不请求后端

    useEffect(() => {
        if (!publicClient || !chainStageCount) return;
        (async () => {
            const count = Number(chainStageCount);
            if (!count || count < 1) return;
            const contracts = Array.from({ length: count }, (_, i) => ({
                address: address.aescIeo as `0x${string}`,
                abi: ieoAbi,
                functionName: 'getStageInfo',
                args: [BigInt(i)] as const,
            }));
            const res = await publicClient.multicall({ contracts });
            const list: Array<{ cap: bigint; sold: bigint; priceNumerator: bigint; priceDenominator: bigint }> = [];
            res.forEach((r, i) => {
                if (r.status === 'success') {
                    const [cap, sold, priceNumerator, priceDenominator] = r.result as unknown as readonly [bigint, bigint, bigint, bigint];
                    list[i] = { cap, sold, priceNumerator, priceDenominator };
                }
            });
            setChainStages(list);
        })().catch(console.error);
    }, [publicClient, chainStageCount]);

    const stages = useMemo(() => {
        if (chainStages.length) {
            return ieoStages.map((s, i) => {
                const c = chainStages[i];
                if (!c) return s;
                const progress = c.cap > 0n ? Number((c.sold * 10000n) / c.cap) / 100 : 0;
                const tokens = Number.parseFloat(String(formatEther(c.cap)));
                const denom = Number(c.priceDenominator);
                const rawPrice = denom > 0 ? Number(c.priceNumerator) / denom : Number.NaN;
                const price = Number.isFinite(rawPrice) && rawPrice >= 0 ? rawPrice : s.price;
                const tentativeTarget = tokens * price;
                const targetUsd =
                    Number.isFinite(tentativeTarget) && tentativeTarget >= 0 ? tentativeTarget : Number.isFinite(s.target) ? s.target : 0;
                return {
                    ...s,
                    tokens,
                    price,
                    // 用合约cap与价格计算阶段目标(USD)
                    target: targetUsd,
                    progress: Math.max(0, Math.min(100, Number(progress.toFixed(2)))),
                };
            });
        }
        return ieoStages;
    }, [chainStages]);

    // 以合约阶段信息计算总募集目标与已募集(USD)
    const totalTargetUsd = stages.reduce((acc, stage) => acc + (Number.isFinite(stage.target) ? stage.target : 0), 0);
    const totalRaisedUsd = stages.reduce(
        (acc, stage) => acc + ((Number.isFinite(stage.target) ? stage.target : 0) * (Number.isFinite(stage.progress) ? stage.progress : 0)) / 100,
        0,
    );
    const overallProgress = totalTargetUsd > 0 ? (totalRaisedUsd / totalTargetUsd) * 100 : 0;

    const displayRaisedM = Number.isFinite(totalRaisedUsd) ? totalRaisedUsd / 1000000 : 0;
    const displayTargetM = Number.isFinite(totalTargetUsd) ? totalTargetUsd / 1000000 : 0;
    const displayProgress = Number.isFinite(overallProgress) ? overallProgress : 0;

    // 基于传入的 currentStageData 决定默认阶段索引
    const chainStageIndex = currentStageData ? Number(currentStageData.index) : null;
    const computedDefault = stages.find((stage) => stage.progress > 0 && stage.progress < 100) ?? null;
    const computedDefaultIndex = computedDefault ? stages.findIndex((s) => s.id === computedDefault.id) : 0;
    const preferredIndex =
        chainStageIndex !== null && chainStageIndex !== undefined && chainStageIndex >= 0 && chainStageIndex < stages.length ? chainStageIndex : -1;

    const [selectedIndex, setSelectedIndex] = useState(preferredIndex >= 0 ? preferredIndex : computedDefaultIndex);

    useEffect(() => {
        if (preferredIndex >= 0) {
            setSelectedIndex(preferredIndex);
        }
    }, [preferredIndex]);

    const activeStage = stages[selectedIndex] ?? null;
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', startIndex: selectedIndex, loop: true });
    const [isPageVisible, setIsPageVisible] = useState(true);

    useEffect(() => {
        const handleVisibility = () => setIsPageVisible(!document.hidden);
        document.addEventListener('visibilitychange', handleVisibility);
        handleVisibility();
        return () => document.removeEventListener('visibilitychange', handleVisibility);
    }, []);

    const updateScrollStates = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    const handleSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        updateScrollStates();
    }, [emblaApi, updateScrollStates]);

    useEffect(() => {
        if (!emblaApi) return;
        handleSelect();
        emblaApi.on('select', handleSelect);
        emblaApi.on('reInit', handleSelect);
        return () => {
            emblaApi.off('select', handleSelect);
            emblaApi.off('reInit', handleSelect);
        };
    }, [emblaApi, handleSelect]);

    useEffect(() => {
        if (!emblaApi || isHovered || !isPageVisible) return;
        const autoplayId = window.setInterval(() => {
            if (!emblaApi || !isPageVisible) return;
            emblaApi.scrollNext();
        }, 6000);
        return () => window.clearInterval(autoplayId);
    }, [emblaApi, isHovered, isPageVisible]);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

    const metrics = useMemo(
        () => [
            {
                icon: Target,
                label: '总募集目标',
                value: `$${displayTargetM.toFixed(2)}M`,
                detail: '私募规模',
            },
            {
                icon: TrendingUp,
                label: '当前阶段',
                value: activeStage ? activeStage.stage : '即将开启',
                detail: activeStage ? `单价 $${activeStage.price.toFixed(3)}` : '敬请期待',
            },
        ],
        [activeStage, displayTargetM],
    );

    return (
        <section id="private-sale-overview" className="relative z-10 overflow-hidden py-24">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050a1a]/85 to-[#030712]" />
            <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(111,140,255,0.18),transparent_60%)]" />
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-[0.3em] text-slate-200/80 uppercase backdrop-blur-xl">
                        {t('overview.badge')}
                    </span>
                    <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">{t('overview.title')}</h2>
                    <p className="mt-4 text-base leading-relaxed text-slate-300/90">{t('overview.subtitle')}</p>
                </motion.div>

                <div className="mt-16 grid grid-cols-1 items-stretch gap-10 xl:grid-cols-2 xl:gap-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative flex min-h-[520px] flex-col overflow-hidden rounded-[32px] bg-gradient-to-br from-[#111a38] via-[#0a1326] to-[#040916] shadow-[0_35px_90px_-45px_rgba(67,113,255,0.65)]"
                    >
                        <div className="absolute -bottom-28 -left-20 size-72 rounded-full bg-[#56f1ff]/15 blur-3xl" />
                        <div className="absolute -top-24 right-12 size-56 rounded-full bg-[#22edc7]/12 blur-3xl" />
                        <div className="relative flex flex-1 flex-col gap-8 p-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs tracking-[0.32em] text-slate-200/70 uppercase">{t('overview.metrics')}</p>
                                    <h3 className="mt-2 text-2xl font-bold text-white">{t('overview.metrics_title')}</h3>
                                </div>
                                <div className="hidden items-center gap-2 text-[11px] text-slate-300/70 md:flex">
                                    <Sparkles className="h-4 w-4 text-[#56f1ff]" /> 实时同步
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                {metrics.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={item.label}
                                            className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-5 shadow-[0_25px_50px_-35px_rgba(70,120,255,0.55)] backdrop-blur-lg"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="flex size-9 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5f66ff] via-[#4b76ff] to-[#2cd6ff] text-white shadow-[0_18px_30px_-20px_rgba(88,126,255,0.8)]">
                                                    <Icon className="h-4 w-4" />
                                                </div>
                                                <div>
                                                    <p className="mb-1 text-[11px] tracking-[0.28em] text-slate-300/80 uppercase">{item.label}</p>
                                                    <p className="text-lg leading-tight font-semibold text-white">{item.value}</p>
                                                    <p className="mt-1 text-[11px] text-slate-400">{item.detail}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="flex flex-1 flex-col justify-end rounded-2xl border border-white/10 bg-gradient-to-br from-[#616bff1f] via-[#0e1531] to-[#06101f] p-6 shadow-[0_25px_60px_-45px_rgba(60,110,255,0.6)]">
                                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                                    <div>
                                        <p className="mb-2 text-xs tracking-[0.3em] text-slate-300/80 uppercase">{t('overview.overall')}</p>
                                        <h3 className="text-xl font-bold text-white">{t('overview.completion')}</h3>
                                    </div>
                                    <div className="flex items-end gap-6">
                                        <div className="text-right">
                                            <AnimatedCounter
                                                end={displayRaisedM}
                                                decimals={2}
                                                prefix="$"
                                                suffix="M"
                                                className="bg-gradient-to-r from-[#6b7dff] via-[#56f1ff] to-[#22edc7] bg-clip-text text-2xl font-black text-transparent"
                                            />
                                            <p className="mt-1 text-[11px] text-slate-400">{t('overview.raised')}</p>
                                        </div>
                                        <div className="text-right">
                                            <AnimatedCounter
                                                end={displayTargetM}
                                                decimals={1}
                                                prefix="$"
                                                suffix="M"
                                                className="text-lg font-semibold text-white"
                                            />
                                            <p className="mt-1 text-[11px] text-slate-400">{t('overview.target')}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <ProgressBar
                                        progress={parseFloat(displayProgress.toFixed(1))}
                                        color="from-[#6f89ff] via-[#4fe3ff] to-[#20e3b2]"
                                        height="h-2.5"
                                        showPercentage={false}
                                    />
                                    <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                                        <span>{t('overview.early_benefit')}</span>
                                        <span>{displayProgress.toFixed(1)}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex min-h-[520px] flex-col"
                    >
                        <div
                            ref={emblaRef}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="relative flex-1 overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0e182f] via-[#071122] to-[#040b18] shadow-[0_30px_90px_-45px_rgba(60,110,255,0.68)]"
                        >
                            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                            <div className="flex h-full touch-pan-y select-none">
                                {stages.map((stage, index) => {
                                    const raised = (stage.target * stage.progress) / 100;
                                    const isSelected = index === selectedIndex;
                                    const isCompleted = stage.progress === 100;
                                    const isUpcoming = stage.progress === 0;
                                    const statusLabel = isCompleted
                                        ? t('overview.status.completed')
                                        : isUpcoming
                                          ? t('overview.status.upcoming')
                                          : t('overview.status.active');
                                    const overlay = stageOverlays[index % stageOverlays.length];

                                    return (
                                        <motion.div
                                            key={stage.id}
                                            className="h-full flex-[0_0_100%] px-1 sm:px-2"
                                            initial={{ opacity: 0.75, scale: 0.95 }}
                                            animate={{ opacity: isSelected ? 1 : 0.75, scale: isSelected ? 1 : 0.97, y: isSelected ? 0 : 10 }}
                                            transition={{ duration: 0.55, ease: 'easeOut' }}
                                        >
                                            <div className="relative h-full overflow-hidden rounded-[28px] border border-white/12 bg-white/[0.06] p-6 shadow-[0_30px_80px_-55px_rgba(50,100,190,0.65)] backdrop-blur-xl sm:p-8">
                                                {isSelected && (
                                                    <motion.div
                                                        className={`pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br ${overlay}`}
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ duration: 0.6 }}
                                                    />
                                                )}

                                                <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                                    <div>
                                                        <p className="mb-1 text-xs tracking-[0.3em] text-slate-300/70 uppercase">
                                                            {t('overview.stage_label', { num: stage.id.toString().padStart(2, '0') })}
                                                        </p>
                                                        <h3 className="mb-1 text-xl font-semibold text-white">{stage.stage}</h3>
                                                        <p className="text-sm text-slate-300">单价 ${stage.price.toFixed(3)}</p>
                                                    </div>
                                                    <span
                                                        className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${
                                                            isCompleted
                                                                ? 'border-[#22edc7]/30 bg-[#22edc7]/12 text-[#22edc7]'
                                                                : isUpcoming
                                                                  ? 'border-white/15 bg-white/10 text-slate-300'
                                                                  : 'border-[#56f1ff]/35 bg-[#56f1ff]/18 text-[#56f1ff]'
                                                        }`}
                                                    >
                                                        {statusLabel}
                                                    </span>
                                                </div>

                                                <div className="relative z-10 mt-6 grid grid-cols-2 gap-4 text-sm text-slate-200/90">
                                                    <div>
                                                        <p className="mb-2 text-xs tracking-[0.25em] text-slate-400 uppercase">代币配额</p>
                                                        <p className="text-lg font-semibold text-white">
                                                            {(stage.tokens / 1000000).toLocaleString()}M
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="mb-2 text-xs tracking-[0.25em] text-slate-400 uppercase">
                                                            {t('overview.target_raise')}
                                                        </p>
                                                        <p className="text-lg font-semibold text-white">${(stage.target / 1000000).toFixed(1)}M</p>
                                                    </div>
                                                    <div>
                                                        <p className="mb-2 text-xs tracking-[0.25em] text-slate-400 uppercase">
                                                            {t('overview.raised')}
                                                        </p>
                                                        <p className="bg-gradient-to-r from-[#6b7dff] via-[#56f1ff] to-[#22edc7] bg-clip-text text-lg font-semibold text-transparent">
                                                            ${(raised / 1000000).toFixed(2)}M
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="mb-2 text-xs tracking-[0.25em] text-slate-400 uppercase">阶段进度</p>
                                                        <p className="text-lg font-semibold text-white">{stage.progress}%</p>
                                                    </div>
                                                </div>

                                                <div className="relative z-10 mt-6">
                                                    <ProgressBar
                                                        progress={stage.progress}
                                                        color={
                                                            isUpcoming
                                                                ? 'from-[#6f89ff] via-[#4fe3ff] to-[#20e3b2]'
                                                                : 'from-[#56f1ff] via-[#22edc7] to-[#18f39a]'
                                                        }
                                                        height="h-2"
                                                        showPercentage={false}
                                                    />
                                                </div>

                                                <motion.button
                                                    whileHover={!isUpcoming && !isCompleted ? { scale: 1.02 } : {}}
                                                    whileTap={!isUpcoming && !isCompleted ? { scale: 0.98 } : {}}
                                                    disabled={isUpcoming || isCompleted}
                                                    className={`relative z-10 mt-6 w-full rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                                                        isUpcoming
                                                            ? 'cursor-not-allowed border-white/10 bg-white/8 text-slate-400'
                                                            : isCompleted
                                                              ? 'cursor-not-allowed border-[#22edc7]/40 bg-[#22edc7]/18 text-[#22edc7]'
                                                              : 'border-transparent bg-gradient-to-r from-[#616bff] via-[#4b76ff] to-[#37e7ff] text-slate-900 shadow-[0_25px_60px_-30px_rgba(82,115,255,0.65)] hover:shadow-[0_30px_70px_-30px_rgba(67,240,255,0.65)]'
                                                    }`}
                                                >
                                                    {isUpcoming ? t('overview.soon') : isCompleted ? t('overview.soldout') : t('overview.open')}
                                                </motion.button>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-2">
                                {stages.map((stage, index) => (
                                    <button
                                        key={stage.id}
                                        onClick={() => scrollTo(index)}
                                        className={`size-2.5 rounded-full transition-all duration-300 ${selectedIndex === index ? 'scale-110 bg-white shadow-[0_0_0_4px_rgba(86,241,255,0.25)]' : 'bg-white/30 hover:bg-white/60'}`}
                                        aria-label={`前往 ${stage.stage}`}
                                    />
                                ))}
                            </div>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={scrollPrev}
                                    disabled={!canScrollPrev}
                                    className={`size-10 rounded-full border border-white/15 bg-white/5 text-white/80 transition ${canScrollPrev ? 'hover:bg-white/10 hover:text-white' : 'cursor-not-allowed opacity-40'}`}
                                    aria-label="上一阶段"
                                >
                                    <ArrowLeft className="mx-auto h-4 w-4" />
                                </button>
                                <button
                                    onClick={scrollNext}
                                    disabled={!canScrollNext}
                                    className={`size-10 rounded-full border border-white/15 bg-white/5 text-white/80 transition ${canScrollNext ? 'hover:bg-white/10 hover:text-white' : 'cursor-not-allowed opacity-40'}`}
                                    aria-label="下一阶段"
                                >
                                    <ArrowRight className="mx-auto h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
