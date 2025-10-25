import { Button } from '@/components/dapp/common/Button';
import { Card } from '@/components/dapp/common/Card';
import { releaseAbi } from '@/lib/abiRelease';
import { config as address } from '@/lib/address';
import { erc20Abi } from '@/lib/erc20Abi';
import { Copy, ExternalLink } from 'lucide-react';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { formatUnits, parseUnits } from 'viem';
import { useAccount, useReadContract, useSimulateContract, useWaitForTransactionReceipt, useWriteContract } from 'wagmi';

type ReleaseContractCardProps = {
    name: string;
    contractAddress: `0x${string}`;
    type: 'claim' | 'withdraw';
    decimals: number;
    isTestnet?: boolean;
};

/**
 * 释放合约卡片
 * @param name 合约名称
 * @param contractAddress 合约地址
 * @param type 操作类型,claim为领取,withdraw为提现
 * @param decimals 代币精度,默认16位
 * @param isTestnet 是否是测试网
 * @returns 释放合约卡片组件
 */
export const ReleaseContractCard: React.FC<ReleaseContractCardProps> = ({
    name,
    contractAddress,
    type,
    decimals = 16,
    isTestnet = import.meta.env.VITE_APP_ENV === 'local',
}) => {
    const { isConnected } = useAccount();
    const [copied, setCopied] = useState(false);
    const [withdrawAmount, setWithdrawAmount] = useState('');
    const [isSimulating, setIsSimulating] = useState(false);
    const [simulateError, setSimulateError] = useState<string>('');

    // 读取合约的AESC余额
    const { data: balanceData, refetch: refetchBalance } = useReadContract({
        address: address.aesc as `0x${string}`,
        abi: erc20Abi,
        functionName: 'balanceOf',
        args: [contractAddress],
    });

    // 读取上次领取/提现时间
    const { data: lastWithdrawTimeData, refetch: refetchTime } = useReadContract({
        address: contractAddress,
        abi: releaseAbi,
        functionName: 'lastWithdrawTime',
    });

    // 提现数量转换为链上计量单位
    const parsedWithdrawAmount = useMemo(() => {
        if (type === 'claim' || !withdrawAmount) return undefined;
        try {
            return parseUnits(withdrawAmount, decimals);
        } catch {
            return undefined;
        }
    }, [withdrawAmount, type, decimals]);

    // 模拟领取交易,默认不执行
    const { refetch: refetchClaimSimulate, error: claimSimulateError } = useSimulateContract({
        address: contractAddress,
        abi: releaseAbi,
        functionName: 'claim',
        query: {
            enabled: false,
        },
    });

    // 模拟提现交易,默认不执行
    const { refetch: refetchWithdrawSimulate, error: withdrawSimulateError } = useSimulateContract({
        address: contractAddress,
        abi: releaseAbi,
        functionName: 'withdraw',
        args: parsedWithdrawAmount ? [address.aesc as `0x${string}`, parsedWithdrawAmount] : undefined,
        query: {
            enabled: false,
        },
    });

    // 写入合约交易
    const { data: hash, writeContract, isPending } = useWriteContract();
    const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });
    const handledHashRef = useRef<string | null>(null);

    // 确保每笔交易只刷新一次
    useEffect(() => {
        if (isSuccess && hash && handledHashRef.current !== hash) {
            handledHashRef.current = hash;
            refetchBalance();
            refetchTime();
            setWithdrawAmount('');
            setSimulateError('');
        }
    }, [hash, isSuccess, refetchBalance, refetchTime]);

    // 格式化AESC余额
    const formatBalance = () => {
        if (!balanceData) return '--';
        const balance = formatUnits(balanceData, decimals);
        return Number(balance).toLocaleString(undefined, { maximumFractionDigits: 2 });
    };

    // 格式化时间戳
    const formatTime = () => {
        if (!lastWithdrawTimeData || lastWithdrawTimeData === 0n) return '--';
        const date = new Date(Number(lastWithdrawTimeData) * 1000);
        return date.toLocaleString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    // 复制地址到剪贴板
    const handleCopy = () => {
        navigator.clipboard.writeText(contractAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // 获取区块浏览器链接
    const getExplorerUrl = () => {
        if (isTestnet) {
            return `https://testnet.bscscan.com/address/${contractAddress}`;
        }
        return `https://bscscan.com/address/${contractAddress}`;
    };

    // 格式化地址显示
    const formatAddress = (address: string) => {
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    };

    // 处理领取
    const handleClaim = async () => {
        setSimulateError('');
        setIsSimulating(true);
        try {
            // 先模拟交易
            const { data } = await refetchClaimSimulate();
            if (!data) {
                const errorMsg = claimSimulateError?.message || '模拟交易失败,请检查权限或条件';
                setSimulateError(errorMsg);
                return;
            }
            // 模拟成功,执行真实交易
            writeContract({
                address: contractAddress,
                abi: releaseAbi,
                functionName: 'claim',
            });
        } catch (error) {
            console.error('领取模拟失败', error);
            const errorMsg = error instanceof Error ? error.message : '交易将失败';
            setSimulateError(errorMsg);
        } finally {
            setIsSimulating(false);
        }
    };

    // 处理提现
    const handleWithdraw = async () => {
        if (!parsedWithdrawAmount) return;
        setSimulateError('');
        setIsSimulating(true);
        try {
            // 先模拟交易
            const { data } = await refetchWithdrawSimulate();
            if (!data) {
                const errorMsg = withdrawSimulateError?.message || '模拟交易失败,请检查权限或条件';
                setSimulateError(errorMsg);
                return;
            }
            // 模拟成功,执行真实交易
            writeContract({
                address: contractAddress,
                abi: releaseAbi,
                functionName: 'withdraw',
                args: [address.aesc as `0x${string}`, parsedWithdrawAmount],
            });
        } catch (error) {
            console.error('提现模拟失败', error);
            const errorMsg = error instanceof Error ? error.message : '交易将失败';
            setSimulateError(errorMsg);
        } finally {
            setIsSimulating(false);
        }
    };

    return (
        <Card className="p-4" hover={false}>
            {/* 合约名称 */}
            <div className="mb-3 flex items-center justify-between">
                <h3 className="text-base font-semibold text-white">{name}</h3>
                <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-xs text-blue-400">{type === 'claim' ? '领取' : '提现'}</span>
            </div>

            {/* 合约地址 */}
            <div className="mb-3 rounded-lg border border-white/10 bg-black/20 p-3">
                <div className="mb-1 text-xs text-slate-400">合约地址</div>
                <div className="flex items-center justify-between gap-2">
                    <code className="text-xs text-slate-300">{formatAddress(contractAddress)}</code>
                    <div className="flex gap-1">
                        <button onClick={handleCopy} className="rounded p-1 transition-colors hover:bg-white/10" title="复制地址">
                            <Copy className="h-3.5 w-3.5 text-slate-400" />
                        </button>
                        <a
                            href={getExplorerUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded p-1 transition-colors hover:bg-white/10"
                            title="在浏览器中查看"
                        >
                            <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                        </a>
                    </div>
                </div>
                {copied && <div className="mt-1 text-xs text-emerald-400">已复制</div>}
            </div>

            {/* AESC余额 */}
            <div className="mb-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3">
                <div className="mb-1 text-xs text-slate-400">AESC 余额</div>
                <div className="text-lg font-semibold text-emerald-400">{formatBalance()}</div>
            </div>

            {/* 释放信息 */}
            <div className="mb-3 space-y-2">
                <div className="flex justify-between">
                    <span className="text-xs text-slate-400">{type === 'claim' ? '上次领取时间' : '上次提现时间'}</span>
                    <span className="text-xs text-white">{formatTime()}</span>
                </div>
            </div>

            {/* 提现输入框 */}
            {type === 'withdraw' && (
                <div className="mb-3">
                    <input
                        className="w-full rounded-md border border-white/15 bg-black/20 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:ring-1 focus:ring-emerald-500/50 focus:outline-none"
                        placeholder="输入提现数量"
                        type="number"
                        value={withdrawAmount}
                        onChange={(e) => setWithdrawAmount(e.target.value)}
                        disabled={isPending || isConfirming}
                    />
                    {withdrawAmount !== '' && !parsedWithdrawAmount && <div className="mt-1 text-xs text-rose-400">请输入有效的数字数量</div>}
                </div>
            )}

            {/* 模拟交易错误提示 */}
            {simulateError && (
                <div className="mb-3 rounded-lg border border-rose-500/30 bg-rose-500/10 p-2">
                    <p className="text-xs text-rose-300">交易预检失败: {simulateError}</p>
                </div>
            )}

            {/* 交易状态提示 */}
            {isSimulating && (
                <div className="mb-3 rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-2 text-center">
                    <p className="text-xs text-cyan-300">模拟交易中...</p>
                </div>
            )}
            {isPending && (
                <div className="mb-3 rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-2 text-center">
                    <p className="text-xs text-yellow-300">等待钱包确认...</p>
                </div>
            )}
            {isConfirming && (
                <div className="mb-3 rounded-lg border border-blue-500/30 bg-blue-500/10 p-2 text-center">
                    <p className="text-xs text-blue-300">交易确认中...</p>
                </div>
            )}
            {isSuccess && (
                <div className="mb-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-2 text-center">
                    <p className="text-xs text-emerald-300">操作成功!</p>
                </div>
            )}

            {/* 操作按钮 */}
            <Button
                variant="primary"
                size="sm"
                className="w-full"
                disabled={!isConnected || isSimulating || isPending || isConfirming || (type === 'withdraw' && !parsedWithdrawAmount)}
                onClick={() => {
                    if (type === 'claim') {
                        handleClaim();
                    } else {
                        handleWithdraw();
                    }
                }}
            >
                {!isConnected
                    ? '请先连接钱包'
                    : isSimulating
                      ? '模拟中...'
                      : isPending || isConfirming
                        ? type === 'claim'
                            ? '领取中...'
                            : '提现中...'
                        : type === 'claim'
                          ? '领取代币'
                          : '提现代币'}
            </Button>
        </Card>
    );
};
