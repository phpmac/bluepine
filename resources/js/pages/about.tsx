import { AboutAdvantages, AboutCTA, AboutHero, AboutStory, AboutVision } from '@/components/about';
import { MainLayout } from '@/layouts';
import { Head } from '@inertiajs/react';

export default function About() {
    return (
        <>
            <Head title="关于我们" />
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
