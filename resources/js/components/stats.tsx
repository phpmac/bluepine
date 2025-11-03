import { Building2, DollarSign, Package, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function Stats() {
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

    const stats = [
        { icon: Users, value: '10,000+', label: '注册农户', color: 'from-emerald-400 to-teal-400' },
        { icon: Building2, value: '500+', label: '合作企业', color: 'from-teal-400 to-cyan-400' },
        { icon: Package, value: '1M+', label: '产品追溯', color: 'from-cyan-400 to-blue-400' },
        { icon: DollarSign, value: '$50M+', label: '交易总额', color: 'from-blue-400 to-purple-400' },
    ];

    return (
        <section ref={sectionRef} className="relative py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`text-center transition-all duration-1000 ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="mb-4 flex justify-center">
                                <stat.icon className="h-8 w-8 text-emerald-400" strokeWidth={2} />
                            </div>
                            <div className={`bg-gradient-to-r text-4xl font-bold lg:text-5xl ${stat.color} mb-2 bg-clip-text text-transparent`}>
                                {stat.value}
                            </div>
                            <div className="text-sm text-slate-400 lg:text-base">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
