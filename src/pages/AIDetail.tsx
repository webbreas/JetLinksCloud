import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AIHero from '@/components/ai-detail/AIHero';
import AIProductIntro from '@/components/ai-detail/AIProductIntro';
import AIPainPoints from '@/components/ai-detail/AIPainPoints';
import AICoreFeatures from '@/components/ai-detail/AICoreFeatures';
import SaaSFeatures from '@/components/sections/SaaSFeatures';
import CTA from '@/components/sections/CTA';

export default function AIDetail() {
  useEffect(() => {
    document.title = 'JetLinks 人工智能';
    return () => {
      document.title = 'JetLinks';
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <main>
        <AIHero />
        <AIProductIntro />
        <AIPainPoints />
        <AICoreFeatures />
        <SaaSFeatures />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
