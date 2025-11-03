import { AboutAdvantages, AboutCTA, AboutHero, AboutStory, AboutVision } from '@/components/about';
import { MainLayout } from '@/layouts';
import { Head } from '@inertiajs/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';

export default function About() {
    const { t } = useLaravelReactI18n();

    return (
        <>
            <Head title={t('page.title.about')} />
            <MainLayout currentPage="about">
                <AboutHero />
                <section className="px-4 py-32 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <AboutVision />
                        <AboutStory />
                        <AboutAdvantages />
                        <AboutCTA />
                    </div>
                </section>
            </MainLayout>
        </>
    );
}
