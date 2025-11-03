import { MapPin } from 'lucide-react';

export function GlobalOffices() {
    const offices = [
        {
            city: '新加坡总部',
            address: '1 Marina Boulevard, #28-00, Singapore 018989',
            focus: '全球战略,投资管理与国际合规',
        },
        {
            city: '东南亚合作中心',
            address: '与合作机构共享办公空间',
            focus: '农业试点项目落地,本地化生态拓展',
        },
    ];

    return (
        <section className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">我们的所在地</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {offices.map((office, index) => (
                        <div key={index} className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600">
                                <MapPin className="h-5 w-5 text-white" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-white">{office.city}</h3>
                            <p className="mb-4 text-sm text-slate-300">{office.address}</p>
                            <div className="border-t border-white/10 pt-3">
                                <p className="text-xs font-semibold text-emerald-300">侧重领域</p>
                                <p className="mt-1 text-sm text-slate-300">{office.focus}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
