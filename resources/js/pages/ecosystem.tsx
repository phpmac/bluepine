import { ContactForm, CooperationForms, CooperationProcess, EcosystemHero, PartnerNetwork } from '@/components/ecosystem';
import { MainLayout } from '@/layouts';
import { Head } from '@inertiajs/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';

export default function Ecosystem() {
    const { t } = useLaravelReactI18n();

    return (
        <>
            <Head title={t('page.title.ecosystem')} />
            <MainLayout currentPage="ecosystem">
                <EcosystemHero />
                <PartnerNetwork />
                <CooperationForms />
                <section className="px-4 py-32 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-12 text-center">
                            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">{t('ecosystem.journey.title')}</h2>
                            <p className="mx-auto max-w-3xl text-base text-slate-300">{t('ecosystem.journey.description')}</p>
                        </div>
                        <CooperationProcess />
                        <ContactForm />
                    </div>
                </section>
            </MainLayout>
        </>
    );
}
