import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Database, Eye, Share2, Shield, UserCheck } from 'lucide-react';

export function PrivacySections() {
    const { currentLocale } = useLaravelReactI18n();
    const isEnglish = currentLocale() === 'en';

    const sectionsZh = [
        {
            icon: Database,
            title: '信息的收集',
            content: [
                {
                    subtitle: '1. 您直接提供给我们的信息',
                    items: [
                        '账户信息: 当您创建去中心化身份时, 我们会收集您自愿提供的身份标识符, 但不强制要求真实姓名.',
                        '联系信息: 当您联系我们或注册订阅时, 提供的姓名, 电子邮件地址等.',
                        '用户内容: 您通过我们的平台上传的数据, 如作物日志, 农田图像, 咨询问题.',
                        '财务信息: 如果您参与代币销售或知识付费, 我们会处理您的区块链钱包地址和交易哈希, 而非传统银行卡信息.',
                    ],
                },
                {
                    subtitle: '2. 我们自动收集的信息',
                    items: [
                        '链上数据: 与您的钱包地址相关的公开区块链交易记录, 持有的代币和NFT.',
                        '使用数据: 您与服务交互的数据, 如IP地址, 浏览器类型, 访问时间, 点击流数据以及通过cookies和类似技术收集的数据.',
                        '设备信息: 设备标识符, 操作系统和网络信息.',
                    ],
                },
                {
                    subtitle: '3. 从第三方来源获得的信息',
                    items: ['我们可能从合作伙伴 (如数据提供商, 农业合作社) 那里接收关于您的信息, 但这些信息将按照本政策处理.'],
                },
            ],
        },
        {
            icon: Eye,
            title: '信息的使用',
            content: [
                {
                    subtitle: '',
                    items: [
                        '提供和维护服务: 运营, 维护和改进AESC平台及所有功能.',
                        '个性化用户体验: 基于您的用户画像和链上行为, 通过AI算法为您推送相关的农业服务, 内容和市场信息.',
                        '研究与开发: 使用匿名化, 聚合化的数据训练和优化我们的AI模型 (例如, 使用联邦学习技术, 在不获取原始数据的情况下改进病虫害识别模型).',
                        '通信: 向您发送服务公告, 技术更新, 安全警报以及支持和管理消息.',
                        '安全与合规: 检测, 预防和解决欺诈, 滥用, 安全和技术问题；遵守法律义务.',
                    ],
                },
            ],
        },
        {
            icon: Share2,
            title: '信息的共享与披露',
            content: [
                {
                    subtitle: '',
                    items: [
                        '征得您的同意: 在您明确同意的情况下, 我们会按您同意的方式共享信息.',
                        '服务提供商: 与帮助我们运营服务的受信任第三方 (如云主机提供商, 数据分析商) 共享, 但他们必须遵守严格的保密义务.',
                        '区块链的固有特性: 请注意, 通过区块链网络完成的交易是公开且不可篡改的. 您的钱包地址和交易历史等链上数据对公众可见.',
                        '法律要求: 如果法律, 法规, 法律程序或政府强制要求, 我们可能会披露信息.',
                        '业务转让: 如果涉及合并, 收购或资产出售, 您的信息可能被转移, 我们将提前通知您.',
                    ],
                },
            ],
        },
        {
            icon: Shield,
            title: '数据安全',
            content: [
                {
                    subtitle: '',
                    items: ['对敏感数据进行端到端加密.', '定期进行安全审计和渗透测试.', '使用零知识证明 等技术, 实现数据的 "可用不可见" .'],
                },
            ],
        },
        {
            icon: UserCheck,
            title: '您的权利与选择',
            content: [
                {
                    subtitle: '',
                    items: [
                        '访问与更正: 访问我们持有的关于您的个人信息, 并请求更正不准确之处.',
                        '删除: 请求删除您的个人信息.',
                        '限制处理: 在某些情况下, 请求限制我们处理您的信息.',
                        '数据可移植性: 以结构化, 通用的格式接收您的个人信息.',
                        '反对处理: 反对基于合法利益进行的某些处理.',
                        '撤销同意: 随时撤销您已给予的同意.',
                    ],
                },
                {
                    subtitle: '关于去中心化身份',
                    items: ['您可以通过您的DID管理您的部分画像数据, 并控制其对平台的授权范围.'],
                },
            ],
        },
    ];

    const sectionsEn = [
        {
            icon: Database,
            title: 'Information We Collect',
            content: [
                {
                    subtitle: '1) Information You Provide Directly to Us',
                    items: [
                        'Account Information: When you create a decentralized identity, we collect identifiers you voluntarily provide, without mandating your real name.',
                        'Contact Information: Name, email address, etc., provided when you contact us or register for subscriptions.',
                        'User Content: Data you upload via our platform, such as crop logs, field images, or consultation questions.',
                        'Financial Information: If you participate in token sales or paid knowledge services, we process your blockchain wallet address and transaction hashes, not traditional bank card details.',
                    ],
                },
                {
                    subtitle: '2) Information Collected Automatically',
                    items: [
                        'On-Chain Data: Public blockchain transaction records associated with your wallet address, including held tokens and NFTs.',
                        'Usage Data: Data about your interaction with the Service, such as IP address, browser type, access times, clickstream data, and data collected via cookies and similar technologies.',
                        'Device Information: Device identifiers, operating system, and network information.',
                    ],
                },
                {
                    subtitle: '3) Information from Third-Party Sources',
                    items: [
                        'We may receive information about you from partners (e.g., data providers, agricultural cooperatives), which will be handled according to this policy.',
                    ],
                },
            ],
        },
        {
            icon: Eye,
            title: 'How We Use Your Information',
            content: [
                {
                    subtitle: '',
                    items: [
                        'Providing and Maintaining the Service: Operating, maintaining, and improving the AESC platform and all its features.',
                        'Personalizing User Experience: Pushing relevant agricultural services, content, and market information to you via AI algorithms based on your user profile and on-chain behavior.',
                        'Research and Development: Using anonymized, aggregated data to train and optimize our AI models (e.g., using Federated Learning technology to improve pest/disease recognition models without accessing raw data).',
                        'Communication: Sending you service announcements, technical updates, security alerts, and support/administrative messages.',
                        'Security and Compliance: Detecting, preventing, and addressing fraud, abuse, security, and technical issues; complying with legal obligations.',
                    ],
                },
            ],
        },
        {
            icon: Share2,
            title: 'Sharing and Disclosure of Information',
            content: [
                {
                    subtitle: '',
                    items: [
                        'With Your Consent: We share information as you have specifically agreed to.',
                        'Service Providers: With trusted third parties who help us operate the Service (e.g., cloud hosting providers, data analysts), who are bound by strict confidentiality obligations.',
                        'Inherent Nature of Blockchain: Please note that transactions conducted through blockchain networks are public and immutable. Your on-chain data, such as wallet address and transaction history, is visible to the public.',
                        'Legal Requirements: We may disclose information if required by law, regulation, legal process, or governmental request.',
                        'Business Transfers: In connection with a merger, acquisition, or sale of assets, your information may be transferred, and we will notify you beforehand.',
                    ],
                },
            ],
        },
        {
            icon: Shield,
            title: 'Data Security',
            content: [
                {
                    subtitle: '',
                    items: [
                        'End-to-end encryption for sensitive data.',
                        'Regular security audits and penetration testing.',
                        'Utilizing technologies like Zero-Knowledge Proofs to achieve "data usability without visibility."',
                    ],
                },
            ],
        },
        {
            icon: UserCheck,
            title: 'Your Rights and Choices',
            content: [
                {
                    subtitle: '',
                    items: [
                        'Access and Correction: Access the personal information we hold about you and request correction of inaccuracies.',
                        'Deletion: Request deletion of your personal information.',
                        'Restriction of Processing: Request restriction of how we process your information under certain circumstances.',
                        'Data Portability: Receive your personal information in a structured, commonly used format.',
                        'Objection to Processing: Object to certain processing based on legitimate interests.',
                        'Withdrawal of Consent: Withdraw consent you have provided at any time.',
                    ],
                },
                {
                    subtitle: 'Regarding Decentralized Identity',
                    items: ['You can manage parts of your profile data via your DID and control its authorization scope to the platform.'],
                },
            ],
        },
    ];

    const sections = isEnglish ? sectionsEn : sectionsZh;

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="space-y-12">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <div className="mb-6 flex items-center">
                                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-emerald-500 to-teal-600">
                                    <section.icon className="h-6 w-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                            </div>

                            <div className="space-y-4">
                                {section.content.map((item, idx) => (
                                    <div key={idx} className="rounded-lg border-l-4 border-emerald-500/50 bg-white/5 p-5 backdrop-blur-sm">
                                        {item.subtitle && <h3 className="mb-3 text-base font-bold text-white">{item.subtitle}</h3>}
                                        <ul className="space-y-2">
                                            {item.items.map((text, textIdx) => (
                                                <li key={textIdx} className="text-sm leading-relaxed text-slate-300">
                                                    • {text}
                                                </li>
                                            ))}
                                        </ul>
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
