import { AlertCircle, CheckCircle2, Globe } from 'lucide-react';

export function StatusReminders() {
    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="rounded-lg border-l-4 border-emerald-500 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                    <div className="space-y-5">
                        <div className="flex items-start">
                            <CheckCircle2 className="mt-1 mr-3 h-5 w-5 shrink-0 text-green-400" />
                            <div>
                                <h4 className="mb-2 text-sm font-semibold text-white">响应时间</h4>
                                <p className="text-sm text-slate-300">我们的目标是在2个工作日内回复所有正式问询.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Globe className="mt-1 mr-3 h-5 w-5 shrink-0 text-emerald-400" />
                            <div>
                                <h4 className="mb-2 text-sm font-semibold text-white">全球协作</h4>
                                <p className="text-sm text-slate-300">我们的团队分布在不同时区,请您耐心等待,我们一定会回复您.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <AlertCircle className="mt-1 mr-3 h-5 w-5 shrink-0 text-orange-400" />
                            <div>
                                <h4 className="mb-2 text-sm font-semibold text-white">安全须知</h4>
                                <p className="text-sm text-slate-300">我们绝不会通过非官方渠道索要您的私钥,密码或进行转账操作.请警惕诈骗.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
