import { Check, Circle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function Roadmap() {
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

    const stages = [
        {
            id: 1,
            title: '建设期',
            status: 'completed',
            description: '团队组建与技术架构完成',
        },
        {
            id: 2,
            title: '试点期',
            status: 'current',
            description: '部署平台, 500+户农户内测',
        },
        {
            id: 3,
            title: '扩张期',
            status: 'upcoming',
            description: 'DeFi/GameFi/RWA/RDA 上线, 多国覆盖',
        },
        {
            id: 4,
            title: '公链研发期',
            status: 'upcoming',
            description: 'AGRI-ECO SMART CHAIN 测试网上线',
        },
    ];

    return (
        <section ref={sectionRef} className="relative overflow-hidden py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20 text-center">
                    <h2 className="mb-6 text-5xl leading-tight font-bold tracking-tight text-white md:text-6xl">我们的发展征程</h2>
                    <p className="text-xl text-slate-400">规划与进展</p>
                </div>

                <div className="relative">
                    {/* 连接线 */}
                    <div className="absolute top-1/2 left-0 hidden h-1 w-full -translate-y-1/2 bg-gradient-to-r from-emerald-500/30 via-emerald-500/50 to-slate-600/30 md:block"></div>

                    <div className="grid gap-8 md:grid-cols-4">
                        {stages.map((stage, index) => (
                            <div
                                key={stage.id}
                                className={`relative transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                {/* 节点 */}
                                <div className="mb-6 flex justify-center">
                                    <div className="relative">
                                        {/* 外圈光晕 */}
                                        {stage.status === 'current' && (
                                            <div className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-20"></div>
                                        )}

                                        {/* 主节点 */}
                                        <div
                                            className={`relative flex h-14 w-14 items-center justify-center rounded-full border-3 transition-all duration-500 ${
                                                stage.status === 'completed'
                                                    ? 'border-green-400 bg-gradient-to-br from-green-500 to-green-600 shadow-[0_0_20px_rgba(34,197,94,0.4)]'
                                                    : stage.status === 'current'
                                                      ? 'border-emerald-400 bg-gradient-to-br from-emerald-500 to-teal-600 shadow-[0_0_25px_rgba(16,185,129,0.6)]'
                                                      : 'border-slate-600 bg-gradient-to-br from-slate-700 to-slate-800'
                                            }`}
                                        >
                                            {stage.status === 'completed' ? (
                                                <Check className="h-7 w-7 text-white drop-shadow-lg" strokeWidth={2.5} />
                                            ) : stage.status === 'current' ? (
                                                <Circle
                                                    className="h-7 w-7 animate-pulse text-white drop-shadow-lg"
                                                    fill="currentColor"
                                                    strokeWidth={2.5}
                                                />
                                            ) : (
                                                <div className="flex flex-col items-center">
                                                    <span className="text-xl font-bold text-slate-400">{stage.id}</span>
                                                    <div className="mt-0.5 h-0.5 w-6 bg-slate-600"></div>
                                                </div>
                                            )}
                                        </div>

                                        {/* 装饰圆环 */}
                                        {stage.status !== 'upcoming' && (
                                            <div
                                                className={`absolute inset-0 rounded-full border ${
                                                    stage.status === 'completed' ? 'border-green-400/30' : 'border-emerald-400/30'
                                                } scale-125`}
                                            ></div>
                                        )}
                                    </div>
                                </div>

                                {/* 内容卡片 */}
                                <div
                                    className={`min-h-[140px] rounded-lg border p-6 transition-all ${
                                        stage.status === 'completed'
                                            ? 'border-green-500/30 bg-green-500/5'
                                            : stage.status === 'current'
                                              ? 'border-emerald-500/50 bg-emerald-500/10'
                                              : 'border-white/10 bg-white/5'
                                    }`}
                                >
                                    <div className="mb-3 flex items-center justify-between gap-2">
                                        <h3 className="text-xl font-bold whitespace-nowrap text-white">{stage.title}</h3>
                                        {stage.status === 'completed' && (
                                            <span className="text-xs font-medium whitespace-nowrap text-green-400">已完成</span>
                                        )}
                                        {stage.status === 'current' && (
                                            <span className="animate-pulse text-xs font-medium whitespace-nowrap text-emerald-400">进行中</span>
                                        )}
                                    </div>
                                    <p className="text-xs leading-relaxed text-slate-400">{stage.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
