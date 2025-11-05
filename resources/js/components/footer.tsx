import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Mail, MapPin } from 'lucide-react';

interface FooterProps {
    transparent?: boolean;
}

export function Footer({ transparent = true }: FooterProps) {
    const { t } = useLaravelReactI18n();

    return (
        <footer className={`relative border-t border-white/10 ${transparent ? 'bg-slate-950/30 backdrop-blur-md' : 'bg-slate-950'}`}>
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid items-start gap-12 md:grid-cols-2">
                    {/* Logo和联系信息 */}
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <img src="/logo.svg" alt="BluePine Logo" className="h-9" />
                        </div>
                        <div className="space-y-4 text-sm text-slate-400">
                            <div className="flex items-start">
                                <Mail className="mt-0.5 mr-3 h-4 w-4 shrink-0 text-emerald-400" />
                                <div>
                                    <div className="mb-1 font-medium text-white">{t('footer.email.label')}</div>
                                    <a href="mailto:contact@bluepinefoundation.com" className="transition-colors hover:text-white">
                                        contact@bluepinefoundation.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="mt-0.5 mr-3 h-4 w-4 shrink-0 text-emerald-400" />
                                <div>
                                    <div className="mb-1 font-medium text-white">{t('footer.office.label')}</div>
                                    <span>{t('footer.office.locations')}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 快速链接 */}
                    <div className="md:text-right">
                        <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">{t('footer.quicklinks.title')}</h3>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li>
                                <a href="#" className="transition-colors hover:text-white">
                                    {t('footer.quicklinks.sitemap')}
                                </a>
                            </li>
                            <li>
                                <a href="/privacy" className="transition-colors hover:text-white">
                                    {t('footer.quicklinks.privacy')}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 版权信息 */}
                <div className="mt-12 border-t border-white/10 pt-8 text-center">
                    <p className="text-sm text-slate-400">{t('footer.copyright')}</p>
                </div>
            </div>
        </footer>
    );
}
