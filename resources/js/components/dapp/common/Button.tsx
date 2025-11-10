import { cn } from '@/lib/utils';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'md', children, className, ...props }) => {
    const baseClasses =
        'relative inline-flex items-center justify-center font-semibold rounded-xl cursor-pointer transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60';

    const variantClasses = {
        primary: 'bg-linear-to-r from-[#6065ff] via-[#4b76ff] to-[#37e7ff] text-slate-900 shadow-[0_20px_45px_-25px_rgba(82,115,255,0.75)]',
        secondary: 'bg-white/10 border border-white/15 text-slate-100 hover:bg-white/15',
        outline: 'bg-transparent border border-[#5c7dff] text-[#8aa4ff]',
    };

    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <button className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)} {...props}>
            {children}
        </button>
    );
};
