import { ContactChannels, ContactCTA, ContactForm, ContactHero, GlobalOffices, KeepInTouch, StatusReminders } from '@/components/contact';
import { MainLayout } from '@/layouts';
import { Head } from '@inertiajs/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';

export default function Contact() {
    const { t } = useLaravelReactI18n();

    return (
        <>
            <Head title={t('page.title.contact')} />
            <MainLayout currentPage="contact">
                <ContactHero />
                <ContactChannels />
                <ContactForm />
                <GlobalOffices />
                <StatusReminders />
                <KeepInTouch />
                <ContactCTA />
            </MainLayout>
        </>
    );
}
