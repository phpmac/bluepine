import type { FaqItem, RequirementItem, SaleTier, TimelineItem } from './types';

export const saleTiers: SaleTier[] = [
    {
        name: '私募抢先轮',
        price: '0.16 USDT',
        cap: '$3.5M',
        allocation: '额度占比 7% · 单户封顶 20,000 USDT',
        vesting: '20% TGE · 80% 线性释放 8 个月',
        access: '白名单 + 质押 5,000 AURP 以上',
        tone: 'emerald',
    },
    {
        name: '公众认购轮',
        price: '0.18 USDT',
        cap: '$6M',
        allocation: '额度占比 12% · 单户封顶 2,500 USDT',
        vesting: '40% TGE · 60% 线性释放 6 个月',
        access: 'KYC 通过用户 · 积分排名前 30%',
        tone: 'sky',
    },
    {
        name: '战略伙伴轮',
        price: '0.20 USDT',
        cap: '$2.5M',
        allocation: '额度占比 5% · 定制交付',
        vesting: '锁仓 3 个月后按季度释放',
        access: '生态伙伴 / 做市机构专享',
        tone: 'violet',
    },
];

export const timeline: TimelineItem[] = [
    {
        title: '提交 KYC & 风险评估',
        time: '即日起 - 04.04 18:00 (UTC+8)',
        description: '上传身份证件与地址证明, 完成合规问卷, 系统将在 24 小时内反馈审核结果。',
    },
    {
        title: '锁定申购额度',
        time: '04.05 12:00 - 04.10 11:30 (UTC+8)',
        description: '充值 USDT/USDC 并在「额度管理」中确认锁定, 白名单可享配额优先分配与加权倍数。',
    },
    {
        title: '抽签与结果公布',
        time: '04.10 18:00 (UTC+8)',
        description: '系统依据积分权重随机抽签, 中签金额将自动冻结, 未中签部分实时返还钱包。',
    },
    {
        title: 'TGE 分发 & 开盘',
        time: '04.12 20:00 (UTC+8)',
        description: '40% 份额将于链上智能合约自动发放, 剩余份额按既定释放节奏进入可领取池。',
    },
];

export const requirements: RequirementItem[] = [
    {
        title: '等级 2 KYC 必须完成',
        detail: '支持的证件类型为护照或本地身份证, 提交后需保持摄像头与网络稳定以便远程审核。',
    },
    {
        title: '账户净资产 ≥ 500 USDT',
        detail: '资产可为 USDT、USDC 或 AURP, 平台会在锁定额度前进行余额快照。',
    },
    {
        title: '通过交易风险测评',
        detail: '需正确回答 IEO 相关风险控制题, 防止未了解规则的用户误参与。',
    },
    {
        title: '绑定安全因子',
        detail: '强制开启双重验证 (2FA), 并设置提款白名单, 保障申购资金安全。',
    },
];

export const faqs: FaqItem[] = [
    {
        question: '如何获取白名单加权?',
        answer: '参与 Aurora 节点质押或完成生态任务即可累计积分。积分排名前 15% 的用户进入白名单, 前 5% 享 2 倍配额, 其余白名单享 1.5 倍配额。',
    },
    {
        question: '未中签资金如何处理?',
        answer: '未中签或超出配额的资金将在结果公布后立即解锁并返还原钱包, 全程智能合约执行无需人工操作。',
    },
    {
        question: 'IEO 后何时可交易 AUR?',
        answer: 'TGE 当日 (04.12 20:30 UTC+8) 将同步上线 Aurora DEX 与两家一级 CEX, 并开放 USDT/AUR 与 AUR/ETH 交易对。',
    },
    {
        question: '线性释放如何领取?',
        answer: '解锁份额将按月进入可领取池, 登录治理面板即可一键领取, 支持将领取权委托给合约自动执行。',
    },
];

export const tierToneClass = {
    emerald: 'tier-card--emerald',
    sky: 'tier-card--sky',
    violet: 'tier-card--violet',
} as const;
