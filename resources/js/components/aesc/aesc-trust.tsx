import { useLaravelReactI18n } from 'laravel-react-i18n';
import { ArrowRight, Database, FileText, Lock, ShieldCheck } from 'lucide-react';

/**
 * AESC 信任与安全组件
 *
 * 展示平台的安全性和透明度
 */
export function AescTrust() {
    const { t } = useLaravelReactI18n();

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">{t('aesc.trust.title')}</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {/* 智能合约审计 */}
                    <div className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded bg-white/10">
                            <ShieldCheck className="h-7 w-7 text-green-400" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-white">{t('aesc.trust.audit.title')}</h3>
                        <p className="mb-4 text-sm text-slate-300">{t('aesc.trust.audit.description')}</p>
                        <a href="#" className="inline-flex items-center text-sm text-emerald-300 transition-colors hover:text-emerald-200">
                            {t('aesc.trust.audit.link')}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </div>

                    {/* 官方链接 */}
                    <div className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded bg-white/10">
                            <FileText className="h-7 w-7 text-blue-400" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-white">{t('aesc.trust.docs.title')}</h3>
                        <div className="space-y-2">
                            <a href="#" className="flex items-center text-sm text-emerald-300 transition-colors hover:text-emerald-200">
                                <ArrowRight className="mr-2 h-3 w-3" />
                                {t('aesc.trust.docs.whitepaper')}
                            </a>
                            <a href="#" className="flex items-center text-sm text-emerald-300 transition-colors hover:text-emerald-200">
                                <ArrowRight className="mr-2 h-3 w-3" />
                                {t('aesc.trust.docs.technical')}
                            </a>
                            <a href="#" className="flex items-center text-sm text-emerald-300 transition-colors hover:text-emerald-200">
                                <ArrowRight className="mr-2 h-3 w-3" />
                                {t('aesc.trust.docs.roadmap')}
                            </a>
                        </div>
                    </div>

                    {/* 数据隐私保护 */}
                    <div className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded bg-white/10">
                            <Lock className="h-7 w-7 text-purple-400" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-white">{t('aesc.trust.privacy.title')}</h3>
                        <p className="text-sm text-slate-300">{t('aesc.trust.privacy.description')}</p>
                    </div>

                    {/* 透明治理 */}
                    <div className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded bg-white/10">
                            <Database className="h-7 w-7 text-cyan-400" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-white">{t('aesc.trust.governance.title')}</h3>
                        <p className="text-sm text-slate-300">{t('aesc.trust.governance.description')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
