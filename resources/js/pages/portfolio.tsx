import { FlagshipAESC, PortfolioCTA, PortfolioHero, PortfolioOverview } from '@/components/portfolio';
import { MainLayout } from '@/layouts';
import { Head } from '@inertiajs/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';

export default function Portfolio() {
    const { t } = useLaravelReactI18n();

    return (
        <>
            <Head title={t('page.title.portfolio')} />
            <MainLayout currentPage="portfolio">
                <PortfolioHero />
                <FlagshipAESC />
                <PortfolioOverview />
                <PortfolioCTA />
            </MainLayout>
        </>
    );
}
