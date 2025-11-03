import { Award, Sparkles, Trophy } from 'lucide-react';

/**
 * Airdrop 价值主张组件
 *
 * 展示为什么值得参与空投
 */
export function AirdropValueProps() {
    const valueProps = [
        {
            icon: Sparkles,
            title: '早期生态权益',
            description: '免费获得AESC代币,成为AGRI-ECO SMART CHAIN的早期成员,共享生态发展红利',
        },
        {
            icon: Trophy,
            title: '深度体验先机',
            description: '空投参与者将优先获得主网上线后的新产品内测资格',
        },
        {
            icon: Award,
            title: '知识与社会认可',
            description: '完成知识任务,证明您是农业科技领域的先行者,并获得社区"早期建设者"身份标识',
        },
    ];

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">为什么值得参与此次空投?</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {valueProps.map((prop, index) => (
                        <div
                            key={index}
                            className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-emerald-500/50 md:p-8"
                        >
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded bg-white/10">
                                <prop.icon className="h-7 w-7 text-emerald-300" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-white">{prop.title}</h3>
                            <p className="text-sm text-slate-300">{prop.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
