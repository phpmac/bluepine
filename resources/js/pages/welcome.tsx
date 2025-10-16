import { BlockchainBackground, ParallaxBackground } from '@/components/dapp/background';
import { Footer } from '@/components/dapp/layout/Footer';
import { Header } from '@/components/dapp/layout/Header';
import { About } from '@/components/dapp/sections/About';
import { Hero } from '@/components/dapp/sections/Hero';
import { ICOOverview } from '@/components/dapp/sections/ICOOverview';
import { Tokenomics } from '@/components/dapp/sections/Tokenomics';
import { VestingTimeline } from '@/components/dapp/sections/VestingTimeline';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Agri-Eco Smart Chain - 下一代链上基础设施">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="App relative">
                {/* 高级背景特效层 */}
                <BlockchainBackground />
                <ParallaxBackground />

                {/* 主体内容层 */}
                <div className="relative z-10">
                    {/* 固定顶部导航 */}
                    <Header />

                    {/* 主要内容区域 */}
                    <main className="relative">
                        <div className="pointer-events-none absolute inset-x-0 top-[100vh] bottom-0 z-0 bg-gradient-to-b from-[#050a1a]/95 via-[#040b1a]/96 to-[#030815]/98" />

                        {/* Hero 区域 */}
                        <Hero />

                        {/* ICO 概览 */}
                        <ICOOverview />

                        {/* 代币经济学 */}
                        <Tokenomics />

                        {/* 解锁时间表 */}
                        <VestingTimeline />

                        {/* 项目介绍 */}
                        <About />
                    </main>

                    {/* 底部 */}
                    <Footer />
                </div>
            </div>
        </>
    );
}
