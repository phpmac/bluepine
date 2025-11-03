import { ArrowRight, Database, FileText, Lock, ShieldCheck } from 'lucide-react';

/**
 * AESC 信任与安全组件
 *
 * 展示平台的安全性和透明度
 */
export function AescTrust() {
    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">安全,透明,可信赖</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {/* 智能合约审计 */}
                    <div className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded bg-white/10">
                            <ShieldCheck className="h-7 w-7 text-green-400" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-white">智能合约审计</h3>
                        <p className="mb-4 text-sm text-slate-300">AESC代币合约及核心生态合约已通过知名审计机构CertiK的全面审计</p>
                        <a href="#" className="inline-flex items-center text-sm text-emerald-300 transition-colors hover:text-emerald-200">
                            查看审计报告
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </div>

                    {/* 官方链接 */}
                    <div className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded bg-white/10">
                            <FileText className="h-7 w-7 text-blue-400" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-white">官方文档</h3>
                        <div className="space-y-2">
                            <a href="#" className="flex items-center text-sm text-emerald-300 transition-colors hover:text-emerald-200">
                                <ArrowRight className="mr-2 h-3 w-3" />
                                白皮书
                            </a>
                            <a href="#" className="flex items-center text-sm text-emerald-300 transition-colors hover:text-emerald-200">
                                <ArrowRight className="mr-2 h-3 w-3" />
                                技术文档
                            </a>
                            <a href="#" className="flex items-center text-sm text-emerald-300 transition-colors hover:text-emerald-200">
                                <ArrowRight className="mr-2 h-3 w-3" />
                                路线图
                            </a>
                        </div>
                    </div>

                    {/* 数据隐私保护 */}
                    <div className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded bg-white/10">
                            <Lock className="h-7 w-7 text-purple-400" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-white">数据隐私保护</h3>
                        <p className="text-sm text-slate-300">
                            采用联邦学习与零知识证明技术,确保用户数据在链上可用但不可见,符合GDPR和各国数据保护法规
                        </p>
                    </div>

                    {/* 透明治理 */}
                    <div className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded bg-white/10">
                            <Database className="h-7 w-7 text-cyan-400" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-white">透明治理</h3>
                        <p className="text-sm text-slate-300">所有重大决策均通过社区投票,链上记录不可篡改.代币释放与使用实时可查</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
