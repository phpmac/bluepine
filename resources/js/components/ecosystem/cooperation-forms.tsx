import { ArrowRight, Code, MapPin, TrendingUp } from 'lucide-react';

export function CooperationForms() {
    const cooperationForms = [
        {
            icon: Code,
            title: '技术整合与共同开发',
            target: '技术公司, 开发者团队, 研究实验室',
            content: [
                '基于AGRI-ECO SMART CHAIN公链或平台 API 进行DApp开发',
                '参与核心模块 (如碳汇计量, AI 模型) 的共建',
                '成为AGRI-ECO SMART CHAIN公链的验证节点',
            ],
        },
        {
            icon: MapPin,
            title: '市场拓展与试点落地',
            target: '大型农企, 农业合作社, 地方政府, 农资经销商',
            content: ['在您的产区或客户网络中部署并推广 AESC 解决方案', '共同申请政府数字农业项目', '成为区域设备服务与运营中心'],
        },
        {
            icon: TrendingUp,
            title: '资本协作与生态投资',
            target: '风险投资基金, 家族办公室, 企业战投部',
            content: ['共同投资优质的农业科技项目', '共享项目源与尽职调查信息', '联合发起专注于农业 Web3 的专项基金'],
        },
    ];

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">您如何参与生态共建?</h2>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {cooperationForms.map((form, index) => (
                        <div
                            key={index}
                            className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-emerald-500/50"
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600">
                                <form.icon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-white">{form.title}</h3>
                            <div className="mb-4 rounded border-l-4 border-emerald-500/50 bg-white/5 p-3">
                                <p className="text-xs font-medium text-slate-400">适合对象</p>
                                <p className="mt-1 text-sm text-slate-300">{form.target}</p>
                            </div>
                            <ul className="space-y-2">
                                {form.content.map((item, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-slate-300">
                                        <ArrowRight className="mt-0.5 mr-2 h-4 w-4 shrink-0 text-emerald-400" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
