import { Button } from '@/components/dapp/common/Button';
import { Card } from '@/components/dapp/common/Card';
import { UserPlus } from 'lucide-react';
import { useState } from 'react';

interface AddWhitelistAddressesProps {
    onConfirm: (addresses: string) => void;
    disabled: boolean;
}

/**
 * 批量添加直推奖励地址
 * @param onConfirm 确认回调函数
 * @param disabled 是否禁用按钮
 * @returns 批量添加直推奖励地址组件
 */
export const AddWhitelistAddresses: React.FC<AddWhitelistAddressesProps> = ({ onConfirm, disabled }) => {
    const [addresses, setAddresses] = useState<string>('');

    return (
        <Card className="p-5" hover={false}>
            <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-emerald-500/20 to-teal-600/20">
                    <UserPlus className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                    <h3 className="text-base font-semibold text-white">添加直推奖励地址</h3>
                    <p className="text-xs text-slate-400">批量添加可获得10%直推奖励的地址</p>
                </div>
            </div>
            <div className="space-y-3">
                <div className="text-xs text-slate-300">地址列表 (每行一个)</div>
                <textarea
                    placeholder="钱包地址"
                    value={addresses}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setAddresses(e.target.value)}
                    rows={4}
                    className="w-full rounded-xl border border-white/15 bg-black/20 px-3 py-2 font-mono text-xs text-white backdrop-blur-sm placeholder:text-slate-500 focus:border-white/30 focus:ring-2 focus:ring-emerald-500/30 focus:outline-none"
                />
                <Button variant="primary" size="sm" onClick={() => onConfirm(addresses)} disabled={disabled || !addresses.trim()} className="w-full">
                    批量添加
                </Button>
            </div>
        </Card>
    );
};
