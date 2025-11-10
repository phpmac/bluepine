import { Button } from '@/components/dapp/common/Button';
import { Card } from '@/components/dapp/common/Card';
import ieoAbi from '@/lib/abi';
import { config as address } from '@/lib/address';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { isAddress } from 'viem';
import { useReadContract } from 'wagmi';

interface QueryWhitelistAddressProps {
    disabled: boolean;
}

/**
 * 查询直推奖励地址
 * @param disabled 是否禁用查询按钮
 * @returns 查询直推奖励地址组件
 */
export const QueryWhitelistAddress: React.FC<QueryWhitelistAddressProps> = ({ disabled }) => {
    const [queryAddress, setQueryAddress] = useState<string>('');
    const [whitelistResult, setWhitelistResult] = useState<boolean | null>(null);
    const [isQueryingWhitelist, setIsQueryingWhitelist] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    // 查询直推奖励地址
    const { refetch: refetchWhitelist } = useReadContract({
        address: address.buy as `0x${string}`,
        abi: ieoAbi,
        functionName: 'directReferralWhiteList',
        args: [queryAddress as `0x${string}`],
        query: {
            // ! 确保默认不查询
            enabled: false,
        },
    });

    // 查询直推奖励地址
    const handleQuery = async () => {
        if (!queryAddress || !isAddress(queryAddress)) {
            setErrorMessage('请输入有效的地址');
            return;
        }
        setWhitelistResult(null);
        setErrorMessage('');
        setIsQueryingWhitelist(true);
        const targetAddress = queryAddress.trim() as `0x${string}`;
        try {
            const { data: isWhite } = await refetchWhitelist();
            setWhitelistResult(isWhite ?? false);
            console.debug(`正在查询地址: ${targetAddress} ${isWhite}`);
        } catch (error) {
            console.error('查询白名单失败', error);
            setWhitelistResult(null);
            setErrorMessage(error instanceof Error ? error.message : '查询失败,请重试');
        } finally {
            setIsQueryingWhitelist(false);
        }
    };

    return (
        <Card className="p-5" hover={false}>
            <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-blue-500/20 to-cyan-600/20">
                    <Search className="h-4 w-4 text-blue-400" />
                </div>
                <div>
                    <h3 className="text-base font-semibold text-white">查询直推奖励地址</h3>
                    <p className="text-xs text-slate-400">查询地址是否享受10%直推奖励</p>
                </div>
            </div>
            <div className="space-y-3">
                <div className="text-xs text-slate-300">输入地址</div>
                <input
                    type="text"
                    placeholder="0x1234567890123456789012345678901234567890"
                    value={queryAddress}
                    onChange={(e) => setQueryAddress(e.target.value)}
                    className="w-full rounded-xl border border-white/15 bg-black/20 px-3 py-2 font-mono text-xs text-white backdrop-blur-sm placeholder:text-slate-500 focus:border-white/30 focus:ring-2 focus:ring-blue-500/30 focus:outline-none"
                />
                {errorMessage && (
                    <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-center">
                        <p className="text-sm font-semibold text-amber-300">{errorMessage}</p>
                    </div>
                )}
                {whitelistResult !== null && (
                    <div
                        className={`rounded-lg border p-3 text-center ${
                            whitelistResult ? 'border-emerald-500/30 bg-emerald-500/10' : 'border-rose-500/30 bg-rose-500/10'
                        }`}
                    >
                        <p className={`text-sm font-semibold ${whitelistResult ? 'text-emerald-300' : 'text-rose-300'}`}>
                            {whitelistResult ? '✓ 该地址在白名单中' : '✗ 该地址不在白名单中'}
                        </p>
                    </div>
                )}
                <Button
                    variant="primary"
                    size="sm"
                    onClick={handleQuery}
                    disabled={disabled || !queryAddress.trim() || isQueryingWhitelist}
                    className="w-full"
                >
                    {isQueryingWhitelist ? '查询中...' : '查询'}
                </Button>
            </div>
        </Card>
    );
};
