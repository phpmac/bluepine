import { faqs } from './constants';

export function FaqSection() {
    return (
        <section className="space-y-6" id="faqs">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold text-white">常见问题</h2>
                <p className="text-sm leading-relaxed text-slate-300">以下解答涵盖白名单、抽签、资金处理与解锁方式, 帮助你快速上手。</p>
            </div>
            <div className="faq-grid">
                {faqs.map((item) => (
                    <div key={item.question} className="faq-card">
                        <h3 className="text-base font-medium text-sky-100">{item.question}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
