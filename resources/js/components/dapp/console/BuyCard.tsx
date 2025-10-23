import { Button } from '@/components/dapp/common/Button';
import { Card } from '@/components/dapp/common/Card';
import ieoAbi from '@/lib/abi';
import { config as address } from '@/lib/address';
import { erc20Abi } from '@/lib/erc20Abi';
import { motion } from 'framer-motion';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { getAddress, isAddress, parseUnits } from 'viem';
import { useAccount, useReadContract, useWaitForTransactionReceipt, useWriteContract } from 'wagmi';

type BuyCardProps = {
    /** AESC 代币精度 */
    decimals: number;
    /** 当前阶段价格 */
    currentStagePrice: number;
    /** 购买成功回调 */
    onSuccess?: () => void;
};

export const BuyCard: React.FC<BuyCardProps> = ({ decimals, currentStagePrice, onSuccess }) => {
    const { address: userAddress, isConnected } = useAccount();
    const [aescAmount, setAescAmount] = useState('');
    const [referrerAddress, setReferrerAddress] = useState('');

    // 从 localStorage 读取推荐人地址
    useEffect(() => {
        const savedReferrer = localStorage.getItem('ieo_referrer_address');
        if (savedReferrer) {
            setReferrerAddress(savedReferrer);
        }
    }, []);

    // 保存推荐人地址到 localStorage
    useEffect(() => {
        if (referrerAddress) {
            localStorage.setItem('ieo_referrer_address', referrerAddress);
        }
    }, [referrerAddress]);

    // 计算需支付 USDT
    const estimatedUsdt = useMemo(() => {
        const amount = Number.parseFloat(aescAmount);
        if (Number.isNaN(amount) || amount <= 0) return 0;
        return amount * currentStagePrice;
    }, [aescAmount, currentStagePrice]);

    // 验证 AESC 数量
    const isValidAescAmount = useMemo(() => {
        const amount = Number.parseFloat(aescAmount);
        return aescAmount && !Number.isNaN(amount) && amount > 0;
    }, [aescAmount]);

    // 验证邀请人地址
    const isValidReferrerAddress = useMemo(() => {
        if (!referrerAddress) return false;
        if (!isAddress(referrerAddress)) return false;
        if (userAddress && getAddress(referrerAddress) === getAddress(userAddress)) return false;
        return true;
    }, [referrerAddress, userAddress]);

    const referrerAddressError = useMemo(() => {
        if (!referrerAddress) return 'empty';
        if (!isAddress(referrerAddress)) return 'invalid';
        if (userAddress && getAddress(referrerAddress) === getAddress(userAddress)) return 'self';
        return null;
    }, [referrerAddress, userAddress]);

    // 查询 USDT 授权额度
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

    const { isLoading: isApproveConfirming, isSuccess: isApproveSuccess } = useWaitForTransactionReceipt({ hash: approveHash });
    const { isLoading: isBuyConfirming, isSuccess: isBuySuccess } = useWaitForTransactionReceipt({ hash: buyHash });

    const handledBuyHashRef = useRef<string | null>(null);

    // 授权成功后自动购买
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

    // 购买成功后刷新
    useEffect(() => {
        if (isBuySuccess && buyHash && handledBuyHashRef.current !== buyHash) {
            handledBuyHashRef.current = buyHash;
            setAescAmount('');
            refetchAllowance();
            onSuccess?.();
        }
    }, [isBuySuccess, buyHash, refetchAllowance, onSuccess]);

    // 处理认购
    const handleBuy = async () => {
        if (!isConnected || !isValidAescAmount || !isValidReferrerAddress) return;

        const tokenAmount = parseUnits(aescAmount, decimals);
        const usdtRequired = parseUnits(estimatedUsdt.toFixed(18), 18);

        // 检查授权额度
        if (!usdtAllowance || usdtAllowance < usdtRequired) {
            writeApprove({
                address: address.usdt as `0x${string}`,
                abi: erc20Abi,
                functionName: 'approve',
                args: [address.buy as `0x${string}`, usdtRequired * 10n],
            });
            return;
        }

        // 直接购买
        writeBuy({
            address: address.buy as `0x${string}`,
            abi: ieoAbi,
            functionName: 'buy',
            args: [tokenAmount, referrerAddress as `0x${string}`],
        });
    };

    const isProcessing = isApproving || isApproveConfirming || isBuying || isBuyConfirming;

    return (
        <Card className="p-5" hover={true}>
            <div className="mb-4 text-sm font-semibold text-white">代币认购</div>

            {/* AESC 数量输入 */}
            <div className="mb-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <label className="mb-1.5 block text-[11px] tracking-[0.2em] text-slate-400 uppercase">认购数量 (AESC)</label>
                <input
                    type="number"
                    value={aescAmount}
                    onChange={(e) => setAescAmount(e.target.value)}
                    placeholder="输入数量"
                    className="w-full bg-transparent text-lg font-semibold text-white outline-none placeholder:text-slate-600"
                />
            </div>

            {/* 推荐人地址 */}
            <div className="mb-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <label className="mb-1.5 block text-[11px] tracking-[0.2em] text-slate-400 uppercase">推荐人地址</label>
                <input
                    type="text"
                    value={referrerAddress}
                    onChange={(e) => setReferrerAddress(e.target.value)}
                    placeholder="输入钱包地址"
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
                />
            </div>

            {/* 需支付提示 */}
            {isValidAescAmount && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-3 flex items-center justify-between rounded-lg border border-[#56f1ff]/30 bg-[#56f1ff]/10 px-2.5 py-1.5"
                >
                    <div>
                        <p className="text-[10px] tracking-wider text-slate-400 uppercase">需支付</p>
                        <p className="text-base font-bold text-[#56f1ff]">{estimatedUsdt.toFixed(4)} USDT</p>
                    </div>
                    <div className="text-right">
                        <p className="text-[10px] text-slate-500">单价</p>
                        <p className="text-xs font-medium text-slate-300">${currentStagePrice.toFixed(3)}</p>
                    </div>
                </motion.div>
            )}

            {/* 认购按钮 */}
            <Button
                variant="primary"
                size="sm"
                className="w-full"
                disabled={!isConnected || !isValidAescAmount || !isValidReferrerAddress || isProcessing}
                onClick={handleBuy}
            >
                {!isConnected
                    ? '请先连接钱包'
                    : !isValidAescAmount
                      ? '请输入有效数量'
                      : !isValidReferrerAddress
                        ? referrerAddressError === 'empty'
                            ? '请输入推荐人地址'
                            : referrerAddressError === 'invalid'
                              ? '推荐人地址无效'
                              : referrerAddressError === 'self'
                                ? '推荐人地址不能为自己'
                                : '请输入推荐人地址'
                        : isApproving || isApproveConfirming
                          ? '授权中...'
                          : isBuying || isBuyConfirming
                            ? '认购中...'
                            : '立即认购'}
            </Button>

            {isBuySuccess && <div className="mt-3 text-xs text-emerald-400">认购成功</div>}
        </Card>
    );
};
