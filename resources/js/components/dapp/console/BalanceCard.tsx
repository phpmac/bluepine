import { Card } from '@/components/dapp/common/Card';
import { erc20Abi } from '@/lib/erc20Abi';
import React, { useEffect, useRef } from 'react';
import { useAccount, useReadContract } from 'wagmi';

type BalanceCardProps = {
    /** 卡片标题,例如 USDT 余额 */
    title: string;
    /** 目标 ERC20 合约地址 */
    tokenAddress: `0x${string}`;
    /** 代币小数位, 默认从 erc20 查询 */
    decimals?: number;
    /** 外部刷新计数, 用于触发 refetch */
    refreshKey?: number;
};

export const BalanceCard: React.FC<BalanceCardProps> = ({ title, tokenAddress, decimals, refreshKey }) => {
    const { address, isConnected } = useAccount();
    // 读取指定代币余额
    const { data, refetch } = useReadContract({
        address: tokenAddress,
        abi: erc20Abi,
        functionName: 'balanceOf',
        args: address ? [address] : undefined,
        query: { enabled: !!address && isConnected },
    });

    // 获取代币 decimals, 优先使用传入值
    const { data: tokenDecimals } = useReadContract({
        address: tokenAddress,
        abi: erc20Abi,
        functionName: 'decimals',
        query: { enabled: !!tokenAddress },
    });

    const d = decimals ?? (tokenDecimals as number | undefined) ?? 18;
    const bn = (data as bigint | undefined) ?? 0n;
    const display = Number(bn) / 10 ** d;

    // 使用 ref 保存最新的 refetch, 避免 effect 重新绑定造成循环
    const refetchRef = useRef(refetch);
    useEffect(() => {
        refetchRef.current = refetch;
    }, [refetch]);

    useEffect(() => {
        if (refreshKey === undefined) {
            return;
        }
        refetchRef.current();
    }, [refreshKey]);

    return (
        <Card className="p-4" hover={true}>
            <div className="text-xs text-slate-400">{title}</div>
            <div className="mt-1 text-2xl font-semibold text-white">{display.toLocaleString()}</div>
            <div className="mt-1 text-xs text-slate-500">当前余额</div>
        </Card>
    );
};
