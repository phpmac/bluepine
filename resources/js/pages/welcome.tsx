import { Features } from '@/components/features';
import { FlagshipProject } from '@/components/flagship-project';
import { Hero } from '@/components/hero';
import { InvestmentLogic } from '@/components/investment-logic';
import { Roadmap } from '@/components/roadmap';
import { MainLayout } from '@/layouts';

export default function Welcome() {
    return (
        <MainLayout currentPage="home">
            <Hero />
            <Features />
            <FlagshipProject />
            <Roadmap />
            <InvestmentLogic />
        </MainLayout>
    );
}
