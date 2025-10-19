import { motion } from 'framer-motion';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { PieChart as PieChartIcon } from 'lucide-react';
import React, { useState } from 'react';
import { tokenInfo, tokenomicsData } from '../../../data/icoData';
import { AnimatedCounter } from '../common/AnimatedCounter';

const formatMillions = (value: number) => `${(value / 1000000).toLocaleString(undefined, { maximumFractionDigits: 1 })}M`;

// 精选 4 个卡片使用稳定鍵而非中文文案, 便於多語
const featuredKeys = ['ecofund', 'airdrop', 'reserve', 'partners'] as const;

// 格式化億單位, 單位透過 i18n 配置

export const Tokenomics: React.FC = () => {
    const [hovered, setHovered] = useState<number | null>(null);
    const { t } = useLaravelReactI18n();
    // 优先依据 i18n key 匹配, 回退到中文名称
    const resolveItemByKey = (key: (typeof featuredKeys)[number]) => {
        const keyMap = {
            ecofund: 'tokenomics.cards.ecofund.title',
            airdrop: 'tokenomics.cards.airdrop.title',
            reserve: 'tokenomics.cards.reserve.title',
            partners: 'tokenomics.cards.partners.title',
        } as const;
        const byKey = tokenomicsData.find((i) => i.nameKey === keyMap[key]);
        if (byKey) return byKey;
        switch (key) {
            case 'ecofund':
                return tokenomicsData.find((i) => i.name === '生态基金');
            case 'airdrop':
                return tokenomicsData.find((i) => i.name === '社区空投');
            case 'reserve':
                return tokenomicsData.find((i) => i.name === '储备额');
            case 'partners':
                return tokenomicsData.find((i) => i.name === '合作伙伴');
            default:
                return undefined;
        }
    };
    const featuredItems = featuredKeys.map((k) => resolveItemByKey(k)).filter(Boolean) as typeof tokenomicsData;

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
                        {t('tokenomics.badge')}
                    </span>
                    <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">{t('tokenomics.title')}</h2>
                    <p className="mt-4 text-base leading-relaxed text-slate-300/85">{t('tokenomics.intro')}</p>
                </motion.div>

                <div className="mt-10 grid grid-cols-1 items-stretch gap-6 xl:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative flex h-full max-h-[360px] flex-col gap-5 overflow-hidden rounded-[26px] border border-white/12 bg-white/[0.07] p-5 shadow-[0_26px_70px_-55px_rgba(60,110,255,0.55)] backdrop-blur-xl md:p-6"
                    >
                        <div className="absolute -top-24 -right-12 size-52 rounded-full bg-[#56f1ff]/16 blur-3xl" />
                        <div className="relative flex flex-col gap-4">
                            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="rounded-2xl bg-gradient-to-br from-[#616bff95] to-[#43f0ff7a] p-2">
                                        <PieChartIcon className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs tracking-[0.28em] text-slate-300/80 uppercase">{t('tokenomics.total_supply')}</p>
                                        <AnimatedCounter
                                            end={tokenInfo.totalSupply / 1000000000}
                                            decimals={1}
                                            suffix="B AESC"
                                            className="bg-gradient-to-r from-[#6b7dff] via-[#56f1ff] to-[#22edc7] bg-clip-text text-xl font-bold text-transparent"
                                        />
                                    </div>
                                </div>
                                <div className="rounded-2xl border border-white/12 bg-white/10 px-4 py-3 text-left">
                                    <p className="text-[11px] tracking-[0.28em] text-slate-300/70 uppercase">{t('tokenomics.private_quota')}</p>
                                    <p className="text-sm font-semibold text-white">
                                        {tokenomicsData.find(
                                            (item) => item.nameKey === 'tokenomics.cards.private_sale.title' || item.name === '私募销售',
                                        )?.percentage ?? 0}
                                        % ·{' '}
                                        {formatMillions(
                                            tokenomicsData.find(
                                                (item) => item.nameKey === 'tokenomics.cards.private_sale.title' || item.name === '私募销售',
                                            )?.value ?? 0,
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative min-h-0 flex-1">
                            <div className="grid h-full grid-cols-1 gap-4">
                                <div className="h-full space-y-2 overflow-y-auto pr-1">
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
                                                        <p className="text-sm font-semibold text-white">
                                                            {item.nameKey ? t(item.nameKey) : item.name}
                                                        </p>
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
                        className="grid max-h-[360px] min-h-0 grid-cols-1 gap-3 overflow-y-auto md:grid-cols-2"
                    >
                        {featuredItems.map((data) => {
                            // 基于 nameKey 推导卡片基础 key, 回退到中文名称匹配
                            const baseKey = data.nameKey ? data.nameKey.replace(/\.title$/, '') : null;
                            const displayName = baseKey
                                ? t(`${baseKey}.title`)
                                : data.name === '生态基金'
                                  ? t('tokenomics.cards.ecofund.title')
                                  : data.name === '社区空投'
                                    ? t('tokenomics.cards.airdrop.title')
                                    : data.name === '储备额'
                                      ? t('tokenomics.cards.reserve.title')
                                      : data.name === '合作伙伴'
                                        ? t('tokenomics.cards.partners.title')
                                        : data.name;

                            let desc = '';
                            let quote = '';
                            if (baseKey) {
                                desc = t(`${baseKey}.desc`);
                                quote = t(`${baseKey}.quote`);
                            } else if (data.name === '生态基金') {
                                desc = t('tokenomics.cards.ecofund.desc');
                                quote = t('tokenomics.cards.ecofund.quote');
                            } else if (data.name === '社区空投') {
                                desc = t('tokenomics.cards.airdrop.desc');
                                quote = t('tokenomics.cards.airdrop.quote');
                            } else if (data.name === '储备额') {
                                desc = t('tokenomics.cards.reserve.desc');
                                quote = t('tokenomics.cards.reserve.quote');
                            } else if (data.name === '合作伙伴') {
                                desc = t('tokenomics.cards.partners.desc');
                                quote = t('tokenomics.cards.partners.quote');
                            }

                            return (
                                <div
                                    key={data.name}
                                    className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-white/12 bg-white/[0.07] px-4 py-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_48px_-32px_rgba(90,120,255,0.55)]"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    <div className="relative flex items-start gap-3">
                                        <span
                                            className="mt-1 inline-flex size-3 rounded-full"
                                            style={{ background: data.color, boxShadow: `0 0 10px ${data.color}80` }}
                                        />
                                        <div>
                                            <h3 className="mt-0.5 text-sm font-semibold text-white">
                                                {data.percentage}% {displayName}
                                            </h3>
                                            <p className="mt-1 text-[11px] text-slate-400">{desc}</p>
                                        </div>
                                    </div>

                                    {quote && <p className="text-xs leading-relaxed text-slate-300/80">{quote}</p>}
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
