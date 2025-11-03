import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Compass, Key } from 'lucide-react';

export function AboutVision() {
    const { t } = useLaravelReactI18n();

    return (
        <div className="mb-32 grid gap-6 lg:grid-cols-2">
            {/* 我们的愿景 */}
            <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-4 backdrop-blur-sm transition-all hover:border-emerald-500/50 hover:bg-emerald-500/10 md:p-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600">
                    <Compass className="h-8 w-8 text-white" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-white">{t('about.vision.title')}</h2>
                <p className="text-base leading-relaxed text-slate-300">{t('about.vision.description')}</p>
            </div>

            {/* 我们的使命 */}
            <div className="rounded-lg border border-teal-500/30 bg-teal-500/5 p-4 backdrop-blur-sm transition-all hover:border-teal-500/50 hover:bg-teal-500/10 md:p-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-teal-600 to-cyan-700">
                    <Key className="h-8 w-8 text-white" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-white">{t('about.mission.title')}</h2>
                <p className="text-base leading-relaxed text-slate-300">{t('about.mission.description')}</p>
            </div>
        </div>
    );
}
