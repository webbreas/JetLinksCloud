import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Advantages from '@/components/sections/Advantages';
import SaaSFeatures from '@/components/sections/SaaSFeatures';
import AI from '@/components/sections/AI';
import IoT from '@/components/sections/IoT';
import Video from '@/components/sections/Video';
import Visualization from '@/components/sections/Visualization';
import Trust from '@/components/sections/Trust';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <div className="relative bg-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Advantages />
        <AI />
        <IoT />
        <Video />
        <Visualization />
        <Trust />
        <SaaSFeatures />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
