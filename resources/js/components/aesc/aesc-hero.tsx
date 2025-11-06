import { getWhitepaperUrl } from '@/config/links';
import { Head } from '@inertiajs/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { ArrowRight } from 'lucide-react';

/**
 * AESC 页面英雄区组件
 */
export function AescHero() {
    const { t, currentLocale } = useLaravelReactI18n();
    const isEnglish = currentLocale() === 'en';

    return (
        <>
            <Head title={t('page.title.aesc')} />
            <section
                className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url(/images/aesc_bg.jpg)',
                }}
            >
                {/* 遮罩层 */}
                <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-slate-900/70 to-slate-950/80"></div>

                {/* 内容 */}
                <div className="relative z-10 container mx-auto px-4 pt-20 text-center sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                        <div className="mb-6 inline-flex items-center border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-200">
                            {t('aesc.hero.badge')}
                        </div>
                        <h1 className="mb-6 text-5xl leading-tight font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
                            {t('aesc.hero.title')}
                        </h1>
                        <p className="mb-8 text-xl leading-relaxed text-slate-300 md:text-2xl">{t('aesc.hero.subtitle')}</p>
                        <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-slate-400">{t('aesc.hero.description')}</p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <a
                                // TODO 后续改为 https://fd.bluepinefoundation.com/
                                // href="https://fd.bluepinefoundation.com/"
                                href="javascript:void(0)"
                                target="_blank"
                                className="group inline-flex cursor-pointer items-center bg-linear-to-r from-emerald-500 to-teal-600 px-8 py-4 text-lg font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700"
                            >
                                {t('aesc.hero.button1')}
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </a>
                            <a
                                href={getWhitepaperUrl(isEnglish)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex cursor-pointer items-center border-2 border-emerald-500/50 bg-white/10 px-8 py-4 text-lg font-medium text-white backdrop-blur-sm transition-all hover:border-emerald-400 hover:bg-white/20"
                            >
                                {t('aesc.hero.button2')}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
