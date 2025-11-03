import { InvestmentCriteria, InvestmentPillars, InvestmentProcess, PostInvestment, StrategyCTA, StrategyHero } from '@/components/strategy';
import { MainLayout } from '@/layouts';
import { Head } from '@inertiajs/react';

export default function Strategy() {
    return (
        <>
            <Head title="投资策略" />
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
