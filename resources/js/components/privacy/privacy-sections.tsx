import { Eye, Lock, Shield, UserCheck } from 'lucide-react';

export function PrivacySections() {
    const sections = [
        {
            icon: Lock,
            title: '我们收集的信息',
            content: [
                {
                    subtitle: '个人信息',
                    text: '当您通过我们的网站联系我们,订阅新闻通讯或提交项目申请时,我们可能会收集以下信息:姓名,电子邮箱地址,公司名称,职位,联系电话等.',
                },
                {
                    subtitle: '自动收集的信息',
                    text: '我们可能会自动收集某些信息,包括但不限于:IP地址,浏览器类型,访问时间,访问页面,引荐来源等.这些信息用于分析网站使用情况和改善用户体验.',
                },
                {
                    subtitle: '区块链相关数据',
                    text: '如果您与我们的区块链平台 (如AESC) 进行交互,我们可能会收集钱包地址,交易记录等链上公开数据.这些数据本质上是公开的,存储在区块链上.',
                },
            ],
        },
        {
            icon: Eye,
            title: '我们如何使用您的信息',
            content: [
                {
                    subtitle: '服务提供',
                    text: '处理您的咨询,项目申请或合作意向,并为您提供所请求的服务.',
                },
                {
                    subtitle: '沟通',
                    text: '向您发送与您咨询相关的回复,项目进展更新,新闻通讯及重要通知.',
                },
                {
                    subtitle: '改进与分析',
                    text: '分析网站使用数据,优化用户体验,改进产品与服务.',
                },
                {
                    subtitle: '合规与安全',
                    text: '遵守法律法规要求,保护我们的合法权益,防止欺诈和非法活动.',
                },
            ],
        },
        {
            icon: Shield,
            title: '信息保护',
            content: [
                {
                    subtitle: '安全措施',
                    text: '我们采用行业标准的安全技术和程序来保护您的个人信息,包括但不限于:数据加密传输(SSL/TLS),访问控制,定期安全审计等.',
                },
                {
                    subtitle: '数据存储',
                    text: '您的个人信息存储在安全的服务器上,仅授权人员可以访问,且这些人员负有保密义务.',
                },
                {
                    subtitle: '区块链数据',
                    text: '请注意,存储在区块链上的数据是不可变的且公开的.我们无法删除或修改已上链的信息.',
                },
            ],
        },
        {
            icon: UserCheck,
            title: '您的权利',
            content: [
                {
                    subtitle: '访问权',
                    text: '您有权请求访问我们持有的关于您的个人信息.',
                },
                {
                    subtitle: '更正权',
                    text: '如果您的个人信息不准确或不完整,您有权要求更正.',
                },
                {
                    subtitle: '删除权',
                    text: '在某些情况下,您有权要求删除您的个人信息 (但链上数据除外).',
                },
                {
                    subtitle: '反对权',
                    text: '您有权反对我们处理您的个人信息,特别是用于营销目的时.',
                },
                {
                    subtitle: '退订权',
                    text: '您可以随时通过邮件底部的退订链接取消订阅我们的新闻通讯.',
                },
            ],
        },
    ];

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="space-y-12">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <div className="mb-6 flex items-center">
                                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600">
                                    <section.icon className="h-6 w-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                            </div>

                            <div className="space-y-4">
                                {section.content.map((item, idx) => (
                                    <div key={idx} className="rounded-lg border-l-4 border-emerald-500/50 bg-white/5 p-5 backdrop-blur-sm">
                                        <h3 className="mb-2 text-lg font-bold text-white">{item.subtitle}</h3>
                                        <p className="text-sm leading-relaxed text-slate-300">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
