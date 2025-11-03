import { Card } from '@/components/ui/card';
import { Brain, Download, Layers, Network, Radio, Shield } from 'lucide-react';
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
        { value: '92%', label: 'AI病虫害预警准确率' },
        { value: '15%', label: '试点作物产量提升' },
        { value: '20%', label: '农药使用量减少' },
        { value: '30-50%', label: '农户融资成本降低' },
    ];

    const techLayers = [
        { name: '安全层', description: '区块链 + 加密技术', color: 'from-indigo-600 to-purple-700', icon: Shield },
        { name: '应用层', description: 'DeFi / GameFi / RWA / RDA', color: 'from-blue-600 to-indigo-700', icon: Layers },
        { name: '智能层', description: 'AI 算法 + 预测模型', color: 'from-emerald-600 to-teal-700', icon: Brain },
        { name: '网络层', description: '分布式数据传输', color: 'from-teal-500 to-cyan-600', icon: Network },
        { name: '感知层', description: 'IoT 设备 + 传感器', color: 'from-cyan-500 to-emerald-600', icon: Radio },
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
                            AESC是我们倾力打造的全球AI农业大数据服务平台,旨在构建"数据可信流转,服务精准触达,价值公平分配"的农业数字化生态.
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
                        <Card className="!rounded-lg border border-emerald-500/20 bg-white/5 p-6 backdrop-blur-sm">
                            <h4 className="mb-6 text-center text-xl font-bold text-white">AESC 技术栈</h4>
                            <div className="space-y-3">
                                {techLayers.map((layer, index) => (
                                    <div
                                        key={index}
                                        className={`group relative overflow-hidden rounded-lg bg-gradient-to-r ${layer.color} p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
                                    >
                                        {/* 背景装饰 */}
                                        <div className="absolute top-0 right-0 h-full w-32 bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                        <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-white/10 opacity-0 transition-all duration-300 group-hover:opacity-100" />

                                        {/* 内容 */}
                                        <div className="relative flex items-center gap-3">
                                            {/* 图标容器 */}
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                                                <layer.icon className="h-5 w-5 text-white" strokeWidth={2} />
                                            </div>

                                            {/* 文字内容 */}
                                            <div className="flex-1">
                                                <div className="mb-0.5 text-sm font-bold text-white">{layer.name}</div>
                                                <div className="text-xs text-white/90">{layer.description}</div>
                                            </div>

                                            {/* 右侧序号 */}
                                            <div className="shrink-0 text-3xl font-bold text-white/20 transition-all duration-300 group-hover:text-white/30">
                                                {index + 1}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 text-center text-xs text-emerald-300">从底层到应用的完整技术体系</div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
