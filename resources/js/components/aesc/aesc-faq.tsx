import { useLaravelReactI18n } from 'laravel-react-i18n';
import { ChevronDown, Lock } from 'lucide-react';
import { useState } from 'react';

import { icoLink } from '@/config/links';

/**
 * AESC 常见问题组件
 *
 * 展示常见问题和答案
 */
export function AescFaq() {
    const { t } = useLaravelReactI18n();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqs = [
        {
            questionKey: 'aesc.faq.q1',
            answerKey: 'aesc.faq.a1',
        },
        {
            questionKey: 'aesc.faq.q2',
            answerKey: 'aesc.faq.a2',
        },
        {
            questionKey: 'aesc.faq.q3',
            answerKey: 'aesc.faq.a3',
        },
        {
            questionKey: 'aesc.faq.q4',
            answerKey: 'aesc.faq.a4',
        },
        {
            questionKey: 'aesc.faq.q5',
            answerKey: 'aesc.faq.a5',
        },
    ];

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">{t('aesc.faq.title')}</h2>
                    <p className="mx-auto max-w-2xl text-base text-slate-300">{t('aesc.faq.subtitle')}</p>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="rounded-lg border-2 border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-emerald-500/30"
                        >
                            <button
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                className="flex w-full items-center justify-between p-5 text-left transition-colors"
                            >
                                <span className="text-base font-semibold text-white">{t(faq.questionKey)}</span>
                                <ChevronDown
                                    className={`h-5 w-5 shrink-0 text-emerald-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                                />
                            </button>
                            {openFaq === index && (
                                <div className="border-t border-white/10 px-5 pt-3 pb-5">
                                    <p className="text-sm leading-relaxed text-slate-300">{t(faq.answerKey)}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA 部分 */}
                <div className="mt-20 rounded-lg border-2 border-white/10 bg-linear-to-br from-emerald-500/20 to-teal-600/20 p-12 text-center backdrop-blur-sm md:p-16">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">{t('aesc.faq.cta.title')}</h2>
                    <p className="mx-auto mb-8 max-w-3xl text-xl text-slate-300">{t('aesc.faq.cta.description')}</p>
                    <a
                        href={icoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex cursor-pointer items-center rounded bg-linear-to-r from-emerald-500 to-teal-600 px-10 py-5 text-lg font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700"
                    >
                        <Lock className="mr-2 h-6 w-6" />
                        {t('aesc.faq.cta.button')}
                    </a>
                </div>
            </div>
        </section>
    );
}
