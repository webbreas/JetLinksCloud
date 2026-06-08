import PageLayout from '@/shared/layout/PageLayout';
import Hero from '@/pages/home/sections/Hero';
import Advantages from '@/pages/home/sections/Advantages';
import AI from '@/pages/home/sections/AI';
import IoT from '@/pages/home/sections/IoT';
import Video from '@/pages/home/sections/Video';
import Visualization from '@/pages/home/sections/Visualization';
import Trust from '@/pages/home/sections/Trust';
import SaaSFeatures from '@/shared/sections/SaaSFeatures';
import CTA from '@/shared/sections/CTA';

export default function HomePage() {
  return (
    <PageLayout title="JetLinks">
      <Hero />
      <Advantages />
      <AI />
      <IoT />
      <Video />
      <Visualization />
      <Trust />
      <SaaSFeatures />
      <CTA />
    </PageLayout>
  );
}
