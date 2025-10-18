import { cn } from '@/lib/utils';
import React, { useEffect, useRef } from 'react';

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
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className={cn('absolute inset-0 h-full w-full object-cover', videoClassName)}
                style={{
                    filter: 'brightness(0.78) contrast(1.05)',
                    opacity: 0.95,
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
