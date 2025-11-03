import { Card } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function Technology() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!canvasRef.current) return;

        // 捕获当前canvas元素用于清理函数
        const canvas = canvasRef.current;

        // 创建场景
        const scene = new THREE.Scene();

        // 创建相机
        const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
        camera.position.z = 8;

        // 创建渲染器
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        canvas.appendChild(renderer.domElement);

        // 创建多个立方体网格节点
        const cubes: THREE.LineSegments[] = [];
        const cubeGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
        const positions = [
            { x: -3, y: 2, z: 0 },
            { x: 3, y: 2, z: 0 },
            { x: -3, y: -2, z: 0 },
            { x: 3, y: -2, z: 0 },
            { x: 0, y: 0, z: 0 },
        ];

        positions.forEach((pos) => {
            const edges = new THREE.EdgesGeometry(cubeGeometry);
            const material = new THREE.LineBasicMaterial({
                color: 0x14b8a6,
                transparent: true,
                opacity: 0.8,
            });
            const cube = new THREE.LineSegments(edges, material);
            cube.position.set(pos.x, pos.y, pos.z);
            scene.add(cube);
            cubes.push(cube);
        });

        // 创建连接线
        const lines: THREE.Line[] = [];
        const connections = [
            [0, 4],
            [1, 4],
            [2, 4],
            [3, 4],
            [0, 1],
            [2, 3],
            [0, 2],
            [1, 3],
        ];

        connections.forEach(([start, end]) => {
            const points = [];
            points.push(new THREE.Vector3(positions[start].x, positions[start].y, positions[start].z));
            points.push(new THREE.Vector3(positions[end].x, positions[end].y, positions[end].z));

            const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
            const lineMaterial = new THREE.LineBasicMaterial({
                color: 0x06b6d4,
                transparent: true,
                opacity: 0.3,
            });
            const line = new THREE.Line(lineGeometry, lineMaterial);
            scene.add(line);
            lines.push(line);
        });

        // 添加环境光粒子
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 500;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 15;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.03,
            color: 0x0891b2,
            transparent: true,
            opacity: 0.6,
        });
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // 动画循环
        let animationId: number;
        const animate = () => {
            animationId = requestAnimationFrame(animate);

            // 旋转立方体
            cubes.forEach((cube, index) => {
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
                cube.rotation.z += 0.005 * (index % 2 === 0 ? 1 : -1);
            });

            // 旋转粒子
            particlesMesh.rotation.y += 0.001;

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
            cubeGeometry.dispose();
            particlesGeometry.dispose();
            particlesMaterial.dispose();
            cubes.forEach((cube) => {
                if (cube.material instanceof THREE.Material) {
                    cube.material.dispose();
                }
            });
            lines.forEach((line) => {
                line.geometry.dispose();
                if (line.material instanceof THREE.Material) {
                    line.material.dispose();
                }
            });
            if (canvas && renderer.domElement.parentNode === canvas) {
                canvas.removeChild(renderer.domElement);
            }
        };
    }, []);

    const layers = [
        {
            title: '应用层',
            items: ['农户端应用', '企业管理平台', '消费者追溯', '数据分析'],
            color: 'from-emerald-400 to-teal-400',
        },
        {
            title: '智能合约层',
            items: ['供应链合约', '支付结算', '质量认证', '激励机制'],
            color: 'from-teal-400 to-cyan-400',
        },
        {
            title: '共识层',
            items: ['PoS 共识', '跨链桥接', '节点网络', '数据同步'],
            color: 'from-cyan-400 to-blue-400',
        },
        {
            title: '数据层',
            items: ['分布式存储', 'IPFS 集成', '链上数据', '链下数据'],
            color: 'from-blue-400 to-purple-400',
        },
    ];

    return (
        <section ref={sectionRef} className="relative overflow-hidden py-32" id="technology">
            {/* 3D背景 */}
            <div ref={canvasRef} className="absolute inset-0 opacity-30" style={{ zIndex: 0 }} />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" style={{ zIndex: 1 }} />

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
                <div className="mb-16 text-center">
                    <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
                        <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">技术架构</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400">四层架构设计,构建稳定可靠的区块链农业供应链平台</p>
                </div>

                <div className="mx-auto max-w-4xl space-y-6">
                    {layers.map((layer, index) => (
                        <Card
                            key={index}
                            className={`border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm transition-all duration-500 hover:border-emerald-500/30 ${
                                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="flex flex-col gap-6 md:flex-row md:items-center">
                                <div className="md:w-1/3">
                                    <h3 className={`bg-gradient-to-r text-2xl font-bold ${layer.color} bg-clip-text text-transparent`}>
                                        {layer.title}
                                    </h3>
                                </div>
                                <div className="grid grid-cols-2 gap-4 md:w-2/3">
                                    {layer.items.map((item, itemIndex) => (
                                        <div
                                            key={itemIndex}
                                            className="rounded-lg border border-slate-700/50 bg-slate-800/50 px-4 py-2 text-center text-sm text-slate-300"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
