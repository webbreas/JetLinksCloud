import PageLayout from '@/shared/layout/PageLayout';
import AIHero from '@/pages/ai/sections/AIHero';
import AIProductIntro from '@/pages/ai/sections/AIProductIntro';
import AIPainPoints from '@/pages/ai/sections/AIPainPoints';
import AICoreFeatures from '@/pages/ai/sections/AICoreFeatures';
import SaaSFeatures from '@/shared/sections/SaaSFeatures';
import CTA from '@/shared/sections/CTA';

export default function AIPage() {
  return (
    <PageLayout title="JetLinks 人工智能">
      <AIHero />
      <AIProductIntro />
      <AIPainPoints />
      <AICoreFeatures />
      <SaaSFeatures />
      <CTA />
    </PageLayout>
  );
}
