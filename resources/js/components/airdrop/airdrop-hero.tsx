import { Head } from '@inertiajs/react';
import { Clock, Gift, Layers, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

/**
 * Airdrop 页面英雄区组件
 *
 * 包含完整的动画特效：五彩纸屑雨、礼盒打开、图标飞出、波浪纹理等
 */
export function AirdropHero() {
    const [timeLeft, setTimeLeft] = useState({
        days: 30,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // 倒计时逻辑
    useEffect(() => {
        const targetDate = new Date('2025-12-31T23:59:59').getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <Head title="AESC 空投活动" />
            <section
                className="relative flex min-h-screen items-center overflow-hidden px-4 sm:px-6 lg:px-8"
                style={{ background: 'radial-gradient(ellipse at center, #047857 0%, #065f46 30%, #064e3b 60%, #022c22 100%)' }}
            >
                {/* 动态庆祝背景 */}
                <div className="absolute inset-0">
                    {/* 五彩纸屑雨 */}
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className="confetti absolute"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `-${Math.random() * 20}%`,
                                width: `${8 + Math.random() * 12}px`,
                                height: `${15 + Math.random() * 20}px`,
                                background: ['#10b981', '#34d399', '#14b8a6', '#06b6d4', '#22d3ee'][Math.floor(Math.random() * 5)],
                                animation: `confettiFall ${3 + Math.random() * 3}s linear infinite`,
                                animationDelay: `${Math.random() * 5}s`,
                                transform: `rotate(${Math.random() * 360}deg)`,
                                opacity: 0.7,
                            }}
                        />
                    ))}

                    {/* 农田波浪纹理 */}
                    <div className="field-waves absolute inset-0 opacity-10">
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className="wave-line"
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    height: '2px',
                                    background: 'linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.5), transparent)',
                                    top: `${15 + i * 15}%`,
                                    animation: `waveMove ${4 + i * 0.5}s ease-in-out infinite`,
                                    animationDelay: `${i * 0.3}s`,
                                }}
                            />
                        ))}
                    </div>

                    {/* 礼盒 - 打开动画 */}
                    <div className="gift-box-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        {/* 礼盒底部 */}
                        <div className="gift-box-base relative h-40 w-40">
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 shadow-2xl">
                                {/* 丝带装饰 */}
                                <div className="absolute top-1/2 right-0 left-0 h-4 -translate-y-1/2 bg-teal-500"></div>
                                <div className="absolute top-0 bottom-0 left-1/2 w-4 -translate-x-1/2 bg-teal-500"></div>
                            </div>
                        </div>

                        {/* 礼盒盖子 - 打开动画 */}
                        <div className="gift-box-lid absolute left-1/2 -translate-x-1/2" style={{ top: '-20px', transformOrigin: 'bottom center' }}>
                            <div className="h-20 w-44 rounded-lg bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 shadow-xl">
                                <div className="absolute top-1/2 right-0 left-0 h-3 -translate-y-1/2 bg-teal-500"></div>
                            </div>
                        </div>

                        {/* 从礼盒中飞出的图标 */}
                        {/* AESC Logo */}
                        <div className="flying-icon" style={{ animationDelay: '0.5s' }}>
                            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 shadow-lg">
                                <Layers className="h-8 w-8 text-white" />
                            </div>
                        </div>

                        {/* 数据图标 */}
                        <div className="flying-icon" style={{ animationDelay: '0.7s' }}>
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-cyan-600 shadow-lg">
                                <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z"
                                    />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h8M8 14h5" />
                                </svg>
                            </div>
                        </div>

                        {/* 金融图标 */}
                        <div className="flying-icon" style={{ animationDelay: '0.9s' }}>
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-green-600 shadow-lg">
                                <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M20 12c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8z"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* 知识图标 */}
                        <div className="flying-icon" style={{ animationDelay: '1.1s' }}>
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-teal-600 shadow-lg">
                                <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* 飞出的小星星 */}
                        {[...Array(20)].map((_, i) => (
                            <div
                                key={i}
                                className="sparkle-particle absolute"
                                style={
                                    {
                                        left: '50%',
                                        top: '50%',
                                        animation: `sparkleFloat ${1.5 + Math.random()}s ease-out ${0.3 + i * 0.05}s`,
                                        '--angle': `${i * 18}deg`,
                                        '--distance': `${100 + Math.random() * 150}px`,
                                    } as React.CSSProperties
                                }
                            >
                                <div className="h-2 w-2 rounded-full bg-emerald-300 shadow-lg"></div>
                            </div>
                        ))}
                    </div>

                    {/* 浮动的粒子效果 */}
                    {[...Array(30)].map((_, i) => (
                        <div
                            key={i}
                            className="floating-particle absolute rounded-full"
                            style={{
                                width: `${4 + Math.random() * 8}px`,
                                height: `${4 + Math.random() * 8}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                background: Math.random() > 0.5 ? 'rgba(16, 185, 129, 0.6)' : 'rgba(20, 184, 166, 0.6)',
                                animation: `floatParticle ${3 + Math.random() * 4}s ease-in-out infinite`,
                                animationDelay: `${Math.random() * 2}s`,
                            }}
                        />
                    ))}

                    {/* 渐变遮罩 */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60"></div>
                </div>

                {/* 背景光晕效果 */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="glow-pulse absolute top-1/3 left-1/3 h-[500px] w-[500px] rounded-full bg-emerald-400/20 blur-3xl"></div>
                    <div
                        className="glow-pulse absolute right-1/4 bottom-1/3 h-[500px] w-[500px] rounded-full bg-teal-400/15 blur-3xl"
                        style={{ animationDelay: '1s' }}
                    ></div>
                </div>

                <div className="relative z-10 mx-auto w-full max-w-7xl py-20">
                    <div className="text-center">
                        <div className="mb-6 inline-flex items-center rounded border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-200">
                            <Gift className="mr-2 h-4 w-4" />
                            AESC AIRDROP EVENT
                        </div>
                        <h1 className="mb-6 text-5xl leading-tight font-bold tracking-tight text-white md:text-6xl">AESC 生态启动空投</h1>
                        <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-slate-300">
                            抢先领取未来农业生态权益,与我们一起播种,共同收获!
                        </p>

                        {/* 核心数据高亮 */}
                        <div className="mx-auto mb-10 max-w-4xl">
                            <div className="grid gap-6 md:grid-cols-2">
                                {/* 空投总额 */}
                                <div className="rounded-lg border-2 border-emerald-500/30 bg-emerald-500/10 p-8 backdrop-blur-sm">
                                    <div className="mb-2 text-sm font-semibold text-emerald-300">空投总额</div>
                                    <div className="text-4xl font-bold text-emerald-100">32,000,000 AESC</div>
                                    <div className="mt-2 text-sm text-slate-300">占总量2%</div>
                                </div>

                                {/* 倒计时 */}
                                <div className="rounded-lg border-2 border-teal-500/30 bg-teal-500/10 p-8 backdrop-blur-sm">
                                    <div className="mb-3 flex items-center justify-center text-sm font-semibold text-teal-300">
                                        <Clock className="mr-2 h-4 w-4" />
                                        活动剩余时间
                                    </div>
                                    <div className="grid grid-cols-4 gap-2">
                                        {[
                                            { label: '天', value: timeLeft.days },
                                            { label: '时', value: timeLeft.hours },
                                            { label: '分', value: timeLeft.minutes },
                                            { label: '秒', value: timeLeft.seconds },
                                        ].map((item, index) => (
                                            <div key={index} className="text-center">
                                                <div className="mb-1 text-2xl font-bold text-white">{String(item.value).padStart(2, '0')}</div>
                                                <div className="text-xs text-slate-400">{item.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 核心行动按钮 */}
                        <a
                            href="#participate"
                            className="inline-flex cursor-pointer items-center rounded bg-gradient-to-r from-emerald-500 to-teal-600 px-10 py-5 text-lg font-medium text-white transition-all hover:from-emerald-600 hover:to-teal-700"
                        >
                            <Zap className="mr-2 h-6 w-6" />
                            立即参与空投
                        </a>
                    </div>
                </div>
            </section>

            <style>{`
                /* 五彩纸屑下落动画 */
                @keyframes confettiFall {
                    0% {
                        transform: translateY(0) rotate(0deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(100vh) rotate(720deg);
                        opacity: 0;
                    }
                }

                /* 波浪移动动画 */
                @keyframes waveMove {
                    0%, 100% {
                        transform: translateX(-100%);
                        opacity: 0.3;
                    }
                    50% {
                        transform: translateX(100%);
                        opacity: 0.7;
                    }
                }

                /* 礼盒盖子打开动画 */
                @keyframes giftLidOpen {
                    0% {
                        transform: translateX(-50%) rotateX(0deg);
                        opacity: 1;
                    }
                    50% {
                        transform: translateX(-50%) rotateX(-45deg) translateY(-20px);
                        opacity: 0.8;
                    }
                    100% {
                        transform: translateX(-50%) rotateX(-90deg) translateY(-40px);
                        opacity: 0.6;
                    }
                }

                .gift-box-lid {
                    animation: giftLidOpen 2s ease-in-out 0.5s forwards;
                }

                /* 礼盒底部微震动 */
                @keyframes giftBoxShake {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    25% { transform: translateY(-2px) rotate(-1deg); }
                    75% { transform: translateY(-2px) rotate(1deg); }
                }

                .gift-box-base {
                    animation: giftBoxShake 0.5s ease-in-out 0.3s;
                }

                /* 图标飞出动画 */
                @keyframes flyOut {
                    0% {
                        opacity: 0;
                        transform: translate(-50%, -50%) scale(0) rotate(0deg);
                    }
                    30% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 1;
                        transform: translate(var(--tx), var(--ty)) scale(1) rotate(360deg);
                    }
                }

                .flying-icon {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    opacity: 0;
                    animation: flyOut 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                }

                .flying-icon:nth-child(3) { --tx: -150px; --ty: -120px; }
                .flying-icon:nth-child(4) { --tx: 150px; --ty: -100px; }
                .flying-icon:nth-child(5) { --tx: -180px; --ty: 80px; }
                .flying-icon:nth-child(6) { --tx: 170px; --ty: 100px; }

                /* 闪烁粒子动画 */
                @keyframes sparkleFloat {
                    0% {
                        opacity: 0;
                        transform: translate(-50%, -50%) rotate(var(--angle)) translateY(0) scale(0);
                    }
                    50% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                        transform: translate(-50%, -50%) rotate(var(--angle)) translateY(var(--distance)) scale(1);
                    }
                }

                /* 浮动粒子 */
                @keyframes floatParticle {
                    0%, 100% {
                        transform: translateY(0) rotate(0deg);
                        opacity: 0.3;
                    }
                    50% {
                        transform: translateY(-30px) rotate(180deg);
                        opacity: 0.8;
                    }
                }

                .floating-particle {
                    animation: floatParticle 4s ease-in-out infinite;
                }

                /* 光晕脉冲 */
                @keyframes glowPulse {
                    0%, 100% {
                        opacity: 0.3;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.6;
                        transform: scale(1.1);
                    }
                }

                .glow-pulse {
                    animation: glowPulse 3s ease-in-out infinite;
                }

                /* 礼盒容器整体缩放 */
                @keyframes giftBoxScale {
                    0% {
                        transform: translate(-50%, -50%) scale(0.8);
                        opacity: 0;
                    }
                    100% {
                        transform: translate(-50%, -50%) scale(1);
                        opacity: 1;
                    }
                }

                .gift-box-container {
                    animation: giftBoxScale 0.5s ease-out forwards;
                }

                /* 响应式调整 */
                @media (max-width: 768px) {
                    .flying-icon:nth-child(3) { --tx: -80px; --ty: -80px; }
                    .flying-icon:nth-child(4) { --tx: 80px; --ty: -70px; }
                    .flying-icon:nth-child(5) { --tx: -90px; --ty: 50px; }
                    .flying-icon:nth-child(6) { --tx: 90px; --ty: 60px; }
                }
            `}</style>
        </>
    );
}
