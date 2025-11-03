import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: '首页', href: '/' },
        { label: '关于我们', href: '#about' },
        { label: '投资策略', href: '#strategy' },
        { label: '投资组合', href: '#portfolio' },
        { label: '生态合作', href: '#ecosystem' },
        { label: '资源洞察', href: '#insights' },
        { label: '联系我们', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
                isScrolled ? 'border-b border-emerald-500/10 bg-slate-950/80 backdrop-blur-xl' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <a href="/" className="group flex items-center gap-3">
                        <img src="/logo.svg" alt="BluePine Logo" className="h-9 w-9 transition-transform group-hover:scale-105" />
                        <div className="flex flex-col">
                            <div className="text-xl leading-tight font-bold tracking-tight text-white">BLUEPINE</div>
                            <div className="text-xs font-normal text-slate-300">Tech Foundation</div>
                        </div>
                    </a>

                    <div className="hidden items-center gap-8 md:flex">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-emerald-400"
                            >
                                {item.label}
                            </a>
                        ))}
                        <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600">
                            开始使用
                        </Button>
                    </div>

                    <button className="text-slate-300 md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="border-t border-emerald-500/10 bg-slate-950/95 backdrop-blur-xl md:hidden">
                    <div className="container mx-auto space-y-4 px-4 py-4">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="block py-2 text-slate-300 transition-colors duration-200 hover:text-emerald-400"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600">
                            开始使用
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
}
