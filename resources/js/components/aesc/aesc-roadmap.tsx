import { CheckCircle2 } from 'lucide-react';

/**
 * AESC 发展路线图组件
 *
 * 展示 AESC 生态的发展阶段和里程碑
 */
export function AescRoadmap() {
    const roadmapPhases = [
        {
            phase: '建设期',
            period: '1-3 个月',
            title: '完成团队组建, 技术架构设计, 白皮书发布',
            milestone: '与 2 个农业产区达成试点合作意向',
            status: 'completed',
        },
        {
            phase: '启动期',
            period: '4-6 个月',
            title: '启动 AESC 空投和私募',
            milestone: '全球活跃用户达 15 万参与空投和私募',
            status: 'current',
        },
        {
            phase: '试点期',
            period: '7-9 个月',
            title: '部署基础平台, 接入 IoT 设备, 测试 AI 模型',
            milestone: '500 户农户内测, AI 诊断准确率≥85%',
        },
        {
            phase: '扩张期',
            period: '10-18 个月',
            title: 'DeFi 借贷产品 / RWA 发行',
            milestone: '覆盖 5 个国家, RWA 资产规模达5亿美元',
        },
        {
            phase: '公链研发期',
            period: '19-24 个月',
            title: 'Agri-Eco Smart Chain 主网上线',
            milestone: '日交易量突破 1 亿 AESC',
        },
    ];

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">AESC 生态发展征程</h2>
                </div>

                <div className="relative">
                    {/* 时间轴线 */}
                    <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-600 md:left-1/2"></div>

                    <div className="space-y-12">
                        {roadmapPhases.map((phase, index) => (
                            <div key={index} className={`relative grid gap-8 md:grid-cols-2 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                {/* 左侧内容 */}
                                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                                    <div className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm md:ml-8">
                                        <div className="mb-2 flex items-center gap-3">
                                            <span className="text-sm font-semibold text-emerald-300">{phase.phase}</span>
                                            <span className="text-sm text-slate-400">·</span>
                                            <span className="text-sm text-slate-400">{phase.period}</span>
                                        </div>
                                        <h3 className="mb-3 text-lg font-bold text-white">核心任务</h3>
                                        <p className="mb-3 text-sm text-slate-300">{phase.title}</p>
                                        <h4 className="mb-2 flex items-center text-xs font-semibold text-emerald-300">
                                            <CheckCircle2 className="mr-2 h-3 w-3" />
                                            关键里程碑
                                        </h4>
                                        <p className="text-sm text-slate-300">{phase.milestone}</p>
                                    </div>
                                </div>

                                {/* 时间节点 */}
                                <div
                                    className={`absolute left-6 flex h-6 w-6 items-center justify-center rounded border-2 border-emerald-500 bg-slate-950 md:left-1/2 md:-translate-x-1/2 ${index % 2 === 1 ? 'md:order-1' : ''}`}
                                >
                                    <div className="h-3 w-3 rounded-sm bg-emerald-500"></div>
                                </div>

                                {/* 右侧占位 */}
                                <div className={index % 2 === 1 ? 'md:order-1' : ''}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
