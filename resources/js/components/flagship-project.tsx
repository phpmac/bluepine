import { AescTechStack } from '@/components/aesc';
import { Download } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function FlagshipProject() {
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
        { value: '92%', label: 'AI 病虫害预警准确率' },
        { value: '15%', label: '试点作物产量提升' },
        { value: '20%', label: '农药使用量减少' },
        { value: '30-50%', label: '农户融资成本降低' },
    ];

    return (
        <section ref={sectionRef} className="relative overflow-hidden py-32" id="flagship">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20 text-center">
                    <div className="mb-8 inline-flex items-center border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-200">
                        旗舰项目
                    </div>
                    <h2 className="mb-6 text-5xl leading-tight font-bold tracking-tight text-white md:text-6xl">AGRI-ECO SMART CHAIN</h2>
                    <p className="mx-auto max-w-3xl text-xl text-slate-400">实证我们的远见与实力</p>
                </div>

                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* 左侧内容 */}
                    <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                        <h3 className="mb-4 text-2xl font-bold text-white">项目简述</h3>
                        <p className="mb-6 text-base leading-relaxed text-slate-300">
                            AESC 是我们倾力打造的全球 AI 农业大数据服务平台, 旨在构建 "数据可信流转, 服务精准触达, 价值公平分配" 的农业数字化生态.
                        </p>

                        <h4 className="mb-4 text-xl font-bold text-white">关键成果</h4>
                        <div className="mb-8 grid gap-4 sm:grid-cols-2">
                            {achievements.map((item, index) => (
                                <div
                                    key={index}
                                    className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-4 backdrop-blur-sm transition-all hover:border-emerald-500/50 hover:bg-emerald-500/10"
                                >
                                    <div className="mb-1 text-3xl font-bold text-emerald-300">{item.value}</div>
                                    <div className="text-xs text-slate-400">{item.label}</div>
                                </div>
                            ))}
                        </div>

                        <a
                            href="#"
                            download
                            className="group inline-flex cursor-pointer items-center bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-4 font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700"
                        >
                            <Download className="mr-2 h-5 w-5" />
                            下载 AESC 白皮书
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
