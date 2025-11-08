import ieoAbi from '@/lib/abi';
import { config as address } from '@/lib/address';
import { erc20Abi } from '@/lib/erc20Abi';
import { StageData } from '@/types';
import { motion } from 'framer-motion';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Layers, ShoppingCart, Sparkles, Target } from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';
import { formatUnits, getAddress, isAddress, parseUnits } from 'viem';
import { useAccount, useReadContract, useWaitForTransactionReceipt, useWriteContract } from 'wagmi';
import { AnimatedCounter } from '../common/AnimatedCounter';
import { ProgressBar } from '../common/ProgressBar';
import { SuccessModal } from '../common/SuccessModal';

export const PrivateSaleOverview: React.FC<{
    decimals: number; // aesc代币精度
    stageCount: number; // 阶段数量
    allStageInfo: StageData[]; // 所有阶段信息
    ieoStartTime: number; // 募资开始时间
    ieoEndTime: number; // 募资结束时间
    currentStage: StageData; // 当前阶段数据
    getUserClaimableAmount: [bigint, bigint]; // 可领取数量
    currentStagePrice: number; // 当前阶段价格
    currentStageProgress: number; // 当前阶段完成进度
    refetchCurrentStage: () => void; // 刷新当前阶段数据
    refetchPendingAmount: () => void; // 刷新可领取数量
    isEnded: boolean; // 是否结束
    userInvestmentData: [bigint, bigint, bigint, bigint, bigint, bigint]; // 用户投资数据
    remainingClaimableAmount: bigint; // 剩余可领取数量
}> = ({
    decimals,
    currentStage,
    getUserClaimableAmount,
    currentStagePrice,
    currentStageProgress,
    refetchCurrentStage,
    refetchPendingAmount,
    isEnded,
    remainingClaimableAmount,
}) => {
    const { t } = useLaravelReactI18n();

    const [aescAmount, setAescAmount] = useState(''); // AESC认购数量
    const [referrerAddress, setReferrerAddress] = useState(''); // 邀请人地址

    // 从localStorage读取推荐人地址
    useEffect(() => {
        const savedReferrer = localStorage.getItem('ieo_referrer_address');
        if (savedReferrer) {
            setReferrerAddress(savedReferrer);
        }
    }, []);

    // 保存推荐人地址到localStorage
    useEffect(() => {
        if (referrerAddress) {
            localStorage.setItem('ieo_referrer_address', referrerAddress);
        }
    }, [referrerAddress]);

    // 计算目标募集金额(USD)
    const targetSize = useMemo(() => {
        const capTokens = Number(formatUnits(currentStage.cap, decimals));
        return capTokens * currentStagePrice;
    }, [currentStage, currentStagePrice, decimals]);

    // 格式化为M单位
    const targetSizeFormatted = useMemo(() => {
        return (targetSize / 1000000).toFixed(2);
    }, [targetSize]);

    // 已募集金额(USD)
    const raisedSize = useMemo(() => {
        const soldTokens = Number(formatUnits(currentStage.sold, decimals));
        return soldTokens * currentStagePrice;
    }, [currentStage, currentStagePrice, decimals]);

    // 计算需要支付的USDT金额
    const estimatedUsdt = useMemo(() => {
        return Number.parseFloat(aescAmount) * currentStagePrice;
    }, [aescAmount, currentStagePrice]);

    const { address: userAddress, isConnected } = useAccount();

    // 验证邀请人地址是否有效
    const isValidReferrerAddress = useMemo(() => {
        if (!referrerAddress) return false;
        if (!isAddress(referrerAddress)) return false;
        // 检查邀请人地址是否为用户自己的地址(大小写不敏感)
        if (userAddress && getAddress(referrerAddress) === getAddress(userAddress)) return false;
        return true;
    }, [referrerAddress, userAddress]);

    // 获取邀请人地址错误类型
    const referrerAddressError = useMemo(() => {
        if (!referrerAddress) return 'empty';
        if (!isAddress(referrerAddress)) return 'invalid';
        if (userAddress && getAddress(referrerAddress) === getAddress(userAddress)) return 'self';
        return null;
    }, [referrerAddress, userAddress]);

    // 验证AESC数量是否有效
    const isValidAescAmount = useMemo(() => {
        const amount = Number.parseFloat(aescAmount);
        return aescAmount && !Number.isNaN(amount) && amount > 0;
    }, [aescAmount]);

    // USDT授权额度
    const { data: usdtAllowance, refetch: refetchAllowance } = useReadContract({
        address: address.usdt as `0x${string}`,
        abi: erc20Abi,
        functionName: 'allowance',
        args: userAddress ? [userAddress, address.buy as `0x${string}`] : undefined,
        query: { enabled: !!userAddress },
    });

    // 合约交互
    const { writeContract: writeApprove, data: approveHash, isPending: isApproving } = useWriteContract();
    const { writeContract: writeBuy, data: buyHash, isPending: isBuying } = useWriteContract();
    const { writeContract: writeClaim, data: claimHash, isPending: isClaiming } = useWriteContract();

    // 交易确认状态
    const { isLoading: isApproveConfirming, isSuccess: isApproveSuccess } = useWaitForTransactionReceipt({ hash: approveHash });
    const { isLoading: isBuyConfirming, isSuccess: isBuySuccess } = useWaitForTransactionReceipt({ hash: buyHash });
    const { isLoading: isClaimConfirming, isSuccess: isClaimSuccess } = useWaitForTransactionReceipt({ hash: claimHash });

    // 监听授权成功后自动执行购买
    useEffect(() => {
        if (isApproveSuccess && isValidAescAmount && isValidReferrerAddress) {
            const tokenAmount = parseUnits(aescAmount, decimals);

            writeBuy({
                address: address.buy as `0x${string}`,
                abi: ieoAbi,
                functionName: 'buy',
                args: [tokenAmount, referrerAddress as `0x${string}`],
            });
        }
    }, [isApproveSuccess, isValidAescAmount, isValidReferrerAddress, aescAmount, decimals, referrerAddress, writeBuy]);

    // 弹窗状态管理
    const [showBuySuccessModal, setShowBuySuccessModal] = useState(false);
    const [showClaimSuccessModal, setShowClaimSuccessModal] = useState(false);

    // 监听购买成功后刷新数据
    useEffect(() => {
        if (isBuySuccess) {
            setAescAmount(''); // 清空输入框
            refetchAllowance(); // 刷新授权额度
            refetchPendingAmount(); // 刷新可领取数量
            refetchCurrentStage(); // 刷新当前阶段数据
            setShowBuySuccessModal(true); // 显示成功弹窗
        }
    }, [isBuySuccess, refetchAllowance, refetchPendingAmount, refetchCurrentStage]);

    // 监听领取成功后刷新数据
    useEffect(() => {
        if (isClaimSuccess) {
            refetchPendingAmount(); // 刷新可领取数量
            setShowClaimSuccessModal(true); // 显示成功弹窗
        }
    }, [isClaimSuccess, refetchPendingAmount]);

    // 处理认购
    const handleBuy = async () => {
        if (!isConnected || !isValidAescAmount || !isValidReferrerAddress) return;

        const tokenAmount = parseUnits(aescAmount, decimals);
        const usdtRequired = parseUnits(estimatedUsdt.toString(), 18);

        // 检查授权额度,不足则先授权
        if (!usdtAllowance || usdtAllowance < usdtRequired) {
            writeApprove({
                address: address.usdt as `0x${string}`,
                abi: erc20Abi,
                functionName: 'approve',
                args: [address.buy as `0x${string}`, usdtRequired * 10n], // 授权10倍额度
            });
            return; // 授权成功后会自动触发购买
        }

        // 授权额度充足,直接购买
        writeBuy({
            address: address.buy as `0x${string}`,
            abi: ieoAbi,
            functionName: 'buy',
            args: [tokenAmount, referrerAddress as `0x${string}`],
        });
    };

    // 处理领取
    const handleClaim = async () => {
        if (!isConnected || !isEnded) return;

        writeClaim({
            address: address.buy as `0x${string}`,
            abi: ieoAbi,
            functionName: 'claim',
        });
    };

    return (
        <section id="private-sale-overview" className="relative z-10 overflow-hidden py-24">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050a1a]/85 to-[#030712]" />
            <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(111,140,255,0.18),transparent_60%)]" />
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-[0.3em] text-slate-200/80 uppercase backdrop-blur-xl">
                        {t('overview.badge')}
                    </span>
                    <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">{t('overview.title')}</h2>
                    <p className="mt-4 text-base leading-relaxed text-slate-300/90">{t('overview.subtitle')}</p>
                </motion.div>

                <div className="mt-16 grid grid-cols-1 items-stretch gap-10 xl:grid-cols-2 xl:gap-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative flex min-h-[520px] flex-col overflow-hidden rounded-[32px] bg-gradient-to-br from-[#111a38] via-[#0a1326] to-[#040916] shadow-[0_35px_90px_-45px_rgba(67,113,255,0.65)]"
                    >
                        <div className="absolute -bottom-28 -left-20 size-72 rounded-full bg-[#56f1ff]/15 blur-3xl" />
                        <div className="absolute -top-24 right-12 size-56 rounded-full bg-[#22edc7]/12 blur-3xl" />
                        <div className="relative flex flex-1 flex-col gap-8 p-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs tracking-[0.32em] text-slate-200/70 uppercase">{t('overview.metrics')}</p>
                                    <h3 className="mt-2 text-2xl font-bold text-white">{t('overview.metrics_title')}</h3>
                                </div>
                                <div className="hidden items-center gap-2 text-[11px] text-slate-300/70 md:flex">
                                    <Sparkles className="h-4 w-4 text-[#56f1ff]" /> {t('overview.live')}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                <div className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-5 shadow-[0_25px_50px_-35px_rgba(70,120,255,0.55)] backdrop-blur-lg">
                                    <div className="flex items-start gap-3">
                                        <div className="flex size-9 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5f66ff] via-[#4b76ff] to-[#2cd6ff] text-white shadow-[0_18px_30px_-20px_rgba(88,126,255,0.8)]">
                                            <Target className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <p className="mb-1 text-[11px] tracking-[0.28em] text-slate-300/80 uppercase">
                                                {t('overview.target_raise_label')}
                                            </p>
                                            <p className="text-lg leading-tight font-semibold text-white">${targetSizeFormatted}M</p>
                                            <p className="mt-1 text-[11px] text-slate-400">{t('overview.private_sale_scale')}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-5 shadow-[0_25px_50px_-35px_rgba(70,120,255,0.55)] backdrop-blur-lg">
                                    <div className="flex items-start gap-3">
                                        <div className="flex size-9 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5f66ff] via-[#4b76ff] to-[#2cd6ff] text-white shadow-[0_18px_30px_-20px_rgba(88,126,255,0.8)]">
                                            <Layers className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <p className="mb-1 text-[11px] tracking-[0.28em] text-slate-300/80 uppercase">
                                                {t('overview.current_stage_label')}
                                            </p>
                                            <p className="text-lg leading-tight font-semibold text-white">
                                                {t('overview.stage_number', { num: Number(currentStage.index) + 1 })}
                                            </p>
                                            <p className="mt-1 text-[11px] text-slate-400">
                                                {t('overview.unit_price')} ${currentStagePrice}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col justify-end rounded-2xl border border-white/10 bg-gradient-to-br from-[#616bff1f] via-[#0e1531] to-[#06101f] p-6 shadow-[0_25px_60px_-45px_rgba(60,110,255,0.6)]">
                                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                                    <div>
                                        <p className="mb-2 text-xs tracking-[0.3em] text-slate-300/80 uppercase">{t('overview.overall')}</p>
                                        <h3 className="text-xl font-bold text-white">{t('overview.completion')}</h3>
                                    </div>
                                    <div className="flex items-end gap-6">
                                        <div className="text-righ">
                                            <AnimatedCounter
                                                end={raisedSize / 1000000}
                                                decimals={2}
                                                prefix="$"
                                                suffix="M"
                                                className="bg-gradient-to-r from-[#6b7dff] via-[#56f1ff] to-[#22edc7] bg-clip-text text-2xl font-black text-transparent"
                                            />
                                            <p className="mt-1 text-left text-[11px] text-slate-400 md:text-right">{t('overview.raised')}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <ProgressBar
                                        progress={currentStageProgress}
                                        color="from-[#6f89ff] via-[#4fe3ff] to-[#20e3b2]"
                                        height="h-2.5"
                                        showPercentage={false}
                                    />
                                    <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                                        <span>{t('overview.early_benefit')}</span>
                                        <span>{currentStageProgress.toFixed(2)}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex min-h-[520px] flex-col"
                    >
                        <div className="relative flex-1 overflow-hidden rounded-[32px] border border-white/12 bg-gradient-to-br from-[#0e182f] via-[#071122] to-[#040b18] p-8 shadow-[0_30px_90px_-45px_rgba(60,110,255,0.68)]">
                            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                            <div className="absolute -right-20 -bottom-28 size-72 rounded-full bg-[#56f1ff]/10 blur-3xl" />
                            <div className="absolute -top-24 left-12 size-56 rounded-full bg-[#22edc7]/8 blur-3xl" />

                            <div id="token-purchase-form" className="relative z-10 flex flex-col gap-5">
                                <div className="flex items-center gap-2.5">
                                    <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#616bff] via-[#4b76ff] to-[#37e7ff]">
                                        <ShoppingCart className="h-4 w-4 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">{t('overview.token_purchase')}</h3>
                                        <p className="text-[11px] text-slate-400">{t('overview.participate_sale')}</p>
                                    </div>
                                </div>

                                {/* 认购提示 */}
                                <div className="rounded-lg border border-[#37e7ff]/30 bg-[#37e7ff]/10 p-3 backdrop-blur-sm">
                                    <p className="text-center text-sm text-[#56f1ff]">{t('overview.participation_reminder')}</p>
                                </div>

                                {/* AESC输入和邀请人地址 */}
                                <div className="grid grid-cols-1 gap-3 md:grid-cols-10">
                                    {/* AESC输入 */}
                                    <div className="relative rounded-xl border border-white/10 bg-white/5 p-3 md:col-span-3">
                                        <label className="mb-1.5 block text-[11px] tracking-[0.2em] text-slate-400 uppercase">
                                            {t('overview.purchase_amount_label')}
                                        </label>
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="number"
                                                value={aescAmount}
                                                step="1"
                                                min="1"
                                                onChange={(e) => setAescAmount(e.target.value)}
                                                placeholder={t('overview.enter_amount')}
                                                className="w-full min-w-0 bg-transparent text-lg font-semibold text-white outline-none placeholder:text-slate-600"
                                            />
                                        </div>
                                    </div>

                                    {/* 邀请人地址 */}
                                    <div className="rounded-xl border border-white/10 bg-white/5 p-3 md:col-span-7">
                                        <label className="mb-1.5 block text-[11px] tracking-[0.2em] text-slate-400 uppercase">
                                            {t('overview.referrer_address_label')}
                                        </label>
                                        <input
                                            type="text"
                                            value={referrerAddress}
                                            onChange={(e) => setReferrerAddress(e.target.value)}
                                            placeholder={t('overview.enter_wallet_address')}
                                            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
                                        />
                                    </div>
                                </div>

                                {/* 需支付提示 */}
                                {isValidAescAmount && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center justify-between rounded-lg border border-[#56f1ff]/30 bg-[#56f1ff]/10 px-2.5 py-1.5"
                                    >
                                        <div>
                                            <p className="text-[10px] tracking-wider text-slate-400 uppercase">{t('overview.payment_required')}</p>
                                            <p className="text-base font-bold text-[#56f1ff]">{estimatedUsdt.toFixed(4)} USDT</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] text-slate-500">{t('overview.unit_price')}</p>
                                            <p className="text-xs font-medium text-slate-300">${currentStagePrice.toFixed(3)}</p>
                                        </div>
                                    </motion.div>
                                )}

                                {/* 认购按钮 */}
                                <motion.button
                                    whileHover={isConnected && isValidAescAmount && isValidReferrerAddress ? { scale: 1.02 } : {}}
                                    whileTap={isConnected && isValidAescAmount && isValidReferrerAddress ? { scale: 0.98 } : {}}
                                    onClick={handleBuy}
                                    disabled={
                                        !isConnected ||
                                        !isValidAescAmount ||
                                        !isValidReferrerAddress ||
                                        isApproving ||
                                        isApproveConfirming ||
                                        isBuying ||
                                        isBuyConfirming
                                    }
                                    className={`w-full rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                                        !isConnected || !isValidAescAmount || !isValidReferrerAddress
                                            ? 'cursor-not-allowed border border-white/10 bg-white/8 text-slate-400'
                                            : 'bg-gradient-to-r from-[#616bff] via-[#4b76ff] to-[#37e7ff] text-white shadow-[0_25px_60px_-30px_rgba(82,115,255,0.65)] hover:shadow-[0_30px_70px_-30px_rgba(67,240,255,0.65)]'
                                    }`}
                                >
                                    {!isConnected
                                        ? t('overview.connect_wallet_first')
                                        : !isValidAescAmount
                                          ? t('overview.enter_valid_amount')
                                          : !isValidReferrerAddress
                                            ? referrerAddressError === 'empty'
                                                ? t('overview.enter_referrer_address')
                                                : referrerAddressError === 'invalid'
                                                  ? t('overview.referrer_address_invalid')
                                                  : referrerAddressError === 'self'
                                                    ? t('overview.referrer_cannot_be_self')
                                                    : t('overview.enter_referrer_address')
                                            : isApproving || isApproveConfirming
                                              ? t('overview.approving')
                                              : isBuying || isBuyConfirming
                                                ? t('overview.purchasing')
                                                : t('overview.purchase_now')}
                                </motion.button>

                                {/* 可领取信息 */}
                                <div className="rounded-xl border border-[#22edc7]/20 bg-[#22edc7]/5 p-3">
                                    <div className="mb-2.5 flex items-center justify-between">
                                        <span className="text-[11px] tracking-[0.2em] text-slate-400 uppercase">
                                            {t('overview.claimable_amount')}
                                        </span>
                                        <span className="text-base font-bold text-[#22edc7]">
                                            {formatUnits(getUserClaimableAmount[0], decimals)} AESC
                                        </span>
                                    </div>
                                    <div className="mb-2.5 flex items-center justify-between">
                                        <span className="text-[11px] tracking-[0.2em] text-slate-400 uppercase">
                                            {t('overview.claimable_amount_label')}
                                        </span>
                                        <span className="text-base font-bold text-[#22edc7]">
                                            {formatUnits(remainingClaimableAmount, decimals)} AESC
                                        </span>
                                    </div>
                                    <div className="mb-2.5 flex items-center justify-between">
                                        <span className="text-[11px] tracking-[0.2em] text-slate-400 uppercase">
                                            {t('overview.referral_reward_amount')}
                                        </span>
                                        <span className="text-base font-bold text-[#22edc7]">
                                            {formatUnits(getUserClaimableAmount[1], decimals)} AESC
                                        </span>
                                    </div>
                                    <motion.button
                                        whileHover={
                                            isConnected &&
                                            isEnded &&
                                            (getUserClaimableAmount[0] > 0 || getUserClaimableAmount[1] > 0) &&
                                            !isClaiming &&
                                            !isClaimConfirming
                                                ? { scale: 1.02 }
                                                : {}
                                        }
                                        whileTap={
                                            isConnected &&
                                            isEnded &&
                                            (getUserClaimableAmount[0] > 0 || getUserClaimableAmount[1] > 0) &&
                                            !isClaiming &&
                                            !isClaimConfirming
                                                ? { scale: 0.98 }
                                                : {}
                                        }
                                        onClick={handleClaim}
                                        disabled={
                                            !isConnected ||
                                            !isEnded ||
                                            (getUserClaimableAmount[0] <= 0 && getUserClaimableAmount[1] <= 0) ||
                                            isClaiming ||
                                            isClaimConfirming
                                        }
                                        className={`w-full rounded-lg border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                                            !isConnected ||
                                            !isEnded ||
                                            (getUserClaimableAmount[0] <= 0 && getUserClaimableAmount[1] <= 0) ||
                                            isClaiming ||
                                            isClaimConfirming
                                                ? 'cursor-not-allowed border-white/10 bg-white/8 text-slate-400'
                                                : 'border-[#22edc7]/40 bg-[#22edc7]/15 text-[#22edc7] hover:bg-[#22edc7]/25'
                                        }`}
                                    >
                                        {isClaiming || isClaimConfirming
                                            ? t('overview.claiming')
                                            : !isEnded
                                              ? t('overview.sale_not_ended')
                                              : getUserClaimableAmount[0] > 0 || getUserClaimableAmount[1] > 0
                                                ? t('overview.claim_tokens')
                                                : t('overview.no_claimable')}
                                    </motion.button>

                                    {/* 领取提示信息 */}
                                    <div className="mt-2.5 text-center">
                                        {!isEnded ? (
                                            <p className="flex items-center justify-center gap-1 text-[10px] text-gray-400/80">
                                                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                                {t('overview.sale_in_progress_tip')}
                                            </p>
                                        ) : getUserClaimableAmount[0] > 0 || getUserClaimableAmount[1] > 0 ? (
                                            <p className="flex items-center justify-center gap-1 text-[10px] text-[#22edc7]/80">
                                                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                                {t('overview.sale_ended_can_claim')}
                                            </p>
                                        ) : (
                                            <p className="text-[10px] text-slate-500">{t('overview.no_claimable_tokens')}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* 认购成功弹窗 */}
            <SuccessModal
                isOpen={showBuySuccessModal}
                txHash={buyHash || ''}
                title={t('modal.purchase_success_title')}
                description={t('modal.purchase_success_desc')}
                isTestnet={true}
                onClose={() => setShowBuySuccessModal(false)}
            />

            {/* 领取成功弹窗 */}
            <SuccessModal
                isOpen={showClaimSuccessModal}
                txHash={claimHash || ''}
                title={t('modal.claim_success_title')}
                description={t('modal.claim_success_desc')}
                isTestnet={true}
                onClose={() => setShowClaimSuccessModal(false)}
            />
        </section>
    );
};
