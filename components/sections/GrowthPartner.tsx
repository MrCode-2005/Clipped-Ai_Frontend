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
          {/* Heading */}
          <ScrollReveal className="text-center mb-6 max-w-[800px] mx-auto">
            <h2 className="text-[40px] md:text-[56px] font-bold leading-[1.1] tracking-tight">
              The only AI editor that actually drives growth. Just ask millions of creators and brands.
            </h2>
          </ScrollReveal>
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
