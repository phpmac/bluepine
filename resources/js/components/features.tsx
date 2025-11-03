import { Card } from '@/components/ui/card';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { useEffect, useRef, useState } from 'react';

export function Features() {
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

    const features = [
        {
            icon: 'leaf-circuit',
            titleKey: 'features.feature1.title',
            subtitleKey: 'features.feature1.subtitle',
            descriptionKey: 'features.feature1.description',
            color: 'from-emerald-500 to-teal-500',
            bgColor: 'bg-emerald-500/10',
            borderColor: 'border-emerald-500/20',
        },
        {
            icon: 'wheat-chain',
            titleKey: 'features.feature2.title',
            subtitleKey: 'features.feature2.subtitle',
            descriptionKey: 'features.feature2.description',
            color: 'from-teal-500 to-cyan-500',
            bgColor: 'bg-teal-500/10',
            borderColor: 'border-teal-500/20',
        },
        {
            icon: 'brain-plant',
            titleKey: 'features.feature3.title',
            subtitleKey: 'features.feature3.subtitle',
            descriptionKey: 'features.feature3.description',
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
                        <span className="text-white">{t('features.title.line1')}</span>
                        <br />
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            {t('features.title.line2')}
                        </span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-xl text-slate-300">{t('features.subtitle')}</p>
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
                            <h3 className="mb-2 text-2xl font-bold text-white transition-colors duration-500">{t(feature.titleKey)}</h3>
                            <p className="mb-3 text-base font-medium text-emerald-200 transition-colors duration-500">{t(feature.subtitleKey)}</p>
                            <p className="text-sm leading-relaxed text-slate-300 transition-colors duration-500">{t(feature.descriptionKey)}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
