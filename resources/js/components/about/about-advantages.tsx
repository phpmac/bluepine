import { useLaravelReactI18n } from 'laravel-react-i18n';
import { BookOpen, Network, Sprout, Users } from 'lucide-react';

export function AboutAdvantages() {
    const { t } = useLaravelReactI18n();

    const advantages = [
        {
            icon: Sprout,
            titleKey: 'about.advantages.advantage1.title',
            descriptionKey: 'about.advantages.advantage1.description',
        },
        {
            icon: BookOpen,
            titleKey: 'about.advantages.advantage2.title',
            descriptionKey: 'about.advantages.advantage2.description',
        },
        {
            icon: Network,
            titleKey: 'about.advantages.advantage3.title',
            descriptionKey: 'about.advantages.advantage3.description',
        },
        {
            icon: Users,
            titleKey: 'about.advantages.advantage4.title',
            descriptionKey: 'about.advantages.advantage4.description',
        },
    ];

    return (
        <div className="mb-32">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-white">{t('about.advantages.title')}</h2>
            <div className="grid gap-6 md:grid-cols-2">
                {advantages.map((advantage, index) => (
                    <div
                        key={index}
                        className="group rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-emerald-500/50 hover:bg-emerald-500/5 md:p-6"
                    >
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 transition-transform group-hover:scale-110">
                            <advantage.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-white">{t(advantage.titleKey)}</h3>
                        <p className="text-sm leading-relaxed text-slate-300">{t(advantage.descriptionKey)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
