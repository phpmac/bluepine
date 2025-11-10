import { links } from '@/data/links';
import { motion } from 'framer-motion';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import React from 'react';

const socialLinks = [
    {
        icon: <img src="/images/x.svg" alt="Twitter" className="p-1" />,
        href: links.twitter,
        label: 'Twitter',
    },
    {
        icon: <img src="/images/telegram.svg" alt="Telegram" className="p-1" />,
        href: links.telegram,
        label: 'Telegram',
    },
    {
        icon: <img src="/images/github.svg" alt="GitHub" className="p-1" />,
        href: links.github,
        label: 'GitHub',
    },
    {
        icon: <img src="/images/mail.svg" alt="Email" className="p-1" />,
        href: links.email,
        label: 'Email',
    },
    {
        icon: <img src="/images/certik.png" alt="Security Audit" className="object-contain p-1" />,
        href: links.audit,
        label: 'Security Audit',
    },
];

export const Footer: React.FC = () => {
    const { t } = useLaravelReactI18n();
    const resources = [
        { label: t('footer.link.whitepaper'), href: links.enWhitepaper },
        { label: t('footer.link.brand_assets'), href: links.brandAssets },
        { label: t('footer.link.audit'), href: links.audit },
    ];
    return (
        <footer className="relative overflow-hidden border-t border-white/10">
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#050a1a]/80 to-[#020510]" />
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#56f1ff]/40 to-transparent" />

            <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="flex size-12 items-center justify-center rounded-3xl bg-linear-to-br from-[#616bff95] to-[#43f0ff7a] shadow-[0_20px_50px_-25px_rgba(82,115,255,0.65)]">
                                <img src="/logo.svg" className="size-10" />
                            </div>
                            <div>
                                <p className="text-lg font-semibold text-white">AGRI-ECO SMART CHAIN</p>
                                <p className="text-xs tracking-[0.3em] text-slate-300/80 uppercase">Modular Agriculture Infrastructure</p>
                            </div>
                        </div>
                        <p className="max-w-md text-xs leading-relaxed text-slate-300/90">{t('footer.description')}</p>
                    </div>

                    <div className="text-right">
                        <h4 className="mb-4 text-sm font-semibold tracking-[0.2em] text-white uppercase">{t('footer.resources')}</h4>
                        <ul className="space-y-2">
                            {resources.map((item) => (
                                <li key={item.label}>
                                    <a href={item.href} target="_blank" className="text-sm text-slate-300/90 transition-colors hover:text-white">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <div className="flex flex-col gap-3">
                        <div className="flex space-x-3">
                            {socialLinks.map(({ icon, href, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    aria-label={label}
                                    whileHover={{ y: -3, scale: 1.05 }}
                                    className="flex size-11 items-center justify-center rounded-2xl border border-white/30 bg-white/35 transition-all hover:border-white/50 hover:bg-white/45"
                                >
                                    {icon}
                                </motion.a>
                            ))}
                        </div>
                        <p className="text-xs text-slate-500/80">{t('footer.disclaimer')}</p>
                    </div>

                    <div className="text-sm text-slate-400/90">
                        <p>
                            © {new Date().getFullYear()} AGRI-ECO SMART CHAIN. {t('footer.copyright')}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
