import { AirdropCta, AirdropFaq, AirdropHero, AirdropSteps, AirdropTimeline, AirdropValueProps } from '@/components/airdrop';
import { MainLayout } from '@/layouts';

/**
 * AESC 空投活动页面
 *
 * 展示空投活动的详细信息,包括价值主张、参与步骤、时间轴和常见问题
 */
export default function Airdrop() {
    return (
        <MainLayout currentPage="airdrop">
            <AirdropHero />
            <AirdropValueProps />
            <AirdropSteps />
            <AirdropTimeline />
            <AirdropFaq />
            <AirdropCta />
        </MainLayout>
    );
}
