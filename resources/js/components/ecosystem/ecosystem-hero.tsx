export function EcosystemHero() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden px-4 sm:px-6 lg:px-8">
            {/* 背景图片 */}
            <div className="absolute inset-0">
                <img src="/images/eco_bg.webp" alt="Ecosystem Background" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/75 to-slate-950/90"></div>
            </div>

            {/* 背景装饰 */}
            <div className="absolute top-20 right-20 h-80 w-80 opacity-10">
                <svg viewBox="0 0 300 300" className="h-full w-full">
                    <polygon points="150,20 280,80 250,220 50,220 20,80" fill="currentColor" className="text-emerald-400" />
                </svg>
            </div>

            {/* 背景光晕效果 */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/8 blur-3xl"></div>
                <div className="absolute right-1/3 bottom-1/3 h-[500px] w-[500px] rounded-full bg-teal-600/6 blur-3xl"></div>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl py-20">
                <div className="max-w-4xl">
                    <div className="mb-6 inline-flex items-center rounded border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-200 uppercase">
                        ECOSYSTEM
                    </div>
                    <h1 className="mb-4 text-5xl leading-tight font-bold tracking-tight text-white md:text-6xl">生态合作</h1>
                    <p className="text-lg leading-relaxed text-slate-300 md:text-xl">
                        独行快,众行远.我们致力于构建一个开放,协同,共赢的全球农业数字生态.邀请您与我们同行,共同赋能未来农业.
                    </p>
                </div>
            </div>
        </section>
    );
}
