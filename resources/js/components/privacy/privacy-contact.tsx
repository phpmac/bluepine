export function PrivacyContact() {
    return (
        <section className="px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="rounded-lg border-2 border-white/10 bg-gradient-to-br from-emerald-500/10 to-teal-600/10 p-8 text-center backdrop-blur-sm md:p-12">
                    <h2 className="mb-3 text-2xl font-bold tracking-tight text-white md:text-3xl">联系我们</h2>
                    <p className="mx-auto mb-6 max-w-2xl text-base text-slate-300 md:text-lg">
                        如果您对本隐私政策有任何疑问,或希望行使您的数据权利,请通过以下方式联系我们:
                    </p>
                    <div className="mb-6 space-y-3 text-slate-300">
                        <p className="text-sm md:text-base">
                            <strong className="text-white">电子邮箱:</strong> contact@bluepinefoundation.com
                        </p>
                        <p className="text-sm md:text-base">
                            <strong className="text-white">地址:</strong> 新加坡 · 硅谷 · 上海
                        </p>
                    </div>
                    <p className="text-sm text-slate-400">我们将在收到您的请求后尽快 (通常在2个工作日内) 与您联系.</p>
                </div>
            </div>
        </section>
    );
}
