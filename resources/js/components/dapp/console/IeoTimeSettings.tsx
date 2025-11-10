import { Button } from '@/components/dapp/common/Button';
import { Card } from '@/components/dapp/common/Card';
import { Calendar } from 'lucide-react';
import { useState } from 'react';

interface IeoTimeSettingsProps {
    onConfirm: (startTime: string, endTime: string) => void;
    disabled: boolean;
}

/**
 * 设置IEO时间
 * @param onConfirm 确认回调函数
 * @param disabled 是否禁用按钮
 * @returns IEO时间设置组件
 */
export const IeoTimeSettings: React.FC<IeoTimeSettingsProps> = ({ onConfirm, disabled }) => {
    const [startTime, setStartTime] = useState<string>('');
    const [endTime, setEndTime] = useState<string>('');

    const handleConfirm = () => {
        onConfirm(startTime, endTime);
    };

    return (
        <Card className="p-5" hover={false}>
            <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-amber-500/20 to-orange-600/20">
                    <Calendar className="h-4 w-4 text-amber-400" />
                </div>
                <div>
                    <h3 className="text-base font-semibold text-white">设置IEO时间</h3>
                    <p className="text-xs text-slate-400">配置募资开始和结束时间</p>
                </div>
            </div>
            <div className="space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                    <div className="space-y-2">
                        <div className="text-xs text-slate-300">开始时间</div>
                        <input
                            type="datetime-local"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            className="w-full rounded-xl border border-white/15 bg-black/20 px-3 py-2 text-sm text-white backdrop-blur-sm focus:border-white/30 focus:ring-2 focus:ring-amber-500/30 focus:outline-none"
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="text-xs text-slate-300">结束时间</div>
                        <input
                            type="datetime-local"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            className="w-full rounded-xl border border-white/15 bg-black/20 px-3 py-2 text-sm text-white backdrop-blur-sm focus:border-white/30 focus:ring-2 focus:ring-amber-500/30 focus:outline-none"
                        />
                    </div>
                </div>
                <Button variant="primary" size="sm" onClick={handleConfirm} disabled={disabled || !startTime || !endTime} className="w-full">
                    确认设置
                </Button>
            </div>
        </Card>
    );
};
