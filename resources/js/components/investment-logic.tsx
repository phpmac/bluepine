export function InvestmentLogic() {
    return (
        <section className="relative overflow-hidden py-32">
            {/* 背景网格 */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 h-full w-full bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>

            <div className="relative z-10 container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="mb-6 text-4xl leading-tight font-bold tracking-tight text-white md:text-5xl">
                        我们坚信, 技术是解决
                        <br />
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">农业核心痛点的唯一途径</span>
                    </h2>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm md:p-8">
                    <p className="text-xl leading-relaxed text-slate-300">
                        数据孤岛, 金融服务缺失, 价值分配失衡...这些长期困扰农业的问题, 无法在旧有范式内解决.
                        <span className="font-semibold text-white">
                            {' '}
                            BLUEPINE 通过区块链建立信任基石, 通过 AI 释放数据价值,
                            最终构建一个让每一位参与者——从农户到消费者——都能公平获益的新一代农业数字生态.
                        </span>
                    </p>

                    {/* 关键词标签 */}
                    <div className="mt-8 flex flex-wrap gap-3">
                        {['数据可信', '价值分配', 'AI 驱动', '区块链信任', '生态共赢'].map((keyword, index) => (
                            <span
                                key={index}
                                className="border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-200"
                            >
                                {keyword}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
