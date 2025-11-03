import { Card } from '@/components/ui/card';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Brain, Layers, Network, Radio, Shield } from 'lucide-react';

interface AescTechStackProps {
    variant?: 'default' | 'compact';
}

/**
 * AESC 技术栈组件
 * 展示从底层到应用层的完整技术体系
 */
export function AescTechStack({ variant = 'default' }: AescTechStackProps) {
    const { t } = useLaravelReactI18n();

    const techLayers = [
        {
            nameKey: 'aesc.techStack.layer1.name',
            descriptionKey: 'aesc.techStack.layer1.description',
            color: 'from-indigo-600 to-purple-700',
            icon: Shield,
        },
        {
            nameKey: 'aesc.techStack.layer2.name',
            descriptionKey: 'aesc.techStack.layer2.description',
            color: 'from-blue-600 to-indigo-700',
            icon: Layers,
        },
        {
            nameKey: 'aesc.techStack.layer3.name',
            descriptionKey: 'aesc.techStack.layer3.description',
            color: 'from-emerald-600 to-teal-700',
            icon: Brain,
        },
        {
            nameKey: 'aesc.techStack.layer4.name',
            descriptionKey: 'aesc.techStack.layer4.description',
            color: 'from-teal-500 to-cyan-600',
            icon: Network,
        },
        {
            nameKey: 'aesc.techStack.layer5.name',
            descriptionKey: 'aesc.techStack.layer5.description',
            color: 'from-cyan-500 to-emerald-600',
            icon: Radio,
        },
    ];

    const isCompact = variant === 'compact';

    return (
        <Card className="!rounded-lg border border-emerald-500/20 bg-white/5 p-6 backdrop-blur-sm">
            <h4 className={`mb-6 text-center font-bold text-white ${isCompact ? 'text-lg' : 'text-xl'}`}>
                {isCompact ? t('aesc.techStack.titleCompact') : t('aesc.techStack.titleDefault')}
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
                                <div className={`mb-0.5 font-bold text-white ${isCompact ? 'text-sm' : 'text-sm'}`}>{t(layer.nameKey)}</div>
                                <div className={`text-white/90 ${isCompact ? 'text-xs' : 'text-xs'}`}>{t(layer.descriptionKey)}</div>
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
            <div className={`mt-4 text-center text-emerald-300 ${isCompact ? 'text-xs' : 'text-xs'}`}>{t('aesc.techStack.subtitle')}</div>
        </Card>
    );
}
