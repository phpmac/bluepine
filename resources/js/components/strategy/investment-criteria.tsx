import { useLaravelReactI18n } from 'laravel-react-i18n';
import { CheckCircle2 } from 'lucide-react';

export function InvestmentCriteria() {
    const { t } = useLaravelReactI18n();

    const investmentCriteria = [
        {
            titleKey: 'strategy.criteria.criterion1.title',
            descriptionKey: 'strategy.criteria.criterion1.description',
        },
        {
            titleKey: 'strategy.criteria.criterion2.title',
            descriptionKey: 'strategy.criteria.criterion2.description',
        },
        {
            titleKey: 'strategy.criteria.criterion3.title',
            descriptionKey: 'strategy.criteria.criterion3.description',
        },
        {
            titleKey: 'strategy.criteria.criterion4.title',
            descriptionKey: 'strategy.criteria.criterion4.description',
        },
        {
            titleKey: 'strategy.criteria.criterion5.title',
            descriptionKey: 'strategy.criteria.criterion5.description',
        },
    ];

    return (
        <div className="mb-32">
            <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">{t('strategy.criteria.title')}</h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
                {/* 左侧 - 投资阶段 */}
                <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-md md:p-6">
                    <h3 className="mb-4 text-xl font-bold text-white">{t('strategy.criteria.stages.title')}</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="mb-1 text-lg font-semibold text-emerald-200">{t('strategy.criteria.stages.stage1.title')}</h4>
                            <p className="mb-2 text-sm leading-relaxed text-slate-300">{t('strategy.criteria.stages.stage1.description')}</p>
                        </div>
                        <div>
                            <h4 className="mb-1 text-lg font-semibold text-emerald-200">{t('strategy.criteria.stages.stage2.title')}</h4>
                            <p className="mb-2 text-sm leading-relaxed text-slate-300">{t('strategy.criteria.stages.stage2.description')}</p>
                        </div>
                        <div className="border-t border-white/10 pt-4">
                            <h4 className="mb-1 text-lg font-semibold text-white">{t('strategy.criteria.stages.amount.title')}</h4>
                            <p className="text-xl font-bold text-emerald-300">{t('strategy.criteria.stages.amount.value')}</p>
                            <p className="mt-1 text-xs text-slate-400">{t('strategy.criteria.stages.amount.note')}</p>
                        </div>
                    </div>
                </div>

                {/* 右侧 - 投资标准 */}
                <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-md md:p-6">
                    <h3 className="mb-4 text-xl font-bold text-white">{t('strategy.criteria.looking.title')}</h3>
                    <ul className="space-y-3">
                        {investmentCriteria.map((criterion, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle2 className="mt-1 mr-2 h-4 w-4 shrink-0 text-emerald-400" />
                                <div>
                                    <h4 className="mb-0.5 text-sm font-semibold text-white">{t(criterion.titleKey)}</h4>
                                    <p className="text-xs leading-relaxed text-slate-300">{t(criterion.descriptionKey)}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
