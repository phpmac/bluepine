export function InvestmentProcess() {
    const investmentProcess = [
        {
            step: '01',
            title: '初步接触',
            description: '通过官网表格提交项目摘要',
        },
        {
            step: '02',
            title: '初步筛选',
            description: '团队内部评审,在2周内给予初步反馈',
        },
        {
            step: '03',
            title: '深度尽调',
            description: '如符合标准,启动技术,市场,财务及团队的深度尽职调查',
        },
        {
            step: '04',
            title: '投资委员会决策',
            description: '尽调报告提交至投资委员会进行最终决策',
        },
        {
            step: '05',
            title: '协议与交割',
            description: '达成投资意向,签署协议,完成资金交割',
        },
        {
            step: '06',
            title: '投后价值共创',
            description: '启动全面的投后支持计划,共同成长',
        },
    ];

    return (
        <div className="mb-32">
            <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">从接触到合作</h2>
            </div>

            <div className="relative">
                {/* 连接线 */}
                <div className="absolute top-0 left-6 hidden h-full w-0.5 bg-gradient-to-b from-emerald-500 to-teal-600 md:block lg:hidden"></div>
                <div className="absolute top-1/2 left-0 hidden h-0.5 w-full bg-gradient-to-r from-emerald-500 to-teal-600 lg:block"></div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {investmentProcess.map((step, index) => (
                        <div key={index} className="relative">
                            <div className="rounded-lg border-2 border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-emerald-500/50">
                                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-lg font-bold text-white">
                                    {step.step}
                                </div>
                                <h3 className="mb-1 text-base font-bold text-white">{step.title}</h3>
                                <p className="text-xs leading-relaxed text-slate-300">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
