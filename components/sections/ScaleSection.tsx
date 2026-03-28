'use client';

import Image from 'next/image';
import { SCALE_FEATURES } from '@/lib/constants';
import ScrollReveal from '@/components/animations/ScrollReveal';
import FadeIn from '@/components/animations/FadeIn';

export default function ScaleSection() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="padding-global">
        <div className="container-1200">
          {/* Heading */}
          <ScrollReveal className="text-center mb-6 max-w-[800px] mx-auto">
            <h2 className="text-[40px] md:text-[56px] font-bold leading-[1.1] tracking-tight">
              Scale your creative output and business without scaling overhead
            </h2>
          </ScrollReveal>

          {/* Description */}
          <FadeIn delay={0.15} className="text-center mb-16 max-w-[700px] mx-auto">
            <p className="text-[17px] leading-[1.6] text-[#999999]">
              Every business is becoming video-first. OpusClip helps your brand stay top of mind.
            </p>
          </FadeIn>

          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {SCALE_FEATURES.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <div className="rounded-2xl md:rounded-[32px] overflow-hidden bg-[#111] group h-full flex flex-col border border-white/5 relative">
                  <div className="aspect-[4/3] relative overflow-hidden bg-[#1a1a1a]">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 370px"
                    />
                    <div className="absolute inset-0 border border-white/5 rounded-[inherit]" />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-[24px] font-bold mb-3 tracking-tight">{feature.title}</h3>
                    <p className="text-[16px] leading-[1.6] text-[#999999] flex-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
