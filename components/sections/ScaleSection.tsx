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
          {/* Badge */}
          <FadeIn className="text-center mb-4">
            <span className="inline-flex items-center gap-2 text-label-md text-accent-blue uppercase tracking-widest">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H2a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1zM8 11a3 3 0 110-6 3 3 0 010 6z" fill="currentColor"/>
              </svg>
              OPUSCLIP FOR TEAMS
            </span>
          </FadeIn>

          {/* Heading */}
          <ScrollReveal className="text-center mb-6 max-w-[800px] mx-auto">
            <h2 className="text-display-md md:text-display-lg">
              Scale your creative output and maintain brand consistency
            </h2>
          </ScrollReveal>

          {/* Description */}
          <FadeIn delay={0.15} className="text-center mb-12 max-w-[640px] mx-auto">
            <p className="text-body-lg text-text-secondary">
              Empower your entire team to create on-brand content at scale with shared templates, workspaces, and integrations.
            </p>
          </FadeIn>

          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-5">
            {SCALE_FEATURES.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <div className="card-dark group h-full flex flex-col">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 370px"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-heading-md mb-2">{feature.title}</h3>
                    <p className="text-body-sm text-text-secondary flex-1">{feature.description}</p>
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
