export type SaleTier = {
    name: string;
    price: string;
    cap: string;
    allocation: string;
    vesting: string;
    access: string;
    tone: 'emerald' | 'sky' | 'violet';
};

export type TimelineItem = {
    title: string;
    time: string;
    description: string;
};

export type RequirementItem = {
    title: string;
    detail: string;
};

export type FaqItem = {
    question: string;
    answer: string;
};
