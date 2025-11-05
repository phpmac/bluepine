import { AescTechStack } from '@/components/aesc';
import { whitepaperUrl } from '@/config/links';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Download } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function FlagshipProject() {
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

    const achievements = [
        { valueKey: 'flagship.achievement1.value', labelKey: 'flagship.achievement1.label' },
        { valueKey: 'flagship.achievement2.value', labelKey: 'flagship.achievement2.label' },
        { valueKey: 'flagship.achievement3.value', labelKey: 'flagship.achievement3.label' },
        { valueKey: 'flagship.achievement4.value', labelKey: 'flagship.achievement4.label' },
    ];

    return (
        <section ref={sectionRef} className="relative overflow-hidden py-32" id="flagship">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20 text-center">
                    <div className="mb-8 inline-flex items-center border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-200">
                        {t('flagship.badge')}
                    </div>
                    <h2 className="mb-6 text-5xl leading-tight font-bold tracking-tight text-white md:text-6xl">{t('flagship.title')}</h2>
                    <p className="mx-auto max-w-3xl text-xl text-slate-400">{t('flagship.subtitle')}</p>
                </div>

                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* 左侧内容 */}
                    <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                        <h3 className="mb-4 text-2xl font-bold text-white">{t('flagship.overview.title')}</h3>
                        <p className="mb-6 text-base leading-relaxed text-slate-300">{t('flagship.overview.description')}</p>

                        <h4 className="mb-4 text-xl font-bold text-white">{t('flagship.achievements.title')}</h4>
                        <div className="mb-8 grid gap-4 sm:grid-cols-2">
                            {achievements.map((item, index) => (
                                <div
                                    key={index}
                                    className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-4 backdrop-blur-sm transition-all hover:border-emerald-500/50 hover:bg-emerald-500/10"
                                >
                                    <div className="mb-1 text-3xl font-bold text-emerald-300">{t(item.valueKey)}</div>
                                    <div className="text-xs text-slate-400">{t(item.labelKey)}</div>
                                </div>
                            ))}
                        </div>

                        <a
                            href={whitepaperUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex cursor-pointer items-center bg-linear-to-r from-emerald-500 to-teal-600 px-8 py-4 font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700"
                        >
                            <Download className="mr-2 h-5 w-5" />
                            {t('flagship.download')}
                        </a>
                    </div>

                    {/* 右侧技术栈 */}
                    <div className={`transition-all delay-300 duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                        <AescTechStack />
                    </div>
                </div>
            </div>
        </section>
    );
}
