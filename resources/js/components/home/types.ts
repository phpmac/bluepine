export type FeatureIconKey = 'shieldPulse' | 'orbitSwap' | 'identityMesh' | 'workflowGrid';
export type MetricIconKey = 'speed' | 'nodes' | 'volume' | 'tvl';
export type IeoPhaseIconKey = 'priority' | 'public' | 'tge';
export type IeoHighlightIconKey = 'allocation' | 'price' | 'vesting';

export type FeatureItem = {
    title: string;
    description: string;
    icon: FeatureIconKey;
};

export type MetricItem = {
    label: string;
    value: string;
    icon: MetricIconKey;
};

export type IeoPhase = {
    title: string;
    window: string;
    allocation: string;
    cap: string;
    status: '进行中' | '即将开始' | '预告';
    icon: IeoPhaseIconKey;
};

export type IeoHighlight = {
    label: string;
    value: string;
    detail: string;
    icon: IeoHighlightIconKey;
};
