import {
    AescFaq,
    AescHero,
    AescParticipation,
    AescRoadmap,
    AescTokenEconomy,
    AescTokenInfo,
    AescTrust,
    AescValueProposition,
} from '@/components/aesc';
import { MainLayout } from '@/layouts';
import { Head } from '@inertiajs/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';

/**
 * AESC 生态页面
 *
 * 展示 AGRI-ECO SMART CHAIN 的核心信息和价值主张
 */
export default function Aesc() {
    const { t } = useLaravelReactI18n();

    return (
        <>
            <Head title={t('page.title.aesc')} />
            <MainLayout currentPage="aesc">
                <AescHero />
                <AescValueProposition />
                <AescParticipation />

                {/* 代币信息概览 */}
                <AescTokenInfo />

                <AescTokenEconomy />
                <AescRoadmap />
                <AescTrust />
                <AescFaq />
            </MainLayout>
        </>
    );
}
