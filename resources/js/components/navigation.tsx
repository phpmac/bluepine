import { Globe, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface NavigationProps {
    currentPage?: string;
}

export function Navigation({ currentPage = 'home' }: NavigationProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [language, setLanguage] = useState('zh');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'home', label: '首页', href: '/' },
        { id: 'about', label: '关于我们', href: '/about' },
        { id: 'strategy', label: '投资策略', href: '/strategy' },
        { id: 'portfolio', label: '投资组合', href: '/portfolio' },
        { id: 'ecosystem', label: '生态合作', href: '/ecosystem' },
        { id: 'insights', label: '资源洞察', href: '/insights' },
        { id: 'contact', label: '联系我们', href: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 z-50 w-full transition-all duration-500 ${
                isScrolled
                    ? 'border-b border-white/10 bg-slate-950/90 shadow-[0_20px_50px_-30px_rgba(16,185,129,0.3)] backdrop-blur-xl'
                    : 'border-b border-white/0 bg-transparent'
            }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center">
                    <a href="/" className="group flex items-center gap-3">
                        <img src="/logo.svg" alt="BluePine Logo" className="h-9 w-9 transition-transform group-hover:scale-105" />
                        <div className="flex flex-col">
                            <div className="text-xl leading-tight font-bold tracking-tight text-white">BLUEPINE</div>
                            <div className="text-xs font-normal text-slate-300">Tech Foundation</div>
                        </div>
                    </a>

                    <div className="ml-12 hidden items-center space-x-1 md:flex">
                        {navItems.map((item) => (
                            <a key={item.id} href={item.href} className="group relative px-4 py-2 text-sm font-medium transition-all duration-500">
                                {/* 选中状态 */}
                                {currentPage === item.id ? (
                                    <>
                                        {/* 底部固定色线条 */}
                                        <span className="absolute inset-x-0 -bottom-3 h-0.5 bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                                        {/* 上移动画的第二层线 */}
                                        <span className="absolute inset-x-4 -bottom-2.5 h-[1px] animate-pulse bg-emerald-300/50" />
                                        {/* 文字渐变 */}
                                        <span className="relative z-10 bg-gradient-to-r from-emerald-200 via-teal-100 to-cyan-200 bg-clip-text font-semibold tracking-wide text-transparent">
                                            {item.label}
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        {/* Hover状态底部线条 */}
                                        <span className="absolute inset-x-0 -bottom-3 h-0.5 scale-x-0 bg-slate-400 transition-transform duration-500 group-hover:scale-x-100" />
                                        {/* 普通文字 */}
                                        <span className="relative z-10 text-slate-200/80 transition-all duration-500 group-hover:translate-y-[-1px] group-hover:tracking-wide group-hover:text-white">
                                            {item.label}
                                        </span>
                                    </>
                                )}
                            </a>
                        ))}
                    </div>

                    <div className="ml-auto hidden items-center space-x-3 md:flex">
                        <a
                            href="/aesc"
                            className="cursor-pointer bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-2 text-sm font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700"
                        >
                            AESC 生态
                        </a>
                        <a
                            href="/airdrop"
                            className="cursor-pointer bg-gradient-to-r from-teal-600 to-cyan-700 px-5 py-2 text-sm font-medium text-white transition-all hover:from-teal-700 hover:to-cyan-800"
                        >
                            AESC 空投
                        </a>
                        <button
                            onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
                            className="flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-slate-200/80 transition-all hover:bg-white/5 hover:text-white"
                        >
                            <Globe className="mr-1 h-4 w-4" />
                            {language === 'zh' ? 'EN' : '中文'}
                        </button>
                    </div>

                    <button className="ml-auto cursor-pointer p-2 md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div
                    className={`border-t border-white/10 transition-all duration-500 md:hidden ${
                        isScrolled ? 'bg-slate-950/95 backdrop-blur-2xl' : 'bg-slate-950/80 backdrop-blur-xl'
                    }`}
                >
                    <div className="space-y-1 px-4 py-4">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="group relative block w-full px-4 py-3.5 text-left text-base font-medium transition-all duration-500"
                            >
                                {currentPage === item.id ? (
                                    <>
                                        {/* 左侧渐变指示条 */}
                                        <span className="absolute top-1/2 left-0 h-10 w-1 -translate-y-1/2 rounded-r-lg bg-gradient-to-b from-emerald-400 via-teal-400 to-cyan-400 shadow-[0_0_12px_rgba(16,185,129,0.6)]" />
                                        {/* 文字渐变 */}
                                        <span className="relative ml-4 bg-gradient-to-r from-emerald-200 via-teal-100 to-cyan-200 bg-clip-text font-semibold text-transparent">
                                            {item.label}
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        {/* 普通文字 */}
                                        <span className="relative text-slate-200/80 transition-all duration-500 group-hover:ml-2 group-hover:text-white">
                                            {item.label}
                                        </span>
                                    </>
                                )}
                            </a>
                        ))}
                        <a
                            href="/aesc"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block w-full bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-3 text-left font-medium text-white transition-colors hover:from-emerald-600 hover:to-teal-700"
                        >
                            AESC 生态
                        </a>
                        <a
                            href="/airdrop"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block w-full bg-gradient-to-r from-teal-600 to-cyan-700 px-4 py-3 text-left font-medium text-white transition-colors hover:from-teal-700 hover:to-cyan-800"
                        >
                            AESC 空投
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
