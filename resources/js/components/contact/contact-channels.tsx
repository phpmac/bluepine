import { CheckCircle2, Handshake, HelpCircle, Mail, Radio, Rocket } from 'lucide-react';

export function ContactChannels() {
    const contactChannels = [
        {
            icon: Rocket,
            title: '项目投递',
            team: '投资团队',
            description: '如果您是寻求融资的创业者,请通过此渠道提交您的商业计划书',
            action: '提交您的项目',
            email: 'info@bluepinefoundation.com',
            link: '/contact#form',
        },
        {
            icon: Handshake,
            title: '生态合作',
            team: '生态合作团队',
            description: '适用于技术整合,市场推广,战略联盟等合作洽谈',
            action: '提交合作意向',
            email: 'info@bluepinefoundation.com',
            link: '/ecosystem',
        },
        {
            icon: Radio,
            title: '媒体问询',
            team: '市场传播团队',
            description: '欢迎媒体朋友,分析师及内容创作者就品牌故事,新闻动态进行联系',
            email: 'info@bluepinefoundation.com',
        },
        {
            icon: HelpCircle,
            title: '一般问询',
            team: '行政支持团队',
            description: '适用于其他所有问题,包括会议,活动及其他综合事务',
            email: 'info@bluepinefoundation.com',
        },
    ];

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">详细联系方式</h2>
                    <p className="mx-auto max-w-2xl text-base text-slate-400">根据您的需求选择最合适的联系通道,我们的专业团队将为您提供精准服务</p>
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
                            <h3 className="mb-2 text-lg font-bold text-white">{channel.title}</h3>
                            <p className="mb-3 text-xs font-semibold text-emerald-300">{channel.team}</p>
                            <p className="mb-5 min-h-[60px] text-sm leading-relaxed text-slate-300">{channel.description}</p>

                            <div className="mb-4 border-t border-white/10 pt-4">
                                <div className="flex items-start text-sm text-slate-300">
                                    <Mail className="mt-0.5 mr-2 h-4 w-4 shrink-0 text-emerald-400" />
                                    <span className="text-xs break-all">{channel.email}</span>
                                </div>
                            </div>

                            {channel.action && (
                                <a
                                    href={channel.link}
                                    className="inline-flex items-center text-sm font-medium text-emerald-300 transition-colors hover:text-emerald-200"
                                >
                                    {channel.action}
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
