import { Link } from '@inertiajs/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Globe, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface NavigationProps {
    currentPage?: string;
}

export function Navigation({ currentPage = 'home' }: NavigationProps) {
    const { currentLocale, setLocale, t } = useLaravelReactI18n();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLanguageChange = () => {
        const newLocale = currentLocale() === 'zh_CN' ? 'en' : 'zh_CN';
        setLocale(newLocale);
        localStorage.setItem('appLanguage', newLocale);
    };

    const navItems = [
        { id: 'home', labelKey: 'nav.home', href: '/' },
        { id: 'about', labelKey: 'nav.about', href: '/about' },
        { id: 'strategy', labelKey: 'nav.strategy', href: '/strategy' },
        { id: 'portfolio', labelKey: 'nav.portfolio', href: '/portfolio' },
        { id: 'ecosystem', labelKey: 'nav.ecosystem', href: '/ecosystem' },
        { id: 'insights', labelKey: 'nav.insights', href: '/insights' },
        { id: 'contact', labelKey: 'nav.contact', href: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 z-50 w-full transition-all duration-500 ${
                isScrolled
                    ? 'border-b border-white/10 bg-slate-950/90 shadow-[0_20px_50px_-30px_rgba(16,185,129,0.3)] backdrop-blur-xl'
                    : 'border-b border-white/0 bg-transparent'
            }`}
        >
            <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center">
                    <Link href="/" className="group flex shrink-0 items-center gap-3">
                        <img src="/logo.svg" alt="BluePine Logo" className="h-9 transition-transform group-hover:scale-105" />
                    </Link>

                    <div className="ml-8 hidden items-center space-x-0.5 lg:flex xl:ml-12 xl:space-x-1">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={item.href}
                                className="group relative px-2.5 py-2 text-sm font-medium whitespace-nowrap transition-all duration-500 xl:px-3"
                            >
                                {/* 选中状态 */}
                                {currentPage === item.id ? (
                                    <>
                                        {/* 底部固定色线条 */}
                                        <span className="absolute inset-x-0 -bottom-3 h-0.5 bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                                        {/* 上移动画的第二层线 */}
                                        <span className="absolute inset-x-4 -bottom-2.5 h-px animate-pulse bg-emerald-300/50" />
                                        {/* 文字渐变 */}
                                        <span className="relative z-10 bg-linear-to-r from-emerald-200 via-teal-100 to-cyan-200 bg-clip-text font-semibold tracking-wide text-transparent">
                                            {t(item.labelKey)}
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        {/* Hover状态底部线条 */}
                                        <span className="absolute inset-x-0 -bottom-3 h-0.5 scale-x-0 bg-slate-400 transition-transform duration-500 group-hover:scale-x-100" />
                                        {/* 普通文字 */}
                                        <span className="relative z-10 text-slate-200/80 transition-all duration-500 group-hover:-translate-y-px group-hover:tracking-wide group-hover:text-white">
                                            {t(item.labelKey)}
                                        </span>
                                    </>
                                )}
                            </a>
                        ))}
                    </div>

                    <div className="ml-auto hidden shrink-0 items-center space-x-2 lg:flex xl:space-x-3">
                        <a
                            href="/aesc"
                            className="cursor-pointer bg-linear-to-r from-emerald-500 to-teal-600 px-3 py-2 text-sm font-medium whitespace-nowrap text-white transition-all hover:from-emerald-600 hover:to-teal-700 xl:px-4"
                        >
                            {t('nav.aesc')}
                        </a>
                        <a
                            href="/airdrop"
                            className="cursor-pointer bg-linear-to-r from-teal-600 to-cyan-700 px-3 py-2 text-sm font-medium whitespace-nowrap text-white transition-all hover:from-teal-700 hover:to-cyan-800 xl:px-4"
                        >
                            {t('nav.airdrop')}
                        </a>
                        <button
                            onClick={handleLanguageChange}
                            className="flex cursor-pointer items-center px-2.5 py-2 text-sm font-medium whitespace-nowrap text-slate-200/80 transition-all hover:bg-white/5 hover:text-white xl:px-3"
                        >
                            <Globe className="mr-1 h-4 w-4" />
                            {currentLocale() === 'zh_CN' ? 'EN' : '中文'}
                        </button>
                    </div>

                    <button className="ml-auto cursor-pointer p-2 lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div
                    className={`border-t border-white/10 transition-all duration-500 lg:hidden ${
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
                                        <span className="absolute top-1/2 left-0 h-10 w-1 -translate-y-1/2 rounded-r-lg bg-linear-to-b from-emerald-400 via-teal-400 to-cyan-400 shadow-[0_0_12px_rgba(16,185,129,0.6)]" />
                                        {/* 文字渐变 */}
                                        <span className="relative ml-4 bg-linear-to-r from-emerald-200 via-teal-100 to-cyan-200 bg-clip-text font-semibold text-transparent">
                                            {t(item.labelKey)}
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        {/* 普通文字 */}
                                        <span className="relative text-slate-200/80 transition-all duration-500 group-hover:ml-2 group-hover:text-white">
                                            {t(item.labelKey)}
                                        </span>
                                    </>
                                )}
                            </a>
                        ))}
                        <a
                            href="/aesc"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block w-full bg-linear-to-r from-emerald-500 to-teal-600 px-4 py-3 text-left font-medium text-white transition-colors hover:from-emerald-600 hover:to-teal-700"
                        >
                            {t('nav.aesc')}
                        </a>
                        <a
                            href="/airdrop"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block w-full bg-linear-to-r from-teal-600 to-cyan-700 px-4 py-3 text-left font-medium text-white transition-colors hover:from-teal-700 hover:to-cyan-800"
                        >
                            {t('nav.airdrop')}
                        </a>
                        <button
                            onClick={handleLanguageChange}
                            className="flex w-full items-center px-4 py-3 text-left text-base font-medium text-slate-200/80 transition-all hover:bg-white/5 hover:text-white"
                        >
                            <Globe className="mr-2 h-5 w-5" />
                            {currentLocale() === 'zh_CN' ? 'English' : '中文'}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
