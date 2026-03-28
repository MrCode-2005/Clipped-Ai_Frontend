'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/animations/ScrollReveal';

// ── Tab 1: Creator quotes ──────────────────────────────────────────────────
const CREATOR_QUOTES = [
  {
    quote: '"It used to take days to create clips. Now it takes us minutes to create them."',
    name: 'Lewis Howes',
    photo: 'https://cdn.prod.website-files.com/6388604483b03a9ecb34d695/684fcd8cc0570d55089db321_Lewis%20Howes.avif',
  },
  {
    quote: '"The only AI tool that I\'ve found helpful so far is OpusClip. It can do something that I don\'t have time to do. I\'m a super fan."',
    name: 'Jason Lemkin',
    photo: 'https://cdn.prod.website-files.com/6388604483b03a9ecb34d695/684fcee619f9388091839f0c_Jason%20Lemkin.avif',
  },
  {
    quote: '"Opusclip has been crucial in helping me upload more short form videos. I get to throw more things at the wall to see what sticks, rather than waste time editing a short that underperforms. It\'s a no-brainer for anyone aiming to convert their long, wide form videos to vertical shorts."',
    name: 'Jacksfilms',
    photo: 'https://cdn.prod.website-files.com/6388604483b03a9ecb34d695/684fcee6a0d5ba51a3be55b6_Jacksfilms.avif',
  },
  {
    quote: '"We love YT shorts\' massive reach but hate its revenue - that\'s why we use OpusClip to bring the cost down."',
    name: 'WildBrain',
    photo: 'https://cdn.prod.website-files.com/6388604483b03a9ecb34d695/684fcee662b5bcf08a3b3b0e_5fc6f5f576adf69310b463662da38b61_WildBrain.avif',
  },
];

// ── Tab 2: Growth cards ────────────────────────────────────────────────────
const GROWTH_CARDS = [
  {
    quote: '"I see an increase of 266% for YouTube\'s shown-in-feed. It also helped me discover my niche."',
    image: 'https://cdn.prod.website-files.com/6388604483b03a9ecb34d695/676992bb60fd460062b648e8_Karen%20V.%20Kitt%2C%20M.Ed.%20(K)%20thumb.avif',
    channel: 'Karen V. Kitt, M.Ed.',
    fullImage: '/images/testimonial-karen.avif',
  },
  {
    quote: '"Watch time increased by 57%. There has been an increase across the board."',
    image: 'https://cdn.prod.website-files.com/6388604483b03a9ecb34d695/676992bb189d5ad8550adbf6_jraahpodcast%20thumb.avif',
    channel: 'JRAAH Podcast',
    fullImage: '/images/testimonial-jraahpodcast.avif',
  },
  {
    quote: '"The percentage of those that watch the whole video has increased from 1-3% to 12+%."',
    image: 'https://cdn.prod.website-files.com/6388604483b03a9ecb34d695/676992bbfe0f78834a374783_veteransarchives%20thumb.avif',
    channel: 'Veterans Archives',
    fullImage: '/images/testimonial-veteransarchives.avif',
  },
  {
    quote: '"Some OpusClip videos were the top performing ones on our YouTube and TikTok. On average, our views have gone up 2x in the last few months."',
    image: 'https://cdn.prod.website-files.com/6388604483b03a9ecb34d695/676992bba3806ab4ec514607_Wake%20Up%20Warrior%20thumb.avif',
    channel: 'Wake Up Warrior',
    fullImage: '/images/testimonial-wakeupwarrior.avif',
  },
  {
    quote: '"Increased my watch time by over 40%, and I tend to gain more subscribers due to my clips versus my long form content."',
    image: 'https://cdn.prod.website-files.com/6388604483b03a9ecb34d695/676992bbb40595983c710744_Closeted%20Kicks%20Convos%20thumb.avif',
    channel: 'Closeted Kicks Convos',
    fullImage: '/images/testimonial-closetedkicks.avif',
  },
];

// ── Creators Carousel (Tab 1) ──────────────────────────────────────────────
function CreatorsCarousel() {
  const doubled = [...CREATOR_QUOTES, ...CREATOR_QUOTES];

  return (
    <div className="relative overflow-hidden mt-8" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 80px, black calc(100% - 80px), transparent 100%)' }}>
      <motion.div
        className="flex gap-5 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ x: { duration: 38, repeat: Infinity, ease: 'linear' } }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="shrink-0 w-[280px] md:w-[340px] rounded-[20px] bg-[#111111] border border-white/[0.08] p-6 flex flex-col justify-between gap-8"
            style={{ minHeight: 220 }}
          >
            <blockquote className="text-[15px] md:text-[16px] leading-[1.55] text-white/90 font-normal">
              {item.quote}
            </blockquote>
            <div className="flex items-center justify-between gap-3">
              <span className="text-[14px] font-semibold text-white">{item.name}</span>
              <div className="relative w-[48px] h-[48px] shrink-0">
                <Image
                  src={item.photo}
                  alt={item.name}
                  fill
                  sizes="48px"
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ── Growth Carousel (Tab 2) ────────────────────────────────────────────────
function GrowthCarousel() {
  const doubled = [...GROWTH_CARDS, ...GROWTH_CARDS];

  return (
    <div className="relative overflow-hidden mt-8" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 80px, black calc(100% - 80px), transparent 100%)' }}>
      <motion.div
        className="flex gap-5 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ x: { duration: 44, repeat: Infinity, ease: 'linear' } }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="shrink-0 w-[260px] md:w-[300px] rounded-[20px] bg-[#111111] border border-white/[0.08] overflow-hidden"
          >
            <div className="p-5 flex flex-col gap-4">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                <Image
                  src={item.fullImage}
                  alt={item.channel}
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>
              <p className="text-[13px] md:text-[14px] leading-[1.5] text-white/80">
                {item.quote}
              </p>
            </div>
            <div className="px-5 pb-5">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.channel}
                    fill
                    sizes="32px"
                    className="rounded-full object-cover"
                  />
                </div>
                <span className="text-[13px] font-semibold text-white">{item.channel}</span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ── Main Section ───────────────────────────────────────────────────────────
export default function GrowthPartner() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['From top creators', 'User growth chart'];

  return (
    <section className="py-20 md:py-32 overflow-hidden bg-background">
      <div className="padding-global">
        <div className="container-1200">
          {/* Header */}
          <ScrollReveal className="flex flex-col items-start text-left mb-8 md:mb-10">
            <h2 className="text-[32px] md:text-[48px] lg:text-[52px] font-bold leading-[1.1] tracking-tight mb-4 max-w-[620px]">
              A partner to your growth
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#A1A1AA] max-w-[540px]">
              The only AI editor that actually drives growth. Just ask millions of creators and brands.
            </p>
          </ScrollReveal>

          {/* Tabs */}
          <div className="flex items-center gap-0 border-b border-white/10 mb-0">
            {tabs.map((tab, idx) => (
              <button
                key={tab}
                onClick={() => setActiveTab(idx)}
                className={`relative px-0 mr-8 pb-3 text-[15px] font-medium transition-colors duration-200 ${
                  activeTab === idx ? 'text-white' : 'text-[#666666] hover:text-white/70'
                }`}
              >
                {tab}
                {activeTab === idx && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel (full-bleed) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="w-full px-6 md:px-16 lg:px-24"
        >
          {activeTab === 0 ? <CreatorsCarousel /> : <GrowthCarousel />}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
