import { Features } from '@/components/features';
import { FlagshipProject } from '@/components/flagship-project';
import { Hero } from '@/components/hero';
import { InvestmentLogic } from '@/components/investment-logic';
import { Roadmap } from '@/components/roadmap';
import { MainLayout } from '@/layouts';
import { Head } from '@inertiajs/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';

export default function Welcome() {
    const { t } = useLaravelReactI18n();

    return (
        <MainLayout currentPage="home">
            <Head title={t('page.title.home')} />
            <Hero />
            <Features />
            <FlagshipProject />
            <Roadmap />
            <InvestmentLogic />
        </MainLayout>
    );
}
