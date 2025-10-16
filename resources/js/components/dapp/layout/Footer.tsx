import { links } from '@/data/links';
import { motion } from 'framer-motion';
import { Github, Mail, MessageCircle, Twitter } from 'lucide-react';
import React from 'react';

const resourceLinks = [
    { label: '技术白皮书', href: links.enWhitepaper },
    { label: '品牌素材', href: links.brandAssets },
    { label: '安全审计', href: links.audit },
];

const socialLinks = [
    { icon: Twitter, href: links.twitter, label: 'Twitter' },
    { icon: MessageCircle, href: links.telegram, label: 'Telegram' },
    { icon: Github, href: links.github, label: 'GitHub' },
    { icon: Mail, href: links.email, label: 'Email' },
];

export const Footer: React.FC = () => {
    return (
        <footer className="relative overflow-hidden border-t border-white/10">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050a1a]/80 to-[#020510]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#56f1ff]/40 to-transparent" />

            <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="flex size-12 items-center justify-center rounded-3xl bg-gradient-to-br from-[#616bff95] to-[#43f0ff7a] shadow-[0_20px_50px_-25px_rgba(82,115,255,0.65)]">
                                <img src="/logo.svg" className="size-10" />
                            </div>
                            <div>
                                <p className="text-lg font-semibold text-white">Agri-Eco Smart Chain</p>
                                <p className="text-xs tracking-[0.3em] text-slate-300/80 uppercase">Modular Web3 Infrastructure</p>
                            </div>
                        </div>
                        <p className="max-w-md text-sm leading-relaxed text-slate-300/90">
                            Agri-Eco Smart Chain 提供一套面向现实资产与跨链协同的全面基础设施，从协议层到合规层，帮助机构与开发者快速构建可信的 Web3
                            应用。
                        </p>
                    </div>

                    <div className="text-right">
                        <h4 className="mb-4 text-sm font-semibold tracking-[0.2em] text-white uppercase">资源</h4>
                        <ul className="space-y-2">
                            {resourceLinks.map((item) => (
                                <li key={item.label}>
                                    <a href={item.href} target="_blank" className="text-sm text-slate-300/90 transition-colors hover:text-white">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    <div className="flex space-x-3">
                        {socialLinks.map(({ icon: Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                aria-label={label}
                                whileHover={{ y: -3, scale: 1.05 }}
                                className="flex size-11 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
                            >
                                <Icon className="h-5 w-5" />
                            </motion.a>
                        ))}
                    </div>

                    <div className="text-sm text-slate-400/90">
                        <p>© {new Date().getFullYear()} Agri-Eco Smart Chain. 保留所有权利。</p>
                    </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 text-xs text-slate-500/80 md:flex-row md:items-center md:justify-between">
                    <p>合规披露 · 仅面向符合资质的市场参与者。所有信息仅供参考。</p>
                    <div className="flex flex-wrap gap-4">
                        <a href="https://www.bluepinefoundation.com/privacy-policy" className="transition-colors hover:text-white">
                            隐私政策
                        </a>
                        <a href="https://www.bluepinefoundation.com/terms-of-service" className="transition-colors hover:text-white">
                            服务条款
                        </a>
                        <a href="https://www.bluepinefoundation.com/risk-disclosure" className="transition-colors hover:text-white">
                            风险声明
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
