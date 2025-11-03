import { useLaravelReactI18n } from 'laravel-react-i18n';

export function InvestmentLogic() {
    const { t } = useLaravelReactI18n();

    const keywords = [
        'investmentLogic.keyword1',
        'investmentLogic.keyword2',
        'investmentLogic.keyword3',
        'investmentLogic.keyword4',
        'investmentLogic.keyword5',
    ];

    return (
        <section className="relative overflow-hidden py-32">
            {/* 背景网格 */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 h-full w-full bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>

            <div className="relative z-10 container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="mb-6 text-4xl leading-tight font-bold tracking-tight text-white md:text-5xl">
                        {t('investmentLogic.title.line1')}
                        <br />
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            {t('investmentLogic.title.line2')}
                        </span>
                    </h2>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm md:p-8">
                    <p className="text-xl leading-relaxed text-slate-300">
                        {t('investmentLogic.description')}
                        <span className="font-semibold text-white"> {t('investmentLogic.highlight')}</span>
                    </p>

                    {/* 关键词标签 */}
                    <div className="mt-8 flex flex-wrap gap-3">
                        {keywords.map((keywordKey, index) => (
                            <span
                                key={index}
                                className="border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-200"
                            >
                                {t(keywordKey)}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
