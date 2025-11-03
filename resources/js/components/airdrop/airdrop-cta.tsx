import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Gift, Layers } from 'lucide-react';

/**
 * Airdrop CTA 组件
 *
 * 最终行动号召
 */
export function AirdropCta() {
    const { t } = useLaravelReactI18n();

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="rounded-lg border-2 border-white/10 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 p-10 text-center backdrop-blur-sm md:p-16">
                    <div className="mb-6 flex justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-emerald-500/20 md:h-20 md:w-20">
                            <Layers className="h-8 w-8 text-emerald-300 md:h-10 md:w-10" />
                        </div>
                    </div>
                    <h2 className="mb-4 text-2xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">{t('airdrop.cta.title')}</h2>
                    <p className="mx-auto mb-8 max-w-3xl text-lg text-slate-300 md:text-xl">{t('airdrop.cta.description')}</p>
                    <a
                        href="#participate"
                        className="inline-flex cursor-pointer items-center rounded bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-4 text-base font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700 md:px-10 md:py-5 md:text-lg"
                    >
                        <Gift className="mr-2 h-5 w-5 md:h-6 md:w-6" />
                        {t('airdrop.cta.button')}
                    </a>
                </div>
            </div>
        </section>
    );
}
