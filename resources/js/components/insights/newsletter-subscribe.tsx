import { useLaravelReactI18n } from 'laravel-react-i18n';
import { CheckCircle2, Mail } from 'lucide-react';
import { useState } from 'react';

import request from '@/lib/request';

export function NewsletterSubscribe() {
    const { t } = useLaravelReactI18n();
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();

        setIsLoading(true);

        try {
            await request.post(`/subscribe`, { email });
            setEmail('');
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
        } catch {
            // 错误由请求拦截器统一处理
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="rounded-lg border-2 border-white/10 bg-linear-to-br from-emerald-500/10 to-teal-600/10 p-8 backdrop-blur-sm md:p-12">
                    <div className="mb-6 text-center">
                        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-linear-to-br from-emerald-500 to-teal-600">
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
                                disabled={isLoading}
                                className="cursor-pointer bg-linear-to-r from-emerald-500 to-teal-600 px-6 py-3 font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {isLoading ? t('insights.newsletter.subscribing') : t('insights.newsletter.button')}
                            </button>
                        </div>
                        {showSuccess && (
                            <div className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-emerald-500/20 px-4 py-3 text-emerald-400">
                                <CheckCircle2 className="h-5 w-5" />
                                <span className="text-sm font-medium">{t('insights.newsletter.success')}</span>
                            </div>
                        )}
                        <p className="mt-3 text-center text-sm text-slate-400">{t('insights.newsletter.privacy')}</p>
                    </form>
                </div>
            </div>
        </section>
    );
}
