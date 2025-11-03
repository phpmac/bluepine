import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Globe, Network, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

/**
 * AESC 价值主张组件
 *
 * 展示 AESC 的核心价值和数据
 */
export function AescValueProposition() {
    const { t } = useLaravelReactI18n();
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
            titleKey: 'aesc.valueProposition.prop1.title',
            dataKey: 'aesc.valueProposition.prop1.data',
            descriptionKey: 'aesc.valueProposition.prop1.description',
        },
        {
            icon: Network,
            titleKey: 'aesc.valueProposition.prop2.title',
            dataKey: 'aesc.valueProposition.prop2.data',
            descriptionKey: 'aesc.valueProposition.prop2.description',
        },
        {
            icon: Globe,
            titleKey: 'aesc.valueProposition.prop3.title',
            dataKey: 'aesc.valueProposition.prop3.data',
            descriptionKey: 'aesc.valueProposition.prop3.description',
        },
    ];

    return (
        <section ref={sectionRef} className="px-4 py-32 sm:px-6 lg:px-8" id="value">
            <div className="container mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">{t('aesc.valueProposition.title')}</h2>
                    <p className="mx-auto max-w-2xl text-base text-slate-300">{t('aesc.valueProposition.subtitle')}</p>
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
                            <h3 className="mb-2 text-xl font-bold text-white">{t(prop.titleKey)}</h3>
                            <div className="mb-3 text-2xl font-bold text-emerald-300">{t(prop.dataKey)}</div>
                            <p className="text-sm leading-relaxed text-slate-300">{t(prop.descriptionKey)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
