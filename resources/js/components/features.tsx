import { Card } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';

export function Features() {
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

    const features = [
        {
            icon: 'leaf-circuit',
            title: '智慧农业',
            subtitle: '精准化与可持续',
            description: '通过IoT, AI 模型与数据驱动决策, 提升农业资源效率与产出韧性, 应对全球粮食安全挑战.',
            color: 'from-emerald-500 to-teal-500',
            bgColor: 'bg-emerald-500/10',
            borderColor: 'border-emerald-500/20',
        },
        {
            icon: 'wheat-chain',
            title: '区块链信任',
            subtitle: '资产化与透明化',
            description: '利用区块链实现数据可信存证,供应链全程溯源,并将农田,作物等实物资产转化为可流通的RWA.',
            color: 'from-teal-500 to-cyan-500',
            bgColor: 'bg-teal-500/10',
            borderColor: 'border-teal-500/20',
        },
        {
            icon: 'brain-plant',
            title: '人工智能',
            subtitle: '预测化与智能化',
            description: '部署先进的AI引擎,进行病虫害预警,产量预测与个性化农事推送,释放农业数据的深层价值.',
            color: 'from-cyan-500 to-blue-500',
            bgColor: 'bg-cyan-500/10',
            borderColor: 'border-cyan-500/20',
        },
    ];

    return (
        <section ref={sectionRef} className="relative py-32" id="features">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
                        <span className="text-white">投资于农业的</span>
                        <br />
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">数字新纪元</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-xl text-slate-300">我们专注的领域</p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className={`!rounded-lg border bg-slate-900/50 p-6 ${feature.borderColor} group backdrop-blur-sm transition-all duration-500 hover:border-emerald-500/50 hover:bg-gradient-to-br hover:from-emerald-500/10 hover:to-teal-500/10 ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* 自定义图标 */}
                            <div className="mb-6">
                                {feature.icon === 'leaf-circuit' && (
                                    <svg
                                        className="h-16 w-16 text-emerald-300 transition-colors duration-500 group-hover:text-emerald-200"
                                        viewBox="0 0 64 64"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M20 50 Q20 20, 50 20" strokeLinecap="round" />
                                        <path d="M25 45 Q25 25, 45 25" strokeLinecap="round" />
                                        <circle cx="30" cy="35" r="2" fill="currentColor" />
                                        <circle cx="35" cy="30" r="2" fill="currentColor" />
                                        <circle cx="40" cy="35" r="2" fill="currentColor" />
                                        <line x1="30" y1="35" x2="35" y2="30" />
                                        <line x1="35" y1="30" x2="40" y2="35" />
                                    </svg>
                                )}
                                {feature.icon === 'wheat-chain' && (
                                    <svg
                                        className="h-16 w-16 text-emerald-300 transition-colors duration-500 group-hover:text-emerald-200"
                                        viewBox="0 0 64 64"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <circle cx="20" cy="32" r="6" />
                                        <circle cx="44" cy="32" r="6" />
                                        <line x1="26" y1="32" x2="38" y2="32" />
                                        <path d="M32 20 L32 26 M32 38 L32 44" strokeLinecap="round" />
                                        <path d="M28 22 L28 26 M36 22 L36 26" strokeLinecap="round" />
                                        <path d="M28 38 L28 42 M36 38 L36 42" strokeLinecap="round" />
                                    </svg>
                                )}
                                {feature.icon === 'brain-plant' && (
                                    <svg
                                        className="h-16 w-16 text-emerald-300 transition-colors duration-500 group-hover:text-emerald-200"
                                        viewBox="0 0 64 64"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M20 40 Q25 25, 32 20 Q39 25, 44 40" strokeLinecap="round" />
                                        <circle cx="32" cy="25" r="3" fill="currentColor" />
                                        <circle cx="25" cy="32" r="2" fill="currentColor" />
                                        <circle cx="39" cy="32" r="2" fill="currentColor" />
                                        <circle cx="28" cy="38" r="2" fill="currentColor" />
                                        <circle cx="36" cy="38" r="2" fill="currentColor" />
                                        <line x1="32" y1="25" x2="25" y2="32" />
                                        <line x1="32" y1="25" x2="39" y2="32" />
                                        <line x1="25" y1="32" x2="28" y2="38" />
                                        <line x1="39" y1="32" x2="36" y2="38" />
                                    </svg>
                                )}
                            </div>
                            <h3 className="mb-2 text-2xl font-bold text-white transition-colors duration-500">{feature.title}</h3>
                            <p className="mb-3 text-base font-medium text-emerald-200 transition-colors duration-500">{feature.subtitle}</p>
                            <p className="text-sm leading-relaxed text-slate-300 transition-colors duration-500">{feature.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
