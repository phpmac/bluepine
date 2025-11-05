import { useLaravelReactI18n } from 'laravel-react-i18n';

export function PrivacyHero() {
    const { currentLocale } = useLaravelReactI18n();
    const isEnglish = currentLocale() === 'en';

    return (
        <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            {/* 背景装饰 */}
            <div className="absolute top-20 right-20 h-80 w-80 opacity-10">
                <svg viewBox="0 0 300 300" className="h-full w-full">
                    <polygon points="150,20 280,80 250,220 50,220 20,80" fill="currentColor" className="text-emerald-400" />
                </svg>
            </div>

            {/* 背景光晕效果 */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/8 blur-3xl"></div>
                <div className="absolute right-1/3 bottom-1/3 h-[500px] w-[500px] rounded-full bg-teal-600/6 blur-3xl"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="max-w-4xl">
                    <div className="mb-6 inline-flex items-center rounded border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-200 uppercase">
                        PRIVACY POLICY
                    </div>
                    <h1 className="mb-4 text-5xl leading-tight font-bold tracking-tight text-white md:text-6xl">
                        {isEnglish ? 'Privacy Policy' : '隐私政策'}
                    </h1>
                    <div className="space-y-4">
                        <p className="text-lg leading-relaxed text-slate-300 md:text-xl">
                            {isEnglish
                                ? 'BLUEPINE TECH FOUNDATION ("we," "us," or "our") operates the https://www.bluepinefoundation.com website and the "Agri-Eco Smart Chain" ecosystem (collectively referred to as the "Service").'
                                : 'BLUEPINE TECH FOUNDATION ( "我们" , "我方" 或 "我们的" ) 运营着 https://www.bluepinefoundation.com 网站以及 Agri-Eco Smart Chain 生态系统 (统称为 "服务" ) .'}
                        </p>
                        <p className="text-lg leading-relaxed text-slate-300 md:text-xl">
                            {isEnglish
                                ? 'We recognize the importance of privacy and are committed to protecting your personal information in a transparent and responsible manner. This policy aims to inform you about how we collect, use, disclose, and protect your information when you use our Service, particularly detailing unique data handling practices related to blockchain technology and decentralized identity.'
                                : '我们深知隐私的重要性, 并承诺以透明和负责任的方式保护您的个人信息. 本政策旨在向您说明, 当您使用我们的服务时, 我们如何收集, 使用, 披露和保护您的信息, 特别是与区块链技术和去中心化身份相关的独特数据处理实践.'}
                        </p>
                        <p className="text-base font-semibold text-emerald-300">
                            {isEnglish
                                ? 'Core Commitment: We adhere to the principle of "Data Minimization" and leverage cutting-edge technologies (such as Zero-Knowledge Proofs and Federated Learning) to embed privacy protection by design.'
                                : '核心承诺: 我们遵循 "数据最小化" 原则, 并利用尖端技术 (如零知识证明, 联邦学习) 在设计之初即嵌入隐私保护.'}
                        </p>
                    </div>
                    <p className="mt-6 text-sm text-slate-400">{isEnglish ? 'Last Updated: November 2025' : '最后更新日期: 2025年11月'}</p>
                </div>
            </div>
        </section>
    );
}
