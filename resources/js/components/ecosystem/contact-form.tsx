import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Send } from 'lucide-react';
import { useState } from 'react';

export function ContactForm() {
    const { t } = useLaravelReactI18n();
    const [formData, setFormData] = useState({
        company: '',
        name: '',
        position: '',
        email: '',
        category: '',
        description: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 这里添加表单提交逻辑
    };

    return (
        <div className="mx-auto max-w-3xl rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
            <h3 className="mb-6 text-center text-2xl font-bold text-white">{t('ecosystem.contactForm.title')}</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-300">
                            {t('ecosystem.contactForm.company')} <span className="text-red-400">*</span>
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full rounded border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                            placeholder={t('ecosystem.contactForm.companyPlaceholder')}
                        />
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-300">
                            {t('ecosystem.contactForm.name')} <span className="text-red-400">*</span>
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full rounded border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                            placeholder={t('ecosystem.contactForm.namePlaceholder')}
                        />
                    </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-300">{t('ecosystem.contactForm.position')}</label>
                        <input
                            type="text"
                            value={formData.position}
                            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                            className="w-full rounded border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                            placeholder={t('ecosystem.contactForm.positionPlaceholder')}
                        />
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-300">
                            {t('ecosystem.contactForm.email')} <span className="text-red-400">*</span>
                        </label>
                        <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full rounded border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                            placeholder={t('ecosystem.contactForm.emailPlaceholder')}
                        />
                    </div>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                        {t('ecosystem.contactForm.category')} <span className="text-red-400">*</span>
                    </label>
                    <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })} required>
                        <SelectTrigger className="w-full rounded border border-white/10 bg-white/5 px-4 py-2.5 text-white backdrop-blur-sm focus:border-emerald-500 focus:outline-none">
                            <SelectValue placeholder={t('ecosystem.contactForm.categoryPlaceholder')} />
                        </SelectTrigger>
                        <SelectContent className="rounded border border-white/10 bg-slate-900 text-white">
                            <SelectItem value="research" className="cursor-pointer text-white hover:bg-emerald-900/30">
                                {t('ecosystem.contactForm.categoryResearch')}
                            </SelectItem>
                            <SelectItem value="business" className="cursor-pointer text-white hover:bg-emerald-900/30">
                                {t('ecosystem.contactForm.categoryBusiness')}
                            </SelectItem>
                            <SelectItem value="tech" className="cursor-pointer text-white hover:bg-emerald-900/30">
                                {t('ecosystem.contactForm.categoryTech')}
                            </SelectItem>
                            <SelectItem value="capital" className="cursor-pointer text-white hover:bg-emerald-900/30">
                                {t('ecosystem.contactForm.categoryCapital')}
                            </SelectItem>
                            <SelectItem value="other" className="cursor-pointer text-white hover:bg-emerald-900/30">
                                {t('ecosystem.contactForm.categoryOther')}
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                        {t('ecosystem.contactForm.description')} <span className="text-red-400">*</span>
                    </label>
                    <textarea
                        required
                        rows={5}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full rounded border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                        placeholder={t('ecosystem.contactForm.descriptionPlaceholder')}
                    />
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="inline-flex cursor-pointer items-center bg-linear-to-r from-emerald-500 to-teal-600 px-6 py-3 font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700"
                    >
                        <Send className="mr-2 h-5 w-5" />
                        {t('ecosystem.contactForm.submit')}
                    </button>
                </div>
            </form>
        </div>
    );
}
