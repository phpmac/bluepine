import { Send, Upload } from 'lucide-react';
import { useState } from 'react';

export function ContactForm() {
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
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">发送消息给我们</h2>
                    <p className="mx-auto max-w-2xl text-base text-slate-400">填写下方表单, 我们会尽快与您取得联系</p>
                </div>

                <div className="mx-auto max-w-3xl rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* 个人信息 */}
                        <div className="grid gap-5 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-300">
                                    姓名 <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full rounded border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                    placeholder="请输入您的姓名"
                                />
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-300">
                                    邮箱地址 <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full rounded border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                    placeholder="请输入您的邮箱"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">公司/机构名称</label>
                            <input
                                type="text"
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                className="w-full rounded border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                placeholder="请输入您的公司或机构名称"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                查询分类 <span className="text-red-400">*</span>
                            </label>
                            <select
                                required
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                className="w-full rounded border border-white/10 bg-white/5 px-4 py-2.5 text-white backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                            >
                                <option value="">请选择查询分类</option>
                                <option value="investment">投资相关</option>
                                <option value="partnership">生态合作</option>
                                <option value="media">媒体问询</option>
                                <option value="support">技术支持</option>
                                <option value="other">其他</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                主题 <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                required
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                className="w-full rounded border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                placeholder="请输入主题"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                详细内容 <span className="text-red-400">*</span>
                            </label>
                            <textarea
                                required
                                rows={5}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full rounded border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                placeholder="请详细描述您的问题或需求..."
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">附件上传</label>
                            <div className="flex items-center gap-4">
                                <label className="flex cursor-pointer items-center rounded border border-white/10 bg-white/5 px-4 py-2.5 text-slate-300 transition-all hover:border-emerald-500">
                                    <Upload className="mr-2 h-5 w-5" />
                                    <span className="text-sm">选择文件</span>
                                    <input type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.doc,.docx,.ppt,.pptx" />
                                </label>
                                {formData.file && <span className="text-sm text-slate-400">{formData.file.name}</span>}
                            </div>
                            <p className="mt-2 text-xs text-slate-500">支持 PDF, DOC, DOCX, PPT, PPTX 格式, 最大 10MB</p>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="inline-flex cursor-pointer items-center bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700"
                            >
                                <Send className="mr-2 h-5 w-5" />
                                发送消息
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
