import { BlockchainBackground, ParallaxBackground } from '@/components/dapp/background';
import { CookieConsent } from '@/components/dapp/common/CookieConsent';
import { Footer } from '@/components/dapp/layout/Footer';
import { Header } from '@/components/dapp/layout/Header';
import { About } from '@/components/dapp/sections/About';
import { Hero } from '@/components/dapp/sections/Hero';
import { PrivateSaleOverview } from '@/components/dapp/sections/ICOOverview';
import { Tokenomics } from '@/components/dapp/sections/Tokenomics';
import { VestingTimeline } from '@/components/dapp/sections/VestingTimeline';
import ieoAbi from '@/lib/abi';
import { config as address } from '@/lib/address';
import { StageData } from '@/types';
import { Head } from '@inertiajs/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { useEffect, useState } from 'react';
import { useReadContract } from 'wagmi';

export default function Welcome() {
    const { t } = useLaravelReactI18n();
    const [currentStageDataState, setCurrentStageDataState] = useState<StageData | null>(null);

    // 当前阶段数据
    const { data: currentStageData, error: currentStageError } = useReadContract({
        address: address.aescIeo as `0x${string}`,
        abi: ieoAbi,
        functionName: 'getCurrentStage',
    });

    // getStageCount
    const { data: stageCount } = useReadContract({
        address: address.aescIeo as `0x${string}`,
        abi: ieoAbi,
        functionName: 'getStageCount',
    });

    useEffect(() => {
        if (currentStageData) {
            console.debug(`当前阶段数据`, currentStageData);
            if (Array.isArray(currentStageData) && currentStageData.length === 6) {
                setCurrentStageDataState({
                    index: currentStageData[0] as bigint,
                    cap: currentStageData[1] as bigint,
                    sold: currentStageData[2] as bigint,
                    available: currentStageData[3] as bigint,
                    priceNumerator: currentStageData[4] as bigint,
                    priceDenominator: currentStageData[5] as bigint,
                });
            }
        }

        if (currentStageError) {
            console.error('currentStageError', currentStageError);
        }
    }, [currentStageData, stageCount, currentStageError]);

    return (
        <>
            <Head title={t('welcome.title')}>
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
                        <Hero currentStageData={currentStageDataState} />

                        {/* 私募概览 */}
                        <PrivateSaleOverview />

                        {/* 代币经济学 */}
                        <Tokenomics />

                        {/* 解锁时间表 */}
                        <VestingTimeline />

                        {/* 项目介绍 */}
                        <About />
                    </main>

                    {/* 底部 */}
                    <Footer />

                    {/* Cookie 同意提示 */}
                    <CookieConsent />
                </div>
            </div>
        </>
    );
}
