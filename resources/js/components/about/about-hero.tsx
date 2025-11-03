export function AboutHero() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
            {/* 背景图片 */}
            <div className="absolute inset-0">
                <img src="/images/about_bg.webp" alt="About Background" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/75 to-slate-950/90"></div>
            </div>

            {/* 背景光晕效果 */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/8 blur-3xl"></div>
                <div className="absolute right-1/3 bottom-1/3 h-[500px] w-[500px] rounded-full bg-teal-600/6 blur-3xl"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-4xl text-center">
                <h1 className="mb-8 text-6xl leading-tight font-bold tracking-tight text-white md:text-7xl">关于我们</h1>
                <p className="text-2xl leading-relaxed text-slate-300">
                    我们致力于将最前沿的科技深度融入最古老的行业,构建一个更高效,透明,可持续的全球农业未来.
                </p>
            </div>
        </section>
    );
}
