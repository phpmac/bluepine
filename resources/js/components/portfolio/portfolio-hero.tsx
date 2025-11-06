import { useLaravelReactI18n } from 'laravel-react-i18n';

export function PortfolioHero() {
    const { t } = useLaravelReactI18n();

    return (
        <section className="relative flex min-h-screen items-center overflow-hidden px-4 sm:px-6 lg:px-8">
            {/* 马赛克风格背景效果 */}
            <div className="absolute inset-0">
                <div className="h-full w-full bg-slate-950">
                    <div className="absolute inset-0 opacity-20">
                        <div className="grid h-full w-full grid-cols-12 gap-1">
                            {Array.from({ length: 144 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="bg-emerald-400"
                                    style={{
                                        opacity: Math.random() * 0.5 + 0.1,
                                        animationDelay: `${Math.random() * 2}s`,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/75 to-slate-950/90"></div>
            </div>

            {/* 背景光晕效果 */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/8 blur-3xl"></div>
                <div className="absolute right-1/3 bottom-1/3 h-[500px] w-[500px] rounded-full bg-teal-600/6 blur-3xl"></div>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl py-20">
                <div className="max-w-4xl">
                    <h1 className="mb-4 text-5xl leading-tight font-bold tracking-tight text-white md:text-6xl">{t('portfolio.hero.title')}</h1>
                    <p className="text-lg leading-relaxed text-slate-300 md:text-xl">{t('portfolio.hero.description')}</p>
                </div>
            </div>
        </section>
    );
}
