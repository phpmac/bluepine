import { useLaravelReactI18n } from 'laravel-react-i18n';

export function AboutStory() {
    const { t } = useLaravelReactI18n();

    return (
        <div className="mx-auto mb-32 max-w-5xl">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-white">{t('about.story.title')}</h2>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm md:p-8">
                <div className="space-y-4 text-base leading-relaxed text-slate-300">
                    <p>{t('about.story.paragraph1')}</p>
                    <p>{t('about.story.paragraph2')}</p>
                    <p className="font-medium text-white">{t('about.story.paragraph3')}</p>
                </div>
            </div>
        </div>
    );
}
