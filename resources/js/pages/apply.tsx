import { MainLayout } from '@/layouts';
import { Head } from '@inertiajs/react';
import { CheckCircle2, FileText, Plus, Trash2, Upload } from 'lucide-react';
import { useState } from 'react';

interface TeamMember {
    name: string;
    position: string;
    bio: string;
    linkedin: string;
}

interface FundingRound {
    round: string;
    amount: string;
    investor: string;
    date: string;
}

/**
 * 项目申请表页面
 *
 * 用于接收投资申请的详细表单
 */
export default function Apply() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        // 第一部分
        projectName: '',
        website: '',
        tagline: '',
        logo: null as File | null,
        coreFields: [] as string[],
        coreFieldsOther: '',
        tracks: [] as string[],
        tracksOther: '',
        stage: '',

        // 第二部分
        teamMembers: [{ name: '', position: '', bio: '', linkedin: '' }] as TeamMember[],
        teamSize: '',

        // 第三部分
        painPoint: '',
        solution: '',
        technology: '',
        aescSynergy: '',

        // 第四部分
        targetMarket: '',
        competition: '',
        milestones: '',

        // 第五部分
        businessModel: '',
        fundingAmount: '',
        fundingCurrency: 'USD',
        fundingUse: '',
        fundingHistory: [] as FundingRound[],

        // 第六部分
        businessPlan: null as File | null,
        demoLink: '',
        tokenomics: null as File | null,

        // 第七部分
        source: '',

        // 第八部分
        confirmAccurate: false,
        confirmPrivacy: false,
    });

    const coreFieldsOptions = [
        '智慧农业 (IoT, 机器人, 大数据平台) ',
        '区块链信任 (供应链溯源, RWA, RDA, DeFi, 数据市场) ',
        '人工智能 (AI 模型, 计算机视觉, 预测分析) ',
        '其他',
    ];

    const tracksOptions = [
        '农业物联网 & 硬件',
        '农场管理软件',
        '精准农业',
        '农产品供应链与溯源',
        '农业 RWA (实物资产通证化) ',
        '农业 DeFi 与保险',
        '农业 AI 模型与SaaS服务',
        '农业数据服务与市场',
        '碳汇计量与交易',
        '生物科技与数字农业结合',
        '其他',
    ];

    const stageOptions = ['概念 / 原型', '私人测试 / 试点', '公开测试 / MVP 已上线', '已产生收入', '规模化增长'];

    const sourceOptions = ['合作伙伴推荐', '行业会议', '媒体报道', '社交媒体', '搜索引擎', '其他'];

    const addTeamMember = () => {
        setFormData({
            ...formData,
            teamMembers: [...formData.teamMembers, { name: '', position: '', bio: '', linkedin: '' }],
        });
    };

    const removeTeamMember = (index: number) => {
        const newMembers = formData.teamMembers.filter((_, i) => i !== index);
        setFormData({ ...formData, teamMembers: newMembers });
    };

    const updateTeamMember = (index: number, field: keyof TeamMember, value: string) => {
        const newMembers = [...formData.teamMembers];
        newMembers[index][field] = value;
        setFormData({ ...formData, teamMembers: newMembers });
    };

    const addFundingRound = () => {
        setFormData({
            ...formData,
            fundingHistory: [...formData.fundingHistory, { round: '', amount: '', investor: '', date: '' }],
        });
    };

    const removeFundingRound = (index: number) => {
        const newHistory = formData.fundingHistory.filter((_, i) => i !== index);
        setFormData({ ...formData, fundingHistory: newHistory });
    };

    const updateFundingRound = (index: number, field: keyof FundingRound, value: string) => {
        const newHistory = [...formData.fundingHistory];
        newHistory[index][field] = value;
        setFormData({ ...formData, fundingHistory: newHistory });
    };

    const handleCheckboxChange = (field: 'coreFields' | 'tracks', value: string) => {
        const currentValues = formData[field];
        if (currentValues.includes(value)) {
            setFormData({ ...formData, [field]: currentValues.filter((v) => v !== value) });
        } else {
            setFormData({ ...formData, [field]: [...currentValues, value] });
        }
    };

    const handleFileChange = (field: 'logo' | 'businessPlan' | 'tokenomics', file: File | null) => {
        setFormData({ ...formData, [field]: file });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (submitted) {
        return (
            <MainLayout currentPage="">
                <Head title="申请已提交" />
                <div className="px-4 pt-32 pb-32 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mb-8 flex justify-center">
                            <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-emerald-500/20 md:h-24 md:w-24">
                                <CheckCircle2 className="h-10 w-10 text-emerald-400 md:h-12 md:w-12" />
                            </div>
                        </div>
                        <h1 className="mb-6 text-3xl font-bold text-white md:text-4xl">感谢您的提交!</h1>
                        <p className="mb-8 text-lg leading-relaxed text-slate-300 md:text-xl">
                            我们已收到您的申请. 我们的投资团队将在2周内完成初步审核, 若项目符合我们的投资方向, 将通过您留下的联系方式与您取得联系.
                        </p>
                        <a
                            href="/"
                            className="inline-flex cursor-pointer items-center rounded bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-4 font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700"
                        >
                            返回首页
                        </a>
                    </div>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout currentPage="">
            <Head title="项目申请表" />
            <div className="px-4 pt-32 pb-32 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    {/* 表头说明 */}
                    <div className="mb-12 rounded-l border-l-4 border-emerald-500 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                        <h1 className="mb-4 text-2xl font-bold text-white md:text-3xl">项目申请表</h1>
                        <p className="mb-4 text-base leading-relaxed text-slate-300 md:text-lg">
                            感谢您考虑与 BLUEPINE 携手同行.本申请表旨在高效地了解您的项目全貌.我们承诺对所有信息严格保密.
                        </p>
                        <p className="text-sm text-slate-400">预计填写时间: 15-20分钟</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8 md:space-y-12">
                        {/* 第一部分:项目基本信息 */}
                        <section className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                            <h2 className="mb-6 text-xl font-bold text-white md:text-2xl">第一部分: 项目基本信息</h2>
                            <div className="space-y-4 md:space-y-6">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        项目名称 <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.projectName}
                                        onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                                        className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">项目官方网址</label>
                                    <input
                                        type="url"
                                        value={formData.website}
                                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                        className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                        placeholder="https://"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        一句话简介 <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.tagline}
                                        onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                                        className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                        placeholder="请用一句话清晰描述您的项目核心价值"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">项目Logo</label>
                                    <div className="flex items-center gap-4">
                                        <label className="flex cursor-pointer items-center rounded border border-white/10 bg-white/5 px-4 py-3 text-slate-300 transition-all hover:border-emerald-500">
                                            <Upload className="mr-2 h-5 w-5" />
                                            <span className="text-sm">选择文件</span>
                                            <input
                                                type="file"
                                                className="hidden"
                                                accept=".jpg,.jpeg,.png,.svg"
                                                onChange={(e) => handleFileChange('logo', e.target.files?.[0] || null)}
                                            />
                                        </label>
                                        {formData.logo && <span className="text-sm text-slate-400">{formData.logo.name}</span>}
                                    </div>
                                    <p className="mt-2 text-xs text-slate-500">支持格式: JPG, PNG, SVG. 最大2MB</p>
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        所属核心领域 <span className="text-red-400">*</span> (可多选)
                                    </label>
                                    <div className="space-y-2">
                                        {coreFieldsOptions.map((option) => (
                                            <label key={option} className="flex cursor-pointer items-start">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.coreFields.includes(option)}
                                                    onChange={() => handleCheckboxChange('coreFields', option)}
                                                    className="mt-1 h-4 w-4"
                                                />
                                                <span className="ml-2 text-slate-300">{option}</span>
                                            </label>
                                        ))}
                                    </div>
                                    {formData.coreFields.includes('其他') && (
                                        <input
                                            type="text"
                                            value={formData.coreFieldsOther}
                                            onChange={(e) => setFormData({ ...formData, coreFieldsOther: e.target.value })}
                                            className="mt-2 w-full rounded border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                            placeholder="请注明其他领域"
                                        />
                                    )}
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        具体赛道 / 标签 <span className="text-red-400">*</span> (可多选)
                                    </label>
                                    <div className="space-y-2">
                                        {tracksOptions.map((option) => (
                                            <label key={option} className="flex cursor-pointer items-start">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.tracks.includes(option)}
                                                    onChange={() => handleCheckboxChange('tracks', option)}
                                                    className="mt-1 h-4 w-4"
                                                />
                                                <span className="ml-2 text-slate-300">{option}</span>
                                            </label>
                                        ))}
                                    </div>
                                    {formData.tracks.includes('其他') && (
                                        <input
                                            type="text"
                                            value={formData.tracksOther}
                                            onChange={(e) => setFormData({ ...formData, tracksOther: e.target.value })}
                                            className="mt-2 w-full rounded border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                            placeholder="请注明其他赛道"
                                        />
                                    )}
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        当前发展阶段 <span className="text-red-400">*</span>
                                    </label>
                                    <div className="space-y-2">
                                        {stageOptions.map((option) => (
                                            <label key={option} className="flex cursor-pointer items-center">
                                                <input
                                                    type="radio"
                                                    name="stage"
                                                    required
                                                    value={option}
                                                    checked={formData.stage === option}
                                                    onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                                                    className="h-4 w-4"
                                                />
                                                <span className="ml-2 text-slate-300">{option}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 第二部分:团队信息 */}
                        <section className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                            <h2 className="mb-6 text-xl font-bold text-white md:text-2xl">第二部分: 团队信息</h2>
                            <div className="space-y-4 md:space-y-6">
                                <div>
                                    <label className="mb-4 block text-sm font-medium text-slate-300">
                                        核心团队成员 <span className="text-red-400">*</span>
                                    </label>
                                    {formData.teamMembers.map((member, index) => (
                                        <div key={index} className="mb-4 rounded border border-white/10 bg-white/5 p-4">
                                            <div className="mb-4 flex items-center justify-between">
                                                <span className="font-semibold text-white">成员 {index + 1}</span>
                                                {formData.teamMembers.length > 1 && (
                                                    <button
                                                        type="button"
                                                        onClick={() => removeTeamMember(index)}
                                                        className="text-red-400 transition-colors hover:text-red-300"
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </button>
                                                )}
                                            </div>
                                            <div className="space-y-3">
                                                <input
                                                    type="text"
                                                    required
                                                    value={member.name}
                                                    onChange={(e) => updateTeamMember(index, 'name', e.target.value)}
                                                    className="w-full rounded border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                                    placeholder="姓名 *"
                                                />
                                                <input
                                                    type="text"
                                                    required
                                                    value={member.position}
                                                    onChange={(e) => updateTeamMember(index, 'position', e.target.value)}
                                                    className="w-full rounded border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                                    placeholder="职位 *"
                                                />
                                                <textarea
                                                    required
                                                    rows={2}
                                                    value={member.bio}
                                                    onChange={(e) => updateTeamMember(index, 'bio', e.target.value)}
                                                    className="w-full rounded border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                                    placeholder="简介 * (1-2句话说明其背景, 过往成就及在项目中的角色)"
                                                />
                                                <input
                                                    type="url"
                                                    value={member.linkedin}
                                                    onChange={(e) => updateTeamMember(index, 'linkedin', e.target.value)}
                                                    className="w-full rounded border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                                    placeholder="LinkedIn个人主页链接"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={addTeamMember}
                                        className="flex items-center text-emerald-300 transition-colors hover:text-emerald-200"
                                    >
                                        <Plus className="mr-1 h-4 w-4" />
                                        <span className="text-sm">添加团队成员</span>
                                    </button>
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">团队总人数</label>
                                    <select
                                        value={formData.teamSize}
                                        onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                                        className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                    >
                                        <option value="">请选择</option>
                                        <option value="1-5人">1-5人</option>
                                        <option value="6-10人">6-10人</option>
                                        <option value="11-25人">11-25人</option>
                                        <option value="25人以上">25人以上</option>
                                    </select>
                                </div>
                            </div>
                        </section>

                        {/* 第三部分:产品与技术 */}
                        <section className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                            <h2 className="mb-6 text-xl font-bold text-white md:text-2xl">第三部分: 产品与技术</h2>
                            <div className="space-y-4 md:space-y-6">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        核心解决的行业痛点 <span className="text-red-400">*</span>
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.painPoint}
                                        onChange={(e) => setFormData({ ...formData, painPoint: e.target.value })}
                                        className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                        placeholder="请清晰描述您旨在解决的具体问题, 以及目标用户 / 客户当前的困境"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        解决方案与产品描述 <span className="text-red-400">*</span>
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.solution}
                                        onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                                        className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                        placeholder="请详细介绍您的产品 / 服务, 工作原理及其独特之处"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        技术栈与技术优势 / 创新点 <span className="text-red-400">*</span>
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.technology}
                                        onChange={(e) => setFormData({ ...formData, technology: e.target.value })}
                                        className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                        placeholder="请说明项目使用的核心技术 (如公链, 共识机制, AI 框架等) , 并阐述技术壁垒或创新性"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">与 AESC 生态的协同潜力</label>
                                    <textarea
                                        rows={4}
                                        value={formData.aescSynergy}
                                        onChange={(e) => setFormData({ ...formData, aescSynergy: e.target.value })}
                                        className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                        placeholder="您的项目是否计划或已经与AGRI-ECO SMART CHAIN集成? 可能在数据, 技术, 用户或资产层面产生哪些协同效应?"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* 第四部分:市场与进展 */}
                        <section className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                            <h2 className="mb-6 text-xl font-bold text-white md:text-2xl">第四部分: 市场与进展</h2>
                            <div className="space-y-4 md:space-y-6">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        目标市场与客户画像 <span className="text-red-400">*</span>
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.targetMarket}
                                        onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value })}
                                        className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                        placeholder="请描述您服务的地理区域, 具体的客户类型 (如小农户, 大型农企, 收购商等) 及市场规模预估"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        市场竞争分析 <span className="text-red-400">*</span>
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.competition}
                                        onChange={(e) => setFormData({ ...formData, competition: e.target.value })}
                                        className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                        placeholder="请列出主要竞争对手, 并清晰说明您的核心竞争优势"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        当前里程碑与关键数据 <span className="text-red-400">*</span>
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.milestones}
                                        onChange={(e) => setFormData({ ...formData, milestones: e.target.value })}
                                        className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                        placeholder="例如: 试点农田面积, 用户数量, 月活跃用户, 交易额, 收入, 数据量等. 请尽量量化"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* 第五部分:商业模式与融资 */}
                        <section className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                            <h2 className="mb-6 text-xl font-bold text-white md:text-2xl">第五部分: 商业模式与融资</h2>
                            <div className="space-y-4 md:space-y-6">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        商业模式 <span className="text-red-400">*</span>
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.businessModel}
                                        onChange={(e) => setFormData({ ...formData, businessModel: e.target.value })}
                                        className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                        placeholder="请清晰说明您的收入来源 (如订阅费, 交易手续费, 服务费等) "
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        本轮融资需求 <span className="text-red-400">*</span>
                                    </label>
                                    <div className="flex gap-4">
                                        <input
                                            type="number"
                                            required
                                            value={formData.fundingAmount}
                                            onChange={(e) => setFormData({ ...formData, fundingAmount: e.target.value })}
                                            className="flex-1 rounded border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                            placeholder="融资目标金额"
                                        />
                                        <select
                                            value={formData.fundingCurrency}
                                            onChange={(e) => setFormData({ ...formData, fundingCurrency: e.target.value })}
                                            className="rounded border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                        >
                                            <option value="USD">USD</option>
                                            <option value="AESC">AESC</option>
                                            <option value="BTC">BTC</option>
                                            <option value="ETH">ETH</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        资金主要用途 <span className="text-red-400">*</span>
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.fundingUse}
                                        onChange={(e) => setFormData({ ...formData, fundingUse: e.target.value })}
                                        className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                        placeholder="请说明融资资金的主要用途"
                                    />
                                </div>

                                <div>
                                    <label className="mb-4 block text-sm font-medium text-slate-300">过往融资历史 (如适用)</label>
                                    {formData.fundingHistory.map((round, index) => (
                                        <div key={index} className="mb-4 rounded border border-white/10 bg-white/5 p-4">
                                            <div className="mb-4 flex items-center justify-between">
                                                <span className="font-semibold text-white">融资轮次 {index + 1}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => removeFundingRound(index)}
                                                    className="text-red-400 transition-colors hover:text-red-300"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                            <div className="grid gap-3 md:grid-cols-2">
                                                <input
                                                    type="text"
                                                    value={round.round}
                                                    onChange={(e) => updateFundingRound(index, 'round', e.target.value)}
                                                    className="w-full rounded border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                                    placeholder="轮次 (种子轮, 天使轮等) "
                                                />
                                                <input
                                                    type="text"
                                                    value={round.amount}
                                                    onChange={(e) => updateFundingRound(index, 'amount', e.target.value)}
                                                    className="w-full rounded border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                                    placeholder="金额"
                                                />
                                                <input
                                                    type="text"
                                                    value={round.investor}
                                                    onChange={(e) => updateFundingRound(index, 'investor', e.target.value)}
                                                    className="w-full rounded border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                                    placeholder="投资方"
                                                />
                                                <input
                                                    type="date"
                                                    value={round.date}
                                                    onChange={(e) => updateFundingRound(index, 'date', e.target.value)}
                                                    className="w-full rounded border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={addFundingRound}
                                        className="flex items-center text-emerald-300 transition-colors hover:text-emerald-200"
                                    >
                                        <Plus className="mr-1 h-4 w-4" />
                                        <span className="text-sm">添加融资历史</span>
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* 第六部分:材料提交 */}
                        <section className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                            <h2 className="mb-6 text-xl font-bold text-white md:text-2xl">第六部分: 材料提交</h2>
                            <div className="space-y-4 md:space-y-6">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        商业计划书 / 项目白皮书 <span className="text-red-400">*</span>
                                    </label>
                                    <div className="flex items-center gap-4">
                                        <label className="flex cursor-pointer items-center rounded border border-white/10 bg-white/5 px-4 py-3 text-slate-300 transition-all hover:border-emerald-500">
                                            <FileText className="mr-2 h-5 w-5" />
                                            <span className="text-sm">选择文件</span>
                                            <input
                                                type="file"
                                                required
                                                className="hidden"
                                                accept=".pdf,.ppt,.pptx,.doc,.docx"
                                                onChange={(e) => handleFileChange('businessPlan', e.target.files?.[0] || null)}
                                            />
                                        </label>
                                        {formData.businessPlan && <span className="text-sm text-slate-400">{formData.businessPlan.name}</span>}
                                    </div>
                                    <p className="mt-2 text-xs text-slate-500">支持格式: PDF, PPT, Word. 最大10MB</p>
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">产品演示链接或视频 (可选)</label>
                                    <input
                                        type="url"
                                        value={formData.demoLink}
                                        onChange={(e) => setFormData({ ...formData, demoLink: e.target.value })}
                                        className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                        placeholder="可以是网站, Demo视频链接等"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">代币经济模型文档 (如适用)</label>
                                    <div className="flex items-center gap-4">
                                        <label className="flex cursor-pointer items-center rounded border border-white/10 bg-white/5 px-4 py-3 text-slate-300 transition-all hover:border-emerald-500">
                                            <FileText className="mr-2 h-5 w-5" />
                                            <span className="text-sm">选择文件</span>
                                            <input
                                                type="file"
                                                className="hidden"
                                                accept=".pdf"
                                                onChange={(e) => handleFileChange('tokenomics', e.target.files?.[0] || null)}
                                            />
                                        </label>
                                        {formData.tokenomics && <span className="text-sm text-slate-400">{formData.tokenomics.name}</span>}
                                    </div>
                                    <p className="mt-2 text-xs text-slate-500">支持格式: PDF. 最大5MB</p>
                                </div>
                            </div>
                        </section>

                        {/* 第七部分:如何了解到我们 */}
                        <section className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                            <h2 className="mb-6 text-xl font-bold text-white md:text-2xl">第七部分: 如何了解到我们</h2>
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-300">您从何处了解到 BLUEPINE? (可选)</label>
                                <select
                                    value={formData.source}
                                    onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                                    className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                >
                                    <option value="">请选择</option>
                                    {sourceOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </section>

                        {/* 第八部分:同意与提交 */}
                        <section className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                            <h2 className="mb-6 text-xl font-bold text-white md:text-2xl">第八部分: 同意与提交</h2>
                            <div className="space-y-4">
                                <label className="flex cursor-pointer items-start">
                                    <input
                                        type="checkbox"
                                        required
                                        checked={formData.confirmAccurate}
                                        onChange={(e) => setFormData({ ...formData, confirmAccurate: e.target.checked })}
                                        className="mt-1 h-4 w-4"
                                    />
                                    <span className="ml-2 text-slate-300">
                                        我确认以上所提供的信息均真实, 准确 <span className="text-red-400">*</span>
                                    </span>
                                </label>

                                <label className="flex cursor-pointer items-start">
                                    <input
                                        type="checkbox"
                                        required
                                        checked={formData.confirmPrivacy}
                                        onChange={(e) => setFormData({ ...formData, confirmPrivacy: e.target.checked })}
                                        className="mt-1 h-4 w-4"
                                    />
                                    <span className="ml-2 text-slate-300">
                                        我理解并同意 BLUEPINE TECH FOUNDATION 将根据其 "隐私政策" 处理我所提交的信息, 用于投资评估之目的{' '}
                                        <span className="text-red-400">*</span>
                                    </span>
                                </label>
                            </div>

                            <div className="mt-8 text-center">
                                <button
                                    type="submit"
                                    className="inline-flex cursor-pointer items-center rounded bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-4 text-base font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700 md:px-10 md:text-lg"
                                >
                                    提交申请
                                </button>
                            </div>
                        </section>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
}
