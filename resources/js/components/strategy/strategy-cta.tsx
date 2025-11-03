import { useLaravelReactI18n } from 'laravel-react-i18n';

export function StrategyCTA() {
    const { t } = useLaravelReactI18n();

    return (
        <div className="mx-auto max-w-5xl">
            <div className="rounded-lg border-2 border-white/10 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 p-4 text-center text-white backdrop-blur-sm md:p-10">
                <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">{t('strategy.cta.title')}</h2>
                <p className="mx-auto mb-6 max-w-2xl text-lg text-slate-300">{t('strategy.cta.description')}</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="/apply"
                        className="cursor-pointer bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-4 font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700"
                    >
                        {t('strategy.cta.button')}
                    </a>
                </div>
            </div>
        </div>
    );
}
