// AESC Token 私募数据常量

export interface PrivateSaleStage {
    id: number;
    tokens: number;
    price: number;
    target: number;
    progress: number; // 预设进度（百分比）
    // i18n: 阶段标题键, 由页面使用 t(key, { num }) 渲染
    stageKey?: string;
}

export interface TokenomicsData {
    name: string;
    value: number;
    percentage: number;
    color: string;
    // i18n: 名称翻译键
    nameKey?: string;
}

export interface VestingMilestone {
    id: number;
    date: string;
    percentage: number;
    description: string;
    // i18n: 日期与描述翻译键
    dateKey?: string;
    descriptionKey?: string;
}

// 私募三阶段销售数据
export const ieoStages: PrivateSaleStage[] = [
    {
        id: 1,
        tokens: 100000000,
        price: 0.125,
        target: 12500000,
        progress: 0, // 第一阶段默认%0完成
        stageKey: 'overview.stage_label',
    },
    {
        id: 2,
        tokens: 110000000,
        price: 0.15,
        target: 16500000,
        progress: 0, // 第二阶段默认%0完成
        stageKey: 'overview.stage_label',
    },
    {
        id: 3,
        tokens: 110000000,
        price: 0.175,
        target: 19250000,
        progress: 0, // 第三阶段默认%0完成
        stageKey: 'overview.stage_label',
    },
];

// 代币基本信息
export const tokenInfo = {
    name: 'AESC',
    symbol: 'AESC',
    totalSupply: 1600000000, // 16亿
    ieoTokens: 320000000, // 3.2亿
    totalTarget: 51250000, // 总募集目标(美元计算)
    ieoPercentage: 20, // 私募占总量20%,
};

// 代币经济学分配
export const tokenomicsData: TokenomicsData[] = [
    {
        name: '私募销售',
        value: 320000000,
        percentage: 20,
        color: '#4ade80', // 生态绿
        nameKey: 'tokenomics.cards.private_sale.title',
    },
    {
        name: '生态基金',
        value: 640000000,
        percentage: 40,
        color: '#38bdf8', // 天蓝色
        nameKey: 'tokenomics.cards.ecofund.title',
    },
    {
        name: '团队激励',
        value: 240000000,
        percentage: 15,
        color: '#facc15', // 科技金
        nameKey: 'tokenomics.cards.team.title',
    },
    {
        name: '交易所',
        value: 160000000,
        percentage: 10,
        color: '#fb7185', // 粉红
        nameKey: 'tokenomics.cards.exchange.title',
    },
    {
        name: '社区空投',
        value: 32000000,
        percentage: 2,
        color: '#c084fc', // 紫色
        nameKey: 'tokenomics.cards.airdrop.title',
    },
    {
        name: '储备额',
        value: 160000000,
        percentage: 10,
        color: '#fbbf24', // 橙色
        nameKey: 'tokenomics.cards.reserve.title',
    },
    {
        name: '合作伙伴',
        value: 480000000,
        percentage: 3,
        color: '#8b5cf6', // 紫色
        nameKey: 'tokenomics.cards.partners.title',
    },
];

// 解锁时间表
export const vestingSchedule: VestingMilestone[] = [
    {
        id: 1,
        date: '私募结束后7天',
        percentage: 10,
        description: '初始释放',
        dateKey: 'vesting.date.after_private_7d',
        descriptionKey: 'vesting.phase.initial',
    },
    {
        id: 2,
        date: '第1个月',
        percentage: 7.5,
        description: '线性释放开始',
        dateKey: 'vesting.date.month_1',
        descriptionKey: 'vesting.phase.linear',
    },
    {
        id: 3,
        date: '第2个月',
        percentage: 7.5,
        description: '线性释放',
        dateKey: 'vesting.date.month_2',
        descriptionKey: 'vesting.phase.linear',
    },
    {
        id: 4,
        date: '第3个月',
        percentage: 7.5,
        description: '线性释放',
        dateKey: 'vesting.date.month_3',
        descriptionKey: 'vesting.phase.linear',
    },
    {
        id: 5,
        date: '第4个月',
        percentage: 7.5,
        description: '线性释放',
        dateKey: 'vesting.date.month_4',
        descriptionKey: 'vesting.phase.linear',
    },
    {
        id: 6,
        date: '第5个月',
        percentage: 7.5,
        description: '线性释放',
        dateKey: 'vesting.date.month_5',
        descriptionKey: 'vesting.phase.linear',
    },
    {
        id: 7,
        date: '第6个月',
        percentage: 7.5,
        description: '线性释放',
        dateKey: 'vesting.date.month_6',
        descriptionKey: 'vesting.phase.linear',
    },
    {
        id: 8,
        date: '第7个月',
        percentage: 7.5,
        description: '线性释放',
        dateKey: 'vesting.date.month_7',
        descriptionKey: 'vesting.phase.linear',
    },
    {
        id: 9,
        date: '第8个月',
        percentage: 7.5,
        description: '线性释放',
        dateKey: 'vesting.date.month_8',
        descriptionKey: 'vesting.phase.linear',
    },
    {
        id: 10,
        date: '第9个月',
        percentage: 7.5,
        description: '线性释放',
        dateKey: 'vesting.date.month_9',
        descriptionKey: 'vesting.phase.linear',
    },
    {
        id: 11,
        date: '第10个月',
        percentage: 7.5,
        description: '线性释放',
        dateKey: 'vesting.date.month_10',
        descriptionKey: 'vesting.phase.linear',
    },
    {
        id: 12,
        date: '第11个月',
        percentage: 7.5,
        description: '线性释放',
        dateKey: 'vesting.date.month_11',
        descriptionKey: 'vesting.phase.linear',
    },
    {
        id: 13,
        date: '第12个月',
        percentage: 7.5,
        description: '线性释放完成',
        dateKey: 'vesting.date.month_12',
        descriptionKey: 'vesting.phase.complete',
    },
];

// 推荐奖励信息
export const referralInfo = {
    rewardPercentage: 5, // 推荐人获得5%
    releaseTime: '私募结束后7天内',
    rewardLevel: '仅奖励一级推荐人',
    description: '邀请好友参与私募，获得其购买金额5%的代币奖励',
    // i18n
    releaseTimeKey: 'referral.release_time',
    rewardLevelKey: 'referral.reward_level',
    descriptionKey: 'referral.description',
};

// FAQ数据
export const faqData = [
    {
        id: 1,
        question: '什么是AESC Token？',
        answer: 'AESC Token是一个专注于农业生态系统数字化的创新代币项目。我们致力于通过区块链技术赋能现代农业，构建可持续的农业生态系统，连接农民,消费者和投资者。',
        qKey: 'faq.q1',
        aKey: 'faq.a1',
    },
    {
        id: 2,
        question: '如何参与私募？',
        answer: '参与私募非常简单：1) 连接您的数字钱包；2) 选择购买阶段和数量；3) 确认交易并完成支付。整个过程安全透明，基于智能合约执行。',
        qKey: 'faq.q2',
        aKey: 'faq.a2',
    },
    {
        id: 3,
        question: '代币解锁机制是怎样的？',
        answer: '为保护投资者利益，我们采用渐进式解锁机制：私募结束后7天内释放10%，剩余90%在12个月内线性释放，每月释放7.5%。',
        qKey: 'faq.q3',
        aKey: 'faq.a3',
    },
    {
        id: 4,
        question: '推荐奖励如何获得？',
        answer: '当您成功推荐好友参与私募时，您将获得其购买金额5%的代币奖励。奖励将在私募结束后7天内一次性发放到您的钱包地址。',
        qKey: 'faq.q4',
        aKey: 'faq.a4',
    },
    {
        id: 5,
        question: '项目的技术特色是什么？',
        answer: '我们采用先进的区块链技术，结合IoT设备,AI数据分析和智能合约，为农业提供溯源,供应链管理,智能农业监控等创新解决方案。',
        qKey: 'faq.q5',
        aKey: 'faq.a5',
    },
    {
        id: 6,
        question: '代币未来的应用场景？',
        answer: 'AESC代币将用于：农产品溯源支付,智能农业设备租赁,农业保险购买,生态治理投票,质量认证奖励等多个农业生态场景。',
        qKey: 'faq.q6',
        aKey: 'faq.a6',
    },
];
