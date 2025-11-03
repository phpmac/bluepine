export function PrivacyHero() {
    return (
        <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
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

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="max-w-4xl">
                    <div className="mb-6 inline-flex items-center rounded border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-200 uppercase">
                        PRIVACY POLICY
                    </div>
                    <h1 className="mb-4 text-5xl leading-tight font-bold tracking-tight text-white md:text-6xl">隐私政策</h1>
                    <p className="mb-5 text-lg leading-relaxed text-slate-300 md:text-xl">
                        BLUEPINE TECH FOUNDATION (以下简称"我们") 尊重并保护您的隐私.本隐私政策说明我们如何收集,使用,存储和保护您的个人信息.
                    </p>
                    <p className="text-sm text-slate-400">最后更新日期: 2025年10月30日</p>
                </div>
            </div>
        </section>
    );
}
