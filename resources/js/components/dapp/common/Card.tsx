import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    delay?: number;
}

export const Card: React.FC<CardProps> = ({ children, className, hover = true, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            whileHover={hover ? { y: -10, boxShadow: '0 28px 60px -28px rgba(104, 150, 255, 0.45)' } : {}}
            className={cn(
                'rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_25px_60px_-35px_rgba(80,120,255,0.55)] backdrop-blur-xl transition-all duration-300',
                className,
            )}
        >
            {children}
        </motion.div>
    );
};
