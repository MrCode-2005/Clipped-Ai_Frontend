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

// ===========================================================================
// OJT VIVA EXPLANATION: HomePage Component
// ---------------------------------------------------------------------------
// 1. This is the root page component for the Next.js App Router (located in app/page.tsx).
// 2. It serves as the main entry point for our Opus Pro clone landing page.
// 3. It imports and stacks various section components logically (Hero -> ClipAnything -> etc).
// 4. The entire page is wrapped in <SharedLayoutProvider> which likely provides Framer Motion
//    context (like LayoutGroup) for fluid animations across components.
// ===========================================================================
export default function HomePage() {
  return (
    <SharedLayoutProvider>
      {/* 1. Global Navigation Bar fixed to the top */}
      <Navbar />
      
      {/* 2. Main content wrapper combining all landing page sections */}
      <main>
        {/* Hero section with video input and carousel */}
        <Hero />
        {/* Feature section focusing on 'ClipAnything' & 'ReframeAnything' */}
        <ClipAnything />
        <Autopilot />
        <AIEditor />
        {/* <ScaleSection /> */}
        <FAQ />
        <CTASection />
      </main>

      {/* 3. Global Footer Component */}
      <Footer />
      {/* 4. Overlay components that sit on top of the DOM flow */}
      <CookieBanner />
      <FloatingCTA />
    </SharedLayoutProvider>
  );
}
