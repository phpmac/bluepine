import { useLaravelReactI18n } from 'laravel-react-i18n';
import { CheckCircle2, Lock, ShieldAlert, Users } from 'lucide-react';

/**
 * Airdrop 参与步骤组件
 *
 * 展示如何参与空投的详细步骤
 */
export function AirdropSteps() {
    const { t } = useLaravelReactI18n();

    const participationSteps = [
        {
            stepKey: 'airdrop.steps.step1.step',
            titleKey: 'airdrop.steps.step1.title',
            descriptionKey: 'airdrop.steps.step1.description',
            tasks: [
                {
                    categoryKey: 'airdrop.steps.step1.task1.category',
                    pointsKey: 'airdrop.steps.step1.task1.points',
                    itemKeys: [
                        'airdrop.steps.step1.task1.item1',
                        'airdrop.steps.step1.task1.item2',
                        'airdrop.steps.step1.task1.item3',
                        'airdrop.steps.step1.task1.item4',
                    ],
                },
                {
                    categoryKey: 'airdrop.steps.step1.task2.category',
                    pointsKey: 'airdrop.steps.step1.task2.points',
                    itemKeys: ['airdrop.steps.step1.task2.item1', 'airdrop.steps.step1.task2.item2'],
                },
                {
                    categoryKey: 'airdrop.steps.step1.task3.category',
                    pointsKey: 'airdrop.steps.step1.task3.points',
                    itemKeys: ['airdrop.steps.step1.task3.item1', 'airdrop.steps.step1.task3.item2'],
                },
            ],
        },
        {
            stepKey: 'airdrop.steps.step2.step',
            titleKey: 'airdrop.steps.step2.title',
            descriptionKey: 'airdrop.steps.step2.description',
            details: [
                {
                    labelKey: 'airdrop.steps.step2.detail1.label',
                    valueKey: 'airdrop.steps.step2.detail1.value',
                },
                {
                    labelKey: 'airdrop.steps.step2.detail2.label',
                    valueKey: 'airdrop.steps.step2.detail2.value',
                },
                {
                    labelKey: 'airdrop.steps.step2.detail3.label',
                    valueKey: 'airdrop.steps.step2.detail3.value',
                },
            ],
        },
        {
            stepKey: 'airdrop.steps.step3.step',
            titleKey: 'airdrop.steps.step3.title',
            descriptionKey: 'airdrop.steps.step3.description',
            releaseSchedule: [
                {
                    periodKey: 'airdrop.steps.step3.schedule1.period',
                    releaseKey: 'airdrop.steps.step3.schedule1.release',
                },
                {
                    periodKey: 'airdrop.steps.step3.schedule2.period',
                    releaseKey: 'airdrop.steps.step3.schedule2.release',
                },
            ],
        },
        {
            stepKey: 'airdrop.steps.step4.step',
            titleKey: 'airdrop.steps.step4.title',
            descriptionKey: 'airdrop.steps.step4.description',
            measures: [
                {
                    icon: ShieldAlert,
                    titleKey: 'airdrop.steps.step4.measure1.title',
                    descriptionKey: 'airdrop.steps.step4.measure1.description',
                },
                {
                    icon: CheckCircle2,
                    titleKey: 'airdrop.steps.step4.measure2.title',
                    descriptionKey: 'airdrop.steps.step4.measure2.description',
                },
                {
                    icon: Users,
                    titleKey: 'airdrop.steps.step4.measure3.title',
                    descriptionKey: 'airdrop.steps.step4.measure3.description',
                },
            ],
        },
    ];

    return (
        <section id="participate" className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">{t('airdrop.steps.title')}</h2>
                </div>

                <div className="space-y-12">
                    {participationSteps.map((step, index) => (
                        <div key={index}>
                            <div className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-10">
                                <div className="mb-3 inline-flex items-center rounded border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-300">
                                    {t(step.stepKey)}
                                </div>
                                <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">{t(step.titleKey)}</h3>
                                <p className="mb-6 text-base text-slate-300 md:text-lg">{t(step.descriptionKey)}</p>

                                {/* 任务列表 */}
                                {step.tasks && (
                                    <div className="grid gap-4 md:grid-cols-3 md:gap-6">
                                        {step.tasks.map((task, taskIndex) => (
                                            <div key={taskIndex} className="rounded-l border-l-4 border-emerald-500 bg-white/5 p-4 md:p-6">
                                                <div className="mb-2 font-semibold text-white">{t(task.categoryKey)}</div>
                                                <div className="mb-3 text-sm text-emerald-300">{t(task.pointsKey)}</div>
                                                <ul className="space-y-2">
                                                    {task.itemKeys.map((itemKey, itemIndex) => (
                                                        <li key={itemIndex} className="flex items-start text-sm">
                                                            <CheckCircle2 className="mt-0.5 mr-2 h-4 w-4 shrink-0 text-emerald-400" />
                                                            <span className="text-slate-300">{t(itemKey)}</span>
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
                                                <div className="mb-2 text-sm text-slate-400">{t(detail.labelKey)}</div>
                                                <div className="text-lg font-bold text-white md:text-xl">{t(detail.valueKey)}</div>
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
                                                    <div className="font-semibold text-white">{t(schedule.periodKey)}</div>
                                                    <div className="text-sm text-slate-300">{t(schedule.releaseKey)}</div>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="rounded border border-emerald-500/30 bg-emerald-500/10 p-4">
                                            <p className="text-sm text-slate-300">{t('airdrop.steps.step3.example')}</p>
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
                                                <h4 className="mb-2 font-semibold text-white">{t(measure.titleKey)}</h4>
                                                <p className="text-sm text-slate-300">{t(measure.descriptionKey)}</p>
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
