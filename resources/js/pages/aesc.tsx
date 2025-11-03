import {
    AescFaq,
    AescHero,
    AescParticipation,
    AescRoadmap,
    AescTokenEconomy,
    AescTrust,
    AescValueBlood,
    AescValueProposition,
} from '@/components/aesc';
import { MainLayout } from '@/layouts';

/**
 * AESC 生态页面
 *
 * 展示 Agri-Eco Smart Chain 的核心信息和价值主张
 */
export default function Aesc() {
    return (
        <MainLayout currentPage="aesc">
            <AescHero />
            <AescValueProposition />
            <AescParticipation />
            <AescValueBlood />
            <AescTokenEconomy />
            <AescRoadmap />
            <AescTrust />
            <AescFaq />
        </MainLayout>
    );
}
