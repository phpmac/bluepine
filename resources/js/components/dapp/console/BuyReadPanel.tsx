import { Card } from '@/components/dapp/common/Card';
import ieoAbi from '@/lib/abi';
import { config as contractAddress } from '@/lib/address';
import { erc20Abi } from '@/lib/erc20Abi';
import dayjs from 'dayjs';
import React from 'react';
import { formatUnits } from 'viem';
import { useAccount, useReadContract } from 'wagmi';

type BuyReadPanelProps = {
    /** Buy 合约地址 */
    contract: `0x${string}`;
};

export const BuyReadPanel: React.FC<BuyReadPanelProps> = ({ contract }) => {
    const { address, isConnected } = useAccount();

    // 读取 AESC 代币精度
    const { data: aescDecimals } = useReadContract({
        address: contractAddress.aesc as `0x${string}`,
        abi: erc20Abi,
        functionName: 'decimals',
    });

    // 基础数据查询
    const { data: stageCount } = useReadContract({ address: contract, abi: ieoAbi, functionName: 'getStageCount' });
    const { data: currentStage } = useReadContract({ address: contract, abi: ieoAbi, functionName: 'getCurrentStage' });
    const { data: allStageInfo } = useReadContract({ address: contract, abi: ieoAbi, functionName: 'getAllStageInfo' });
    const { data: ieoStart } = useReadContract({ address: contract, abi: ieoAbi, functionName: 'ieoStartTime' });
    const { data: ieoEnd } = useReadContract({ address: contract, abi: ieoAbi, functionName: 'ieoEndTime' });
    const { data: ended } = useReadContract({ address: contract, abi: ieoAbi, functionName: 'isEnded' });
    const { data: pending } = useReadContract({
        address: contract,
        abi: ieoAbi,
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
                {allStageInfo && Array.isArray(allStageInfo) && allStageInfo.length > 0 && aescDecimals !== undefined && (
                    <div className="md:col-span-2">
                        <div className="text-xs text-slate-400">所有阶段信息</div>
                        <div className="mt-1 max-h-96 overflow-y-auto rounded-lg bg-black/30 p-2">
                            {allStageInfo.map((stage, index) => {
                                const formattedCap = formatUnits(stage.cap, aescDecimals);
                                const formattedSold = formatUnits(stage.sold, aescDecimals);
                                const price = Number(stage.priceNumerator) / Number(stage.priceDenominator);

                                return (
                                    <div key={index} className="mb-2 rounded border border-white/10 bg-white/5 p-2 text-xs text-white last:mb-0">
                                        <div className="mb-1 font-semibold text-[#56f1ff]">阶段 {index + 1}</div>
                                        <div className="grid grid-cols-2 gap-1 text-slate-300">
                                            <div>
                                                额度: <span className="text-white">{Number(formattedCap).toLocaleString()}</span>
                                            </div>
                                            <div>
                                                已售: <span className="text-white">{Number(formattedSold).toLocaleString()}</span>
                                            </div>
                                            <div className="col-span-2">
                                                Price:{' '}
                                                <span className="text-white">
                                                    {String(stage.priceNumerator)}/{String(stage.priceDenominator)} = ${price.toFixed(4)}
                                                </span>
                                            </div>
                                            <div>
                                                进度:{' '}
                                                <span className="text-white">
                                                    {((Number(formattedSold) / Number(formattedCap)) * 100).toFixed(2)}%
                                                </span>
                                            </div>
                                            <div className="col-span-2 truncate">
                                                收款地址: <span className="text-white">{stage.paymentReceiver}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
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
