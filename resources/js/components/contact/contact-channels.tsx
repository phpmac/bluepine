import { contactEmails } from '@/config/emails';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { CheckCircle2, Handshake, HelpCircle, Mail, Radio, Rocket } from 'lucide-react';

export function ContactChannels() {
    const { t } = useLaravelReactI18n();

    const contactChannels = [
        {
            icon: Rocket,
            titleKey: 'contact.channels.channel1.title',
            teamKey: 'contact.channels.channel1.team',
            descriptionKey: 'contact.channels.channel1.description',
            actionKey: 'contact.channels.channel1.action',
            email: contactEmails.project,
            link: '/contact#form',
        },
        {
            icon: Handshake,
            titleKey: 'contact.channels.channel2.title',
            teamKey: 'contact.channels.channel2.team',
            descriptionKey: 'contact.channels.channel2.description',
            actionKey: 'contact.channels.channel2.action',
            email: contactEmails.ecosystem,
            link: '/ecosystem',
        },
        {
            icon: Radio,
            titleKey: 'contact.channels.channel3.title',
            teamKey: 'contact.channels.channel3.team',
            descriptionKey: 'contact.channels.channel3.description',
            email: contactEmails.social,
        },
        {
            icon: HelpCircle,
            titleKey: 'contact.channels.channel4.title',
            teamKey: 'contact.channels.channel4.team',
            descriptionKey: 'contact.channels.channel4.description',
            email: contactEmails.general,
        },
    ];

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">{t('contact.channels.title')}</h2>
                    <p className="mx-auto max-w-2xl text-base text-slate-400">{t('contact.channels.description')}</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {contactChannels.map((channel, index) => (
                        <div
                            key={index}
                            className="group rounded-lg border-2 border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:border-emerald-500/50 hover:bg-white/10"
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600">
                                <channel.icon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="mb-2 text-lg font-bold text-white">{t(channel.titleKey)}</h3>
                            <p className="mb-3 text-xs font-semibold text-emerald-300">{t(channel.teamKey)}</p>
                            <p className="mb-5 min-h-[60px] text-sm leading-relaxed text-slate-300">{t(channel.descriptionKey)}</p>

                            <div className="mb-4 border-t border-white/10 pt-4">
                                <div className="flex items-start text-sm text-slate-300">
                                    <Mail className="mt-0.5 mr-2 h-4 w-4 shrink-0 text-emerald-400" />
                                    <span className="text-xs break-all">{channel.email}</span>
                                </div>
                            </div>

                            {channel.actionKey && (
                                <a
                                    href={channel.link}
                                    className="inline-flex items-center text-sm font-medium text-emerald-300 transition-colors hover:text-emerald-200"
                                >
                                    {t(channel.actionKey)}
                                    <CheckCircle2 className="ml-2 h-4 w-4" />
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
