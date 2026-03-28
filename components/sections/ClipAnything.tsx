'use client';

import Image from 'next/image';
import { CLIP_ANYTHING, AI_FEATURES } from '@/lib/constants';
import ScrollReveal from '@/components/animations/ScrollReveal';
import FadeIn from '@/components/animations/FadeIn';

export default function ClipAnything() {
  return (
    <section id="clip-anything" className="section-padding overflow-hidden">
      <div className="padding-global">
        <div className="container-1200">
          {/* Badge */}
          <FadeIn className="text-center mb-4">
            <span className="inline-flex items-center gap-2 text-label-md text-accent-blue uppercase tracking-widest">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1l2.472 4.588L16 6.528l-3.856 3.952L12.944 16 8 13.388 3.056 16l.8-5.52L0 6.528l5.528-.94L8 1z" fill="currentColor" />
              </svg>
              {CLIP_ANYTHING.badge}
            </span>
          </FadeIn>

          {/* Heading */}
          <ScrollReveal className="text-center mb-6 max-w-[800px] mx-auto">
            <h2 className="text-display-md md:text-display-lg">
              {CLIP_ANYTHING.heading}
            </h2>
          </ScrollReveal>

          {/* Description */}
          <FadeIn delay={0.15} className="text-center mb-12 max-w-[640px] mx-auto">
            <p className="text-body-lg text-text-secondary">
              {CLIP_ANYTHING.description}
            </p>
          </FadeIn>

          {/* Main feature image */}
          <ScrollReveal className="mb-16">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-background-secondary border border-border">
              <div className="aspect-[16/9] relative">
                <Image
                  src={CLIP_ANYTHING.image}
                  alt="ClipAnything AI video understanding"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
                  priority
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Sub-features grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {AI_FEATURES.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <div className="card-dark group">
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 550px"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-heading-lg mb-2">{feature.title}</h3>
                    <p className="text-body-md text-text-secondary">{feature.description}</p>
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
