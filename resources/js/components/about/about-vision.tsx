import { Compass, Key } from 'lucide-react';

export function AboutVision() {
    return (
        <div className="mb-32 grid gap-6 lg:grid-cols-2">
            {/* 我们的愿景 */}
            <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-4 backdrop-blur-sm transition-all hover:border-emerald-500/50 hover:bg-emerald-500/10 md:p-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600">
                    <Compass className="h-8 w-8 text-white" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-white">我们的愿景</h2>
                <p className="text-base leading-relaxed text-slate-300">
                    成为一个自我演进的, 去中心化的全球农业数字生态基石. 我们坚信, 技术的终极使命是赋能万物, 我们致力于让每一块土地, 每一份农业数据,
                    每一位参与者的价值都能在信任的土壤中被精准计量与公平分配.
                </p>
            </div>

            {/* 我们的使命 */}
            <div className="rounded-lg border border-teal-500/30 bg-teal-500/5 p-4 backdrop-blur-sm transition-all hover:border-teal-500/50 hover:bg-teal-500/10 md:p-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-teal-600 to-cyan-700">
                    <Key className="h-8 w-8 text-white" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-white">我们的使命</h2>
                <p className="text-base leading-relaxed text-slate-300">
                    通过战略投资, 技术孵化与生态建设, 系统性推动区块链, 人工智能与 Web3 技术在农业领域的创新与应用.
                    我们寻找并赋能那些敢于颠覆的创业者, 共同破解农业数据孤岛, 资产流动性不足与服务体系割裂的核心困境.
                </p>
            </div>
        </div>
    );
}
