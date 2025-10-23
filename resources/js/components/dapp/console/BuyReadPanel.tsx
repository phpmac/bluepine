import { Card } from '@/components/dapp/common/Card';
import { buyAbi } from '@/lib/abiBuy';
import dayjs from 'dayjs';
import React from 'react';
import { useAccount, useReadContract } from 'wagmi';

type BuyReadPanelProps = {
    /** Buy 合约地址 */
    contract: `0x${string}`;
};

export const BuyReadPanel: React.FC<BuyReadPanelProps> = ({ contract }) => {
    const { address, isConnected } = useAccount();

    // 基础数据查询
    const { data: stageCount } = useReadContract({ address: contract, abi: buyAbi, functionName: 'getStageCount' });
    const { data: currentStage } = useReadContract({ address: contract, abi: buyAbi, functionName: 'getCurrentStage' });
    const { data: ieoStart } = useReadContract({ address: contract, abi: buyAbi, functionName: 'ieoStartTime' });
    const { data: ieoEnd } = useReadContract({ address: contract, abi: buyAbi, functionName: 'ieoEndTime' });
    const { data: ended } = useReadContract({ address: contract, abi: buyAbi, functionName: 'isEnded' });
    const { data: pending } = useReadContract({
        address: contract,
        abi: buyAbi,
        functionName: 'getUserClaimableAmount',
        args: address ? [address] : undefined,
        query: { enabled: !!address && isConnected },
    });

    return (
        <Card className="p-4" hover={true}>
            <div className="mb-3 text-sm font-semibold text-white">Buy 合约数据</div>
            <div className="grid grid-cols-1 gap-2 text-sm text-slate-300 md:grid-cols-2">
                <div>
                    阶段数量: <span className="text-white">{String(stageCount ?? '')}</span>
                </div>
                <div>
                    是否已结束: <span className="text-white">{String(ended ?? '')}</span>
                </div>
                <div>
                    开始时间: <span className="text-white">{String(ieoStart ?? '')}</span>
                    {ieoStart && <span className="ml-2 text-xs text-slate-400">{dayjs.unix(Number(ieoStart)).format('YYYY-MM-DD HH:mm:ss')}</span>}
                </div>
                <div>
                    结束时间: <span className="text-white">{String(ieoEnd ?? '')}</span>
                    {ieoEnd && <span className="ml-2 text-xs text-slate-400">{dayjs.unix(Number(ieoEnd)).format('YYYY-MM-DD HH:mm:ss')}</span>}
                </div>
                {currentStage && (
                    <div className="md:col-span-2">
                        <div className="text-xs text-slate-400">当前阶段详情</div>
                        <pre className="mt-1 rounded-lg bg-black/30 p-2 text-xs text-white">
                            {JSON.stringify(currentStage, (_k, v) => (typeof v === 'bigint' ? v.toString() : v), 2)}
                        </pre>
                    </div>
                )}
                {pending && (
                    <div className="md:col-span-2">
                        <div className="text-xs text-slate-400">我的待领取额度</div>
                        <pre className="mt-1 rounded-lg bg-black/30 p-2 text-xs text-white">
                            {JSON.stringify(pending, (_k, v) => (typeof v === 'bigint' ? v.toString() : v), 2)}
                        </pre>
                    </div>
                )}
            </div>
        </Card>
    );
};
