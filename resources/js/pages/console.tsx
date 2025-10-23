import { BalanceCard } from '@/components/dapp/console/BalanceCard';
import { BuyAdminPanel } from '@/components/dapp/console/BuyAdminPanel';
import { BuyReadPanel } from '@/components/dapp/console/BuyReadPanel';
import { ClaimCard } from '@/components/dapp/console/ClaimCard';
import { FreeMintCard } from '@/components/dapp/console/FreeMintCard';
import { Footer } from '@/components/dapp/layout/Footer';
import { Header } from '@/components/dapp/layout/Header';
import { config as address } from '@/lib/address';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function ConsolePage() {
    // 状态: 控制两个资产的刷新节奏
    const [usdtRefresh, setUsdtRefresh] = useState(0);
    const [aescRefresh, setAescRefresh] = useState(0);

    return (
        <>
            <Head title="Console" />
            {/* 背景层: 保持与主站一致的深色渐变 */}
            <div className="min-h-screen bg-gradient-to-b from-[#040814] via-[#030a18] to-[#02040c]">
                <div className="relative z-10 flex min-h-screen flex-col">
                    {/* 顶部导航 */}
                    <Header />

                    {/* 主内容区域 */}
                    <main className="flex-1 pt-8">
                        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                            {/* 余额看板 */}
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <BalanceCard title="USDT 余额 (BSC 测试网)" tokenAddress={address.usdt as `0x${string}`} refreshKey={usdtRefresh} />
                                <BalanceCard title="AESC 余额" tokenAddress={address.aesc as `0x${string}`} decimals={16} refreshKey={aescRefresh} />
                            </div>

                            {/* 免费铸造操作区 */}
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

                            {/* IEO 合约工具区 */}
                            <div className="mt-8 grid grid-cols-1 gap-4">
                                <ClaimCard contract={address.buy as `0x${string}`} decimals={16} />
                                <BuyReadPanel contract={address.buy as `0x${string}`} />
                                <BuyAdminPanel contract={address.buy as `0x${string}`} />
                            </div>
                        </section>
                    </main>

                    {/* 底部信息 */}
                    <Footer />
                </div>
            </div>
        </>
    );
}
