export function CooperationProcess() {
    const cooperationProcess = [
        {
            step: '01',
            title: '提交意向',
            description: '通过下方表单告诉我们您的机构和合作想法',
        },
        {
            step: '02',
            title: '初步评估',
            description: '我们的生态合作团队将评估协同潜力',
        },
        {
            step: '03',
            title: '深度对接',
            description: '安排专项会议,与您的团队深入探讨合作方案',
        },
        {
            step: '04',
            title: '共建未来',
            description: '签署协议,正式启动合作,共同创造价值',
        },
    ];

    return (
        <div className="mb-12">
            <h3 className="mb-6 text-center text-2xl font-bold text-white">合作申请流程</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {cooperationProcess.map((process, index) => (
                    <div key={index} className="rounded-lg border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm">
                        <div className="mb-3 text-3xl font-bold text-emerald-300">{process.step}</div>
                        <h4 className="mb-2 text-base font-bold text-white">{process.title}</h4>
                        <p className="text-sm text-slate-300">{process.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
