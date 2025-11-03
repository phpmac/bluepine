import { useLaravelReactI18n } from 'laravel-react-i18n';
import { MapPin } from 'lucide-react';

export function GlobalOffices() {
    const { t } = useLaravelReactI18n();

    const offices = [
        {
            cityKey: 'contact.offices.office1.city',
            addressKey: 'contact.offices.office1.address',
            focusKey: 'contact.offices.office1.focus',
        },
        {
            cityKey: 'contact.offices.office2.city',
            addressKey: 'contact.offices.office2.address',
            focusKey: 'contact.offices.office2.focus',
        },
    ];

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">{t('contact.offices.title')}</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {offices.map((office, index) => (
                        <div key={index} className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600">
                                <MapPin className="h-5 w-5 text-white" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-white">{t(office.cityKey)}</h3>
                            <p className="mb-4 text-sm text-slate-300">{t(office.addressKey)}</p>
                            <div className="border-t border-white/10 pt-3">
                                <p className="text-xs font-semibold text-emerald-300">{t('contact.offices.focus')}</p>
                                <p className="mt-1 text-sm text-slate-300">{t(office.focusKey)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
