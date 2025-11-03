import { Handshake, HelpCircle, Mail, Radio, Rocket } from 'lucide-react';

export function ContactHero() {
    const contactChannels = [
        {
            icon: Rocket,
            title: '项目投递',
            team: '投资团队',
            email: 'info@bluepinefoundation.com',
        },
        {
            icon: Handshake,
            title: '生态合作',
            team: '生态合作团队',
            email: 'info@bluepinefoundation.com',
        },
        {
            icon: Radio,
            title: '媒体问询',
            team: '市场传播团队',
            email: 'info@bluepinefoundation.com',
        },
        {
            icon: HelpCircle,
            title: '一般问询',
            team: '行政支持团队',
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
                            CONTACT US
                        </div>
                        <h1 className="mb-4 text-5xl leading-tight font-bold tracking-tight text-white md:text-6xl lg:text-7xl">联系我们</h1>
                        <p className="mb-6 text-lg leading-relaxed text-slate-300 md:text-xl">
                            开启对话,共创未来.我们期待聆听您的声音,无论是项目提案,合作意向还是技术探讨.
                        </p>

                        {/* 核心价值主张 */}
                        <div className="rounded-lg border-l-4 border-emerald-500 bg-white/5 p-5 backdrop-blur-sm md:p-6">
                            <h2 className="mb-3 text-xl font-bold text-white">高效连接,专业响应</h2>
                            <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                                在BLUEPINE,我们重视每一次真诚的联络.我们的专业团队会对您的咨询进行精准分类,并确保在{' '}
                                <span className="font-bold text-emerald-300">2个工作日</span>{' '}
                                内给予初次回复.让我们携手,将您的构想变为推动农业变革的现实.
                            </p>
                        </div>
                    </div>

                    {/* 右侧快速联系卡片 */}
                    <div className="space-y-4">
                        <div className="mb-4 text-center lg:text-left">
                            <h3 className="text-xl font-bold text-white">快速联系通道</h3>
                            <p className="mt-2 text-sm text-slate-400">选择最适合您的联系方式</p>
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
                                            <h4 className="mb-0.5 text-sm font-bold text-white">{channel.title}</h4>
                                            <p className="mb-2 text-xs text-emerald-300">{channel.team}</p>
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
