import { AnimatePresence, motion } from 'framer-motion';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Cookie, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useLaravelReactI18n();

    useEffect(() => {
        const cookieConsent = localStorage.getItem('cookieConsent');
        if (!cookieConsent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="fixed right-4 bottom-4 z-40 max-w-md md:right-6 md:bottom-6"
                >
                    <div className="relative overflow-hidden rounded-xl border border-white/15 bg-gradient-to-br from-[#0f1a2e] to-[#050a1a] shadow-[0_25px_70px_-30px_rgba(90,120,255,0.55)] backdrop-blur-2xl">
                        {/* 背景动画 */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#5071ff]/5 via-transparent to-[#43f0ff]/5" />
                        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#56f1ff]/10 blur-3xl" />

                        <div className="relative p-3 md:p-4">
                            <div className="flex flex-col gap-3 md:gap-4">
                                {/* 头部 */}
                                <div className="flex items-start justify-between gap-2">
                                    <div className="flex items-start gap-2">
                                        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#5b7fff] to-[#43f0ff] text-white">
                                            <Cookie className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold text-white md:text-base">{t('cookie.title')}</h3>
                                            <p className="mt-0.5 text-xs text-slate-400">{t('cookie.subtitle')}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleReject}
                                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                </div>

                                {/* 说明文本 */}
                                <p className="text-xs leading-relaxed text-slate-300/90 md:text-sm">
                                    {t('cookie.text_prefix')}
                                    <a href="#" className="text-[#56f1ff] transition-colors hover:text-[#43f0ff]">
                                        {t('cookie.privacy')}
                                    </a>
                                    .
                                </p>

                                {/* 按钮组 */}
                                <div className="flex flex-col gap-2 md:gap-3">
                                    <button
                                        onClick={handleAccept}
                                        className="group relative w-full cursor-pointer rounded-lg bg-gradient-to-r from-[#6065ff] via-[#4b76ff] to-[#37e7ff] px-3 py-2 text-xs font-semibold text-slate-900 shadow-[0_20px_45px_-25px_rgba(82,115,255,0.75)] transition-all duration-300 hover:scale-105 hover:shadow-[0_25px_55px_-20px_rgba(82,115,255,0.85)] md:text-sm"
                                    >
                                        <span className="relative z-10">{t('cookie.accept')}</span>
                                    </button>
                                    <button
                                        onClick={handleReject}
                                        className="group relative w-full cursor-pointer rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-100 transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-white/10 md:text-sm"
                                    >
                                        <span className="relative z-10">{t('cookie.reject')}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
