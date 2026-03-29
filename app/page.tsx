import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import ClipAnything from '@/components/sections/ClipAnything';
import Autopilot from '@/components/sections/Autopilot';
import AIEditor from '@/components/sections/AIEditor';
import ScaleSection from '@/components/sections/ScaleSection';
import FAQ from '@/components/sections/FAQ';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/layout/CookieBanner';
import FloatingCTA from '@/components/ui/FloatingCTA';
import SharedLayoutProvider from '@/components/animations/SharedLayoutProvider';

export default function HomePage() {
  return (
    <SharedLayoutProvider>
      <Navbar />
      <main>
        <Hero />
        <ClipAnything />
        <Autopilot />
        <AIEditor />
        <ScaleSection />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <CookieBanner />
      <FloatingCTA />
    </SharedLayoutProvider>
  );
}
