import { CTA } from '@/components/cta';
import { Ecosystem } from '@/components/ecosystem';
import { Features } from '@/components/features';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { Navigation } from '@/components/navigation';
import { Partners } from '@/components/partners';
import { Stats } from '@/components/stats';
import { Technology } from '@/components/technology';

export default function Welcome() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            <Navigation />
            <Hero />
            <Stats />
            <Features />
            <Technology />
            <Ecosystem />
            <Partners />
            <CTA />
            <Footer />
        </div>
    );
}
