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

export default function Insights() {
    return (
        <>
            <Head title="资源洞察 - BLUEPINE TECH FOUNDATION" />
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
