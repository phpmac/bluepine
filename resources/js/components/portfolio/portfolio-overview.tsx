import { CheckCircle2, FileText } from 'lucide-react';
import { useState } from 'react';

export function PortfolioOverview() {
    const [selectedFilter, setSelectedFilter] = useState('全部');
    const [selectedPillar, setSelectedPillar] = useState('');
    const [selectedTrack, setSelectedTrack] = useState('');

    const filters = {
        pillars: ['智慧农业', '区块链信任', '人工智能'],
        tracks: ['农业IoT', '供应链溯源', 'RWA', 'RDA', 'DeFi与保险', 'AI模型', '数据市场'],
        stages: ['种子轮', 'A轮'],
    };

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 text-center">
                    <h2 className="mb-3 text-3xl font-bold tracking-tight text-white">我们的投资版图</h2>
                    <p className="mx-auto max-w-3xl text-base text-slate-300">我们构建了一个多层次,协同发展的项目矩阵,共同推动农业数字生态的繁荣</p>
                </div>

                {/* 筛选栏 */}
                <div className="mb-8 space-y-4">
                    {/* 支柱领域筛选 */}
                    <div>
                        <h3 className="mb-2 text-xs font-semibold text-slate-400 uppercase">支柱领域</h3>
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => {
                                    setSelectedPillar('');
                                    setSelectedFilter('全部');
                                }}
                                className={`rounded border px-3 py-2 text-sm font-medium transition-all ${
                                    selectedPillar === ''
                                        ? 'border-emerald-500 bg-emerald-500/20 text-emerald-200'
                                        : 'border-white/10 bg-white/5 text-slate-300 hover:border-emerald-500/50'
                                }`}
                            >
                                全部
                            </button>
                            {filters.pillars.map((pillar) => (
                                <button
                                    key={pillar}
                                    onClick={() => {
                                        setSelectedPillar(pillar);
                                        setSelectedFilter(pillar);
                                    }}
                                    className={`rounded border px-3 py-2 text-sm font-medium transition-all ${
                                        selectedPillar === pillar
                                            ? 'border-emerald-500 bg-emerald-500/20 text-emerald-200'
                                            : 'border-white/10 bg-white/5 text-slate-300 hover:border-emerald-500/50'
                                    }`}
                                >
                                    {pillar}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 核心赛道筛选 */}
                    <div>
                        <h3 className="mb-2 text-xs font-semibold text-slate-400 uppercase">核心赛道</h3>
                        <div className="flex flex-wrap gap-2">
                            {filters.tracks.map((track) => (
                                <button
                                    key={track}
                                    onClick={() => {
                                        setSelectedTrack(track);
                                        setSelectedFilter(track);
                                    }}
                                    className={`rounded border px-3 py-2 text-sm font-medium transition-all ${
                                        selectedTrack === track
                                            ? 'border-emerald-500 bg-emerald-500/20 text-emerald-200'
                                            : 'border-white/10 bg-white/5 text-slate-300 hover:border-emerald-500/50'
                                    }`}
                                >
                                    {track}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 项目阶段筛选 */}
                    <div>
                        <h3 className="mb-2 text-xs font-semibold text-slate-400 uppercase">项目阶段</h3>
                        <div className="flex flex-wrap gap-2">
                            {filters.stages.map((stage) => (
                                <button
                                    key={stage}
                                    className="rounded border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-300 transition-all hover:border-emerald-500/50"
                                >
                                    {stage}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 当前筛选提示 */}
                {selectedFilter !== '全部' && (
                    <div className="mb-6 text-center">
                        <div className="inline-flex items-center rounded border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-sm text-emerald-200">
                            <CheckCircle2 className="mr-2 h-4 w-4" />
                            当前筛选: {selectedFilter}
                        </div>
                    </div>
                )}

                {/* 项目展示区域 - 暂时隐藏 */}
                <div className="rounded-lg border-2 border-dashed border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm md:p-12">
                    <FileText className="mx-auto mb-3 h-12 w-12 text-slate-400 md:h-16 md:w-16" />
                    <p className="text-lg font-medium text-slate-300 md:text-xl">我们的投资组合项目正在整理中</p>
                    <p className="mt-1 text-sm text-slate-400">敬请期待更多精彩内容</p>
                </div>
            </div>
        </section>
    );
}
