import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Send, Upload } from 'lucide-react';
import { useState } from 'react';

export function ContactForm() {
    const { t } = useLaravelReactI18n();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        category: '',
        subject: '',
        message: '',
        file: null as File | null,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // 这里添加表单提交逻辑
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({ ...formData, file: e.target.files[0] });
        }
    };

    return (
        <section id="form" className="px-4 py-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">{t('contact.form.title')}</h2>
                    <p className="mx-auto max-w-2xl text-base text-slate-400">{t('contact.form.subtitle')}</p>
                </div>

                <div className="mx-auto max-w-3xl rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* 个人信息 */}
                        <div className="grid gap-5 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-300">
                                    {t('contact.form.name')} <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full rounded border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                    placeholder={t('contact.form.namePlaceholder')}
                                />
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-300">
                                    {t('contact.form.email')} <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full rounded border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                    placeholder={t('contact.form.emailPlaceholder')}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">{t('contact.form.company')}</label>
                            <input
                                type="text"
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                className="w-full rounded border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                placeholder={t('contact.form.companyPlaceholder')}
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                {t('contact.form.category')} <span className="text-red-400">*</span>
                            </label>
                            <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })} required>
                                <SelectTrigger className="w-full rounded border border-white/10 bg-white/5 px-4 py-2.5 text-white backdrop-blur-sm focus:border-emerald-500 focus:outline-none">
                                    <SelectValue placeholder={t('contact.form.categoryPlaceholder')} />
                                </SelectTrigger>
                                <SelectContent className="rounded border border-white/10 bg-slate-900 text-white">
                                    <SelectItem value="investment" className="cursor-pointer hover:bg-white/10">
                                        {t('contact.form.categoryInvestment')}
                                    </SelectItem>
                                    <SelectItem value="partnership" className="cursor-pointer hover:bg-white/10">
                                        {t('contact.form.categoryPartnership')}
                                    </SelectItem>
                                    <SelectItem value="media" className="cursor-pointer hover:bg-white/10">
                                        {t('contact.form.categoryMedia')}
                                    </SelectItem>
                                    <SelectItem value="support" className="cursor-pointer hover:bg-white/10">
                                        {t('contact.form.categorySupport')}
                                    </SelectItem>
                                    <SelectItem value="other" className="cursor-pointer hover:bg-white/10">
                                        {t('contact.form.categoryOther')}
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                {t('contact.form.subject')} <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                required
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                className="w-full rounded border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                placeholder={t('contact.form.subjectPlaceholder')}
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                {t('contact.form.message')} <span className="text-red-400">*</span>
                            </label>
                            <textarea
                                required
                                rows={5}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full rounded border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                placeholder={t('contact.form.messagePlaceholder')}
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">{t('contact.form.attachment')}</label>
                            <div className="flex items-center gap-4">
                                <label className="flex cursor-pointer items-center rounded border border-white/10 bg-white/5 px-4 py-2.5 text-slate-300 transition-all hover:border-emerald-500">
                                    <Upload className="mr-2 h-5 w-5" />
                                    <span className="text-sm">{t('contact.form.chooseFile')}</span>
                                    <input type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.doc,.docx,.ppt,.pptx" />
                                </label>
                                {formData.file && <span className="text-sm text-slate-400">{formData.file.name}</span>}
                            </div>
                            <p className="mt-2 text-xs text-slate-500">{t('contact.form.fileHint')}</p>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="inline-flex cursor-pointer items-center bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700"
                            >
                                <Send className="mr-2 h-5 w-5" />
                                {t('contact.form.submit')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
