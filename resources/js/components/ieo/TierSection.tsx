import { saleTiers, tierToneClass } from './constants';

export function TierSection() {
    return (
        <section className="space-y-6" id="tiers">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold text-white">认购档位</h2>
                <p className="text-sm leading-relaxed text-slate-300">根据资格与合作关系选择适合你的认购通道, 每个档位都提供明确的额度与释放机制。</p>
            </div>
            <div className="tier-grid">
                {saleTiers.map((tier) => (
                    <div key={tier.name} className={`tier-card ${tierToneClass[tier.tone]}`}>
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-sky-100">{tier.name}</h3>
                            <span className="tier-card__cap">{tier.cap}</span>
                        </div>
                        <div className="text-2xl font-semibold text-sky-100">{tier.price}</div>
                        <p className="text-sm text-slate-200">{tier.allocation}</p>
                        <p className="text-sm text-slate-200">{tier.vesting}</p>
                        <p className="text-sm text-slate-300">{tier.access}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
