'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TESTIMONIALS } from '@/lib/constants';
import ScrollReveal from '@/components/animations/ScrollReveal';
import FadeIn from '@/components/animations/FadeIn';

export default function GrowthPartner() {
  // Double for marquee
  const allTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="section-padding overflow-hidden">
      <div className="padding-global">
        <div className="container-1200">
          {/* Badge */}
          <FadeIn className="text-center mb-4">
            <span className="inline-flex items-center gap-2 text-label-md text-accent-blue uppercase tracking-widest">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1L1 5l7 4 7-4-7-4zM1 11l7 4 7-4M1 8l7 4 7-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              CUSTOMER STORIES
            </span>
          </FadeIn>

          {/* Heading */}
          <ScrollReveal className="text-center mb-6 max-w-[800px] mx-auto">
            <h2 className="text-display-md md:text-display-lg">
              A partner to your growth
            </h2>
          </ScrollReveal>

          <FadeIn delay={0.15} className="text-center mb-12 max-w-[640px] mx-auto">
            <p className="text-body-lg text-text-secondary">
              See how creators are earning 10M+ views in 1 month using video clipping
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Testimonials marquee */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-5 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: { duration: 40, repeat: Infinity, ease: 'linear' },
          }}
        >
          {allTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="shrink-0 w-[300px] md:w-[380px]"
            >
              <div className="card-dark group overflow-hidden">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    sizes="380px"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <p className="text-body-sm text-white/90 mb-3 leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <p className="text-body-xs text-white/60 font-medium">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
