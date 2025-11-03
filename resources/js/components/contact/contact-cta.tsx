export function ContactCTA() {
    const handleScrollTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
                <div className="rounded-lg border-2 border-white/10 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 p-6 text-center backdrop-blur-sm md:p-10">
                    <h2 className="mb-3 text-2xl font-bold tracking-tight text-white md:text-3xl">准备好与我们共同塑造未来农业了吗?</h2>
                    <p className="mx-auto mb-5 max-w-2xl text-base text-slate-300">
                        无论您是寻求投资的创业者, 还是希望建立合作的伙伴, 我们都期待您的消息.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <a
                            href="/apply"
                            className="inline-flex cursor-pointer items-center bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700"
                        >
                            成为我们的被投项目
                        </a>
                        <a
                            href="#"
                            onClick={handleScrollTop}
                            className="inline-flex cursor-pointer items-center border-2 border-white/50 px-6 py-3 font-medium text-white transition-all hover:bg-white/10"
                        >
                            联系我们洽谈合作
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
