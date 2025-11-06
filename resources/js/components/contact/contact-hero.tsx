import { useLaravelReactI18n } from 'laravel-react-i18n';

export function ContactHero() {
    const { t } = useLaravelReactI18n();

    return (
        <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            {/* 背景图片 */}
            <div className="absolute inset-0">
                <img src="/images/contact_bg.webp" alt="Contact Background" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-b from-slate-950/40 via-slate-950/80 to-slate-950/95"></div>
            </div>

            {/* 背景光晕效果 */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 left-1/4 h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-3xl"></div>
                <div className="absolute top-1/2 right-1/4 h-[600px] w-[600px] rounded-full bg-teal-600/8 blur-3xl"></div>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="mb-6 inline-flex items-center rounded border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-200 uppercase">
                        {t('contact.hero.badge')}
                    </div>
                    <h1 className="mb-4 text-5xl leading-tight font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
                        {t('contact.hero.title')}
                    </h1>
                    <p className="mb-6 text-lg leading-relaxed text-slate-300 md:text-xl">{t('contact.hero.description')}</p>

                    {/* 核心价值主张 */}
                    <div className="rounded-lg border-l-4 border-emerald-500 bg-white/5 p-5 text-left backdrop-blur-sm md:p-6">
                        <h2 className="mb-3 text-xl font-bold text-white">{t('contact.hero.valueTitle')}</h2>
                        <p className="text-sm leading-relaxed text-slate-300 md:text-base">{t('contact.hero.valueDescription')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
