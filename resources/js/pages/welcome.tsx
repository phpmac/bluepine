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
import { erc20Abi } from '@/lib/erc20Abi';
import { StageData } from '@/types';
import { Head } from '@inertiajs/react';
import dayjs from 'dayjs';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { useEffect, useState } from 'react';
import { useAccount, useReadContract } from 'wagmi';

export default function Welcome() {
    const { t } = useLaravelReactI18n();

    // TODO 需要判断认购阶段是否已结束

    // 当前阶段销售数量
    const [currentStageDataState, setCurrentStageDataState] = useState<StageData | null>(null);
    const {
        data: currentStageData,
        error: currentStageError,
        refetch: refetchCurrentStage,
    } = useReadContract({
        address: address.aescIeo as `0x${string}`,
        abi: ieoAbi,
        functionName: 'getCurrentStage',
    });

    // aesc代币精度
    const [aescDecimalsState, setAescDecimalsState] = useState<number>(16);
    const { data: aescDecimalsData } = useReadContract({
        address: address.aesc as `0x${string}`,
        abi: erc20Abi,
        functionName: 'decimals',
    });

    // 可领取数量
    const { address: userAddress, isConnected } = useAccount();
    const [pendingAmountState, setPendingAmountState] = useState<[bigint, bigint]>([0n, 0n]);
    const { data: pendingAmountData, refetch: refetchPendingAmount } = useReadContract({
        address: address.aescIeo as `0x${string}`,
        abi: ieoAbi,
        functionName: 'pendingAmount',
        args: userAddress ? [userAddress] : undefined,
        query: { enabled: !!userAddress && isConnected },
    });

    // 是否结束,结束才能领取代币
    const [isEndedState, setIsEndedState] = useState<boolean>(false);
    const { data: isEndedData } = useReadContract({
        address: address.aescIeo as `0x${string}`,
        abi: ieoAbi,
        functionName: 'isEnded',
    });
    useEffect(() => {
        if (isEndedData) {
            setIsEndedState(isEndedData as boolean);
        }
    }, [isEndedData]);

    // 当前阶段价格
    const [currentStagePriceState, setCurrentStagePriceState] = useState<number>(0);
    useEffect(() => {
        if (currentStageData) {
            setCurrentStagePriceState(Number(currentStageData[4]) / Number(currentStageData[5]));
        }
    }, [currentStageData, aescDecimalsData]);

    // 当前阶段完成进度
    const [currentStageProgressState, setCurrentStageProgressState] = useState<number>(0);
    useEffect(() => {
        if (currentStageData) {
            setCurrentStageProgressState(Number(currentStageData[2]) / Number(currentStageData[1]));
        }
    }, [currentStageData]);

    // 获得阶段数量
    const [stageCountState, setStageCountState] = useState<number>(0);
    const { data: getStageCount } = useReadContract({
        address: address.aescIeo as `0x${string}`,
        abi: ieoAbi,
        functionName: 'getStageCount',
    });
    useEffect(() => {
        if (getStageCount) {
            setStageCountState(Number(getStageCount));
        }
    }, [getStageCount]);

    // 获得所有阶段信息
    const [allStageInfoState, setAllStageInfoState] = useState<StageData[]>([]);
    const { data: getAllStageInfo } = useReadContract({
        address: address.aescIeo as `0x${string}`,
        abi: ieoAbi,
        functionName: 'getAllStageInfo',
    });
    useEffect(() => {
        if (getAllStageInfo) {
            setAllStageInfoState(getAllStageInfo as unknown as StageData[]);
        }
    }, [getAllStageInfo]);

    // 募资开始时间
    const [ieoStartTimeState, setIeoStartTimeState] = useState<number>(0);
    const { data: ieoStartTime } = useReadContract({
        address: address.aescIeo as `0x${string}`,
        abi: ieoAbi,
        functionName: 'ieoStartTime',
    });
    useEffect(() => {
        if (ieoStartTime) {
            setIeoStartTimeState(Number(ieoStartTime));
        }
    }, [ieoStartTime]);

    // 募资结束时间
    const [ieoEndTimeState, setIeoEndTimeState] = useState<number>(0);
    const { data: ieoEndTime } = useReadContract({
        address: address.aescIeo as `0x${string}`,
        abi: ieoAbi,
        functionName: 'ieoEndTime',
    });
    useEffect(() => {
        if (ieoEndTime) {
            setIeoEndTimeState(Number(ieoEndTime));
        }
    }, [ieoEndTime]);

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

        if (aescDecimalsData) {
            setAescDecimalsState(aescDecimalsData);
        }

        if (pendingAmountData) {
            setPendingAmountState(pendingAmountData as [bigint, bigint]);
        }

        if (getAllStageInfo) {
            console.debug(`所有阶段信息`, getAllStageInfo);
        }

        if (currentStageError) {
            console.error('currentStageError', currentStageError);
        }

        if (currentStageData) {
            setCurrentStageDataState({
                index: currentStageData[0],
                cap: currentStageData[1],
                sold: currentStageData[2],
                available: currentStageData[3],
                priceNumerator: currentStageData[4],
                priceDenominator: currentStageData[5],
            });
        }

        if (ieoStartTime && ieoEndTime) {
            console.debug('私募开始时间:', dayjs.unix(Number(ieoStartTime)).format('YYYY-MM-DD HH:mm:ss [UTC]'));
            console.debug('私募结束时间:', dayjs.unix(Number(ieoEndTime)).format('YYYY-MM-DD HH:mm:ss [UTC]'));
        }
    }, [currentStageData, getStageCount, getAllStageInfo, currentStageError, ieoStartTime, ieoEndTime, aescDecimalsData, pendingAmountData]);

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

                        {currentStageDataState && (
                            <>
                                {/* Hero 区域 */}
                                <Hero
                                    decimals={aescDecimalsState}
                                    stageCount={stageCountState}
                                    allStageInfo={allStageInfoState}
                                    ieoStartTime={ieoStartTimeState}
                                    ieoEndTime={ieoEndTimeState}
                                    currentStage={currentStageDataState}
                                    currentStagePrice={currentStagePriceState}
                                    currentStageProgress={currentStageProgressState}
                                    isEnded={isEndedState}
                                />

                                {/* 私募概览 */}
                                <PrivateSaleOverview
                                    decimals={aescDecimalsState}
                                    stageCount={stageCountState}
                                    allStageInfo={allStageInfoState}
                                    ieoStartTime={ieoStartTimeState}
                                    ieoEndTime={ieoEndTimeState}
                                    currentStage={currentStageDataState}
                                    pendingAmount={pendingAmountState}
                                    currentStagePrice={currentStagePriceState}
                                    currentStageProgress={currentStageProgressState}
                                    refetchCurrentStage={refetchCurrentStage}
                                    refetchPendingAmount={refetchPendingAmount}
                                    isEnded={isEndedState}
                                />
                            </>
                        )}

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
