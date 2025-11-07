import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import { Head } from '@inertiajs/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
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
    const { t } = useLaravelReactI18n();
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const categories = [
        {
            id: 'data-ai',
            icon: Brain,
            titleKey: 'aesc2.categories.category1.title',
            descriptionKey: 'aesc2.categories.category1.description',
        },
        {
            id: 'defi-rwa',
            icon: TrendingUp,
            titleKey: 'aesc2.categories.category2.title',
            descriptionKey: 'aesc2.categories.category2.description',
        },
        {
            id: 'knowledge',
            icon: BookOpen,
            titleKey: 'aesc2.categories.category3.title',
            descriptionKey: 'aesc2.categories.category3.description',
        },
        {
            id: 'supply-chain',
            icon: QrCode,
            titleKey: 'aesc2.categories.category4.title',
            descriptionKey: 'aesc2.categories.category4.description',
        },
        {
            id: 'governance',
            icon: Vote,
            titleKey: 'aesc2.categories.category5.title',
            descriptionKey: 'aesc2.categories.category5.description',
        },
    ];

    const featuredDapps = [
        {
            logo: Database,
            nameKey: 'aesc2.dapps.dapp1.name',
            descriptionKey: 'aesc2.dapps.dapp1.description',
            tags: ['#数据市场', '#AI'],
            metricKey: 'aesc2.dapps.dapp1.metric',
        },
        {
            logo: Shield,
            nameKey: 'aesc2.dapps.dapp2.name',
            descriptionKey: 'aesc2.dapps.dapp2.description',
            tags: ['#DeFi', '#质押'],
            metricKey: 'aesc2.dapps.dapp2.metric',
        },
        {
            logo: BookOpen,
            nameKey: 'aesc2.dapps.dapp3.name',
            descriptionKey: 'aesc2.dapps.dapp3.description',
            tags: ['#知识', '#内容'],
            metricKey: 'aesc2.dapps.dapp3.metric',
        },
        {
            logo: Shield,
            nameKey: 'aesc2.dapps.dapp4.name',
            descriptionKey: 'aesc2.dapps.dapp4.description',
            tags: ['#DeFi', '#保险'],
            metricKey: 'aesc2.dapps.dapp4.metric',
        },
        {
            logo: QrCode,
            nameKey: 'aesc2.dapps.dapp5.name',
            descriptionKey: 'aesc2.dapps.dapp5.description',
            tags: ['#溯源', '#供应链'],
            metricKey: 'aesc2.dapps.dapp5.metric',
        },
        {
            logo: Network,
            nameKey: 'aesc2.dapps.dapp6.name',
            descriptionKey: 'aesc2.dapps.dapp6.description',
            tags: ['#治理', '#DAO'],
            metricKey: 'aesc2.dapps.dapp6.metric',
        },
    ];

    const ecoStats = [
        { labelKey: 'aesc2.stats.stat1.label', value: '150,000,000', unitKey: 'aesc2.stats.stat1.unit' },
        { labelKey: 'aesc2.stats.stat2.label', value: '12,500', unitKey: 'aesc2.stats.stat2.unit' },
        { labelKey: 'aesc2.stats.stat3.label', value: '$45M', unitKey: '' },
        { labelKey: 'aesc2.stats.stat4.label', value: '5,000,000', unitKey: 'aesc2.stats.stat4.unit' },
    ];

    const testimonials = [
        {
            nameKey: 'aesc2.testimonials.testimonial1.name',
            roleKey: 'aesc2.testimonials.testimonial1.role',
            icon: TrendingUp,
            contentKey: 'aesc2.testimonials.testimonial1.content',
        },
        {
            nameKey: 'aesc2.testimonials.testimonial2.name',
            roleKey: 'aesc2.testimonials.testimonial2.role',
            icon: Brain,
            contentKey: 'aesc2.testimonials.testimonial2.content',
        },
        {
            nameKey: 'aesc2.testimonials.testimonial3.name',
            roleKey: 'aesc2.testimonials.testimonial3.role',
            icon: Layers,
            contentKey: 'aesc2.testimonials.testimonial3.content',
        },
    ];

    const devResources = [
        { icon: FileText, titleKey: 'aesc2.developer.resource1', link: '#' },
        { icon: Code, titleKey: 'aesc2.developer.resource2', link: '#' },
        { icon: Network, titleKey: 'aesc2.developer.resource3', link: '#' },
        { icon: Zap, titleKey: 'aesc2.developer.resource4', link: '#' },
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
            <Head title={t('page.title.aesc2')} />
            <div className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950">
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
                                    {t('aesc2.hero.badge')}
                                </div>
                                <h1 className="mb-6 text-5xl leading-tight font-bold tracking-tight text-white md:text-6xl">
                                    {t('aesc2.hero.title')}
                                </h1>
                                <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-slate-300">{t('aesc2.hero.description')}</p>

                                {/* 核心行动按钮 */}
                                <div className="flex flex-wrap justify-center gap-4">
                                    <a
                                        href="https://fd.bluepinefoundation.com/"
                                        target="_blank"
                                        className="inline-flex cursor-pointer items-center rounded bg-linear-to-r from-emerald-500 to-teal-600 px-8 py-4 text-lg font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700"
                                    >
                                        <Zap className="mr-2 h-5 w-5" />
                                        {t('aesc2.hero.button1')}
                                    </a>
                                    <a
                                        href="#categories"
                                        className="inline-flex cursor-pointer items-center rounded border-2 border-white/50 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-white/10"
                                    >
                                        <Network className="mr-2 h-5 w-5" />
                                        {t('aesc2.hero.button2')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 第二部分 - 生态核心组件 */}
                    <section id="categories" className="px-4 py-32 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-7xl">
                            <div className="mb-12 text-center">
                                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">{t('aesc2.categories.title')}</h2>
                                <p className="mx-auto max-w-2xl text-base text-slate-300">{t('aesc2.categories.subtitle')}</p>
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
                                        <h3 className="mb-2 text-xl font-bold text-white">{t(category.titleKey)}</h3>
                                        <p className="mb-3 text-sm text-slate-300">{t(category.descriptionKey)}</p>
                                        <div className="flex items-center text-emerald-300 transition-all group-hover:translate-x-2">
                                            <span className="text-xs font-semibold">{t('aesc2.categories.learnMore')}</span>
                                            <ArrowRight className="ml-2 h-3 w-3" />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 第三部分 - 热门dApp推荐 */}
                    <section id="dapps" className="px-4 py-32 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-7xl">
                            <div className="mb-12 text-center">
                                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">{t('aesc2.dapps.title')}</h2>
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
                                        <h3 className="mb-2 text-base font-bold text-white">{t(dapp.nameKey)}</h3>
                                        <p className="mb-3 text-xs text-slate-300">{t(dapp.descriptionKey)}</p>
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
                                        <div className="mb-3 text-xs font-semibold text-green-400">{t(dapp.metricKey)}</div>
                                        <a
                                            href="#"
                                            className="inline-flex w-full cursor-pointer items-center justify-center rounded bg-linear-to-r from-emerald-500 to-teal-600 px-4 py-2 text-xs font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700"
                                        >
                                            {t('aesc2.dapps.enterApp')}
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
                                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">{t('aesc2.guide.title')}</h2>
                            </div>

                            <div className="grid gap-8 md:grid-cols-3">
                                {/* 步骤1 */}
                                <div className="relative text-center">
                                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-lg border-2 border-emerald-500 bg-emerald-500/20">
                                        <UserCheck className="h-10 w-10 text-emerald-300" />
                                    </div>
                                    <div className="mb-3 text-5xl font-bold text-emerald-500/20">01</div>
                                    <h3 className="mb-3 text-xl font-bold text-white">{t('aesc2.guide.step1.title')}</h3>
                                    <p className="mb-4 text-sm text-slate-300">{t('aesc2.guide.step1.description')}</p>
                                    <a
                                        href="#"
                                        className="inline-flex cursor-pointer items-center rounded border border-white/30 px-4 py-2 text-xs font-medium text-white transition-all hover:bg-white/10"
                                    >
                                        {t('aesc2.guide.step1.button')}
                                        <ArrowRight className="ml-2 h-3 w-3" />
                                    </a>
                                </div>

                                {/* 步骤2 */}
                                <div className="relative text-center">
                                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-lg border-2 border-emerald-500 bg-emerald-500/20">
                                        <Wallet className="h-10 w-10 text-emerald-300" />
                                    </div>
                                    <div className="mb-3 text-5xl font-bold text-emerald-500/20">02</div>
                                    <h3 className="mb-3 text-xl font-bold text-white">{t('aesc2.guide.step2.title')}</h3>
                                    <p className="mb-4 text-sm text-slate-300">{t('aesc2.guide.step2.description')}</p>
                                    <a
                                        href="#"
                                        className="inline-flex cursor-pointer items-center rounded border border-white/30 px-4 py-2 text-xs font-medium text-white transition-all hover:bg-white/10"
                                    >
                                        {t('aesc2.guide.step2.button')}
                                        <ArrowRight className="ml-2 h-3 w-3" />
                                    </a>
                                </div>

                                {/* 步骤3 */}
                                <div className="relative text-center">
                                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-lg border-2 border-emerald-500 bg-emerald-500/20">
                                        <Network className="h-10 w-10 text-emerald-300" />
                                    </div>
                                    <div className="mb-3 text-5xl font-bold text-emerald-500/20">03</div>
                                    <h3 className="mb-3 text-xl font-bold text-white">{t('aesc2.guide.step3.title')}</h3>
                                    <p className="mb-4 text-sm text-slate-300">{t('aesc2.guide.step3.description')}</p>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        <a
                                            href="#"
                                            className="rounded border border-white/30 px-3 py-1.5 text-xs text-white transition-all hover:bg-white/10"
                                        >
                                            {t('aesc2.guide.step3.role1')}
                                        </a>
                                        <a
                                            href="#"
                                            className="rounded border border-white/30 px-3 py-1.5 text-xs text-white transition-all hover:bg-white/10"
                                        >
                                            {t('aesc2.guide.step3.role2')}
                                        </a>
                                        <a
                                            href="#"
                                            className="rounded border border-white/30 px-3 py-1.5 text-xs text-white transition-all hover:bg-white/10"
                                        >
                                            {t('aesc2.guide.step3.role3')}
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
                                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">{t('aesc2.stats.title')}</h2>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                                {ecoStats.map((stat, index) => (
                                    <div key={index} className="rounded-lg border-2 border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
                                        <div className="mb-2 text-xs text-slate-400">{t(stat.labelKey)}</div>
                                        <div className="mb-1 text-2xl font-bold text-emerald-300">{stat.value}</div>
                                        {stat.unitKey && <div className="text-xs text-slate-500">{t(stat.unitKey)}</div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 第六部分 - 用户案例精选 */}
                    <section className="px-4 py-32 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-7xl">
                            <div className="mb-12 text-center">
                                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">{t('aesc2.testimonials.title')}</h2>
                            </div>

                            <div className="relative mx-auto max-w-4xl">
                                {/* 证言卡片 */}
                                <div className="rounded-lg border-2 border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-12">
                                    <div className="mb-6 text-center">
                                        <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-teal-600">
                                            {React.createElement(testimonials[currentTestimonial].icon, { className: 'h-8 w-8 text-white' })}
                                        </div>
                                        <h3 className="mb-1 text-lg font-bold text-white">{t(testimonials[currentTestimonial].nameKey)}</h3>
                                        <p className="text-xs text-emerald-300">{t(testimonials[currentTestimonial].roleKey)}</p>
                                    </div>
                                    <p className="mb-6 text-center text-base leading-relaxed text-slate-300">
                                        "{t(testimonials[currentTestimonial].contentKey)}"
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
                            <div className="rounded-lg border-2 border-white/10 bg-linear-to-br from-emerald-500/20 to-teal-600/20 p-8 backdrop-blur-sm md:p-12">
                                <div className="mb-4 flex justify-center">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/10">
                                        <Code className="h-8 w-8 text-emerald-300" />
                                    </div>
                                </div>
                                <h2 className="mb-3 text-center text-2xl font-bold tracking-tight text-white md:text-3xl">
                                    {t('aesc2.developer.title')}
                                </h2>
                                <p className="mx-auto mb-8 max-w-2xl text-center text-base text-slate-300">{t('aesc2.developer.description')}</p>

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
                                            <h3 className="text-xs font-semibold text-white group-hover:text-emerald-300">{t(resource.titleKey)}</h3>
                                        </a>
                                    ))}
                                </div>

                                <div className="mt-8 text-center">
                                    <a
                                        href="#"
                                        className="inline-flex cursor-pointer items-center rounded bg-linear-to-r from-emerald-500 to-teal-600 px-6 py-3 font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700"
                                    >
                                        {t('aesc2.developer.button')}
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
