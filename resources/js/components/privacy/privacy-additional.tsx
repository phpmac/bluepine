import { useLaravelReactI18n } from 'laravel-react-i18n';
import { CheckCircle2 } from 'lucide-react';

export function PrivacyAdditional() {
    const { currentLocale } = useLaravelReactI18n();
    const isEnglish = currentLocale() === 'en';

    const additionalPoliciesZh = [
        {
            title: '国际数据传输',
            items: [
                '我们的服务是全球性的. 您的信息可能会在我们及其服务提供商所在的任何国家/地区进行处理. 我们会采取适当保护措施, 确保此类传输符合适用法律.',
            ],
        },
        {
            title: '数据保留',
            items: [
                '我们仅在实现本政策所述目的所必需的期限内保留您的个人信息, 并遵守法律, 税务或监管要求. 对于链上数据, 由于其不可篡改性, 我们将无法删除.',
            ],
        },
        {
            title: '儿童隐私',
            items: ['我们的服务不面向13周岁 (或相关司法管辖区规定的更高年龄) 以下的儿童. 我们不会故意收集儿童的个人信息.'],
        },
        {
            title: '政策变更',
            items: ['我们可能会不时更新本政策. 任何变更都会在本页面发布更新后的政策, 并更新 "最后更新"日期. 我们鼓励您定期查阅.'],
        },
    ];

    const additionalPoliciesEn = [
        {
            title: 'International Data Transfers',
            items: [
                'Our Service is global. Your information may be processed in any country where we or our service providers operate. We take appropriate safeguards to ensure such transfers comply with applicable laws.',
            ],
        },
        {
            title: 'Data Retention',
            items: [
                'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy and to comply with legal, tax, or regulatory requirements. Regarding on-chain data, due to its immutable nature, we will be unable to delete it.',
            ],
        },
        {
            title: "Children's Privacy",
            items: [
                'Our Service is not directed to children under the age of 13 (or the higher age specified in your jurisdiction). We do not knowingly collect personal information from children.',
            ],
        },
        {
            title: 'Changes to This Policy',
            items: [
                'We may update this policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review it periodically.',
            ],
        },
    ];

    const additionalPolicies = isEnglish ? additionalPoliciesEn : additionalPoliciesZh;

    return (
        <section className="px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
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
