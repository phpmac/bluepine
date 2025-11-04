import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Mail } from 'lucide-react';
import { useState } from 'react';

export function NewsletterSubscribe() {
    const { t } = useLaravelReactI18n();
    const [email, setEmail] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        // 这里添加订阅逻辑
    };

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="rounded-lg border-2 border-white/10 bg-gradient-to-br from-emerald-500/10 to-teal-600/10 p-8 backdrop-blur-sm md:p-12">
                    <div className="mb-6 text-center">
                        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600">
                            <Mail className="h-7 w-7 text-white" />
                        </div>
                        <h2 className="mb-3 text-2xl font-bold tracking-tight text-white md:text-3xl">{t('insights.newsletter.title')}</h2>
                        <p className="mx-auto max-w-2xl text-base text-slate-300">{t('insights.newsletter.description')}</p>
                    </div>

                    <form onSubmit={handleSubscribe} className="mx-auto max-w-2xl">
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 rounded border border-white/10 bg-white/5 px-5 py-3 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                placeholder={t('insights.newsletter.placeholder')}
                            />
                            <button
                                type="submit"
                                className="cursor-pointer bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700"
                            >
                                {t('insights.newsletter.button')}
                            </button>
                        </div>
                        <p className="mt-3 text-center text-sm text-slate-400">{t('insights.newsletter.privacy')}</p>
                    </form>
                </div>
            </div>
        </section>
    );
}
