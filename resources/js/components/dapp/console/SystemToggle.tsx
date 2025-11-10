import { Button } from '@/components/dapp/common/Button';
import { Card } from '@/components/dapp/common/Card';
import { Power } from 'lucide-react';

interface SystemToggleProps {
    enableData: boolean | undefined;
    enableStatus: boolean;
    setEnableStatus: (status: boolean) => void;
    onConfirm: () => void;
    disabled: boolean;
}

/**
 * IEO系统开关控制
 * @param enableData 从合约读取的当前状态
 * @param enableStatus 组件内部的状态
 * @param setEnableStatus 设置组件内部状态的函数
 * @param onConfirm 确认设置回调
 * @param disabled 是否禁用按钮
 * @returns IEO系统开关控制组件
 */
export const SystemToggle: React.FC<SystemToggleProps> = ({ enableData, enableStatus, setEnableStatus, onConfirm, disabled }) => {
    return (
        <Card className="p-5" hover={false}>
            <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-blue-500/20 to-purple-600/20">
                    <Power className="h-4 w-4 text-[#6ef3ff]" />
                </div>
                <div>
                    <h3 className="text-base font-semibold text-white">系统开关</h3>
                    <p className="text-xs text-slate-400">控制IEO系统的启用状态</p>
                </div>
            </div>
            <div className="space-y-3">
                <div className="text-xs text-slate-300">
                    当前状态: <span className={enableData ? 'text-emerald-400' : 'text-rose-400'}>{enableData ? '已启用' : '已禁用'}</span>
                </div>
                <div className="flex gap-2">
                    <button
                        type="button"
                        onClick={() => setEnableStatus(true)}
                        className={`flex flex-1 items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                            enableStatus
                                ? 'border border-emerald-500/50 bg-emerald-500/20 text-emerald-300'
                                : 'border border-white/15 bg-white/5 text-slate-400 hover:bg-white/10'
                        }`}
                    >
                        启用
                    </button>
                    <button
                        type="button"
                        onClick={() => setEnableStatus(false)}
                        className={`flex flex-1 items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                            !enableStatus
                                ? 'border border-rose-500/50 bg-rose-500/20 text-rose-300'
                                : 'border border-white/15 bg-white/5 text-slate-400 hover:bg-white/10'
                        }`}
                    >
                        禁用
                    </button>
                </div>
                <Button variant="primary" size="sm" onClick={onConfirm} disabled={disabled} className="w-full">
                    确认设置
                </Button>
            </div>
        </Card>
    );
};
