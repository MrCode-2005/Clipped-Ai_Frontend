'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { HERO_CONTENT, CREATOR_LOGOS } from '@/lib/constants';
import FadeIn from '@/components/animations/FadeIn';
import HeroCarousel from '@/components/ui/HeroCarousel';

function LinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" className="text-text-muted">
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

export default function Hero() {
  const [videoLink, setVideoLink] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (videoLink) {
      window.open(`#?video_link=${encodeURIComponent(videoLink)}`, '_blank');
    } else {
      window.open('#', '_blank');
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-accent-blue/5 via-transparent to-transparent pointer-events-none" />

      <div className="padding-global">
        <div className="container-1200 pt-16 md:pt-24 lg:pt-32 pb-8 md:pb-12">
          {/* Badge */}
          <FadeIn className="text-center mb-6">
            <span className="text-[12px] md:text-[14px] font-bold uppercase tracking-[0.1em] text-white">
              <span className="text-[#d4a853]">#1</span> AI VIDEO CLIPPING TOOL
            </span>
          </FadeIn>

          {/* Main Heading */}
          <FadeIn delay={0.1} className="text-center mb-6 max-w-[1000px] mx-auto">
            <h1 className="text-[44px] sm:text-[56px] md:text-[72px] lg:text-[80px] font-bold leading-[1.05] tracking-tight text-white px-4">
              {HERO_CONTENT.heading}
            </h1>
          </FadeIn>

          {/* Subheading */}
          <FadeIn delay={0.2} className="text-center mb-10 max-w-[700px] mx-auto">
            <p className="text-[16px] md:text-[20px] text-[#D1D1D1] leading-[1.6] font-normal px-4">
              {HERO_CONTENT.subheading}
            </p>
          </FadeIn>

          {/* CTA Area */}
          <FadeIn delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 px-4">
            {/* Video link input + Get free clips */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center bg-[#1C1C1C] rounded-full
                         overflow-hidden w-full sm:w-auto flex-1 max-w-[500px]
                         transition-all duration-300"
            >
              <div className="flex items-center pl-6 pr-2 py-1 flex-1">
                <LinkIcon />
                <input
                  type="text"
                  value={videoLink}
                  onChange={(e) => setVideoLink(e.target.value)}
                  placeholder="Drop a video link"
                  className="bg-transparent border-none outline-none text-white placeholder:text-white/50
                             text-[16px] w-full py-[16px] ml-3 font-medium"
                />
              </div>
            </form>

            <button
              onClick={handleSubmit}
              className="bg-white text-black hover:bg-white/90 transition-colors rounded-full px-8 py-[16px] text-[16px] font-semibold shrink-0 w-full sm:w-auto"
            >
              Get free clips
            </button>

            {/* Separator */}
            <span className="text-white/60 text-[16px] font-normal mx-2 hidden sm:block">or</span>

            {/* Upload files button */}
            <button className="rounded-full px-8 py-[15px] text-[16px] font-medium w-full sm:w-auto text-white border border-white/20 hover:bg-white/5 transition-colors">
              Upload files
            </button>
          </FadeIn>

          {/* Hero Video/Image showcase */}
          <FadeIn delay={0.4}>
            <div className="relative max-w-[1400px] mx-auto mt-10">
              <HeroCarousel />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
