import { Card } from '@/components/ui/card';
import { Globe, Lock, Shield, TrendingUp, Users, Zap } from 'lucide-react';
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
            icon: Shield,
            title: '智慧农业',
            description: '通过IoT、AI模型与数据驱动决策,提升农业资源效率与产出韧性',
            color: 'from-emerald-500 to-teal-500',
            bgColor: 'bg-emerald-500/10',
            borderColor: 'border-emerald-500/20',
        },
        {
            icon: Lock,
            title: '区块链信任',
            description: '利用区块链实现数据可信存证,供应链全程溯源,资产透明化',
            color: 'from-teal-500 to-cyan-500',
            bgColor: 'bg-teal-500/10',
            borderColor: 'border-teal-500/20',
        },
        {
            icon: Zap,
            title: '人工智能',
            description: '部署先进的AI引擎,进行病虫害预警、产量预测与智能化决策',
            color: 'from-cyan-500 to-blue-500',
            bgColor: 'bg-cyan-500/10',
            borderColor: 'border-cyan-500/20',
        },
        {
            icon: Globe,
            title: '全球网络',
            description: '构建覆盖全球的农业数字生态,连接产业链各方参与者',
            color: 'from-blue-500 to-purple-500',
            bgColor: 'bg-blue-500/10',
            borderColor: 'border-blue-500/20',
        },
        {
            icon: Users,
            title: '生态协同',
            description: '联合研究机构、农业企业、技术伙伴,共建开放协同生态',
            color: 'from-purple-500 to-pink-500',
            bgColor: 'bg-purple-500/10',
            borderColor: 'border-purple-500/20',
        },
        {
            icon: TrendingUp,
            title: '价值创造',
            description: '通过技术创新和模式创新,为生态参与者创造可持续价值',
            color: 'from-pink-500 to-rose-500',
            bgColor: 'bg-pink-500/10',
            borderColor: 'border-pink-500/20',
        },
    ];

    return (
        <section ref={sectionRef} className="relative py-32" id="features">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">投资于农业的数字新纪元</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400">我们专注的领域</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className={`border bg-slate-900/50 p-8 ${feature.borderColor} group backdrop-blur-sm transition-all duration-500 hover:bg-slate-900/70 ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div
                                className={`h-14 w-14 rounded-xl ${feature.bgColor} mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                            >
                                <feature.icon className="h-7 w-7 text-emerald-400" strokeWidth={2} />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-slate-100">{feature.title}</h3>
                            <p className="leading-relaxed text-slate-400">{feature.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
