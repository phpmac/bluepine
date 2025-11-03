import { useLaravelReactI18n } from 'laravel-react-i18n';
import { ArrowRight } from 'lucide-react';

export function PortfolioCTA() {
    const { t } = useLaravelReactI18n();

    return (
        <section className="px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
                <div className="rounded-lg border-2 border-white/10 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 p-6 text-center backdrop-blur-sm md:p-8">
                    <h2 className="mb-3 text-2xl font-bold tracking-tight text-white md:text-3xl">{t('portfolio.cta.title')}</h2>
                    <p className="mx-auto mb-5 max-w-2xl text-base text-slate-300">{t('portfolio.cta.description')}</p>
                    <a
                        href="/apply"
                        className="group inline-flex cursor-pointer items-center bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700"
                    >
                        {t('portfolio.cta.button')}
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </section>
    );
}
