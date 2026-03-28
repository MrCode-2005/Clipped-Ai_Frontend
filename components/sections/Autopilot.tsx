'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/animations/ScrollReveal';
import FadeIn from '@/components/animations/FadeIn';

export default function Autopilot() {
  return (
    <section className="py-20 md:py-32 overflow-hidden bg-background">
      <div className="padding-global">
        <div className="container-1200">
          
          {/* Heading */}
          <ScrollReveal className="text-center mb-6 max-w-[800px] mx-auto">
            <h2 className="text-[40px] md:text-[56px] font-bold leading-[1.1] tracking-tight">
              Your video creation process — now on autopilot
            </h2>
          </ScrollReveal>

          {/* Description */}
          <FadeIn delay={0.15} className="text-center mb-16 max-w-[700px] mx-auto">
            <p className="text-[17px] leading-[1.6] text-[#999999]">
              Create and publish videos 5x faster with OpusClip's web app and API, so you can go on vacation and still keep your content rolling.
            </p>
          </FadeIn>

          {/* Workflow image/cards */}
          <ScrollReveal>
            <div className="relative rounded-2xl md:rounded-[32px] overflow-hidden bg-gradient-to-br from-[#1c1615] via-[#2a2220] to-[#1c1615] border border-white/5">
              <div className="aspect-[16/7] relative w-full">
                <Image
                  src="/images/workflow.avif"
                  alt="OpusClip Autopilot Workflow"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
