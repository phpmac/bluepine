import { Brain, CheckCircle2, CircuitBoard, Link2 } from 'lucide-react';

export function InvestmentPillars() {
    const investmentPillars = [
        {
            icon: CircuitBoard,
            title: '智慧农业的数字化跃迁',
            description: '通过物联网, 机器人和生物技术的融合, 推动农业生产方式的革命性升级',
            focusAreas: [
                {
                    name: '农业物联网与机器人',
                    details: '低成本传感器, 自动驾驶农机, 无人机精准作业',
                },
                {
                    name: '农业大数据与分析平台',
                    details: '农场管理软件, 产量预测模型, 碳汇计量监测',
                },
                {
                    name: '生物技术与数字农业结合',
                    details: '基于基因数据的精准育种与栽培方案',
                },
            ],
        },
        {
            icon: Link2,
            title: '区块链驱动的信任与资产化',
            description: '利用区块链技术构建农业领域的信任基础设施, 实现实物资产数字化',
            focusAreas: [
                {
                    name: '农业RWA',
                    details: '农田, 作物收益权, 农机设备等实物资产的通证化',
                },
                {
                    name: '供应链溯源与透明度',
                    details: '从田间到餐桌的全链条可验证数据记录',
                },
                {
                    name: '农业 DeFi 与保险',
                    details: '基于链上数据的信贷评分, 去中心化保险, 产量衍生品',
                },
                {
                    name: '去中心化数据市场',
                    details: '实现农业数据安全, 合规, 有偿流转的平台',
                },
            ],
        },
        {
            icon: Brain,
            title: '人工智能赋能的决策与自动化',
            description: '运用人工智能和计算机视觉技术, 提升农业决策的精准度和自动化水平',
            focusAreas: [
                {
                    name: 'AI 预测模型',
                    details: '病虫害早期识别与预警, 市场价格预测, 气象风险建模',
                },
                {
                    name: '计算机视觉应用',
                    details: '基于卫星, 无人机及地面影像的作物长势与胁迫分析',
                },
                {
                    name: '智能决策支持系统',
                    details: '为农户提供个性化的灌溉, 施肥, 播种处方',
                },
            ],
        },
    ];

    return (
        <div className="mb-32">
            <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">我们的三大投资支柱</h2>
                <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-300">
                    我们坚信, 这三个领域的融合是解决农业系统性问题的关键. 我们的投资紧密围绕以下交叉点展开:
                </p>
            </div>

            <div className="space-y-8">
                {investmentPillars.map((pillar, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-lg border-2 border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50"
                    >
                        <div className="grid gap-4 p-4 md:grid-cols-3 md:gap-6 md:p-8">
                            <div>
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600">
                                    <pillar.icon className="h-8 w-8 text-white" strokeWidth={2} />
                                </div>
                                <h3 className="mb-2 text-xl font-bold text-white">{pillar.title}</h3>
                                <p className="mt-6 text-sm leading-relaxed text-slate-300">{pillar.description}</p>
                            </div>
                            <div className="md:col-span-2">
                                <div className="grid gap-4 md:grid-cols-2">
                                    {pillar.focusAreas.map((area, areaIndex) => (
                                        <div key={areaIndex} className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                                            <h4 className="mb-2 flex items-center text-base font-bold text-white">
                                                <CheckCircle2 className="mr-2 h-4 w-4 text-emerald-300" />
                                                {area.name}
                                            </h4>
                                            <p className="text-xs leading-relaxed text-slate-300">{area.details}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
