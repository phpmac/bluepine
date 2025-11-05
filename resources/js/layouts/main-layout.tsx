import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import { type ReactNode } from 'react';

interface MainLayoutProps {
    children: ReactNode;
    currentPage?: string;
    transparentFooter?: boolean;
}

/**
 * 主站布局组件
 *
 * 包含固定的导航栏和底部,用于所有主站页面
 *
 * @example
 * ```tsx
 * import { MainLayout } from '@/layouts';
 *
 * export default function About() {
 *     return (
 *         <MainLayout currentPage="about">
 *             <section>
 *                 // 页面内容
 *             </section>
 *         </MainLayout>
 *     );
 * }
 * ```
 *
 * @param children - 页面内容
 * @param currentPage - 当前页面标识(用于导航高亮)
 * @param transparentFooter - 是否使用透明底部(默认: true)
 */
export function MainLayout({ children, currentPage = 'home', transparentFooter = true }: MainLayoutProps) {
    return (
        <div className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950">
            <Navigation currentPage={currentPage} />
            <main>{children}</main>
            <Footer transparent={transparentFooter} />
        </div>
    );
}
