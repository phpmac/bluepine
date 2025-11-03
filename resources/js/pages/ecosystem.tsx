import { ContactForm, CooperationForms, CooperationProcess, EcosystemHero, PartnerNetwork } from '@/components/ecosystem';
import { MainLayout } from '@/layouts';
import { Head } from '@inertiajs/react';

export default function Ecosystem() {
    return (
        <>
            <Head title="生态合作" />
            <MainLayout currentPage="ecosystem">
                <EcosystemHero />
                <PartnerNetwork />
                <CooperationForms />
                <section className="px-4 py-32 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-12 text-center">
                            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">开启我们的合作之旅</h2>
                            <p className="mx-auto max-w-3xl text-base text-slate-300">
                                无论您身处价值链的哪个环节,只要您与我们怀有共同的愿景,都欢迎与我们联系.我们的合作发展团队将为您提供专属的对接通道.
                            </p>
                        </div>
                        <CooperationProcess />
                        <ContactForm />
                    </div>
                </section>
            </MainLayout>
        </>
    );
}
