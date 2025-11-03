import { ChevronDown, Lock } from 'lucide-react';
import { useState } from 'react';

/**
 * AESC 常见问题组件
 *
 * 展示常见问题和答案
 */
export function AescFaq() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqs = [
        {
            question: '如何参与AESC私募?',
            answer: '请确保您拥有兼容的BSC钱包, 访问我们的官方私募平台, 并按照指引完成支付.',
        },
        {
            question: '代币的解锁机制是怎样的?',
            answer: '请参考白皮书第8.2章节, 不同分配部分有详细的解锁时间表.',
        },
        {
            question: '我可以使用哪些货币购买AESC?',
            answer: '我们接受USDT (BEP-20), 具体请以私募平台公告为准.',
        },
        {
            question: 'AESC代币有什么价值支撑?',
            answer: 'AESC代币价值来源于生态内的真实使用需求, 包括数据服务支付, 质押收益分享, 治理权益等.',
        },
        {
            question: '如何确保项目的安全性?',
            answer: 'AESC智能合约已通过CertiK全面审计, 团队身份公开透明, 项目进展定期公示.',
        },
    ];

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">常见问题</h2>
                    <p className="mx-auto max-w-2xl text-base text-slate-300">您可能想了解的问题</p>
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
                                <span className="text-base font-semibold text-white">{faq.question}</span>
                                <ChevronDown
                                    className={`h-5 w-5 shrink-0 text-emerald-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                                />
                            </button>
                            {openFaq === index && (
                                <div className="border-t border-white/10 px-5 pt-3 pb-5">
                                    <p className="text-sm leading-relaxed text-slate-300">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA 部分 */}
                <div className="mt-20 rounded-lg border-2 border-white/10 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 p-12 text-center backdrop-blur-sm md:p-16">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">成为农业数字革命的奠基者</h2>
                    <p className="mx-auto mb-8 max-w-3xl text-xl text-slate-300">
                        现在加入, 您不仅是投资一个代币, 更是投资一个更具效率, 公平和可持续性的农业未来
                    </p>
                    <a
                        href="https://fd.bluepinefoundation.com/"
                        className="inline-flex cursor-pointer items-center rounded bg-gradient-to-r from-emerald-500 to-teal-600 px-10 py-5 text-lg font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700"
                    >
                        <Lock className="mr-2 h-6 w-6" />
                        立即参与 AESC 私募, 共创未来
                    </a>
                </div>
            </div>
        </section>
    );
}
