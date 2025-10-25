import { Button } from '@/components/dapp/common/Button';
import { Card } from '@/components/dapp/common/Card';
import { simpleTokenAbi } from '@/lib/abiSimpleToken';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { parseUnits } from 'viem';
import { useAccount, useSimulateContract, useWaitForTransactionReceipt, useWriteContract } from 'wagmi';

type FreeMintCardProps = {
    title: string;
    tokenAddress: `0x${string}`;
    defaultAmount?: string;
    decimals: number;
    onSuccess?: () => void;
};

/**
 * 免费铸造卡片
 * @param title 卡片标题
 * @param tokenAddress SimpleToken合约地址
 * @param defaultAmount 默认显示的铸造数量
 * @param decimals 代币decimals
 * @param onSuccess 铸造成功后的回调
 * @returns 免费铸造卡片组件
 */
export const FreeMintCard: React.FC<FreeMintCardProps> = ({ title, tokenAddress, defaultAmount = '1000', decimals, onSuccess }) => {
    const { isConnected } = useAccount();
    const [amount, setAmount] = useState(defaultAmount);

    // 铸造数量转换为链上计量单位
    const parsedAmount = useMemo(() => {
        return parseUnits(amount, decimals);
    }, [amount, decimals]);

    // 预执行以捕捉潜在错误
    useSimulateContract({
        address: tokenAddress,
        abi: simpleTokenAbi,
        functionName: 'freeMint',
        args: parsedAmount ? [parsedAmount] : undefined,
        query: { enabled: isConnected && !!parsedAmount },
    });

    const { data: hash, writeContract, isPending } = useWriteContract();
    const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });
    const handledHashRef = useRef<string | null>(null);

    // 确保每笔交易只回调一次
    useEffect(() => {
        if (isSuccess && hash && handledHashRef.current !== hash) {
            handledHashRef.current = hash;
            onSuccess?.();
        }
    }, [hash, isSuccess, onSuccess]);

    return (
        <Card className="p-4" hover={false}>
            <div className="text-xs text-slate-400">{title}</div>
            <div className="mt-2 flex items-center gap-2">
                <input
                    className="w-40 rounded-md border border-white/15 bg-black/20 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none"
                    placeholder="输入数量"
                    type="number"
                    value={amount}
                    onChange={(e) => {
                        setAmount(e.target.value);
                    }}
                />
                <Button
                    variant="primary"
                    size="sm"
                    disabled={!isConnected || isPending || isConfirming || !parsedAmount}
                    onClick={() =>
                        parsedAmount &&
                        writeContract({
                            address: tokenAddress,
                            abi: simpleTokenAbi,
                            functionName: 'freeMint',
                            args: [parsedAmount],
                        })
                    }
                >
                    {!isConnected ? '请先连接钱包' : isPending || isConfirming ? '铸造中...' : '免费铸造'}
                </Button>
            </div>
            {amount !== '' && !parsedAmount && <div className="mt-2 text-xs text-rose-400">请输入有效的数字数量</div>}
            {isSuccess && <div className="mt-2 text-xs text-emerald-400">铸造成功</div>}
        </Card>
    );
};
