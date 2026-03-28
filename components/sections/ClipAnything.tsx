'use client';

import { CLIP_ANYTHING } from '@/lib/constants';
import ScrollReveal from '@/components/animations/ScrollReveal';
import FadeIn from '@/components/animations/FadeIn';
import { useState } from 'react';

export default function ClipAnything() {
  const [activeTab, setActiveTab] = useState(CLIP_ANYTHING.tabs[0]);

  return (
    <section id="clip-anything" className="py-20 md:py-32 overflow-hidden bg-background">
      <div className="padding-global">
        <div className="container-1200">
          
          {/* Heading */}
          <ScrollReveal className="text-center mb-10 max-w-[800px] mx-auto">
            <h2 className="text-[40px] md:text-[56px] font-bold leading-[1.1] tracking-tight">
              {CLIP_ANYTHING.heading}
            </h2>
          </ScrollReveal>

          {/* Interactive Tabs */}
          <FadeIn delay={0.1} className="flex flex-wrap justify-center gap-3 mb-16">
            {CLIP_ANYTHING.tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-[15px] font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-white text-black'
                    : 'bg-[#1a1a1a] text-[#808080] hover:text-white border border-[#333333]'
                }`}
              >
                {tab}
              </button>
            ))}
          </FadeIn>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {CLIP_ANYTHING.features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1} className="flex flex-col">
                <div className="rounded-2xl lg:rounded-[32px] overflow-hidden mb-8 aspect-[4/3] bg-[#111] relative group flex-1">
                  <video
                    src={feature.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 border border-white/10 rounded-[inherit] pointer-events-none" />
                </div>
                <div className="px-2">
                  <h3 className="text-[28px] font-bold mb-4 tracking-tight">{feature.title}</h3>
                  <p className="text-[16px] leading-[1.6] text-[#999999]">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
