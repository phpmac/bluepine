import { useLaravelReactI18n } from 'laravel-react-i18n';
import { CheckCircle2, FileText } from 'lucide-react';
import { useState } from 'react';

export function PortfolioOverview() {
    const { t } = useLaravelReactI18n();
    const [selectedFilter, setSelectedFilter] = useState(t('portfolio.overview.filter.all'));
    const [selectedPillar, setSelectedPillar] = useState('');
    const [selectedTrack, setSelectedTrack] = useState('');

    const filters = {
        pillars: ['portfolio.overview.filter.pillar1', 'portfolio.overview.filter.pillar2', 'portfolio.overview.filter.pillar3'],
        tracks: [
            'portfolio.overview.filter.track1',
            'portfolio.overview.filter.track2',
            'portfolio.overview.filter.track3',
            'portfolio.overview.filter.track4',
            'portfolio.overview.filter.track5',
            'portfolio.overview.filter.track6',
            'portfolio.overview.filter.track7',
        ],
        stages: ['portfolio.overview.filter.stage1', 'portfolio.overview.filter.stage2'],
    };

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 text-center">
                    <h2 className="mb-3 text-3xl font-bold tracking-tight text-white">{t('portfolio.overview.title')}</h2>
                    <p className="mx-auto max-w-3xl text-base text-slate-300">{t('portfolio.overview.description')}</p>
                </div>

                {/* 筛选栏 */}
                <div className="mb-8 space-y-4">
                    {/* 支柱领域筛选 */}
                    <div>
                        <h3 className="mb-2 text-xs font-semibold text-slate-400 uppercase">{t('portfolio.overview.filter.pillars')}</h3>
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => {
                                    setSelectedPillar('');
                                    setSelectedFilter(t('portfolio.overview.filter.all'));
                                }}
                                className={`rounded border px-3 py-2 text-sm font-medium transition-all ${
                                    selectedPillar === ''
                                        ? 'border-emerald-500 bg-emerald-500/20 text-emerald-200'
                                        : 'border-white/10 bg-white/5 text-slate-300 hover:border-emerald-500/50'
                                }`}
                            >
                                {t('portfolio.overview.filter.all')}
                            </button>
                            {filters.pillars.map((pillarKey) => (
                                <button
                                    key={pillarKey}
                                    onClick={() => {
                                        setSelectedPillar(pillarKey);
                                        setSelectedFilter(t(pillarKey));
                                    }}
                                    className={`rounded border px-3 py-2 text-sm font-medium transition-all ${
                                        selectedPillar === pillarKey
                                            ? 'border-emerald-500 bg-emerald-500/20 text-emerald-200'
                                            : 'border-white/10 bg-white/5 text-slate-300 hover:border-emerald-500/50'
                                    }`}
                                >
                                    {t(pillarKey)}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 核心赛道筛选 */}
                    <div>
                        <h3 className="mb-2 text-xs font-semibold text-slate-400 uppercase">{t('portfolio.overview.filter.tracks')}</h3>
                        <div className="flex flex-wrap gap-2">
                            {filters.tracks.map((trackKey) => (
                                <button
                                    key={trackKey}
                                    onClick={() => {
                                        setSelectedTrack(trackKey);
                                        setSelectedFilter(t(trackKey));
                                    }}
                                    className={`rounded border px-3 py-2 text-sm font-medium transition-all ${
                                        selectedTrack === trackKey
                                            ? 'border-emerald-500 bg-emerald-500/20 text-emerald-200'
                                            : 'border-white/10 bg-white/5 text-slate-300 hover:border-emerald-500/50'
                                    }`}
                                >
                                    {t(trackKey)}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 项目阶段筛选 */}
                    <div>
                        <h3 className="mb-2 text-xs font-semibold text-slate-400 uppercase">{t('portfolio.overview.filter.stages')}</h3>
                        <div className="flex flex-wrap gap-2">
                            {filters.stages.map((stageKey) => (
                                <button
                                    key={stageKey}
                                    className="rounded border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-300 transition-all hover:border-emerald-500/50"
                                >
                                    {t(stageKey)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 当前筛选提示 */}
                {selectedFilter !== t('portfolio.overview.filter.all') && (
                    <div className="mb-6 text-center">
                        <div className="inline-flex items-center rounded border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-sm text-emerald-200">
                            <CheckCircle2 className="mr-2 h-4 w-4" />
                            {t('portfolio.overview.currentFilter')} {selectedFilter}
                        </div>
                    </div>
                )}

                {/* 项目展示区域 - 暂时隐藏 */}
                <div className="rounded-lg border-2 border-dashed border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm md:p-12">
                    <FileText className="mx-auto mb-3 h-12 w-12 text-slate-400 md:h-16 md:w-16" />
                    <p className="text-lg font-medium text-slate-300 md:text-xl">{t('portfolio.overview.comingSoon.title')}</p>
                    <p className="mt-1 text-sm text-slate-400">{t('portfolio.overview.comingSoon.subtitle')}</p>
                </div>
            </div>
        </section>
    );
}
