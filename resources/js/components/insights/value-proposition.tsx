import { useLaravelReactI18n } from 'laravel-react-i18n';

export function ValueProposition() {
    const { t } = useLaravelReactI18n();

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">{t('insights.valueProposition.title')}</h2>
                </div>
                <div className="mx-auto max-w-5xl rounded-lg border-l-4 border-emerald-500 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                    <p className="text-lg leading-relaxed text-slate-300">"{t('insights.valueProposition.quote')}"</p>
                </div>
            </div>
        </section>
    );
}
