import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import { Head } from '@inertiajs/react';
import {
    ArrowRight,
    BookOpen,
    Brain,
    ChevronLeft,
    ChevronRight,
    Code,
    Database,
    FileText,
    Layers,
    Network,
    QrCode,
    Shield,
    TrendingUp,
    UserCheck,
    Vote,
    Wallet,
    Zap,
} from 'lucide-react';
import React, { useState } from 'react';

export default function Aesc2() {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const categories = [
        {
            id: 'data-ai',
            icon: Brain,
            title: '数据与AI服务',
            description: '贡献数据,获取洞察,利用AI优化您的生产',
        },
        {
            id: 'defi-rwa',
            icon: TrendingUp,
            title: 'DeFi 与 RWA 金融',
            description: '质押,借贷,投保,释放您农业资产的金融潜力',
        },
        {
            id: 'knowledge',
            icon: BookOpen,
            title: '知识与内容市场',
            description: '学习顶尖农业知识,或将您的经验转化为收入',
        },
        {
            id: 'supply-chain',
            icon: QrCode,
            title: '溯源与供应链',
            description: '验证产品来源,提升品牌价值,建立消费者信任',
        },
        {
            id: 'governance',
            icon: Vote,
            title: '治理与社区',
            description: '参与生态决策,共同塑造AESC的未来',
        },
    ];

    const featuredDapps = [
        {
            logo: Database,
            name: 'AgriData Hub',
            description: '农业数据交易与AI服务平台',
            tags: ['#数据市场', '#AI'],
            metric: '50K+ 活跃用户',
        },
        {
            logo: Shield,
            name: 'AESC Vault',
            description: '安全质押与收益聚合器',
            tags: ['#DeFi', '#质押'],
            metric: '$25M TVL',
        },
        {
            logo: BookOpen,
            name: 'AgriExpert',
            description: '农业知识付费与培训平台',
            tags: ['#知识', '#内容'],
            metric: '3000+ 专家',
        },
        {
            logo: Shield,
            name: 'FarmInsure',
            description: '去中心化农业保险协议',
            tags: ['#DeFi', '#保险'],
            metric: '$10M 保额',
        },
        {
            logo: QrCode,
            name: 'TraceChain',
            description: '区块链农产品溯源系统',
            tags: ['#溯源', '#供应链'],
            metric: '100K+ 产品',
        },
        {
            logo: Network,
            name: 'AESC DAO',
            description: '生态治理与提案投票平台',
            tags: ['#治理', '#DAO'],
            metric: '20K+ 投票者',
        },
    ];

    const ecoStats = [
        { label: 'AESC 总质押量', value: '150,000,000', unit: 'AESC' },
        { label: '生态日活跃用户', value: '12,500', unit: '人' },
        { label: 'RWA 资产总价值', value: '$45M', unit: '' },
        { label: '累计数据贡献奖励', value: '5,000,000', unit: 'AESC' },
    ];

    const testimonials = [
        {
            name: '张伟',
            role: '咖啡种植户 - 云南',
            icon: TrendingUp,
            content: '通过AgriData Hub上传我的农田数据, 每月能获得稳定的AESC代币奖励. 用这些代币在AgriExpert学习了新技术, 产量提升了20%',
        },
        {
            name: '李明博士',
            role: '农业AI专家',
            icon: Brain,
            content: '我在AgriExpert平台上分享农业病虫害识别模型, 已经服务了上千位农户, 同时也获得了可观的收入. AESC让知识真正产生了价值',
        },
        {
            name: 'Maria Santos',
            role: '有机农场主 - 菲律宾',
            icon: Layers,
            content: '使用TraceChain为我的有机蔬菜提供溯源证明后, 产品价格提升了30%. 消费者现在可以扫码看到从种植到运输的全过程',
        },
    ];

    const devResources = [
        { icon: FileText, title: '公链测试网文档', link: '#' },
        { icon: Code, title: '智能合约开发模板', link: '#' },
        { icon: Network, title: 'API 接口文档', link: '#' },
        { icon: Zap, title: '开发者资助计划详情', link: '#' },
    ];

    const scrollToCategory = (categoryId: string) => {
        setActiveCategory(categoryId);
        const element = document.getElementById(`category-${categoryId}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <>
            <Head title="AESC 生态入口" />
            <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
                <Navigation currentPage="aesc2" />
                <main className="pt-20">
                    {/* 第一屏 - 页首横幅 */}
                    <section className="relative flex min-h-screen items-center overflow-hidden px-4 sm:px-6 lg:px-8">
                        {/* 背景装饰 */}
                        <div className="absolute inset-0">
                            <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-emerald-500/20 blur-3xl" />
                            <div className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-teal-500/20 blur-3xl delay-1000" />
                        </div>

                        {/* 网格背景 */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] bg-size-[4rem_4rem]" />

                        <div className="relative z-10 mx-auto w-full max-w-7xl py-20">
                            <div className="text-center">
                                <div className="mb-6 inline-flex items-center rounded border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-200">
                                    <Layers className="mr-2 h-4 w-4" />
                                    AESC ECOSYSTEM PORTAL
                                </div>
                                <h1 className="mb-6 text-5xl leading-tight font-bold tracking-tight text-white md:text-6xl">AESC 生态入口</h1>
                                <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-slate-300">
                                    欢迎进入农业的未来.在这里,每一份贡献都被认可,每一份价值都能流通.
                                </p>

                                {/* 核心行动按钮 */}
                                <div className="flex flex-wrap justify-center gap-4">
                                    <a
                                        href="#dapps"
                                        className="inline-flex cursor-pointer items-center rounded bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-4 text-lg font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700"
                                    >
                                        <Zap className="mr-2 h-5 w-5" />
                                        启动 AESC DAPP
                                    </a>
                                    <a
                                        href="#categories"
                                        className="inline-flex cursor-pointer items-center rounded border-2 border-white/50 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-white/10"
                                    >
                                        <Network className="mr-2 h-5 w-5" />
                                        浏览生态应用
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 第二部分 - 生态核心组件 */}
                    <section id="categories" className="px-4 py-32 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-7xl">
                            <div className="mb-12 text-center">
                                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">探索生态矩阵</h2>
                                <p className="mx-auto max-w-2xl text-base text-slate-300">一个充满活力的去中心化应用世界,为您服务</p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {categories.map((category, index) => (
                                    <button
                                        key={index}
                                        onClick={() => scrollToCategory(category.id)}
                                        className={`group rounded-lg border-2 bg-white/5 p-6 text-left backdrop-blur-sm transition-all hover:scale-105 ${
                                            activeCategory === category.id ? 'border-emerald-500' : 'border-white/10 hover:border-emerald-500/50'
                                        }`}
                                    >
                                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-white/10 transition-all group-hover:bg-emerald-500/20">
                                            <category.icon className="h-7 w-7 text-emerald-300" />
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold text-white">{category.title}</h3>
                                        <p className="mb-3 text-sm text-slate-300">{category.description}</p>
                                        <div className="flex items-center text-emerald-300 transition-all group-hover:translate-x-2">
                                            <span className="text-xs font-semibold">了解更多</span>
                                            <ArrowRight className="ml-2 h-3 w-3" />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 第三部分 - 热门DApp推荐 */}
                    <section id="dapps" className="px-4 py-32 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-7xl">
                            <div className="mb-12 text-center">
                                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">热门生态应用</h2>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {featuredDapps.map((dapp, index) => (
                                    <div
                                        key={index}
                                        id={index === 0 ? `category-${categories[0].id}` : undefined}
                                        className="rounded-lg border-2 border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-emerald-500/50"
                                    >
                                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                                            <dapp.logo className="h-6 w-6 text-emerald-300" />
                                        </div>
                                        <h3 className="mb-2 text-base font-bold text-white">{dapp.name}</h3>
                                        <p className="mb-3 text-xs text-slate-300">{dapp.description}</p>
                                        <div className="mb-3 flex flex-wrap gap-2">
                                            {dapp.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-300"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="mb-3 text-xs font-semibold text-green-400">{dapp.metric}</div>
                                        <a
                                            href="#"
                                            className="inline-flex w-full cursor-pointer items-center justify-center rounded bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-2 text-xs font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700"
                                        >
                                            进入应用
                                            <ArrowRight className="ml-2 h-3 w-3" />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 第四部分 - 新手指引 */}
                    <section className="px-4 py-32 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-7xl">
                            <div className="mb-12 text-center">
                                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">三步开启您的AESC之旅</h2>
                            </div>

                            <div className="grid gap-8 md:grid-cols-3">
                                {/* 步骤1 */}
                                <div className="relative text-center">
                                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-lg border-2 border-emerald-500 bg-emerald-500/20">
                                        <UserCheck className="h-10 w-10 text-emerald-300" />
                                    </div>
                                    <div className="mb-3 text-5xl font-bold text-emerald-500/20">01</div>
                                    <h3 className="mb-3 text-xl font-bold text-white">创建身份</h3>
                                    <p className="mb-4 text-sm text-slate-300">进入AESC官方DAPP,生成您的去中心化身份(DID).这是您在生态中的通用护照</p>
                                    <a
                                        href="#"
                                        className="inline-flex cursor-pointer items-center rounded border border-white/30 px-4 py-2 text-xs font-medium text-white transition-all hover:bg-white/10"
                                    >
                                        DAPP链接
                                        <ArrowRight className="ml-2 h-3 w-3" />
                                    </a>
                                </div>

                                {/* 步骤2 */}
                                <div className="relative text-center">
                                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-lg border-2 border-emerald-500 bg-emerald-500/20">
                                        <Wallet className="h-10 w-10 text-emerald-300" />
                                    </div>
                                    <div className="mb-3 text-5xl font-bold text-emerald-500/20">02</div>
                                    <h3 className="mb-3 text-xl font-bold text-white">获取AESC</h3>
                                    <p className="mb-4 text-sm text-slate-300">获取AESC代币,这是驱动所有生态活动的燃料.您可以通过交易所购买</p>
                                    <a
                                        href="#"
                                        className="inline-flex cursor-pointer items-center rounded border border-white/30 px-4 py-2 text-xs font-medium text-white transition-all hover:bg-white/10"
                                    >
                                        查看支持交易所
                                        <ArrowRight className="ml-2 h-3 w-3" />
                                    </a>
                                </div>

                                {/* 步骤3 */}
                                <div className="relative text-center">
                                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-lg border-2 border-emerald-500 bg-emerald-500/20">
                                        <Network className="h-10 w-10 text-emerald-300" />
                                    </div>
                                    <div className="mb-3 text-5xl font-bold text-emerald-500/20">03</div>
                                    <h3 className="mb-3 text-xl font-bold text-white">探索与参与</h3>
                                    <p className="mb-4 text-sm text-slate-300">连接钱包,开始探索DApp.根据您的身份,我们为您推荐最佳起点</p>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        <a
                                            href="#"
                                            className="rounded border border-white/30 px-3 py-1.5 text-xs text-white transition-all hover:bg-white/10"
                                        >
                                            我是农户
                                        </a>
                                        <a
                                            href="#"
                                            className="rounded border border-white/30 px-3 py-1.5 text-xs text-white transition-all hover:bg-white/10"
                                        >
                                            我是专家
                                        </a>
                                        <a
                                            href="#"
                                            className="rounded border border-white/30 px-3 py-1.5 text-xs text-white transition-all hover:bg-white/10"
                                        >
                                            我是消费者
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 第五部分 - 生态数据看板 */}
                    <section className="px-4 py-32 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-7xl">
                            <div className="mb-12 text-center">
                                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">生态实时脉搏</h2>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                                {ecoStats.map((stat, index) => (
                                    <div key={index} className="rounded-lg border-2 border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
                                        <div className="mb-2 text-xs text-slate-400">{stat.label}</div>
                                        <div className="mb-1 text-2xl font-bold text-emerald-300">{stat.value}</div>
                                        {stat.unit && <div className="text-xs text-slate-500">{stat.unit}</div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 第六部分 - 用户案例精选 */}
                    <section className="px-4 py-32 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-7xl">
                            <div className="mb-12 text-center">
                                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">他们正在AESC生态中创造价值</h2>
                            </div>

                            <div className="relative mx-auto max-w-4xl">
                                {/* 证言卡片 */}
                                <div className="rounded-lg border-2 border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-12">
                                    <div className="mb-6 text-center">
                                        <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600">
                                            {React.createElement(testimonials[currentTestimonial].icon, { className: 'h-8 w-8 text-white' })}
                                        </div>
                                        <h3 className="mb-1 text-lg font-bold text-white">{testimonials[currentTestimonial].name}</h3>
                                        <p className="text-xs text-emerald-300">{testimonials[currentTestimonial].role}</p>
                                    </div>
                                    <p className="mb-6 text-center text-base leading-relaxed text-slate-300">
                                        "{testimonials[currentTestimonial].content}"
                                    </p>

                                    {/* 导航按钮 */}
                                    <div className="flex items-center justify-center gap-3">
                                        <button
                                            onClick={prevTestimonial}
                                            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-white/30 transition-all hover:bg-white/10"
                                        >
                                            <ChevronLeft className="h-4 w-4 text-white" />
                                        </button>
                                        <div className="flex gap-2">
                                            {testimonials.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setCurrentTestimonial(index)}
                                                    className={`h-2 w-2 rounded-full ${index === currentTestimonial ? 'bg-emerald-400' : 'bg-white/30'}`}
                                                />
                                            ))}
                                        </div>
                                        <button
                                            onClick={nextTestimonial}
                                            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-white/30 transition-all hover:bg-white/10"
                                        >
                                            <ChevronRight className="h-4 w-4 text-white" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 第七部分 - 开发者专区 */}
                    <section className="px-4 py-32 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-7xl">
                            <div className="rounded-lg border-2 border-white/10 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 p-8 backdrop-blur-sm md:p-12">
                                <div className="mb-4 flex justify-center">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/10">
                                        <Code className="h-8 w-8 text-emerald-300" />
                                    </div>
                                </div>
                                <h2 className="mb-3 text-center text-2xl font-bold tracking-tight text-white md:text-3xl">
                                    构建下一个引爆生态的DApp?
                                </h2>
                                <p className="mx-auto mb-8 max-w-2xl text-center text-base text-slate-300">
                                    我们为开发者提供了完善的基础设施,助您快速构建和部署
                                </p>

                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                    {devResources.map((resource, index) => (
                                        <a
                                            key={index}
                                            href={resource.link}
                                            className="group rounded-lg border border-white/10 bg-white/5 p-4 text-center transition-all hover:border-emerald-500/50 hover:bg-white/10"
                                        >
                                            <div className="mb-3 flex justify-center">
                                                <resource.icon className="h-6 w-6 text-emerald-300" />
                                            </div>
                                            <h3 className="text-xs font-semibold text-white group-hover:text-emerald-300">{resource.title}</h3>
                                        </a>
                                    ))}
                                </div>

                                <div className="mt-8 text-center">
                                    <a
                                        href="#"
                                        className="inline-flex cursor-pointer items-center rounded bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700"
                                    >
                                        申请开发者资助
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer transparent />
            </div>
        </>
    );
}
