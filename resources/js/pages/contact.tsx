import { ContactChannels, ContactCTA, ContactForm, ContactHero, GlobalOffices, KeepInTouch, StatusReminders } from '@/components/contact';
import { MainLayout } from '@/layouts';
import { Head } from '@inertiajs/react';

export default function Contact() {
    return (
        <>
            <Head title="联系我们 - BLUEPINE TECH FOUNDATION" />
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
