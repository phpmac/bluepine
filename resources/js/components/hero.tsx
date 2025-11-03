import { useLaravelReactI18n } from 'laravel-react-i18n';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function Hero() {
    const { t } = useLaravelReactI18n();
    const [mounted, setMounted] = useState(false);
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!canvasRef.current) return;

        // 捕获当前canvas元素用于清理函数
        const canvas = canvasRef.current;

        // 创建场景
        const scene = new THREE.Scene();

        // 创建相机
        const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
        camera.position.z = 5;

        // 创建渲染器
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        canvas.appendChild(renderer.domElement);

        // 创建网格球体
        const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
        const material = new THREE.MeshNormalMaterial({
            wireframe: false,
            transparent: true,
            opacity: 0.8,
        });
        const torusKnot = new THREE.Mesh(geometry, material);
        scene.add(torusKnot);

        // 添加粒子系统
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 1000;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 10;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.02,
            color: 0x10b981,
            transparent: true,
            opacity: 0.8,
        });
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // 动画循环
        let animationId: number;
        let time = 0;
        const animate = () => {
            animationId = requestAnimationFrame(animate);
            time += 0.01;

            // 旋转动画
            torusKnot.rotation.x += 0.005;
            torusKnot.rotation.y += 0.005;
            particlesMesh.rotation.y += 0.001;

            // 缓慢放大缩小动画
            const scale = 1 + Math.sin(time * 0.3) * 0.15;
            torusKnot.scale.set(scale, scale, scale);

            renderer.render(scene, camera);
        };
        animate();

        // 响应窗口大小变化
        const handleResize = () => {
            if (!canvasRef.current) return;
            camera.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        // 清理
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
            renderer.dispose();
            geometry.dispose();
            material.dispose();
            particlesGeometry.dispose();
            particlesMaterial.dispose();
            if (canvas && renderer.domElement.parentNode === canvas) {
                canvas.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-emerald-500/20 blur-3xl" />
                <div className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-teal-500/20 blur-3xl delay-1000" />
                <div className="absolute top-1/2 left-1/2 h-96 w-96 animate-pulse rounded-full bg-cyan-500/10 blur-3xl delay-500" />
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] bg-size-[4rem_4rem]" />

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-5xl text-center">
                    {/* 文字内容 */}
                    <div>
                        <div className="relative">
                            <h1
                                className={`mb-6 text-5xl font-bold transition-all delay-100 duration-1000 sm:text-6xl lg:text-7xl ${
                                    mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                }`}
                            >
                                <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text leading-tight text-balance text-transparent">
                                    {t('hero.title1')}
                                </span>
                                <span className="block bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text leading-tight text-balance text-transparent">
                                    {t('hero.title2')}
                                </span>
                            </h1>

                            {/* Three.js 3D背景 - 在标题下方 */}
                            <div
                                ref={canvasRef}
                                className="pointer-events-none absolute left-1/2 h-[400px] w-full max-w-4xl -translate-x-1/2 opacity-50"
                                style={{ top: '100%', zIndex: -1 }}
                            />
                        </div>

                        <p
                            className={`mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-slate-400 transition-all delay-200 duration-1000 sm:text-xl ${
                                mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}
                        >
                            {t('hero.description')}
                        </p>

                        <div
                            className={`mb-12 flex flex-col items-center justify-center gap-4 transition-all delay-300 duration-1000 sm:flex-row ${
                                mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}
                        >
                            <a
                                href="/aesc"
                                className="group inline-flex items-center border-2 border-emerald-400 px-8 py-4 text-lg font-medium text-emerald-400 backdrop-blur-sm transition-all hover:border-emerald-300 hover:text-emerald-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                            >
                                {t('hero.button1')}
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </a>
                            <a
                                href="/strategy"
                                className="inline-flex items-center border-2 border-teal-400/70 px-8 py-4 text-lg font-medium text-teal-400/90 backdrop-blur-sm transition-all hover:border-teal-300 hover:text-teal-300 hover:shadow-[0_0_20px_rgba(20,184,166,0.2)]"
                            >
                                {t('hero.button2')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
