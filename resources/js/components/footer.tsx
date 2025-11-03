import { Mail, MapPin } from 'lucide-react';

interface FooterProps {
    transparent?: boolean;
}

export function Footer({ transparent = true }: FooterProps) {
    return (
        <footer className={`relative border-t border-white/10 ${transparent ? 'bg-slate-950/30 backdrop-blur-md' : 'bg-slate-950'}`}>
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid items-start gap-12 md:grid-cols-2">
                    {/* Logo和联系信息 */}
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <img src="/logo.svg" alt="BluePine Logo" className="h-9 w-9" />
                            <div className="flex flex-col">
                                <div className="text-xl leading-tight font-bold tracking-tight text-white">BLUEPINE</div>
                                <div className="text-xs font-normal text-slate-300">Tech Foundation</div>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-slate-400">
                            <div className="flex items-start">
                                <Mail className="mt-0.5 mr-3 h-4 w-4 shrink-0 text-emerald-400" />
                                <div>
                                    <div className="mb-1 font-medium text-white">官方邮箱</div>
                                    <a href="mailto:contact@bluepinefoundation.com" className="transition-colors hover:text-white">
                                        contact@bluepinefoundation.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="mt-0.5 mr-3 h-4 w-4 shrink-0 text-emerald-400" />
                                <div>
                                    <div className="mb-1 font-medium text-white">全球办公室</div>
                                    <span>新加坡 · 硅谷 · 吉隆坡</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 快速链接 */}
                    <div className="md:text-right">
                        <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">快速链接</h3>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li>
                                <a href="#" className="transition-colors hover:text-white">
                                    网站地图
                                </a>
                            </li>
                            <li>
                                <a href="/privacy" className="transition-colors hover:text-white">
                                    隐私政策
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 版权信息 */}
                <div className="mt-12 border-t border-white/10 pt-8 text-center">
                    <p className="text-sm text-slate-400">© 2025 BLUEPINE TECH FOUNDATION. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
