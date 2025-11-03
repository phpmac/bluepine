import { useLaravelReactI18n } from 'laravel-react-i18n';
import { AlertCircle, CheckCircle2, Globe } from 'lucide-react';

export function StatusReminders() {
    const { t } = useLaravelReactI18n();

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="rounded-lg border-l-4 border-emerald-500 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                    <div className="space-y-5">
                        <div className="flex items-start">
                            <CheckCircle2 className="mt-1 mr-3 h-5 w-5 shrink-0 text-green-400" />
                            <div>
                                <h4 className="mb-2 text-sm font-semibold text-white">{t('contact.status.response.title')}</h4>
                                <p className="text-sm text-slate-300">{t('contact.status.response.description')}</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Globe className="mt-1 mr-3 h-5 w-5 shrink-0 text-emerald-400" />
                            <div>
                                <h4 className="mb-2 text-sm font-semibold text-white">{t('contact.status.global.title')}</h4>
                                <p className="text-sm text-slate-300">{t('contact.status.global.description')}</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <AlertCircle className="mt-1 mr-3 h-5 w-5 shrink-0 text-orange-400" />
                            <div>
                                <h4 className="mb-2 text-sm font-semibold text-white">{t('contact.status.security.title')}</h4>
                                <p className="text-sm text-slate-300">{t('contact.status.security.description')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
