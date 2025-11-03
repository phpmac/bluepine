import { Card } from '@/components/ui/card';
import { Building2, ShoppingCart, Sprout, Truck } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function EcosystemParticipants() {
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

    const participants = [
        {
            icon: Sprout,
            title: '农户',
            description: '记录种植过程,获得公平收益',
            benefits: ['透明定价', '直接销售', '品牌建设', '数据资产'],
            color: 'from-emerald-500 to-teal-500',
            bgColor: 'bg-emerald-500/10',
        },
        {
            icon: Building2,
            title: '企业',
            description: '优化供应链,降低运营成本',
            benefits: ['质量保证', '效率提升', '风险控制', '品牌信任'],
            color: 'from-teal-500 to-cyan-500',
            bgColor: 'bg-teal-500/10',
        },
        {
            icon: Truck,
            title: '物流',
            description: '实时追踪,提升服务质量',
            benefits: ['路径优化', '实时监控', '自动结算', '信用积累'],
            color: 'from-cyan-500 to-blue-500',
            bgColor: 'bg-cyan-500/10',
        },
        {
            icon: ShoppingCart,
            title: '消费者',
            description: '产品溯源,放心消费',
            benefits: ['来源可查', '质量保障', '价格透明', '参与治理'],
            color: 'from-blue-500 to-purple-500',
            bgColor: 'bg-blue-500/10',
        },
    ];

    return (
        <section ref={sectionRef} className="relative py-32" id="ecosystem">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">生态参与者</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400">连接供应链各方,构建多方共赢的生态系统</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {participants.map((participant, index) => (
                        <Card
                            key={index}
                            className={`group rounded-lg border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-emerald-500/30 ${
                                isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div
                                className={`h-16 w-16 rounded-2xl ${participant.bgColor} mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                            >
                                <participant.icon className="h-8 w-8 text-emerald-400" strokeWidth={2} />
                            </div>
                            <h3 className="mb-2 text-2xl font-bold text-slate-100">{participant.title}</h3>
                            <p className="mb-6 text-sm text-slate-400">{participant.description}</p>
                            <ul className="space-y-2">
                                {participant.benefits.map((benefit, benefitIndex) => (
                                    <li key={benefitIndex} className="flex items-center gap-2 text-sm text-slate-300">
                                        <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${participant.color}`} />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>

                <div className="relative mt-20">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 blur-3xl" />
                    <Card className="relative border border-slate-800 bg-slate-900/50 p-12 text-center backdrop-blur-sm">
                        <h3 className="mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent">
                            加入我们的生态系统
                        </h3>
                        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-400">
                            无论您是农户、企业、物流服务商还是投资者,都可以在我们的平台上找到价值
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <button className="rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-3 font-medium text-white transition-all duration-300 hover:from-emerald-600 hover:to-teal-600">
                                立即注册
                            </button>
                            <button className="rounded-lg border border-emerald-500/30 px-8 py-3 font-medium text-emerald-400 transition-all duration-300 hover:bg-emerald-500/10">
                                了解更多
                            </button>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
