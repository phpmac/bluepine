import { Button } from '@/components/dapp/common/Button';
import { Card } from '@/components/dapp/common/Card';
import ieoAbi from '@/lib/abi';
import dayjs from 'dayjs';
import React, { useMemo, useState } from 'react';
import { useWaitForTransactionReceipt, useWriteContract } from 'wagmi';

type BuyAdminPanelProps = {
    contract: `0x${string}`;
};

/**
 * Buy合约管理员操作面板
 * @param contract Buy合约地址
 * @returns Buy合约管理员操作面板组件
 */
export const BuyAdminPanel: React.FC<BuyAdminPanelProps> = ({ contract }) => {
    const [enable, setEnable] = useState(true);
    const [start, setStart] = useState(dayjs().unix().toString());
    const [end, setEnd] = useState(dayjs().unix().toString());

    // setEnable 和 setIeoTime 分别使用独立的 write
    const { data: hash1, writeContract: writeEnable, isPending: p1 } = useWriteContract();
    const { data: hash2, writeContract: writeTime, isPending: p2 } = useWriteContract();
    const { isLoading: c1 } = useWaitForTransactionReceipt({ hash: hash1 });
    const { isLoading: c2 } = useWaitForTransactionReceipt({ hash: hash2 });

    // 将输入的秒时间戳转换为 bigint
    const startBn = useMemo(() => BigInt(start || '0'), [start]);
    const endBn = useMemo(() => BigInt(end || '0'), [end]);

    return (
        <Card className="p-4" hover={false}>
            <div className="mb-3 text-sm font-semibold text-white">管理员操作</div>
            <div className="flex flex-wrap gap-3">
                <Button
                    variant="secondary"
                    size="sm"
                    disabled={p1 || c1}
                    onClick={() => writeEnable({ address: contract, abi: ieoAbi, functionName: 'setEnable', args: [enable] })}
                >
                    {p1 || c1 ? '设置中...' : `setEnable(${enable ? 'true' : 'false'})`}
                </Button>
                <label className="flex items-center gap-2 text-xs text-slate-400">
                    <input type="checkbox" checked={enable} onChange={(e) => setEnable(e.target.checked)} /> 启用
                </label>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
                <input
                    className="w-40 rounded-md border border-white/15 bg-black/20 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none"
                    placeholder="开始时间戳"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                />
                <input
                    className="w-40 rounded-md border border-white/15 bg-black/20 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none"
                    placeholder="结束时间戳"
                    value={end}
                    onChange={(e) => setEnd(e.target.value)}
                />
                <Button
                    variant="secondary"
                    size="sm"
                    disabled={p2 || c2}
                    onClick={() => writeTime({ address: contract, abi: ieoAbi, functionName: 'setIeoTime', args: [startBn, endBn] })}
                >
                    {p2 || c2 ? '设置中...' : 'setIeoTime'}
                </Button>
            </div>
        </Card>
    );
};
