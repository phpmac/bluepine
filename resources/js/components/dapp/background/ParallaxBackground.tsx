import React, { useEffect, useMemo, useRef } from 'react';

interface Layer {
    id: string;
    speed: number;
    opacity: number;
    elements: LayerElement[];
}

interface LayerElement {
    x: number;
    y: number;
    size: number;
    rotation: number;
    type: 'circle' | 'triangle' | 'diamond' | 'hexagon';
    color: string;
}

export const ParallaxBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollY = useRef(0);

    // 使用 useMemo 缓存 layers，避免依赖问题
    const layers = useMemo<Layer[]>(
        () => [
            {
                id: 'far',
                speed: 0.1,
                opacity: 0.1,
                elements: Array.from({ length: 20 }, () => ({
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: 20 + Math.random() * 40,
                    rotation: Math.random() * 360,
                    type: ['circle', 'triangle', 'diamond', 'hexagon'][Math.floor(Math.random() * 4)] as LayerElement['type'],
                    color: ['#22d3ee', '#10b981', '#f59e0b', '#8b5cf6'][Math.floor(Math.random() * 4)],
                })),
            },
            {
                id: 'mid',
                speed: 0.3,
                opacity: 0.15,
                elements: Array.from({ length: 15 }, () => ({
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: 15 + Math.random() * 30,
                    rotation: Math.random() * 360,
                    type: ['circle', 'triangle', 'diamond', 'hexagon'][Math.floor(Math.random() * 4)] as LayerElement['type'],
                    color: ['#06b6d4', '#059669', '#d97706', '#7c3aed'][Math.floor(Math.random() * 4)],
                })),
            },
            {
                id: 'near',
                speed: 0.5,
                opacity: 0.2,
                elements: Array.from({ length: 10 }, () => ({
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: 10 + Math.random() * 20,
                    rotation: Math.random() * 360,
                    type: ['circle', 'triangle', 'diamond', 'hexagon'][Math.floor(Math.random() * 4)] as LayerElement['type'],
                    color: ['#0891b2', '#047857', '#b45309', '#6d28d9'][Math.floor(Math.random() * 4)],
                })),
            },
        ],
        [],
    );

    useEffect(() => {
        const handleScroll = () => {
            scrollY.current = window.scrollY;

            const container = containerRef.current;
            if (!container) return;

            // 更新每一层的位置
            layers.forEach((layer) => {
                const layerElement = container.querySelector(`[data-layer="${layer.id}"]`) as HTMLElement;
                if (layerElement) {
                    const translateY = scrollY.current * layer.speed;
                    layerElement.style.transform = `translateY(${translateY}px)`;
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [layers]);

    const renderShape = (element: LayerElement, index: number) => {
        const baseStyle = {
            position: 'absolute' as const,
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            transform: `rotate(${element.rotation}deg)`,
            opacity: 0.6,
        };

        switch (element.type) {
            case 'circle':
                return (
                    <div
                        key={index}
                        style={{
                            ...baseStyle,
                            backgroundColor: element.color,
                            borderRadius: '50%',
                            filter: 'blur(1px)',
                        }}
                    />
                );

            case 'triangle':
                return (
                    <div
                        key={index}
                        style={{
                            ...baseStyle,
                            width: 0,
                            height: 0,
                            borderLeft: `${element.size / 2}px solid transparent`,
                            borderRight: `${element.size / 2}px solid transparent`,
                            borderBottom: `${element.size}px solid ${element.color}`,
                            filter: 'blur(1px)',
                        }}
                    />
                );

            case 'diamond':
                return (
                    <div
                        key={index}
                        style={{
                            ...baseStyle,
                            backgroundColor: element.color,
                            transform: `rotate(45deg) rotate(${element.rotation}deg)`,
                            filter: 'blur(1px)',
                        }}
                    />
                );

            case 'hexagon':
                return (
                    <div
                        key={index}
                        style={{
                            ...baseStyle,
                            backgroundColor: element.color,
                            clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
                            filter: 'blur(1px)',
                        }}
                    />
                );

            default:
                return null;
        }
    };

    return (
        <div ref={containerRef} className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            {layers.map((layer) => (
                <div key={layer.id} data-layer={layer.id} className="absolute inset-0 h-[120vh] w-full" style={{ opacity: layer.opacity }}>
                    {layer.elements.map((element, index) => renderShape(element, index))}
                </div>
            ))}

            {/* 动态光束效果 */}
            <div className="absolute inset-0">
                {Array.from({ length: 5 }, (_, i) => (
                    <div
                        key={i}
                        className="absolute h-full w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-20"
                        style={{
                            left: `${20 + i * 20}%`,
                            animationDelay: `${i * 0.5}s`,
                            animation: 'pulse 3s ease-in-out infinite',
                        }}
                    />
                ))}
            </div>

            {/* 径向渐变层 */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.03) 0%, transparent 50%)',
                }}
            />
        </div>
    );
};
