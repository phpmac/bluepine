import { CheckCircle2, Lock, ShieldAlert, Users } from 'lucide-react';

/**
 * Airdrop 参与步骤组件
 *
 * 展示如何参与空投的详细步骤
 */
export function AirdropSteps() {
    const participationSteps = [
        {
            step: '第一步',
            title: '空投活动设计与任务列表',
            description: '活动将在专业的空投平台 (如 Galxe) 上发布, 以便于自动化任务验证和积分追踪',
            tasks: [
                {
                    category: '基础任务',
                    points: '25分',
                    items: [
                        '关注项目的官方 Twitter 账号',
                        '加入项目的官方 Telegram 群组',
                        '加入项目的官方 Discord 服务器',
                        '订阅项目的官方 YouTube 频道',
                    ],
                },
                {
                    category: '社交传播活动',
                    points: '50分/次',
                    items: ['转发指定的官方 Twitter 推文并 @3位好友', '在 Discord 的指定频道做自我介绍'],
                },
                {
                    category: '内容创作',
                    points: '100-200分',
                    items: ['发布一条关于项目的原创推文 / X帖 (不少于100字, 需配图) ', '创作一个关于项目的短视频 (TikTok / YouTube Shorts) '],
                },
            ],
        },
        {
            step: '第二步',
            title: '积分排名与空投资格分配',
            description: '活动结束后, 只有总积分超过100分的参与者才具备空投资格',
            details: [
                {
                    label: '活动周期',
                    value: '2-4周',
                },
                {
                    label: '资格门槛',
                    value: '总积分≥100分',
                },
                {
                    label: '分配机制',
                    value: '1积分=1个代币, 多劳多得',
                },
            ],
        },
        {
            step: '第三步',
            title: '代币释放细节',
            description: '为了防止代币在收到后立即被抛售, 空投代币将采用锁仓 + 线性释放机制',
            releaseSchedule: [
                {
                    period: '上线交易所 后第1个月',
                    release: '0枚释放 (初始锁仓) ',
                },
                {
                    period: '从第2个月开始',
                    release: '连续6个月线性释放',
                },
            ],
        },
        {
            step: '第四步',
            title: '反作弊与安全措施',
            description: '确保空投奖励落到实处的关键措施',
            measures: [
                {
                    icon: ShieldAlert,
                    title: '钱包筛查',
                    description: '自动筛查参与地址, 排除交易所冷钱包, 巨鲸钱包和女巫攻击嫌疑地址',
                },
                {
                    icon: CheckCircle2,
                    title: '任务验证',
                    description: '利用空投平台 API, 确保任务真实完成且在整个活动期间保持有效',
                },
                {
                    icon: Users,
                    title: '人工审核',
                    description: '对于内容创作类等高积分任务, 由团队进行人工审核, 确保内容质量',
                },
            ],
        },
    ];

    return (
        <section id="participate" className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">如何参与空投 (分步指南) </h2>
                </div>

                <div className="space-y-12">
                    {participationSteps.map((step, index) => (
                        <div key={index}>
                            <div className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-10">
                                <div className="mb-3 inline-flex items-center rounded border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-300">
                                    {step.step}
                                </div>
                                <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">{step.title}</h3>
                                <p className="mb-6 text-base text-slate-300 md:text-lg">{step.description}</p>

                                {/* 任务列表 */}
                                {step.tasks && (
                                    <div className="grid gap-4 md:grid-cols-3 md:gap-6">
                                        {step.tasks.map((task, taskIndex) => (
                                            <div key={taskIndex} className="rounded-l border-l-4 border-emerald-500 bg-white/5 p-4 md:p-6">
                                                <div className="mb-2 font-semibold text-white">{task.category}</div>
                                                <div className="mb-3 text-sm text-emerald-300">{task.points}</div>
                                                <ul className="space-y-2">
                                                    {task.items.map((item, itemIndex) => (
                                                        <li key={itemIndex} className="flex items-start text-sm">
                                                            <CheckCircle2 className="mt-0.5 mr-2 h-4 w-4 shrink-0 text-emerald-400" />
                                                            <span className="text-slate-300">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* 详细信息 */}
                                {step.details && (
                                    <div className="grid gap-4 md:grid-cols-3 md:gap-6">
                                        {step.details.map((detail, detailIndex) => (
                                            <div key={detailIndex} className="rounded border border-white/10 bg-white/5 p-4 text-center md:p-6">
                                                <div className="mb-2 text-sm text-slate-400">{detail.label}</div>
                                                <div className="text-lg font-bold text-white md:text-xl">{detail.value}</div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* 释放时间表 */}
                                {step.releaseSchedule && (
                                    <div className="space-y-3">
                                        {step.releaseSchedule.map((schedule, scheduleIndex) => (
                                            <div
                                                key={scheduleIndex}
                                                className="flex items-center rounded-l border-l-4 border-teal-500 bg-white/5 p-4"
                                            >
                                                <Lock className="mr-4 h-6 w-6 shrink-0 text-teal-400" />
                                                <div className="flex-1">
                                                    <div className="font-semibold text-white">{schedule.period}</div>
                                                    <div className="text-sm text-slate-300">{schedule.release}</div>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="rounded border border-emerald-500/30 bg-emerald-500/10 p-4">
                                            <p className="text-sm text-slate-300">
                                                <strong className="text-emerald-300">示例: </strong> 用户A获得6000枚空投代币 → 上线交易所 后第1个月:
                                                0枚释放 → 从第2个月开始, 连续6个月, 每月释放1000枚代币
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* 安全措施 */}
                                {step.measures && (
                                    <div className="grid gap-4 md:grid-cols-3 md:gap-6">
                                        {step.measures.map((measure, measureIndex) => (
                                            <div key={measureIndex} className="rounded border border-white/10 bg-white/5 p-4 md:p-6">
                                                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded bg-white/10">
                                                    <measure.icon className="h-6 w-6 text-red-400" />
                                                </div>
                                                <h4 className="mb-2 font-semibold text-white">{measure.title}</h4>
                                                <p className="text-sm text-slate-300">{measure.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
