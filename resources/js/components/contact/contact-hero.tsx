import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Handshake, HelpCircle, Mail, Radio, Rocket } from 'lucide-react';

export function ContactHero() {
    const { t } = useLaravelReactI18n();

    const contactChannels = [
        {
            icon: Rocket,
            titleKey: 'contact.hero.channel1.title',
            teamKey: 'contact.hero.channel1.team',
            email: 'info@bluepinefoundation.com',
        },
        {
            icon: Handshake,
            titleKey: 'contact.hero.channel2.title',
            teamKey: 'contact.hero.channel2.team',
            email: 'info@bluepinefoundation.com',
        },
        {
            icon: Radio,
            titleKey: 'contact.hero.channel3.title',
            teamKey: 'contact.hero.channel3.team',
            email: 'info@bluepinefoundation.com',
        },
        {
            icon: HelpCircle,
            titleKey: 'contact.hero.channel4.title',
            teamKey: 'contact.hero.channel4.team',
            email: 'info@bluepinefoundation.com',
        },
    ];

    return (
        <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            {/* 背景图片 */}
            <div className="absolute inset-0">
                <img src="/images/contact_bg.webp" alt="Contact Background" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950/95"></div>
            </div>

            {/* 背景光晕效果 */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 left-1/4 h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-3xl"></div>
                <div className="absolute top-1/2 right-1/4 h-[600px] w-[600px] rounded-full bg-teal-600/8 blur-3xl"></div>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    {/* 左侧内容 */}
                    <div>
                        <div className="mb-6 inline-flex items-center rounded border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-200 uppercase">
                            {t('contact.hero.badge')}
                        </div>
                        <h1 className="mb-4 text-5xl leading-tight font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
                            {t('contact.hero.title')}
                        </h1>
                        <p className="mb-6 text-lg leading-relaxed text-slate-300 md:text-xl">{t('contact.hero.description')}</p>

                        {/* 核心价值主张 */}
                        <div className="rounded-lg border-l-4 border-emerald-500 bg-white/5 p-5 backdrop-blur-sm md:p-6">
                            <h2 className="mb-3 text-xl font-bold text-white">{t('contact.hero.valueTitle')}</h2>
                            <p className="text-sm leading-relaxed text-slate-300 md:text-base">{t('contact.hero.valueDescription')}</p>
                        </div>
                    </div>

                    {/* 右侧快速联系卡片 */}
                    <div className="space-y-4">
                        <div className="mb-4 text-center lg:text-left">
                            <h3 className="text-xl font-bold text-white">{t('contact.hero.quickContact')}</h3>
                            <p className="mt-2 text-sm text-slate-400">{t('contact.hero.quickContactSub')}</p>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                            {contactChannels.map((channel, index) => (
                                <div
                                    key={index}
                                    className="group rounded-lg border-2 border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-emerald-500/50 hover:bg-white/10"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600">
                                            <channel.icon className="h-5 w-5 text-white" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h4 className="mb-0.5 text-sm font-bold text-white">{t(channel.titleKey)}</h4>
                                            <p className="mb-2 text-xs text-emerald-300">{t(channel.teamKey)}</p>
                                            <div className="flex items-start text-sm text-slate-400">
                                                <Mail className="mt-0.5 mr-1.5 h-3.5 w-3.5 shrink-0" />
                                                <span className="text-xs break-all">{channel.email}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
