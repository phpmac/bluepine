import { Card } from '@/components/dapp/common/Card';
import { AddWhitelistAddresses } from '@/components/dapp/console/AddWhitelistAddresses';
import { BalanceCard } from '@/components/dapp/console/BalanceCard';
import { BuyReadPanel } from '@/components/dapp/console/BuyReadPanel';
import { FreeMintCard } from '@/components/dapp/console/FreeMintCard';
import { IeoTimeSettings } from '@/components/dapp/console/IeoTimeSettings';
import { PaymentReceivers } from '@/components/dapp/console/PaymentReceivers';
import { QueryWhitelistAddress } from '@/components/dapp/console/QueryWhitelistAddress';
import { RemoveWhitelistAddresses } from '@/components/dapp/console/RemoveWhitelistAddresses';
import { SystemToggle } from '@/components/dapp/console/SystemToggle';
import { Footer } from '@/components/dapp/layout/Footer';
import { Header } from '@/components/dapp/layout/Header';
import ieoAbi from '@/lib/abi';
import { config as address } from '@/lib/address';
import { Head } from '@inertiajs/react';
import { Shield } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useReadContract, useWaitForTransactionReceipt, useWriteContract } from 'wagmi';

export default function ConsolePage() {
    const [usdtRefresh, setUsdtRefresh] = useState(0);
    const [aescRefresh, setAescRefresh] = useState(0);

    const { writeContract, data: hash, isPending } = useWriteContract();
    const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

    // 读取系统开关状态
    const { data: enableData, refetch: refetchEnable } = useReadContract({
        address: address.buy as `0x${string}`,
        abi: ieoAbi,
        functionName: 'enable',
    });

    // 组件内部的状态
    const [enableStatus, setEnableStatus] = useState<boolean>(true);

    // 读取所有阶段信息,包含收款地址
    const { data: allStageInfoData, refetch: refetchStageInfo } = useReadContract({
        address: address.buy as `0x${string}`,
        abi: ieoAbi,
        functionName: 'getAllStageInfo',
    });

    useEffect(() => {
        if (enableData !== undefined) {
            setEnableStatus(enableData as boolean);
        }
    }, [enableData]);

    useEffect(() => {
        if (isSuccess) {
            refetchEnable();
            refetchStageInfo();
        }
    }, [isSuccess, refetchEnable, refetchStageInfo]);

    const handleSetEnable = () => {
        writeContract({
            address: address.buy as `0x${string}`,
            abi: ieoAbi,
            functionName: 'setEnable',
            args: [enableStatus],
        });
    };

    const handleBatchAdd = (addresses: string) => {
        const addressArray = addresses
            .split('\n')
            .map((addr) => addr.trim())
            .filter((addr) => addr.length > 0);

        if (addressArray.length === 0) {
            alert('请输入至少一个地址');
            return;
        }

        writeContract({
            address: address.buy as `0x${string}`,
            abi: ieoAbi,
            functionName: 'batchAddDirectReferralWhiteList',
            args: [addressArray as `0x${string}`[]],
        });
    };

    const handleBatchRemove = (addresses: string) => {
        const addressArray = addresses
            .split('\n')
            .map((addr) => addr.trim())
            .filter((addr) => addr.length > 0);

        if (addressArray.length === 0) {
            alert('请输入至少一个地址');
            return;
        }

        writeContract({
            address: address.buy as `0x${string}`,
            abi: ieoAbi,
            functionName: 'batchRemoveDirectReferralWhiteList',
            args: [addressArray as `0x${string}`[]],
        });
    };

    const handleSetIeoTime = (startTime: string, endTime: string) => {
        if (!startTime || !endTime) {
            alert('请输入开始和结束时间');
            return;
        }

        const start = Math.floor(new Date(startTime).getTime() / 1000);
        const end = Math.floor(new Date(endTime).getTime() / 1000);

        if (start >= end) {
            alert('开始时间必须早于结束时间');
            return;
        }

        writeContract({
            address: address.buy as `0x${string}`,
            abi: ieoAbi,
            functionName: 'setIeoTime',
            args: [BigInt(start), BigInt(end)],
        });
    };

    // 获得轮次数量
    const { data: stageCountData } = useReadContract({
        address: address.buy as `0x${string}`,
        abi: ieoAbi,
        functionName: 'getStageCount',
    });

    const handleSetPaymentReceivers = (addresses: string) => {
        const receivers = addresses
            .split('\n')
            .map((addr) => addr.trim())
            .filter((addr) => addr.length > 0);

        if (receivers.length !== Number(stageCountData)) {
            alert(`请输入${stageCountData}个收款地址`);
            return;
        }

        writeContract({
            address: address.buy as `0x${string}`,
            abi: ieoAbi,
            functionName: 'setStagePaymentReceiver',
            args: [receivers as `0x${string}`[]],
        });
    };

    return (
        <>
            <Head title="Console" />
            <div className="min-h-screen bg-gradient-to-b from-[#040814] via-[#030a18] to-[#02040c]">
                <div className="relative z-10 flex min-h-screen flex-col">
                    <Header />

                    <main className="flex-1 pt-8">
                        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <BalanceCard title="USDT 余额 (BSC 测试网)" tokenAddress={address.usdt as `0x${string}`} refreshKey={usdtRefresh} />
                                <BalanceCard title="AESC 余额" tokenAddress={address.aesc as `0x${string}`} decimals={16} refreshKey={aescRefresh} />
                            </div>

                            {/* 只有测试网才显示铸造 */}
                            {import.meta.env.VITE_APP_ENV === 'local' && (
                                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <FreeMintCard
                                        title="USDT 免费铸造"
                                        tokenAddress={address.usdt as `0x${string}`}
                                        decimals={18}
                                        onSuccess={() => setUsdtRefresh(Date.now())}
                                    />
                                    <FreeMintCard
                                        title="AESC 免费铸造"
                                        tokenAddress={address.aesc as `0x${string}`}
                                        decimals={16}
                                        onSuccess={() => setAescRefresh(Date.now())}
                                    />
                                </div>
                            )}

                            {/* 读取面板 */}
                            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-1">
                                <BuyReadPanel contract={address.buy as `0x${string}`} />
                            </div>

                            <div className="mt-12">
                                <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5">
                                        <Shield className="h-5 w-5 text-slate-300" />
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-semibold text-white">管理员操作面板</h2>
                                        <p className="text-xs text-slate-400">Admin Operations Panel</p>
                                    </div>
                                </div>
                                {(isPending || isConfirming || isSuccess) && (
                                    <div className="mb-6">
                                        {isPending && (
                                            <Card className="border-yellow-500/30 bg-yellow-500/10 p-4 text-center" hover={false}>
                                                <p className="text-sm font-medium text-yellow-300">等待钱包确认...</p>
                                            </Card>
                                        )}
                                        {isConfirming && (
                                            <Card className="border-blue-500/30 bg-blue-500/10 p-4 text-center" hover={false}>
                                                <p className="text-sm font-medium text-blue-300">交易确认中...</p>
                                            </Card>
                                        )}
                                        {isSuccess && (
                                            <Card className="border-emerald-500/30 bg-emerald-500/10 p-4 text-center" hover={false}>
                                                <p className="text-sm font-semibold text-emerald-300">交易成功!</p>
                                            </Card>
                                        )}
                                    </div>
                                )}

                                <div className="grid gap-4 md:grid-cols-2">
                                    <SystemToggle
                                        enableData={enableData as boolean}
                                        enableStatus={enableStatus}
                                        setEnableStatus={setEnableStatus}
                                        onConfirm={handleSetEnable}
                                        disabled={isPending || isConfirming}
                                    />
                                    <IeoTimeSettings onConfirm={handleSetIeoTime} disabled={isPending || isConfirming} />
                                    <AddWhitelistAddresses onConfirm={handleBatchAdd} disabled={isPending || isConfirming} />
                                    <RemoveWhitelistAddresses onConfirm={handleBatchRemove} disabled={isPending || isConfirming} />
                                    <QueryWhitelistAddress disabled={isPending || isConfirming} />
                                    <PaymentReceivers
                                        allStageInfoData={allStageInfoData}
                                        onConfirm={handleSetPaymentReceivers}
                                        disabled={isPending || isConfirming}
                                    />
                                </div>
                            </div>
                        </section>
                    </main>

                    <Footer />
                </div>
            </div>
        </>
    );
}
