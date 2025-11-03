import { CheckCircle2 } from 'lucide-react';

export function PrivacyAdditional() {
    const additionalPolicies = [
        {
            title: '信息共享',
            items: [
                '我们不会出售, 出租或交易您的个人信息给第三方.',
                '我们可能会与服务提供商 (如云服务商, 分析工具提供商) 共享必要信息, 但这些服务提供商受合同约束, 仅可按我们的指示处理数据.',
                '在法律要求或为保护我们的合法权益时, 我们可能会披露您的信息.',
            ],
        },
        {
            title: 'Cookie与追踪技术',
            items: [
                '我们使用Cookie和类似技术来改善网站功能, 分析流量并提供个性化体验.',
                '您可以通过浏览器设置管理Cookie偏好, 但禁用Cookie可能影响网站某些功能.',
                '我们可能使用第三方分析工具 (如Google Analytics) 来了解用户行为.',
            ],
        },
        {
            title: '第三方链接',
            items: ['我们的网站可能包含指向第三方网站的链接. 我们对这些外部网站的隐私实践不承担责任.', '我们建议您在访问第三方网站时查看其隐私政策.'],
        },
        {
            title: '儿童隐私',
            items: ['我们的服务不面向13岁以下儿童. 我们不会有意收集儿童的个人信息.', '如果我们发现无意中收集了儿童的个人信息, 我们将立即删除.'],
        },
        {
            title: '国际数据传输',
            items: [
                '您的信息可能会被传输到您所在国家 / 地区以外的地方进行处理和存储.',
                '我们会确保采取适当措施保护跨境传输的数据, 符合适用的数据保护法律.',
            ],
        },
        {
            title: '政策更新',
            items: [
                '我们可能会不时更新本隐私政策以反映我们实践的变化.',
                '任何重大变更将在网站上公布, 并在可能的情况下通过电子邮件通知您.',
                '本政策的 "最后更新日期" 将显示在页面顶部.',
            ],
        },
    ];

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">其他重要信息</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {additionalPolicies.map((policy, index) => (
                        <div key={index} className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                            <h3 className="mb-5 text-xl font-bold text-white">{policy.title}</h3>
                            <ul className="space-y-3">
                                {policy.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start text-slate-300">
                                        <CheckCircle2 className="mt-0.5 mr-3 h-4 w-4 shrink-0 text-emerald-400" />
                                        <span className="text-sm leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
