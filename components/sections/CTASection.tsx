'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function CTASection() {
  return (
    <section id="cta" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Video/Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1125] to-[#0A0A0A] pointer-events-none -z-10" />

      <div className="padding-global relative z-10">
        <div className="container-1200">
          <div className="text-center max-w-[600px] mx-auto">
            <ScrollReveal>
              <h2 className="text-[40px] md:text-[56px] font-bold leading-[1.1] mb-6 tracking-tight">
                Get started with<br/>OpusClip
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-[17px] leading-[1.6] text-[#999999] mb-10">
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
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold tracking-wide hover:bg-white/90 transition-colors duration-200"
                >
                  Get 90 Credits for Free
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                    <path d="M3.333 8h9.334M8 3.333L12.667 8 8 12.667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-[13px] text-[#999999] mt-6">
                No credit card required
              </p>
            </ScrollReveal>

            {/* Trust badge */}
            <ScrollReveal delay={0.35}>
              <div className="flex items-center justify-center gap-3 mt-4">
                {/* 5 stars */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 1l2.163 4.383L15 6.056l-3.5 3.412.826 4.818L8 12.056l-4.326 2.23.826-4.818L1 6.056l4.837-.673L8 1z" fill="#d4a853"/>
                    </svg>
                  ))}
                </div>
                <span className="text-[13px] text-[#999999]">
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
