import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

/**
 * Airdrop FAQ 组件
 *
 * 展示常见问题和答案
 */
export function AirdropFaq() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqs = [
        {
            question: '参与空投需要支付费用吗?',
            answer: '绝对不需要!请警惕任何要求您支付手续费或发送加密货币的诈骗信息.空投是完全免费的',
        },
        {
            question: '为什么代币要线性释放6个月?',
            answer: '这是为了奖励长期的社区支持者,防止短期套利行为,确保生态的健康发展',
        },
        {
            question: '一个用户可以创建多个账户来参与吗?',
            answer: '不可以.我们通过钱包地址,推特和Telegram ID进行女巫攻击筛查,任何作弊行为将导致所有相关账户失去资格',
        },
        {
            question: '如何查看我的积分和排名?',
            answer: '在空投平台(Galxe/QuestN)上连接钱包后,您可以实时查看自己的积分和排名',
        },
        {
            question: '空投代币可以转让或交易吗?',
            answer: '代币在释放期内会逐步解锁到您的钱包,解锁后即可自由转让和交易',
        },
    ];

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">常见问题</h2>
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
                                <span className="text-base font-semibold text-white md:text-lg">{faq.question}</span>
                                <ChevronDown
                                    className={`h-5 w-5 shrink-0 text-emerald-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                                />
                            </button>
                            {openFaq === index && (
                                <div className="border-t border-white/10 px-5 pt-3 pb-5 md:px-6 md:pb-6">
                                    <p className="text-sm leading-relaxed text-slate-300 md:text-base">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
