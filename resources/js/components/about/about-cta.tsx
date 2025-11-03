import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Link as LinkIcon } from 'lucide-react';

export function AboutCTA() {
    const { t } = useLaravelReactI18n();

    return (
        <div className="mx-auto max-w-5xl">
            <div className="rounded-lg border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 p-4 text-center text-white backdrop-blur-sm md:p-10">
                <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">{t('about.cta.title')}</h2>
                <p className="mx-auto mb-6 max-w-2xl text-lg text-slate-300">{t('about.cta.description')}</p>
                <a
                    href="/contact"
                    className="inline-flex cursor-pointer items-center bg-gradient-to-r from-emerald-500 to-teal-600 px-10 py-4 text-lg font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700"
                >
                    <LinkIcon className="mr-2 h-5 w-5" />
                    {t('about.cta.button')}
                </a>
            </div>
        </div>
    );
}
