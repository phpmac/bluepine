import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CTA() {
    return (
        <section className="relative py-32">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent" />

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
                        <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-balance text-transparent">
                            准备好加入农业供应链革命了吗?
                        </span>
                    </h2>
                    <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-slate-400">
                        立即开始使用我们的平台,体验区块链技术为农业供应链带来的变革
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button
                            size="lg"
                            className="group bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-6 text-lg text-white hover:from-emerald-600 hover:to-teal-600"
                        >
                            开始使用
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-emerald-500/30 bg-transparent px-8 py-6 text-lg text-emerald-400 hover:bg-emerald-500/10"
                        >
                            预约演示
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
