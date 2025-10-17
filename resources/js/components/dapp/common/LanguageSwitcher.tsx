import { AnimatePresence, motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

type Language = 'zh' | 'en';

export const LanguageSwitcher: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState<Language>('zh');
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const languages = [
        { code: 'zh', label: '中文', flag: '🇨🇳' },
        { code: 'en' as const, label: 'English', flag: '🇺🇸' },
    ];

    const handleLanguageChange = (lang: Language) => {
        setCurrentLang(lang);
        localStorage.setItem('appLanguage', lang);
        setIsOpen(false);
        // 触发全局语言变更事件，可根据需要实现具体的翻译逻辑
        window.dispatchEvent(new CustomEvent('languageChange', { detail: { language: lang } }));
    };

    return (
        <div ref={menuRef} className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative flex cursor-pointer items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-slate-100 transition-all duration-300 hover:border-white/30 hover:bg-white/10"
            >
                <Globe className="h-4 w-4" />
                <span className="uppercase">{currentLang}</span>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex items-center justify-center">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </button>

            {/* 下拉菜单 */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-white/15 bg-gradient-to-br from-[#0f1a2e] to-[#050a1a] shadow-[0_20px_50px_-30px_rgba(90,120,255,0.55)] backdrop-blur-xl"
                    >
                        <div className="p-2">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => handleLanguageChange(lang.code as Language)}
                                    className={`group relative flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-all duration-200 ${
                                        currentLang === lang.code
                                            ? 'bg-gradient-to-r from-[#5b7fff] to-[#43f0ff] text-slate-900'
                                            : 'text-slate-300 hover:bg-white/10 hover:text-white'
                                    }`}
                                >
                                    <span className="text-lg">{lang.flag}</span>
                                    <span>{lang.label}</span>
                                    {currentLang === lang.code && (
                                        <motion.div layoutId="activeIndicator" className="absolute right-2 h-2 w-2 rounded-full bg-slate-900" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
