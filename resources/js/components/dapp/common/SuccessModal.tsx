import { Button } from '@/components/dapp/common/Button';
import { motion } from 'framer-motion';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import React from 'react';

type SuccessModalProps = {
    /** 是否显示弹窗 */
    isOpen: boolean;
    /** 交易哈希 */
    txHash: string;
    /** 成功标题 */
    title: string;
    /** 成功描述 */
    description: string;
    /** 是否测试网 */
    isTestnet?: boolean;
    /** 关闭回调 */
    onClose: () => void;
};

/**
 * 交易成功弹窗组件
 */
export const SuccessModal: React.FC<SuccessModalProps> = ({
    isOpen,
    txHash,
    title,
    description,
    isTestnet = import.meta.env.VITE_APP_ENV === 'local',
    onClose,
}) => {
    const { t } = useLaravelReactI18n();

    if (!isOpen || !txHash) return null;

    const explorerUrl = isTestnet ? `https://testnet.bscscan.com/tx/${txHash}` : `https://bscscan.com/tx/${txHash}`;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative mx-4 max-w-md rounded-2xl border border-emerald-500/30 bg-linear-to-br from-[#0a1628] to-[#051018] p-6 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="mb-4 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                        <svg className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>
                <h3 className="mb-2 text-center text-xl font-bold text-white">{title}</h3>
                <p className="mb-6 text-center text-sm text-slate-400">{description}</p>
                <div className="mb-4 rounded-lg border border-white/10 bg-white/5 p-3">
                    <p className="mb-1 text-xs text-slate-400">{t('modal.tx_hash')}</p>
                    <p className="font-mono text-xs break-all text-white">{txHash}</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="secondary" size="sm" className="flex-1" onClick={onClose}>
                        {t('modal.close')}
                    </Button>
                    <Button
                        variant="primary"
                        size="sm"
                        className="flex-1"
                        onClick={() => {
                            window.open(explorerUrl, '_blank');
                        }}
                    >
                        {t('modal.view_explorer')}
                    </Button>
                </div>
            </motion.div>
        </motion.div>
    );
};
