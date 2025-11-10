import { Button } from '@/components/dapp/common/Button';
import { Card } from '@/components/dapp/common/Card';
import { UserX } from 'lucide-react';
import { useState } from 'react';

interface RemoveWhitelistAddressesProps {
    onConfirm: (addresses: string) => void;
    disabled: boolean;
}

/**
 * 批量移除直推奖励地址
 * @param onConfirm 确认回调函数
 * @param disabled 是否禁用按钮
 * @returns 批量移除直推奖励地址组件
 */
export const RemoveWhitelistAddresses: React.FC<RemoveWhitelistAddressesProps> = ({ onConfirm, disabled }) => {
    const [addresses, setAddresses] = useState<string>('');

    return (
        <Card className="p-5" hover={false}>
            <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-rose-500/20 to-pink-600/20">
                    <UserX className="h-4 w-4 text-rose-400" />
                </div>
                <div>
                    <h3 className="text-base font-semibold text-white">移除直推奖励地址</h3>
                    <p className="text-xs text-slate-400">批量移除直推10%奖励白名单地址</p>
                </div>
            </div>
            <div className="space-y-3">
                <div className="text-xs text-slate-300">地址列表 (每行一个)</div>
                <textarea
                    placeholder="0x1234567890123456789012345678901234567890&#10;0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
                    value={addresses}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setAddresses(e.target.value)}
                    rows={4}
                    className="w-full rounded-xl border border-white/15 bg-black/20 px-3 py-2 font-mono text-xs text-white backdrop-blur-sm placeholder:text-slate-500 focus:border-white/30 focus:ring-2 focus:ring-rose-500/30 focus:outline-none"
                />
                <Button variant="primary" size="sm" onClick={() => onConfirm(addresses)} disabled={disabled || !addresses.trim()} className="w-full">
                    批量移除
                </Button>
            </div>
        </Card>
    );
};
