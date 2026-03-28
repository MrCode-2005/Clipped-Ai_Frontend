'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/animations/ScrollReveal';
import FadeIn from '@/components/animations/FadeIn';

export default function Autopilot() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="padding-global">
        <div className="container-1200">
          {/* Badge */}
          <FadeIn className="text-center mb-4">
            <span className="inline-flex items-center gap-2 text-label-md text-accent-blue uppercase tracking-widest">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.5 8.5h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3a.5.5 0 011 0v3h3a.5.5 0 010 1z" fill="currentColor"/>
              </svg>
              AUTOPILOT
            </span>
          </FadeIn>

          {/* Heading */}
          <ScrollReveal className="text-center mb-6 max-w-[800px] mx-auto">
            <h2 className="text-display-md md:text-display-lg">
              Your video creation process now on autopilot
            </h2>
          </ScrollReveal>

          {/* Description */}
          <FadeIn delay={0.15} className="text-center mb-12 max-w-[640px] mx-auto">
            <p className="text-body-lg text-text-secondary">
              Set your preferences once, and let OpusClip automatically create optimized clips from every video you upload.
            </p>
          </FadeIn>

          {/* Workflow image */}
          <ScrollReveal>
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-background-secondary border border-border">
              <div className="aspect-[16/9] relative">
                <Image
                  src="/images/workflow.avif"
                  alt="OpusClip Autopilot Workflow"
                  fill
                  className="object-cover"
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
