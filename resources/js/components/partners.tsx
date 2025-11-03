import { Building, Cloud, Database, Factory, Link, Server, Shield, Truck } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function Partners() {
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

    const partners = [
        {
            name: '农业银行',
            icon: Building,
            category: '金融服务',
            color: 'from-emerald-500 to-teal-500',
        },
        {
            name: '中粮集团',
            icon: Factory,
            category: '农业企业',
            color: 'from-teal-500 to-cyan-500',
        },
        {
            name: '京东物流',
            icon: Truck,
            category: '物流服务',
            color: 'from-cyan-500 to-blue-500',
        },
        {
            name: '阿里云',
            icon: Cloud,
            category: '云服务',
            color: 'from-blue-500 to-indigo-500',
        },
        {
            name: '华为云',
            icon: Server,
            category: '云服务',
            color: 'from-indigo-500 to-purple-500',
        },
        {
            name: '腾讯区块链',
            icon: Link,
            category: '区块链',
            color: 'from-purple-500 to-pink-500',
        },
        {
            name: '蚂蚁链',
            icon: Shield,
            category: '区块链',
            color: 'from-pink-500 to-rose-500',
        },
        {
            name: '百度智能云',
            icon: Database,
            category: '云服务',
            color: 'from-rose-500 to-orange-500',
        },
    ];

    return (
        <section ref={sectionRef} className="relative py-32" id="partners">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">合作伙伴</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400">与行业领先企业携手,共建农业供应链生态</p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className={`group relative overflow-hidden rounded-lg border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-slate-700 ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            {/* 渐变光效背景 */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                            />

                            {/* 图标容器 */}
                            <div className="relative mb-4 flex items-center justify-between">
                                <div
                                    className={`flex h-16 w-16 items-center justify-center rounded-xl border border-slate-700/50 bg-slate-800/60 shadow-lg transition-all group-hover:border-emerald-500/40`}
                                >
                                    <partner.icon
                                        className="h-10 w-10 text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-300"
                                        strokeWidth={2.5}
                                    />
                                </div>
                                <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${partner.color} animate-pulse`} />
                            </div>

                            {/* 文字内容 */}
                            <div className="relative">
                                <h3 className="mb-1 text-lg font-bold text-slate-100 transition-colors group-hover:text-emerald-400">
                                    {partner.name}
                                </h3>
                                <p className="text-xs text-slate-500">{partner.category}</p>
                            </div>

                            {/* 底部装饰线 */}
                            <div
                                className={`absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r ${partner.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
