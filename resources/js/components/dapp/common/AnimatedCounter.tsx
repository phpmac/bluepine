import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
    separator?: string;
    className?: string;
    startOnView?: boolean;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
    end,
    duration = 2.5,
    prefix = '',
    suffix = '',
    decimals = 0,
    separator = ',',
    className = '',
    startOnView = true,
}) => {
    const [inView, setInView] = useState(!startOnView);

    useEffect(() => {
        if (!startOnView) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.3 },
        );

        const element = document.getElementById(`counter-${end}`);
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, [startOnView, end]);

    return (
        <motion.div
            id={`counter-${end}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={className}
        >
            {inView && <CountUp start={0} end={end} duration={duration} prefix={prefix} suffix={suffix} decimals={decimals} separator={separator} />}
        </motion.div>
    );
};
