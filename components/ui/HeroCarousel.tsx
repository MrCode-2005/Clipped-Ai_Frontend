'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const carouselItems = [
  { id: 1, type: 'video', src: '/assets/animation/animation.mov' },
  { id: 2, type: 'video', src: '/assets/videos/video1.mp4' },
  { id: 3, type: 'video', src: '/assets/videos/video2.mp4' },
  { id: 4, type: 'image', src: '/assets/images/image1.png' },
  { id: 5, type: 'image', src: '/assets/images/image2.png' },
  { id: 6, type: 'image', src: '/assets/images/image3.png' },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const renderMedia = (item: typeof carouselItems[0]) => {
    if (item.type === 'video') {
      return (
        <video
          src={item.src}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      );
    }
    return (
      <Image
        src={item.src}
        alt={`Carousel Item ${item.id}`}
        fill
        className="object-cover"
      />
    );
  };

  return (
    <div className="relative w-full max-w-[1400px] mx-auto overflow-hidden px-4 md:px-0 py-10">
      
      {/* Container holding the carousel tracks */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] flex items-center justify-center">
        <AnimatePresence initial={false}>
          {carouselItems.map((item, index) => {
            // Determine relative position (-1, 0, 1)
            let offset = index - currentIndex;
            if (offset < -1) offset += carouselItems.length;
            if (offset > 1) offset -= carouselItems.length;

            // Only render -1, 0, 1 for performance
            if (Math.abs(offset) > 1) return null;

            return (
              <motion.div
                key={item.id}
                className="absolute w-full max-w-[1000px] aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-[#1C1C1C]"
                initial={{ 
                  x: offset * 100 + '%', 
                  scale: offset === 0 ? 1 : 0.85,
                  opacity: offset === 0 ? 1 : 0.4
                }}
                animate={{
                  x: `${offset * 75}%`, // overlap cards slightly
                  scale: offset === 0 ? 1 : 0.85,
                  opacity: offset === 0 ? 1 : 0.4,
                  zIndex: offset === 0 ? 20 : 10,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
              >
                {renderMedia(item)}
                
                {/* Dark overlay for inactive slides to make them recede visually */}
                {offset !== 0 && (
                  <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-8 z-30">
        <button
          onClick={handlePrev}
          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black/50 hover:bg-white/10 text-white rounded-full backdrop-blur-md transition-colors border border-white/10"
          aria-label="Previous Slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-8 z-30">
        <button
          onClick={handleNext}
          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black/50 hover:bg-white/10 text-white rounded-full backdrop-blur-md transition-colors border border-white/10"
          aria-label="Next Slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

    </div>
  );
}
