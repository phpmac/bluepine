import { socialLinks } from '@/config/links';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Facebook, MessagesSquare, Send, Twitter, Youtube } from 'lucide-react';

export function KeepInTouch() {
    const { t, currentLocale } = useLaravelReactI18n();
    const isEnglish = currentLocale() === 'en';

    const socials = [
        { name: 'Twitter (X)', icon: Twitter, link: socialLinks.twitter },
        { name: 'Telegram', icon: Send, link: isEnglish ? socialLinks.telegramChannel : socialLinks.telegramChannelChinese },
        { name: 'Discord', icon: MessagesSquare, link: socialLinks.discord },
        { name: 'Facebook', icon: Facebook, link: socialLinks.facebook },
        { name: 'YouTube', icon: Youtube, link: socialLinks.youtube },
    ];

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">{t('contact.keepInTouch.title')}</h2>
                <p className="mx-auto mb-10 max-w-2xl text-base text-slate-300">{t('contact.keepInTouch.description')}</p>

                <div className="flex flex-wrap justify-center gap-4">
                    {socials.map((social, index) => (
                        <a
                            key={index}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-14 w-14 items-center justify-center rounded-lg border-2 border-white/10 bg-white/5 transition-all hover:border-emerald-500 hover:bg-emerald-500/20"
                            title={social.name}
                        >
                            <social.icon className="h-6 w-6 text-emerald-300" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
