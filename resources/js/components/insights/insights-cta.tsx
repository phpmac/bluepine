import { ExternalLink } from 'lucide-react';

export function InsightsCTA() {
    return (
        <section className="px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
                <div className="rounded-lg border-2 border-white/10 bg-gradient-to-br from-emerald-500/10 to-teal-600/10 p-6 text-center backdrop-blur-sm md:p-8">
                    <h2 className="mb-3 text-2xl font-bold tracking-tight text-white md:text-3xl">拥有独特的行业视角希望分享?</h2>
                    <p className="mx-auto mb-5 max-w-2xl text-base text-slate-300">我们始终欢迎与领域内的专家, 学者和资深从业者进行深度内容合作.</p>
                    <a
                        href="/contact"
                        className="inline-flex cursor-pointer items-center bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700"
                    >
                        <ExternalLink className="mr-2 h-5 w-5" />
                        联系我们, 成为特邀作者
                    </a>
                </div>
            </div>
        </section>
    );
}
