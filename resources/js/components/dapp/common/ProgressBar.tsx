import { motion } from 'framer-motion';
import React from 'react';

interface ProgressBarProps {
    progress: number;
    color?: string;
    height?: string;
    showPercentage?: boolean;
    animated?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
    progress,
    color = 'from-green-500 to-green-300',
    height = 'h-3',
    showPercentage = true,
    animated = true,
}) => {
    return (
        <div className="w-full">
            <div className="mb-2 flex items-center justify-between">
                {showPercentage && <span className="text-sm font-medium text-slate-300">{progress}%</span>}
            </div>
            <div className={`w-full rounded-full bg-white/10 backdrop-blur-sm ${height} overflow-hidden`}>
                <motion.div
                    className={`${height} bg-linear-to-r ${color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: animated ? 1.5 : 0, ease: 'easeOut' }}
                />
            </div>
        </div>
    );
};
