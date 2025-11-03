import { useLaravelReactI18n } from 'laravel-react-i18n';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

/**
 * Airdrop FAQ 组件
 *
 * 展示常见问题和答案
 */
export function AirdropFaq() {
    const { t } = useLaravelReactI18n();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqs = [
        {
            questionKey: 'airdrop.faq.q1',
            answerKey: 'airdrop.faq.a1',
        },
        {
            questionKey: 'airdrop.faq.q2',
            answerKey: 'airdrop.faq.a2',
        },
        {
            questionKey: 'airdrop.faq.q3',
            answerKey: 'airdrop.faq.a3',
        },
        {
            questionKey: 'airdrop.faq.q4',
            answerKey: 'airdrop.faq.a4',
        },
        {
            questionKey: 'airdrop.faq.q5',
            answerKey: 'airdrop.faq.a5',
        },
    ];

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">{t('airdrop.faq.title')}</h2>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="rounded-lg border-2 border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-emerald-500/30"
                        >
                            <button
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-white/5 md:p-6"
                            >
                                <span className="text-base font-semibold text-white md:text-lg">{t(faq.questionKey)}</span>
                                <ChevronDown
                                    className={`h-5 w-5 shrink-0 text-emerald-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                                />
                            </button>
                            {openFaq === index && (
                                <div className="border-t border-white/10 px-5 pt-3 pb-5 md:px-6 md:pb-6">
                                    <p className="text-sm leading-relaxed text-slate-300 md:text-base">{t(faq.answerKey)}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
