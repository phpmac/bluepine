import { AescTechStack } from '@/components/aesc';
import { whitepaperUrl } from '@/config/links';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Download, ExternalLink, Layers } from 'lucide-react';

export function FlagshipAESC() {
    const { t } = useLaravelReactI18n();

    return (
        <section className="relative overflow-hidden bg-linear-to-br from-emerald-500/20 to-teal-600/20 px-4 py-32 sm:px-6 lg:px-8">
            <div className="absolute inset-0 bg-slate-950/80"></div>

            {/* 背景光晕 */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-3xl"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="mb-8 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">{t('portfolio.flagship.title')}</h2>
                </div>

                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                    {/* 左侧 - 内容 */}
                    <div>
                        {/* Logo区域 */}
                        <div className="mb-4">
                            <div className="mb-3 flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-emerald-500 to-teal-600">
                                    <Layers className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{t('portfolio.flagship.aesc.name')}</h3>
                                    <p className="text-xs text-slate-400">{t('portfolio.flagship.aesc.abbr')}</p>
                                </div>
                            </div>
                            <p className="text-base leading-relaxed text-slate-300">{t('portfolio.flagship.aesc.description')}</p>
                        </div>

                        {/* 核心成就 */}
                        <div className="mb-4 grid grid-cols-3 gap-2">
                            <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-center backdrop-blur-sm">
                                <div className="mb-0.5 text-xl font-bold text-emerald-300">{t('portfolio.flagship.achievement1.value')}</div>
                                <div className="text-xs text-slate-400">{t('portfolio.flagship.achievement1.label')}</div>
                                <div className="mt-0.5 text-xs text-slate-300">{t('portfolio.flagship.achievement1.note')}</div>
                            </div>
                            <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-center backdrop-blur-sm">
                                <div className="mb-0.5 text-xl font-bold text-emerald-300">{t('portfolio.flagship.achievement2.value')}</div>
                                <div className="text-xs text-slate-400">{t('portfolio.flagship.achievement2.label')}</div>
                                <div className="mt-0.5 text-xs text-slate-300">{t('portfolio.flagship.achievement2.note')}</div>
                            </div>
                            <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-center backdrop-blur-sm">
                                <div className="mb-0.5 text-xl font-bold text-emerald-300">{t('portfolio.flagship.achievement3.value')}</div>
                                <div className="text-xs text-slate-400">{t('portfolio.flagship.achievement3.label')}</div>
                                <div className="mt-0.5 text-xs text-slate-300">{t('portfolio.flagship.achievement3.note')}</div>
                            </div>
                        </div>

                        {/* 项目标签 */}
                        <div className="mb-4 flex flex-wrap gap-2">
                            <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-200">
                                {t('portfolio.flagship.tag1')}
                            </span>
                            <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-200">
                                {t('portfolio.flagship.tag2')}
                            </span>
                            <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-200">
                                {t('portfolio.flagship.tag3')}
                            </span>
                            <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-200">
                                {t('portfolio.flagship.tag4')}
                            </span>
                            <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-200">
                                {t('portfolio.flagship.tag5')}
                            </span>
                        </div>

                        {/* 行动按钮 */}
                        <div className="flex flex-wrap gap-2">
                            <a
                                href="/aesc"
                                className="flex cursor-pointer items-center bg-linear-to-r from-emerald-500 to-teal-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700"
                            >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                {t('portfolio.flagship.button1')}
                            </a>
                            <a
                                href={whitepaperUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex cursor-pointer items-center border-2 border-white/50 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/10"
                            >
                                <Download className="mr-2 h-4 w-4" />
                                {t('portfolio.flagship.button2')}
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
