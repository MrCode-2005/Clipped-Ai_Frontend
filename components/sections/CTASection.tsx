'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function CTASection() {
  return (
    <section id="cta" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-blue-glow pointer-events-none" />

      <div className="padding-global relative z-10">
        <div className="container-1200">
          <div className="text-center max-w-[600px] mx-auto">
            <ScrollReveal>
              <h2 className="text-display-md md:text-display-lg mb-6">
                Get started with OpusClip
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-body-lg text-text-secondary mb-10">
                Turn your long videos into viral shorts. Start creating for free today.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="#"
                  className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2
                           shadow-glow-md hover:shadow-glow-lg transition-shadow duration-300"
                >
                  Get 90 Credits for Free →
                </Link>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-body-sm text-text-muted mt-4">
                No credit card required
              </p>
            </ScrollReveal>

            {/* Trust badge */}
            <ScrollReveal delay={0.35}>
              <div className="flex items-center justify-center gap-2 mt-6">
                {/* 5 stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 1l2.163 4.383L15 6.056l-3.5 3.412.826 4.818L8 12.056l-4.326 2.23.826-4.818L1 6.056l4.837-.673L8 1z" fill="#d4a853"/>
                    </svg>
                  ))}
                </div>
                <span className="text-body-sm text-text-muted">
                  Trusted by 12 million video creators
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
