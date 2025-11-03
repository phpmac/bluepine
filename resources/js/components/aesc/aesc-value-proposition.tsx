import { Globe, Network, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

/**
 * AESC 价值主张组件
 *
 * 展示 AESC 的核心价值和数据
 */
export function AescValueProposition() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const valueProps = [
        {
            icon: TrendingUp,
            title: '真实世界价值',
            data: '试点区产量提升 15%',
            description: '我们的技术已在田间验证, 创造可衡量的经济收益',
        },
        {
            icon: Network,
            title: '尖端技术融合',
            data: '数据查询效率提升 45%',
            description: '语义区块链与联邦学习的独创架构, 确保高效与隐私',
        },
        {
            icon: Globe,
            title: '庞大生态潜力',
            data: '已连接超 5万英亩农田',
            description: '早期加入, 共享全球农业数字化转型的巨大红利',
        },
    ];

    return (
        <section ref={sectionRef} className="px-4 py-32 sm:px-6 lg:px-8" id="value">
            <div className="container mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">成为农业数字革命的奠基者</h2>
                    <p className="mx-auto max-w-2xl text-base text-slate-300">为什么投资 AESC</p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {valueProps.map((prop, index) => (
                        <div
                            key={index}
                            className={`rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-1000 hover:border-emerald-500/50 ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600">
                                <prop.icon className="h-7 w-7 text-white" strokeWidth={2} />
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-white">{prop.title}</h3>
                            <div className="mb-3 text-2xl font-bold text-emerald-300">{prop.data}</div>
                            <p className="text-sm leading-relaxed text-slate-300">{prop.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
