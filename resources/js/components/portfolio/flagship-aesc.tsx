import { AescTechStack } from '@/components/aesc';
import { Download, ExternalLink, Layers } from 'lucide-react';

export function FlagshipAESC() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-500/20 to-teal-600/20 px-4 py-32 sm:px-6 lg:px-8">
            <div className="absolute inset-0 bg-slate-950/80"></div>

            {/* 背景光晕 */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-3xl"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="mb-8 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">生态基石</h2>
                </div>

                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                    {/* 左侧 - 内容 */}
                    <div>
                        {/* Logo区域 */}
                        <div className="mb-4">
                            <div className="mb-3 flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600">
                                    <Layers className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">AGRI-ECO SMART CHAIN</h3>
                                    <p className="text-xs text-slate-400">AESC</p>
                                </div>
                            </div>
                            <p className="text-base leading-relaxed text-slate-300">构建未来农业的数字基石——全球 AI 农业大数据服务平台</p>
                        </div>

                        {/* 核心成就 */}
                        <div className="mb-4 grid grid-cols-3 gap-2">
                            <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-center backdrop-blur-sm">
                                <div className="mb-0.5 text-xl font-bold text-emerald-300">92%</div>
                                <div className="text-xs text-slate-400">AI 准确率</div>
                                <div className="mt-0.5 text-xs text-slate-300">病虫害预警</div>
                            </div>
                            <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-center backdrop-blur-sm">
                                <div className="mb-0.5 text-xl font-bold text-emerald-300">15%</div>
                                <div className="text-xs text-slate-400">产量提升</div>
                                <div className="mt-0.5 text-xs text-slate-300">试点区域成效</div>
                            </div>
                            <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-center backdrop-blur-sm">
                                <div className="mb-0.5 text-xl font-bold text-emerald-300">30-50%</div>
                                <div className="text-xs text-slate-400">融资成本降低</div>
                                <div className="mt-0.5 text-xs text-slate-300">RWA 赋能成果</div>
                            </div>
                        </div>

                        {/* 项目标签 */}
                        <div className="mb-4 flex flex-wrap gap-2">
                            <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-200">
                                #区块链基础设施
                            </span>
                            <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-200">
                                #AI 平台
                            </span>
                            <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-200">#RWA</span>
                            <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-200">#RDA</span>
                            <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-200">
                                #数据服务
                            </span>
                        </div>

                        {/* 行动按钮 */}
                        <div className="flex flex-wrap gap-2">
                            <a
                                href="/aesc"
                                className="flex cursor-pointer items-center bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700"
                            >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                进入 AESC 生态平台
                            </a>
                            <a
                                href="#"
                                download
                                className="flex cursor-pointer items-center border-2 border-white/50 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/10"
                            >
                                <Download className="mr-2 h-4 w-4" />
                                下载项目白皮书
                            </a>
                        </div>
                    </div>

                    {/* 右侧 - 技术栈信息图 */}
                    <div>
                        <AescTechStack variant="compact" />
                    </div>
                </div>
            </div>
        </section>
    );
}
