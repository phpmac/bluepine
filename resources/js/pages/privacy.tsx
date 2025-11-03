import { PrivacyAdditional, PrivacyContact, PrivacyHero, PrivacySections } from '@/components/privacy';
import { MainLayout } from '@/layouts';
import { Head } from '@inertiajs/react';

export default function Privacy() {
    return (
        <>
            <Head title="隐私政策 - BLUEPINE TECH FOUNDATION" />
            <MainLayout currentPage="">
                <PrivacyHero />
                <PrivacySections />
                <PrivacyAdditional />
                <PrivacyContact />
            </MainLayout>
        </>
    );
}
