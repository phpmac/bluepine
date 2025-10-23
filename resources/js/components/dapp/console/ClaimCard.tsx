import { Button } from '@/components/dapp/common/Button';
import { Card } from '@/components/dapp/common/Card';
import { buyAbi } from '@/lib/abiBuy';
import React, { useEffect, useMemo, useRef } from 'react';
import { formatUnits } from 'viem';
import { useAccount, useReadContract, useWaitForTransactionReceipt, useWriteContract } from 'wagmi';

type ClaimCardProps = {
    /** Buy 合约地址 */
    contract: `0x${string}`;
    /** 代币 decimals */
    decimals?: number;
    /** 成功领取回调 */
    onSuccess?: () => void;
};

export const ClaimCard: React.FC<ClaimCardProps> = ({ contract, decimals = 16, onSuccess }) => {
    const { address, isConnected } = useAccount();
    // 查询待领取额度
    const {
        data: pendingData,
        refetch,
        isFetching,
    } = useReadContract({
        address: contract,
        abi: buyAbi,
        functionName: 'getUserClaimableAmount',
        args: address ? [address] : undefined,
        query: { enabled: !!address && isConnected },
    });

    // 解析返回值: [投资者额度, 推荐奖励]
    const [investorAmount, referralAmount] = useMemo(() => {
        if (Array.isArray(pendingData) && pendingData.length === 2) {
            const [investor, referral] = pendingData as [bigint, bigint];
            return [investor ?? 0n, referral ?? 0n];
        }
        return [0n, 0n];
    }, [pendingData]);

    const totalAmount = investorAmount + referralAmount;

    const formattedInvestor = formatUnits(investorAmount, decimals);
    const formattedReferral = formatUnits(referralAmount, decimals);
    const formattedTotal = formatUnits(totalAmount, decimals);

    const { data: hash, writeContract, isPending } = useWriteContract();
    const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });
    const handledHashRef = useRef<string | null>(null);

    // hash 去重, 避免重复触发 onSuccess
    useEffect(() => {
        if (isSuccess && hash && handledHashRef.current !== hash) {
            handledHashRef.current = hash;
            onSuccess?.();
            refetch();
        }
    }, [hash, isSuccess, onSuccess, refetch]);

    const disabled = !isConnected || totalAmount === 0n || isPending || isConfirming;

    return (
        <Card className="p-5" hover={true}>
            <div className="flex items-center justify-between">
                <div>
                    <div className="text-xs text-slate-400">每月可领取总量</div>
                    <div className="mt-1 text-2xl font-semibold text-white">{isFetching ? '加载中...' : formattedTotal}</div>
                </div>
                <Button
                    variant="primary"
                    size="sm"
                    disabled={disabled}
                    onClick={() =>
                        writeContract({
                            address: contract,
                            abi: buyAbi,
                            functionName: 'claim',
                        })
                    }
                >
                    {isPending || isConfirming ? '领取中...' : '领取代币'}
                </Button>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-2 text-xs text-slate-400 md:grid-cols-2">
                <div>
                    每月可领取数量
                    <span className="ml-2 text-sm text-white">{formattedInvestor}</span>
                </div>
                <div>
                    已获得推荐奖励数量
                    <span className="ml-2 text-sm text-white">{formattedReferral}</span>
                </div>
            </div>
            <div className="mt-3 text-xs text-slate-500">* 认购立即获得认购数量的10%,剩下的币在12个月内线性解锁.</div>
        </Card>
    );
};
