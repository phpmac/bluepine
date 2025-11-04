import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MainLayout } from '@/layouts';
import { Head } from '@inertiajs/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
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
    const { t } = useLaravelReactI18n();
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
        t('apply.section1.coreField1'),
        t('apply.section1.coreField2'),
        t('apply.section1.coreField3'),
        t('apply.section1.coreFieldOther'),
    ];

    const tracksOptions = [
        t('apply.section1.track1'),
        t('apply.section1.track2'),
        t('apply.section1.track3'),
        t('apply.section1.track4'),
        t('apply.section1.track5'),
        t('apply.section1.track6'),
        t('apply.section1.track7'),
        t('apply.section1.track8'),
        t('apply.section1.track9'),
        t('apply.section1.track10'),
        t('apply.section1.trackOther'),
    ];

    const stageOptions = [
        t('apply.section1.stage1'),
        t('apply.section1.stage2'),
        t('apply.section1.stage3'),
        t('apply.section1.stage4'),
        t('apply.section1.stage5'),
    ];

    const sourceOptions = [
        t('apply.section7.source1'),
        t('apply.section7.source2'),
        t('apply.section7.source3'),
        t('apply.section7.source4'),
        t('apply.section7.source5'),
        t('apply.section7.source6'),
    ];

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
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (submitted) {
        return (
            <MainLayout currentPage="">
                <Head title={t('page.title.apply.submitted')} />
                <div className="px-4 pt-32 pb-32 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mb-8 flex justify-center">
                            <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-emerald-500/20 md:h-24 md:w-24">
                                <CheckCircle2 className="h-10 w-10 text-emerald-400 md:h-12 md:w-12" />
                            </div>
                        </div>
                        <h1 className="mb-6 text-3xl font-bold text-white md:text-4xl">{t('apply.success.title')}</h1>
                        <p className="mb-8 text-lg leading-relaxed text-slate-300 md:text-xl">{t('apply.success.description')}</p>
                        <a
                            href="/"
                            className="inline-flex cursor-pointer items-center rounded bg-linear-to-r from-emerald-500 to-teal-600 px-8 py-4 font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700"
                        >
                            {t('apply.success.button')}
                        </a>
                    </div>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout currentPage="">
            <Head title={t('page.title.apply')} />
            <div className="px-4 pt-32 pb-32 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    {/* 表头说明 */}
                    <div className="mb-12 rounded-l border-l-4 border-emerald-500 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                        <h1 className="mb-4 text-2xl font-bold text-white md:text-3xl">{t('apply.header.title')}</h1>
                        <p className="mb-4 text-base leading-relaxed text-slate-300 md:text-lg">{t('apply.header.description')}</p>
                        <p className="text-sm text-slate-400">{t('apply.header.timeEstimate')}</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8 md:space-y-12">
                        {/* 第一部分:项目基本信息 */}
                        <section className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                            <h2 className="mb-6 text-xl font-bold text-white md:text-2xl">{t('apply.section1.title')}</h2>
                            <div className="space-y-4 md:space-y-6">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        {t('apply.section1.projectName')} <span className="text-red-400">{t('apply.required')}</span>
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
                                    <label className="mb-2 block text-sm font-medium text-slate-300">{t('apply.section1.website')}</label>
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
                                        {t('apply.section1.tagline')} <span className="text-red-400">{t('apply.required')}</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.tagline}
                                        onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                                        className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                        placeholder={t('apply.section1.taglinePlaceholder')}
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">{t('apply.section1.logo')}</label>
                                    <div className="flex items-center gap-4">
                                        <label className="flex cursor-pointer items-center rounded border border-white/10 bg-white/5 px-4 py-3 text-slate-300 transition-all hover:border-emerald-500">
                                            <Upload className="mr-2 h-5 w-5" />
                                            <span className="text-sm">{t('apply.section1.chooseFile')}</span>
                                            <input
                                                type="file"
                                                className="hidden"
                                                accept=".jpg,.jpeg,.png,.svg"
                                                onChange={(e) => handleFileChange('logo', e.target.files?.[0] || null)}
                                            />
                                        </label>
                                        {formData.logo && <span className="text-sm text-slate-400">{formData.logo.name}</span>}
                                    </div>
                                    <p className="mt-2 text-xs text-slate-500">{t('apply.section1.logoHint')}</p>
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        {t('apply.section1.coreFields')} <span className="text-red-400">{t('apply.required')}</span>{' '}
                                        {t('apply.section1.coreFieldsNote')}
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
                                    {formData.coreFields.includes(t('apply.section1.coreFieldOther')) && (
                                        <input
                                            type="text"
                                            value={formData.coreFieldsOther}
                                            onChange={(e) => setFormData({ ...formData, coreFieldsOther: e.target.value })}
                                            className="mt-2 w-full rounded border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                            placeholder={t('apply.section1.coreFieldOtherPlaceholder')}
                                        />
                                    )}
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        {t('apply.section1.tracks')} <span className="text-red-400">{t('apply.required')}</span>{' '}
                                        {t('apply.section1.coreFieldsNote')}
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
                                    {formData.tracks.includes(t('apply.section1.trackOther')) && (
                                        <input
                                            type="text"
                                            value={formData.tracksOther}
                                            onChange={(e) => setFormData({ ...formData, tracksOther: e.target.value })}
                                            className="mt-2 w-full rounded border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                            placeholder={t('apply.section1.trackOtherPlaceholder')}
                                        />
                                    )}
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        {t('apply.section1.stage')} <span className="text-red-400">{t('apply.required')}</span>
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
                            <h2 className="mb-6 text-xl font-bold text-white md:text-2xl">{t('apply.section2.title')}</h2>
                            <div className="space-y-4 md:space-y-6">
                                <div>
                                    <label className="mb-4 block text-sm font-medium text-slate-300">
                                        {t('apply.section2.teamMembers')} <span className="text-red-400">{t('apply.required')}</span>
                                    </label>
                                    {formData.teamMembers.map((member, index) => (
                                        <div key={index} className="mb-4 rounded border border-white/10 bg-white/5 p-4">
                                            <div className="mb-4 flex items-center justify-between">
                                                <span className="font-semibold text-white">{t('apply.section2.member')}</span>
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
                                                    placeholder={t('apply.section2.namePlaceholder')}
                                                />
                                                <input
                                                    type="text"
                                                    required
                                                    value={member.position}
                                                    onChange={(e) => updateTeamMember(index, 'position', e.target.value)}
                                                    className="w-full rounded border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                                    placeholder={t('apply.section2.positionPlaceholder')}
                                                />
                                                <textarea
                                                    required
                                                    rows={2}
                                                    value={member.bio}
                                                    onChange={(e) => updateTeamMember(index, 'bio', e.target.value)}
                                                    className="w-full rounded border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                                    placeholder={t('apply.section2.bioPlaceholder')}
                                                />
                                                <input
                                                    type="url"
                                                    value={member.linkedin}
                                                    onChange={(e) => updateTeamMember(index, 'linkedin', e.target.value)}
                                                    className="w-full rounded border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                                    placeholder={t('apply.section2.linkedinPlaceholder')}
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
                                        <span className="text-sm">{t('apply.section2.addMember')}</span>
                                    </button>
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">{t('apply.section2.teamSize')}</label>
                                    <Select value={formData.teamSize} onValueChange={(value) => setFormData({ ...formData, teamSize: value })}>
                                        <SelectTrigger className="w-full rounded border border-white/10 bg-white/5 px-4 py-2.5 text-white backdrop-blur-sm focus:border-emerald-500 focus:outline-none">
                                            <SelectValue placeholder={t('apply.section2.selectPlaceholder')} />
                                        </SelectTrigger>
                                        <SelectContent className="rounded border border-white/10 bg-slate-900 text-white">
                                            <SelectItem
                                                value={t('apply.section2.teamSize1')}
                                                className="cursor-pointer text-white hover:bg-emerald-900/30"
                                            >
                                                {t('apply.section2.teamSize1')}
                                            </SelectItem>
                                            <SelectItem
                                                value={t('apply.section2.teamSize2')}
                                                className="cursor-pointer text-white hover:bg-emerald-900/30"
                                            >
                                                {t('apply.section2.teamSize2')}
                                            </SelectItem>
                                            <SelectItem
                                                value={t('apply.section2.teamSize3')}
                                                className="cursor-pointer text-white hover:bg-emerald-900/30"
                                            >
                                                {t('apply.section2.teamSize3')}
                                            </SelectItem>
                                            <SelectItem
                                                value={t('apply.section2.teamSize4')}
                                                className="cursor-pointer text-white hover:bg-emerald-900/30"
                                            >
                                                {t('apply.section2.teamSize4')}
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </section>

                        {/* 第三部分:产品与技术 */}
                        <section className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                            <h2 className="mb-6 text-xl font-bold text-white md:text-2xl">{t('apply.section3.title')}</h2>
                            <div className="space-y-4 md:space-y-6">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        {t('apply.section3.painPoint')} <span className="text-red-400">{t('apply.required')}</span>
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.painPoint}
                                        onChange={(e) => setFormData({ ...formData, painPoint: e.target.value })}
                                        className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                        placeholder={t('apply.section3.painPointPlaceholder')}
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        {t('apply.section3.solution')} <span className="text-red-400">{t('apply.required')}</span>
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.solution}
                                        onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                                        className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                        placeholder={t('apply.section3.solutionPlaceholder')}
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        {t('apply.section3.technology')} <span className="text-red-400">{t('apply.required')}</span>
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.technology}
                                        onChange={(e) => setFormData({ ...formData, technology: e.target.value })}
                                        className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                        placeholder={t('apply.section3.technologyPlaceholder')}
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">{t('apply.section3.aescSynergy')}</label>
                                    <textarea
                                        rows={4}
                                        value={formData.aescSynergy}
                                        onChange={(e) => setFormData({ ...formData, aescSynergy: e.target.value })}
                                        className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                        placeholder={t('apply.section3.aescSynergyPlaceholder')}
                                    />
                                </div>
                            </div>
                        </section>

                        {/* 第四部分:市场与进展 */}
                        <section className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                            <h2 className="mb-6 text-xl font-bold text-white md:text-2xl">{t('apply.section4.title')}</h2>
                            <div className="space-y-4 md:space-y-6">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        {t('apply.section4.targetMarket')} <span className="text-red-400">{t('apply.required')}</span>
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.targetMarket}
                                        onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value })}
                                        className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                        placeholder={t('apply.section4.targetMarketPlaceholder')}
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        {t('apply.section4.competition')} <span className="text-red-400">{t('apply.required')}</span>
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.competition}
                                        onChange={(e) => setFormData({ ...formData, competition: e.target.value })}
                                        className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                        placeholder={t('apply.section4.competitionPlaceholder')}
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        {t('apply.section4.milestones')} <span className="text-red-400">{t('apply.required')}</span>
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.milestones}
                                        onChange={(e) => setFormData({ ...formData, milestones: e.target.value })}
                                        className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                        placeholder={t('apply.section4.milestonesPlaceholder')}
                                    />
                                </div>
                            </div>
                        </section>

                        {/* 第五部分:商业模式与融资 */}
                        <section className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                            <h2 className="mb-6 text-xl font-bold text-white md:text-2xl">{t('apply.section5.title')}</h2>
                            <div className="space-y-4 md:space-y-6">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        {t('apply.section5.businessModel')} <span className="text-red-400">{t('apply.required')}</span>
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.businessModel}
                                        onChange={(e) => setFormData({ ...formData, businessModel: e.target.value })}
                                        className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                        placeholder={t('apply.section5.businessModelPlaceholder')}
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        {t('apply.section5.fundingAmount')} <span className="text-red-400">{t('apply.required')}</span>
                                    </label>
                                    <div className="flex gap-4">
                                        <input
                                            type="number"
                                            required
                                            value={formData.fundingAmount}
                                            onChange={(e) => setFormData({ ...formData, fundingAmount: e.target.value })}
                                            className="flex-1 rounded border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                            placeholder={t('apply.section5.fundingAmountPlaceholder')}
                                        />
                                        <Select
                                            value={formData.fundingCurrency}
                                            onValueChange={(value) => setFormData({ ...formData, fundingCurrency: value })}
                                        >
                                            <SelectTrigger className="h-auto! w-32 rounded border border-white/10 bg-white/5 px-4 py-3! text-white backdrop-blur-sm focus:border-emerald-500 focus:outline-none">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent className="rounded border border-white/10 bg-slate-900 text-white">
                                                <SelectItem value="USD" className="cursor-pointer text-white hover:bg-emerald-900/30">
                                                    USD
                                                </SelectItem>
                                                <SelectItem value="AESC" className="cursor-pointer text-white hover:bg-emerald-900/30">
                                                    AESC
                                                </SelectItem>
                                                <SelectItem value="BTC" className="cursor-pointer text-white hover:bg-emerald-900/30">
                                                    BTC
                                                </SelectItem>
                                                <SelectItem value="ETH" className="cursor-pointer text-white hover:bg-emerald-900/30">
                                                    ETH
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        {t('apply.section5.fundingUse')} <span className="text-red-400">{t('apply.required')}</span>
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.fundingUse}
                                        onChange={(e) => setFormData({ ...formData, fundingUse: e.target.value })}
                                        className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                        placeholder={t('apply.section5.fundingUsePlaceholder')}
                                    />
                                </div>

                                <div>
                                    <label className="mb-4 block text-sm font-medium text-slate-300">{t('apply.section5.fundingHistory')}</label>
                                    {formData.fundingHistory.map((round, index) => (
                                        <div key={index} className="mb-4 rounded border border-white/10 bg-white/5 p-4">
                                            <div className="mb-4 flex items-center justify-between">
                                                <span className="font-semibold text-white">
                                                    {t('apply.section5.fundingRound')} {index + 1}
                                                </span>
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
                                                    placeholder={t('apply.section5.roundPlaceholder')}
                                                />
                                                <input
                                                    type="text"
                                                    value={round.amount}
                                                    onChange={(e) => updateFundingRound(index, 'amount', e.target.value)}
                                                    className="w-full rounded border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                                    placeholder={t('apply.section5.amountPlaceholder')}
                                                />
                                                <input
                                                    type="text"
                                                    value={round.investor}
                                                    onChange={(e) => updateFundingRound(index, 'investor', e.target.value)}
                                                    className="w-full rounded border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                                    placeholder={t('apply.section5.investorPlaceholder')}
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
                                        <span className="text-sm">{t('apply.section5.addFunding')}</span>
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* 第六部分:材料提交 */}
                        <section className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                            <h2 className="mb-6 text-xl font-bold text-white md:text-2xl">{t('apply.section6.title')}</h2>
                            <div className="space-y-4 md:space-y-6">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">
                                        {t('apply.section6.businessPlan')} <span className="text-red-400">{t('apply.required')}</span>
                                    </label>
                                    <div className="flex items-center gap-4">
                                        <label className="flex cursor-pointer items-center rounded border border-white/10 bg-white/5 px-4 py-3 text-slate-300 transition-all hover:border-emerald-500">
                                            <FileText className="mr-2 h-5 w-5" />
                                            <span className="text-sm">{t('apply.section1.chooseFile')}</span>
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
                                    <p className="mt-2 text-xs text-slate-500">{t('apply.section6.businessPlanHint')}</p>
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">{t('apply.section6.demoLink')}</label>
                                    <input
                                        type="url"
                                        value={formData.demoLink}
                                        onChange={(e) => setFormData({ ...formData, demoLink: e.target.value })}
                                        className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 backdrop-blur-sm focus:border-emerald-500 focus:outline-none"
                                        placeholder={t('apply.section6.demoLinkPlaceholder')}
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-300">{t('apply.section6.tokenomics')}</label>
                                    <div className="flex items-center gap-4">
                                        <label className="flex cursor-pointer items-center rounded border border-white/10 bg-white/5 px-4 py-3 text-slate-300 transition-all hover:border-emerald-500">
                                            <FileText className="mr-2 h-5 w-5" />
                                            <span className="text-sm">{t('apply.section1.chooseFile')}</span>
                                            <input
                                                type="file"
                                                className="hidden"
                                                accept=".pdf"
                                                onChange={(e) => handleFileChange('tokenomics', e.target.files?.[0] || null)}
                                            />
                                        </label>
                                        {formData.tokenomics && <span className="text-sm text-slate-400">{formData.tokenomics.name}</span>}
                                    </div>
                                    <p className="mt-2 text-xs text-slate-500">{t('apply.section6.tokenomicsHint')}</p>
                                </div>
                            </div>
                        </section>

                        {/* 第七部分:如何了解到我们 */}
                        <section className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                            <h2 className="mb-6 text-xl font-bold text-white md:text-2xl">{t('apply.section7.title')}</h2>
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-300">{t('apply.section7.source')}</label>
                                <Select value={formData.source} onValueChange={(value) => setFormData({ ...formData, source: value })}>
                                    <SelectTrigger className="w-full rounded border border-white/10 bg-white/5 px-4 py-2.5 text-white backdrop-blur-sm focus:border-emerald-500 focus:outline-none">
                                        <SelectValue placeholder={t('apply.section2.selectPlaceholder')} />
                                    </SelectTrigger>
                                    <SelectContent className="rounded border border-white/10 bg-slate-900 text-white">
                                        {sourceOptions.map((option) => (
                                            <SelectItem key={option} value={option} className="cursor-pointer text-white hover:bg-emerald-900/30">
                                                {option}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </section>

                        {/* 第八部分:同意与提交 */}
                        <section className="rounded-lg border-2 border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                            <h2 className="mb-6 text-xl font-bold text-white md:text-2xl">{t('apply.section8.title')}</h2>
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
                                        {t('apply.section8.confirmAccurate')} <span className="text-red-400">{t('apply.required')}</span>
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
                                        {t('apply.section8.confirmPrivacy')} <span className="text-red-400">{t('apply.required')}</span>
                                    </span>
                                </label>
                            </div>

                            <div className="mt-8 text-center">
                                <button
                                    type="submit"
                                    className="inline-flex cursor-pointer items-center rounded bg-linear-to-r from-emerald-500 to-teal-600 px-8 py-4 text-base font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700 md:px-10 md:text-lg"
                                >
                                    {t('apply.section8.submit')}
                                </button>
                            </div>
                        </section>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
}
