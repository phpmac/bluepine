import { useLaravelReactI18n } from 'laravel-react-i18n';
import { ArrowRight, Coins } from 'lucide-react';

/**
 * AESC 代币信息概览组件
 *
 * 展示代币的基本信息, 包括符号, 发行量, 底层公链, 当前阶段等
 */
export function AescTokenInfo() {
    const { t } = useLaravelReactI18n();

    const tokenInfo = [
        {
            label: t('aesc.tokenInfo.symbol.label'),
            value: t('aesc.tokenInfo.symbol.value'),
        },
        {
            label: t('aesc.tokenInfo.supply.label'),
            value: t('aesc.tokenInfo.supply.value'),
        },
        {
            label: t('aesc.tokenInfo.blockchain.label'),
            value: t('aesc.tokenInfo.blockchain.value'),
        },
        {
            label: t('aesc.tokenInfo.stage.label'),
            value: t('aesc.tokenInfo.stage.value'),
        },
    ];

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* 标题 */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">{t('aesc.tokenInfo.title')}</h2>
                </div>

                {/* 代币信息卡片 */}
                <div className="mx-auto max-w-4xl rounded-lg border-2 border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-12">
                    <div className="mb-8 flex items-center justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                            <Coins className="h-8 w-8 text-emerald-400" />
                        </div>
                    </div>

                    <div className="mb-8 grid gap-6 md:grid-cols-2">
                        {tokenInfo.map((info, index) => (
                            <div key={index} className="rounded border border-white/10 bg-white/5 p-6">
                                <div className="mb-2 text-sm text-slate-400">{info.label}</div>
                                <div className="text-lg font-semibold text-white">{info.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* 状态和按钮 */}
                    <div className="text-center">
                        <div className="mb-6 inline-flex items-center border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
                            {t('aesc.tokenInfo.status')}
                        </div>
                        <div>
                            <a
                                href="#participate"
                                className="group inline-flex cursor-pointer items-center bg-linear-to-r from-emerald-500 to-teal-600 px-8 py-4 text-lg font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700"
                            >
                                {t('aesc.tokenInfo.button')}
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
