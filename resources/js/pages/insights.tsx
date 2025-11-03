import {
    FeaturedContent,
    InsightsCTA,
    InsightsHero,
    KnowledgeBase,
    NewsletterSubscribe,
    ResourceCenter,
    ValueProposition,
} from '@/components/insights';
import { MainLayout } from '@/layouts';
import { Head } from '@inertiajs/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';

export default function Insights() {
    const { t } = useLaravelReactI18n();

    return (
        <>
            <Head title={t('page.title.insights')} />
            <MainLayout currentPage="insights">
                <InsightsHero />
                <ValueProposition />
                <FeaturedContent />
                <KnowledgeBase />
                <ResourceCenter />
                <NewsletterSubscribe />
                <InsightsCTA />
            </MainLayout>
        </>
    );
}
