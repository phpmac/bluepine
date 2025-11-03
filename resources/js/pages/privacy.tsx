import { PrivacyAdditional, PrivacyContact, PrivacyHero, PrivacySections } from '@/components/privacy';
import { MainLayout } from '@/layouts';
import { Head } from '@inertiajs/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';

export default function Privacy() {
    const { t } = useLaravelReactI18n();

    return (
        <>
            <Head title={t('page.title.privacy')} />
            <MainLayout currentPage="">
                <PrivacyHero />
                <PrivacySections />
                <PrivacyAdditional />
                <PrivacyContact />
            </MainLayout>
        </>
    );
}
