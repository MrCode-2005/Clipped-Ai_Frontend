'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TRUSTED_BY_LOGOS } from '@/lib/constants';

export default function TrustedBy() {
  // Duplicate logos for seamless marquee
  const allLogos = [...TRUSTED_BY_LOGOS, ...TRUSTED_BY_LOGOS];

  return (
    <section className="py-12 md:py-16 overflow-hidden">
      <div className="padding-global">
        <div className="container-1200">
          <p className="text-center text-[#999999] text-[14px] font-medium tracking-[0.05em] mb-8">
            Used by 16M+ creators and businesses
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center gap-12 md:gap-16"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: { duration: 30, repeat: Infinity, ease: 'linear' },
          }}
        >
          {allLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="shrink-0 flex items-center justify-center h-6 md:h-7 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={28}
                className="h-full w-auto object-contain brightness-0 invert"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
