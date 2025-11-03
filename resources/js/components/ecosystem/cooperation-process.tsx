import { useLaravelReactI18n } from 'laravel-react-i18n';

export function CooperationProcess() {
    const { t } = useLaravelReactI18n();

    const cooperationProcess = [
        {
            step: '01',
            titleKey: 'ecosystem.process.step1.title',
            descriptionKey: 'ecosystem.process.step1.description',
        },
        {
            step: '02',
            titleKey: 'ecosystem.process.step2.title',
            descriptionKey: 'ecosystem.process.step2.description',
        },
        {
            step: '03',
            titleKey: 'ecosystem.process.step3.title',
            descriptionKey: 'ecosystem.process.step3.description',
        },
        {
            step: '04',
            titleKey: 'ecosystem.process.step4.title',
            descriptionKey: 'ecosystem.process.step4.description',
        },
    ];

    return (
        <div className="mb-12">
            <h3 className="mb-6 text-center text-2xl font-bold text-white">{t('ecosystem.process.title')}</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {cooperationProcess.map((process, index) => (
                    <div key={index} className="rounded-lg border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm">
                        <div className="mb-3 text-3xl font-bold text-emerald-300">{process.step}</div>
                        <h4 className="mb-2 text-base font-bold text-white">{t(process.titleKey)}</h4>
                        <p className="text-sm text-slate-300">{t(process.descriptionKey)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
