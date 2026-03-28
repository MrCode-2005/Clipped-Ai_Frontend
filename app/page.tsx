import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import TrustedBy from '@/components/sections/TrustedBy';
import ClipAnything from '@/components/sections/ClipAnything';
import Autopilot from '@/components/sections/Autopilot';
import AIEditor from '@/components/sections/AIEditor';
import ScaleSection from '@/components/sections/ScaleSection';
import GrowthPartner from '@/components/sections/GrowthPartner';
import FAQ from '@/components/sections/FAQ';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/layout/CookieBanner';
import FloatingCTA from '@/components/ui/FloatingCTA';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <ClipAnything />
        <Autopilot />
        <AIEditor />
        <ScaleSection />
        <GrowthPartner />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <CookieBanner />
      <FloatingCTA />
    </>
  );
}
