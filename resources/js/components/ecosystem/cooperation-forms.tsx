import { useLaravelReactI18n } from 'laravel-react-i18n';
import { ArrowRight, Code, MapPin, TrendingUp } from 'lucide-react';

export function CooperationForms() {
    const { t } = useLaravelReactI18n();

    const cooperationForms = [
        {
            icon: Code,
            titleKey: 'ecosystem.forms.form1.title',
            targetKey: 'ecosystem.forms.form1.target',
            content: ['ecosystem.forms.form1.content1', 'ecosystem.forms.form1.content2', 'ecosystem.forms.form1.content3'],
        },
        {
            icon: MapPin,
            titleKey: 'ecosystem.forms.form2.title',
            targetKey: 'ecosystem.forms.form2.target',
            content: ['ecosystem.forms.form2.content1', 'ecosystem.forms.form2.content2', 'ecosystem.forms.form2.content3'],
        },
        {
            icon: TrendingUp,
            titleKey: 'ecosystem.forms.form3.title',
            targetKey: 'ecosystem.forms.form3.target',
            content: ['ecosystem.forms.form3.content1', 'ecosystem.forms.form3.content2', 'ecosystem.forms.form3.content3'],
        },
    ];

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">{t('ecosystem.forms.title')}</h2>
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
                            <h3 className="mb-3 text-xl font-bold text-white">{t(form.titleKey)}</h3>
                            <div className="mb-4 rounded border-l-4 border-emerald-500/50 bg-white/5 p-3">
                                <p className="text-xs font-medium text-slate-400">{t('ecosystem.forms.targetLabel')}</p>
                                <p className="mt-1 text-sm text-slate-300">{t(form.targetKey)}</p>
                            </div>
                            <ul className="space-y-2">
                                {form.content.map((contentKey, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-slate-300">
                                        <ArrowRight className="mt-0.5 mr-2 h-4 w-4 shrink-0 text-emerald-400" />
                                        <span>{t(contentKey)}</span>
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
