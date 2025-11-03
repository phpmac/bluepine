import { InvestmentCriteria, InvestmentPillars, InvestmentProcess, PostInvestment, StrategyCTA, StrategyHero } from '@/components/strategy';
import { MainLayout } from '@/layouts';
import { Head } from '@inertiajs/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';

export default function Strategy() {
    const { t } = useLaravelReactI18n();

    return (
        <>
            <Head title={t('page.title.strategy')} />
            <MainLayout currentPage="strategy">
                <StrategyHero />
                <section className="px-4 py-32 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <InvestmentPillars />
                        <InvestmentCriteria />
                        <PostInvestment />
                        <InvestmentProcess />
                        <StrategyCTA />
                    </div>
                </section>
            </MainLayout>
        </>
    );
}
