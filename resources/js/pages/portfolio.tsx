import { FlagshipAESC, PortfolioCTA, PortfolioHero, PortfolioOverview } from '@/components/portfolio';
import { MainLayout } from '@/layouts';
import { Head } from '@inertiajs/react';

export default function Portfolio() {
    return (
        <>
            <Head title="投资组合" />
            <MainLayout currentPage="portfolio">
                <PortfolioHero />
                <FlagshipAESC />
                <PortfolioOverview />
                <PortfolioCTA />
            </MainLayout>
        </>
    );
}
