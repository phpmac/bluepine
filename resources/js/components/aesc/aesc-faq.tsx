import { ChevronDown } from 'lucide-react';
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
            question: 'AESC 代币的总供应量是多少?',
            answer: 'AESC 代币总供应量为 16 亿枚,采用固定供应模式,不会增发.其中 40% 用于生态建设,20% 私募,15% 团队激励,10% 交易所,10% 储备,3% 合作伙伴,2% 社区空投.',
        },
        {
            question: '如何参与 AESC 的私募?',
            answer: '您可以通过官方网站注册参与私募.私募将分阶段进行,每个阶段的价格和份额有限.请关注官方公告获取最新信息.',
        },
        {
            question: 'AESC 代币什么时候上交易所?',
            answer: '我们计划在主网上线后的 3-6 个月内登陆主流 CEX 和 DEX.具体时间将根据生态发展进度和市场条件确定.',
        },
        {
            question: '持有 AESC 代币有什么好处?',
            answer: 'AESC 代币持有者可以享受平台服务折扣,参与生态治理投票,质押获得收益分成,优先参与新产品测试,以及未来空投等多重权益.',
        },
        {
            question: 'AESC 如何保证数据安全和隐私?',
            answer: '我们采用联邦学习技术,确保数据"可用不可见".同时使用零知识证明和加密技术保护用户隐私,所有数据传输和存储均符合GDPR和各国数据保护法规.',
        },
        {
            question: '项目的技术优势在哪里?',
            answer: 'AESC 独创的语义区块链架构,能够高效处理复杂的农业数据查询.结合 AI 预测模型和 IoT 设备,实现了从数据采集到价值变现的完整闭环.',
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

                <div className="mt-10 text-center">
                    <p className="mb-4 text-sm text-slate-400">还有其他问题?</p>
                    <a
                        href="/contact"
                        className="inline-flex cursor-pointer items-center border-2 border-emerald-500/50 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-emerald-400 hover:bg-white/20"
                    >
                        联系我们
                    </a>
                </div>
            </div>
        </section>
    );
}
