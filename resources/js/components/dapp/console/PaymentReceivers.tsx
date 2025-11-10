import { Button } from '@/components/dapp/common/Button';
import { Card } from '@/components/dapp/common/Card';
import { Wallet } from 'lucide-react';
import { useState } from 'react';

interface PaymentReceiversProps {
    allStageInfoData: readonly unknown[] | undefined;
    onConfirm: (addresses: string) => void;
    disabled: boolean;
}

/**
 * 设置收款地址
 * @param allStageInfoData 所有阶段信息数据
 * @param onConfirm 确认回调函数
 * @param disabled 是否禁用按钮
 * @returns 收款地址设置组件
 */
export const PaymentReceivers: React.FC<PaymentReceiversProps> = ({ allStageInfoData, onConfirm, disabled }) => {
    const [addresses, setAddresses] = useState<string>('');

    return (
        <Card className="p-5" hover={false}>
            <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-purple-500/20 to-indigo-600/20">
                    <Wallet className="h-4 w-4 text-purple-400" />
                </div>
                <div>
                    <h3 className="text-base font-semibold text-white">设置收款地址</h3>
                    <p className="text-xs text-slate-400">更改每期的收款地址,默认3个</p>
                </div>
            </div>
            <div className="space-y-3">
                {allStageInfoData && Array.isArray(allStageInfoData) && (
                    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                        <div className="mb-2 text-xs font-medium text-slate-300">现在的收款地址:</div>
                        <div className="space-y-1">
                            {allStageInfoData.map((stage, index: number) => {
                                const stageArray = stage as {
                                    cap: bigint;
                                    sold: bigint;
                                    priceNumerator: bigint;
                                    priceDenominator: bigint;
                                    paymentReceiver: `0x${string}`;
                                };
                                return (
                                    <div key={index} className="font-mono text-xs text-slate-400">
                                        {String(stageArray.paymentReceiver)}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                <div className="text-xs text-slate-300">收款地址列表 (每行一个)</div>
                <textarea
                    placeholder="0x1234567890123456789012345678901234567890&#10;0xabcdefabcdefabcdefabcdefabcdefabcdefabcd&#10;0x9876543210987654321098765432109876543210"
                    value={addresses}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setAddresses(e.target.value)}
                    rows={4}
                    className="w-full rounded-xl border border-white/15 bg-black/20 px-3 py-2 font-mono text-xs text-white backdrop-blur-sm placeholder:text-slate-500 focus:border-white/30 focus:ring-2 focus:ring-purple-500/30 focus:outline-none"
                />
                <p className="text-xs text-slate-500">提示: 地址数量需要与阶段数量匹配</p>
                <Button variant="primary" size="sm" onClick={() => onConfirm(addresses)} disabled={disabled || !addresses.trim()} className="w-full">
                    确认设置
                </Button>
            </div>
        </Card>
    );
};
