import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';

interface BlockchainBackgroundProps {
    variant?: 'fixed' | 'section';
    className?: string;
    videoClassName?: string;
    overlayOpacity?: number;
}

export const BlockchainBackground: React.FC<BlockchainBackgroundProps> = ({
    variant = 'fixed',
    className,
    videoClassName,
    overlayOpacity = 0.35,
}) => {
    const containerPosition = variant === 'fixed' ? 'fixed inset-0' : 'absolute inset-0';
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        const onVisibility = () => {
            const v = videoRef.current;
            if (!v) return;
            if (document.hidden) {
                try {
                    v.pause();
                } catch {
                    /* ignore */
                }
            } else {
                try {
                    v.play().catch(() => {
                        /* ignore */
                    });
                } catch {
                    /* ignore */
                }
            }
        };
        document.addEventListener('visibilitychange', onVisibility);
        onVisibility();
        return () => document.removeEventListener('visibilitychange', onVisibility);
    }, []);

    return (
        <div
            className={cn(
                containerPosition,
                variant === 'fixed' ? 'pointer-events-none -z-10 overflow-hidden' : 'pointer-events-none z-0 overflow-hidden',
                className,
            )}
        >
            {/* 备用背景渐变,视频加载前显示 */}
            <div
                className="absolute inset-0 bg-gradient-to-b from-[#050613] via-[#0a1733] to-[#030814]"
                style={{
                    opacity: isVideoLoaded ? 0 : 1,
                    transition: 'opacity 0.6s ease-in-out',
                }}
            />

            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onLoadedData={() => setIsVideoLoaded(true)}
                onCanPlay={() => setIsVideoLoaded(true)}
                className={cn('absolute inset-0 h-full w-full object-cover', videoClassName)}
                style={{
                    filter: 'brightness(0.78) contrast(1.05)',
                    opacity: isVideoLoaded ? 0.95 : 0,
                    transition: 'opacity 0.6s ease-in-out',
                }}
            >
                <source src="/bg.mp4" type="video/mp4" />
            </video>

            <div
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(180deg, rgba(2, 6, 23, ${overlayOpacity}) 0%, rgba(2, 6, 23, ${overlayOpacity * 0.4}) 46%, rgba(2, 6, 23, ${overlayOpacity + 0.08}) 100%)`,
                }}
            />
        </div>
    );
};
