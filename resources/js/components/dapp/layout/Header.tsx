import { motion } from 'framer-motion';
import { Menu, Wallet, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Button } from '../common/Button';

export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    const navItems = [
        { id: 'hero', label: '愿景' },
        { id: 'ieo-overview', label: '发售计划' },
        { id: 'tokenomics', label: '代币分配' },
        { id: 'vesting', label: '释放节奏' },
        { id: 'about', label: '生态蓝图' },
    ];

    return (
        <motion.header
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
                isScrolled
                    ? 'border-b border-white/10 bg-[#050a1a]/90 shadow-[0_20px_50px_-30px_rgba(76,107,255,0.65)] backdrop-blur-xl'
                    : 'border-b border-transparent bg-transparent'
            }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <button onClick={() => scrollToSection('hero')} className="flex items-center space-x-3 text-left">
                        <div className="relative">
                            <img src="/logo.svg" className="size-10" />
                        </div>
                        <div>
                            <p className="text-lg leading-tight font-bold text-white">Agri-Eco Smart Chain</p>
                            <p className="text-xs tracking-wider text-slate-400">Modular Web3 Infrastructure</p>
                        </div>
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center space-x-6 lg:flex xl:space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="group relative text-sm font-semibold tracking-[0.18em] text-slate-200/80 uppercase transition-colors duration-300 hover:text-white"
                            >
                                <span>{item.label}</span>
                                <span className="absolute inset-x-0 -bottom-3 h-px bg-gradient-to-r from-transparent via-[#5b7fff] to-transparent opacity-0 group-hover:opacity-100" />
                            </button>
                        ))}
                    </nav>

                    {/* Connect Wallet Button */}
                    <div className="hidden md:block">
                        <Button variant="primary" className="gap-2 px-5 py-2.5 text-sm">
                            <Wallet className="h-4 w-4" />
                            <span>加入白名单</span>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="text-white/80 transition hover:text-white lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-5 rounded-2xl border border-white/10 bg-[#050a1a]/95 shadow-[0_25px_70px_-30px_rgba(90,120,255,0.55)] backdrop-blur-2xl lg:hidden"
                    >
                        <div className="space-y-3 px-5 py-6">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="w-full rounded-xl px-4 py-3 text-left text-sm font-semibold tracking-[0.18em] text-slate-200/80 uppercase transition-all duration-200 hover:bg-white/5 hover:text-white"
                                >
                                    {item.label}
                                </button>
                            ))}
                            <div className="border-t border-white/10 pt-4">
                                <Button variant="primary" className="w-full gap-2 text-sm">
                                    <Wallet className="h-4 w-4" />
                                    <span>加入白名单</span>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.header>
    );
};
