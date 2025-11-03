import { BookOpen, CheckCircle2, Coins, Handshake, Settings } from 'lucide-react';

export function PartnerNetwork() {
    const partnerCategories = [
        {
            icon: BookOpen,
            title: '研究与学术机构',
            directions: [
                '联合进行农业 AI 模型与区块链协议的尖端研究',
                '合作开展田间试验与数据验证, 推动技术成果转化',
                '共同培养兼具农业与科技知识的复合型人才',
            ],
        },
        {
            icon: Handshake,
            title: '农业企业与合作社',
            directions: [
                '成为AESC平台技术与服务的落地试点与推广渠道',
                '提供真实的行业洞察与需求,指导产品研发方向',
                '共同开发基于区块链的绿色农产品溯源与品牌增值方案',
            ],
        },
        {
            icon: Settings,
            title: '技术与平台伙伴',
            directions: [
                'IoT 设备制造商:  共同定制开发低成本, 高可靠性的农业传感设备',
                '云服务商: 优化底层算力与存储基础设施',
                '数据提供商: 整合气象,遥感,市场行情等多元数据',
            ],
        },
        {
            icon: Coins,
            title: '金融机构与节点',
            directions: [
                '交易所:  共同推动AESC及相关 RWA 资产的流动性',
                '托管与审计机构:  确保资产安全与合规',
                '传统金融机构:  共同设计结构化金融产品, 将传统资本引入农业 Web3 生态',
            ],
        },
    ];

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">携手全球伙伴,构建完整价值链</h2>
                    <p className="mx-auto max-w-3xl text-base text-slate-300">
                        我们与来自不同领域的领军者紧密合作,共同解决复杂挑战,释放生态系统的全部潜力
                    </p>
                </div>

                {/* 四栏合作伙伴类别 */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {partnerCategories.map((category, index) => (
                        <div
                            key={index}
                            className="rounded-lg border-2 border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50"
                        >
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600">
                                <category.icon className="h-5 w-5 text-white" />
                            </div>
                            <h3 className="mb-3 text-lg font-bold text-white">{category.title}</h3>
                            <ul className="space-y-2">
                                {category.directions.map((direction, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-slate-300">
                                        <CheckCircle2 className="mt-0.5 mr-2 h-4 w-4 shrink-0 text-emerald-400" />
                                        <span>{direction}</span>
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
