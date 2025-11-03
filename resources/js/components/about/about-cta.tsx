import { Link as LinkIcon } from 'lucide-react';

export function AboutCTA() {
    return (
        <div className="mx-auto max-w-5xl">
            <div className="rounded-lg border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 p-4 text-center text-white backdrop-blur-sm md:p-10">
                <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">准备好与我们共同塑造未来农业了吗?</h2>
                <p className="mx-auto mb-6 max-w-2xl text-lg text-slate-300">无论您是寻求投资的创业者,还是希望建立合作的伙伴,我们都期待您的消息.</p>
                <a
                    href="/contact"
                    className="inline-flex cursor-pointer items-center bg-gradient-to-r from-emerald-500 to-teal-600 px-10 py-4 text-lg font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700"
                >
                    <LinkIcon className="mr-2 h-5 w-5" />
                    联系我们洽谈合作
                </a>
            </div>
        </div>
    );
}
