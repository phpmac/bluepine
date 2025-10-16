import { timeline } from './constants';

export function TimelineSection() {
    return (
        <section className="space-y-6" id="timeline">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold text-white">时间轴</h2>
                <p className="text-sm leading-relaxed text-slate-300">认购节奏清晰, 请在截止时间前完成所需动作以确保参资格和额度锁定。</p>
            </div>
            <div className="timeline">
                {timeline.map((item) => (
                    <div key={item.title} className="timeline-item">
                        <span className="text-xs tracking-[0.24em] text-slate-400 uppercase">{item.time}</span>
                        <h3 className="text-base font-semibold text-sky-100">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
