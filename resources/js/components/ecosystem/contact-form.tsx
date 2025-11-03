import { Send } from 'lucide-react';
import { useState } from 'react';

export function ContactForm() {
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
        console.log('Form submitted:', formData);
        // 这里添加表单提交逻辑
    };

    return (
        <div className="mx-auto max-w-3xl rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
            <h3 className="mb-6 text-center text-2xl font-bold text-white">发送合作意向</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-300">
                            机构名称 <span className="text-red-400">*</span>
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full rounded border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                            placeholder="请输入机构名称"
                        />
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-300">
                            您的姓名 <span className="text-red-400">*</span>
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
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-300">职务</label>
                        <input
                            type="text"
                            value={formData.position}
                            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                            className="w-full rounded border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                            placeholder="请输入您的职务"
                        />
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-300">
                            邮箱 <span className="text-red-400">*</span>
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
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                        合作兴趣类别 <span className="text-red-400">*</span>
                    </label>
                    <select
                        required
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full rounded border border-white/10 bg-white/5 px-4 py-2.5 text-white backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                    >
                        <option value="">请选择合作类别</option>
                        <option value="research">研究合作</option>
                        <option value="business">商业与市场合作</option>
                        <option value="tech">技术与开发合作</option>
                        <option value="capital">资本合作</option>
                        <option value="other">其他</option>
                    </select>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                        请简要描述您的机构与合作构想 <span className="text-red-400">*</span>
                    </label>
                    <textarea
                        required
                        rows={5}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full rounded border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                        placeholder="请详细描述您的合作意向..."
                    />
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="inline-flex cursor-pointer items-center bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700"
                    >
                        <Send className="mr-2 h-5 w-5" />
                        发送合作意向
                    </button>
                </div>
            </form>
        </div>
    );
}
