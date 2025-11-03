import { Card } from '@/components/ui/card';
import { Brain, Layers, Network, Radio, Shield } from 'lucide-react';

interface AescTechStackProps {
    variant?: 'default' | 'compact';
}

/**
 * AESC 技术栈组件
 * 展示从底层到应用层的完整技术体系
 */
export function AescTechStack({ variant = 'default' }: AescTechStackProps) {
    const techLayers = [
        { name: '安全层', description: '区块链 + 加密技术', color: 'from-indigo-600 to-purple-700', icon: Shield },
        { name: '应用层', description: 'DeFi / GameFi / RWA / RDA', color: 'from-blue-600 to-indigo-700', icon: Layers },
        { name: '智能层', description: 'AI 算法 + 预测模型', color: 'from-emerald-600 to-teal-700', icon: Brain },
        { name: '网络层', description: '分布式数据传输', color: 'from-teal-500 to-cyan-600', icon: Network },
        { name: '感知层', description: 'IoT 设备 + 传感器', color: 'from-cyan-500 to-emerald-600', icon: Radio },
    ];

    const isCompact = variant === 'compact';

    return (
        <Card className="!rounded-lg border border-emerald-500/20 bg-white/5 p-6 backdrop-blur-sm">
            <h4 className={`mb-6 text-center font-bold text-white ${isCompact ? 'text-lg' : 'text-xl'}`}>
                {isCompact ? 'AESC 平台技术全栈' : 'AESC 技术栈'}
            </h4>
            <div className={isCompact ? 'space-y-2' : 'space-y-3'}>
                {techLayers.map((layer, index) => (
                    <div
                        key={index}
                        className={`group relative overflow-hidden rounded-lg bg-gradient-to-r ${layer.color} transition-all duration-300 hover:scale-[1.02] ${isCompact ? 'p-3' : 'p-4 hover:shadow-lg'}`}
                    >
                        {!isCompact && (
                            <>
                                {/* 背景装饰 */}
                                <div className="absolute top-0 right-0 h-full w-32 bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-white/10 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                            </>
                        )}

                        {/* 内容 */}
                        <div className="relative flex items-center gap-3">
                            {!isCompact && (
                                /* 图标容器 */
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                                    <layer.icon className="h-5 w-5 text-white" strokeWidth={2} />
                                </div>
                            )}

                            {/* 文字内容 */}
                            <div className="flex-1">
                                <div className={`mb-0.5 font-bold text-white ${isCompact ? 'text-sm' : 'text-sm'}`}>{layer.name}</div>
                                <div className={`text-white/90 ${isCompact ? 'text-xs' : 'text-xs'}`}>{layer.description}</div>
                            </div>

                            {!isCompact && (
                                /* 右侧序号 */
                                <div className="shrink-0 text-3xl font-bold text-white/20 transition-all duration-300 group-hover:text-white/30">
                                    {index + 1}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className={`mt-4 text-center text-emerald-300 ${isCompact ? 'text-xs' : 'text-xs'}`}>从底层到应用的完整技术体系</div>
        </Card>
    );
}
