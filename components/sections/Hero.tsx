'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { HERO_CONTENT, CREATOR_LOGOS } from '@/lib/constants';
import FadeIn from '@/components/animations/FadeIn';

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
            <span className="text-[11px] font-bold text-[#eab308] uppercase tracking-[0.2em]">
              {HERO_CONTENT.badge}
            </span>
          </FadeIn>

          {/* Main Heading */}
          <FadeIn delay={0.1} className="text-center mb-6 max-w-[1000px] mx-auto">
            <h1 className="text-[40px] md:text-[64px] lg:text-[72px] font-extrabold leading-[1.05] tracking-tight">
              {HERO_CONTENT.heading}
            </h1>
          </FadeIn>

          {/* Subheading */}
          <FadeIn delay={0.2} className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="text-[18px] md:text-[20px] text-white/60 leading-relaxed font-medium">
              {HERO_CONTENT.subheading}
            </p>
          </FadeIn>

          {/* CTA Area */}
          <FadeIn delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
            {/* Video link input + Get free clips */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center bg-[#131313] border border-white/5 rounded-full
                         overflow-hidden w-full sm:w-auto max-w-[680px] flex-1
                         focus-within:border-white/20 focus-within:shadow-glow-sm
                         transition-all duration-300 shadow-2xl"
            >
              <div className="flex items-center pl-7 pr-2 py-1 flex-1">
                <LinkIcon />
                <input
                  type="text"
                  value={videoLink}
                  onChange={(e) => setVideoLink(e.target.value)}
                  placeholder={HERO_CONTENT.inputPlaceholder}
                  className="bg-transparent border-none outline-none text-white placeholder:text-white/30
                             text-[16px] w-full min-w-[260px] py-[18px] ml-4 font-medium"
                />
              </div>
              <button
                type="submit"
                className="bg-white text-black hover:bg-white/90 transition-colors rounded-full px-8 py-[14px] text-[16px] font-bold shrink-0
                           mr-2 my-2"
              >
                {HERO_CONTENT.ctaPrimary}
              </button>
            </form>

            {/* Separator */}
            <span className="text-text-muted text-sm hidden sm:block">or</span>

            {/* Upload files button */}
            <button className="btn-outline rounded-full px-6 py-3 text-[16px] font-medium w-full sm:w-auto">
              {HERO_CONTENT.ctaSecondary}
            </button>
          </FadeIn>

          {/* Hero Video/Image showcase */}
          <FadeIn delay={0.4}>
            <div className="relative max-w-[1100px] mx-auto">
              {/* Main showcase area */}
              <div className="relative rounded-2xl overflow-hidden bg-background-secondary border border-border
                            aspect-[16/9] flex items-center justify-center">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
                
                {/* Placeholder visual - dark editor-like interface */}
                <div className="relative w-full h-full bg-gradient-to-br from-background-secondary to-background flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5v14l11-7L8 5z" fill="white"/>
                      </svg>
                    </div>
                    <p className="text-text-muted text-sm">AI-powered video editor</p>
                  </div>
                </div>
              </div>

              {/* Floating thumbnail cards */}
              <div className="flex gap-3 mt-4 overflow-x-auto hide-scrollbar pb-2 px-1">
                {CREATOR_LOGOS.map((creator, index) => (
                  <motion.div
                    key={creator.name}
                    className="shrink-0 w-[120px] md:w-[140px]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-background-secondary border border-border
                                  hover:border-border-light transition-all duration-300 cursor-pointer group">
                      <Image
                        src={creator.src}
                        alt={creator.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="140px"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                        <p className="text-[0.625rem] text-white/80 truncate">{creator.name}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
