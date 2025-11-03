import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Award, Sparkles, Trophy } from 'lucide-react';

/**
 * Airdrop 价值主张组件
 *
 * 展示为什么值得参与空投
 */
export function AirdropValueProps() {
    const { t } = useLaravelReactI18n();

    const valueProps = [
        {
            icon: Sparkles,
            titleKey: 'airdrop.valueProps.prop1.title',
            descriptionKey: 'airdrop.valueProps.prop1.description',
        },
        {
            icon: Trophy,
            titleKey: 'airdrop.valueProps.prop2.title',
            descriptionKey: 'airdrop.valueProps.prop2.description',
        },
        {
            icon: Award,
            titleKey: 'airdrop.valueProps.prop3.title',
            descriptionKey: 'airdrop.valueProps.prop3.description',
        },
    ];

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">{t('airdrop.valueProps.title')}</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {valueProps.map((prop, index) => (
                        <div
                            key={index}
                            className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-emerald-500/50 md:p-8"
                        >
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded bg-white/10">
                                <prop.icon className="h-7 w-7 text-emerald-300" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-white">{t(prop.titleKey)}</h3>
                            <p className="text-sm text-slate-300">{t(prop.descriptionKey)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
