import { requirements } from './constants';

export function RequirementSection() {
    return (
        <section className="space-y-6" id="requirements">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold text-white">参与资格</h2>
                <p className="text-sm leading-relaxed text-slate-300">请在锁定额度前确认以下步骤均已完成, 系统会在提交时自动检测。</p>
            </div>
            <div className="require-grid">
                {requirements.map((item) => (
                    <div key={item.title} className="require-card">
                        <h3 className="text-base font-medium text-sky-100">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.detail}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
