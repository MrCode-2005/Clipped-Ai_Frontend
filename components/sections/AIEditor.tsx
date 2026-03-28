'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/animations/ScrollReveal';
import FadeIn from '@/components/animations/FadeIn';

function PlayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M8 5v14l11-7L8 5z" fill="currentColor" opacity="0.6"/>
    </svg>
  );
}

function WaveformBar({ height, delay }: { height: number; delay: number }) {
  return (
    <motion.div
      className="w-[3px] rounded-full bg-accent-blue/60"
      style={{ height: `${height}%` }}
      animate={{ scaleY: [1, 0.5, 1] }}
      transition={{ duration: 1.2, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
  );
}

export default function AIEditor() {
  const tools = [
    { name: 'AI Hook', icon: '🪝', color: 'from-amber-500/20 to-amber-600/5' },
    { name: 'B-Roll', icon: '🎬', color: 'from-purple-500/20 to-purple-600/5' },
    { name: 'Music', icon: '🎵', color: 'from-blue-500/20 to-blue-600/5' },
    { name: 'Captions', icon: '💬', color: 'from-green-500/20 to-green-600/5' },
  ];

  const timelineSegments = [
    { width: '12%', color: 'bg-amber-500/30' },
    { width: '8%', color: 'bg-white/10' },
    { width: '15%', color: 'bg-purple-500/30' },
    { width: '6%', color: 'bg-white/10' },
    { width: '18%', color: 'bg-blue-500/30' },
    { width: '10%', color: 'bg-white/10' },
    { width: '14%', color: 'bg-green-500/30' },
    { width: '8%', color: 'bg-white/10' },
    { width: '9%', color: 'bg-accent-blue/30' },
  ];

  return (
    <section className="section-padding overflow-hidden">
      <div className="padding-global">
        <div className="container-1200">
          {/* Badge */}
          <FadeIn className="text-center mb-4">
            <span className="inline-flex items-center gap-2 text-label-md text-accent-blue uppercase tracking-widest">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 2h-11A1.5 1.5 0 001 3.5v9A1.5 1.5 0 002.5 14h11a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0013.5 2zM5 12H3V8h2v4zm3 0H6V4h2v8zm3 0H9V6h2v6z" fill="currentColor"/>
              </svg>
              AI EDITOR
            </span>
          </FadeIn>

          {/* Heading */}
          <ScrollReveal className="text-center mb-6 max-w-[800px] mx-auto">
            <h2 className="text-display-md md:text-display-lg">
              AI that edits with you, not just for you
            </h2>
          </ScrollReveal>

          {/* Description */}
          <FadeIn delay={0.15} className="text-center mb-12 max-w-[640px] mx-auto">
            <p className="text-body-lg text-text-secondary">
              Fine-tune your clips with our intelligent editor. Add AI hooks, B-roll, music, and captions — all powered by AI that understands your content.
            </p>
          </FadeIn>

          {/* Editor mockup */}
          <ScrollReveal>
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-background-secondary border border-border">
              <div className="relative">
                {/* Editor UI */}
                <div className="bg-gradient-to-br from-[#0f0f12] to-[#0a0a0e] p-3 md:p-5 lg:p-6">
                  {/* Top bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/60" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                        <div className="w-3 h-3 rounded-full bg-green-500/60" />
                      </div>
                      <div className="hidden md:flex items-center gap-2 text-[0.6875rem] text-text-muted">
                        <span className="px-2 py-1 rounded bg-white/5">File</span>
                        <span className="px-2 py-1 rounded bg-white/5">Edit</span>
                        <span className="px-2 py-1 rounded bg-white/5">Export</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[0.6875rem] text-text-muted hidden md:block">my-podcast-ep42.mp4</span>
                      <div className="w-6 h-6 rounded bg-accent-blue/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-sm bg-accent-blue" />
                      </div>
                    </div>
                  </div>

                  {/* Main editor content */}
                  <div className="flex gap-3 md:gap-4">
                    {/* Video preview area */}
                    <div className="flex-1 relative">
                      <div className="aspect-[9/16] max-h-[320px] md:max-h-[400px] mx-auto bg-gradient-to-b from-white/[0.03] to-white/[0.01] rounded-xl border border-white/[0.06] flex items-center justify-center relative overflow-hidden">
                        {/* Video content mockup */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
                        
                        {/* Caption overlay */}
                        <div className="absolute bottom-6 left-3 right-3">
                          <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
                            <p className="text-[0.6875rem] md:text-xs text-white font-medium leading-snug">
                              &ldquo;The key to going viral is understanding what makes people{' '}
                              <span className="text-accent-gold">stop scrolling</span>&rdquo;
                            </p>
                          </div>
                        </div>

                        {/* Play button */}
                        <motion.div
                          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 cursor-pointer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <PlayIcon />
                        </motion.div>

                        {/* Time indicator */}
                        <div className="absolute top-3 right-3 text-[0.625rem] text-white/50 bg-black/40 px-2 py-1 rounded">
                          0:42 / 1:18
                        </div>
                      </div>
                    </div>

                    {/* Right sidebar - Tools */}
                    <div className="w-[80px] md:w-[120px] space-y-2">
                      {tools.map((tool, index) => (
                        <motion.div
                          key={tool.name}
                          className={`bg-gradient-to-b ${tool.color} rounded-xl p-2 md:p-3 flex flex-col items-center gap-1
                                     border border-white/[0.06] cursor-pointer hover:border-white/[0.12] transition-colors`}
                          whileHover={{ scale: 1.02 }}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-lg">{tool.icon}</span>
                          <span className="text-[0.5625rem] md:text-[0.625rem] text-text-muted font-medium">{tool.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Timeline section */}
                  <div className="mt-4 space-y-2">
                    {/* Timeline controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[0.625rem] text-text-muted">
                        <PlayIcon />
                        <span>00:00</span>
                        <span className="text-white/20">/</span>
                        <span>01:18</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {['Split', 'Undo', 'Zoom'].map((action) => (
                          <span key={action} className="text-[0.5625rem] text-text-muted px-2 py-1 rounded bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">
                            {action}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Waveform */}
                    <div className="h-10 bg-white/[0.02] rounded-lg border border-white/[0.04] flex items-center justify-center gap-[2px] px-2 overflow-hidden">
                      {Array.from({ length: 60 }).map((_, i) => (
                        <WaveformBar
                          key={i}
                          height={20 + Math.sin(i * 0.5) * 40 + Math.random() * 30}
                          delay={i * 0.02}
                        />
                      ))}
                    </div>

                    {/* Timeline tracks */}
                    <div className="space-y-1">
                      {/* Video track */}
                      <div className="h-8 bg-white/[0.02] rounded-md flex overflow-hidden border border-white/[0.04]">
                        {timelineSegments.map((segment, i) => (
                          <div
                            key={i}
                            className={`${segment.color} border-r border-white/[0.04] last:border-r-0 transition-colors hover:brightness-125 cursor-pointer`}
                            style={{ width: segment.width }}
                          />
                        ))}
                      </div>
                      {/* Caption track */}
                      <div className="h-5 bg-white/[0.02] rounded-md flex items-center border border-white/[0.04] overflow-hidden">
                        <div className="bg-green-500/15 h-full rounded-sm flex items-center px-2" style={{ width: '60%', marginLeft: '10%' }}>
                          <span className="text-[0.5rem] text-green-400/70 truncate">Captions</span>
                        </div>
                      </div>
                      {/* Music track */}
                      <div className="h-5 bg-white/[0.02] rounded-md flex items-center border border-white/[0.04] overflow-hidden">
                        <div className="bg-blue-500/15 h-full rounded-sm flex items-center px-2" style={{ width: '90%', marginLeft: '2%' }}>
                          <span className="text-[0.5rem] text-blue-400/70 truncate">♫ Chill Beats - Lo-fi</span>
                        </div>
                      </div>
                    </div>

                    {/* Playhead */}
                    <motion.div
                      className="relative h-0"
                      style={{ marginTop: '-76px' }}
                    >
                      <motion.div
                        className="absolute top-0 w-px h-[76px] bg-red-500 z-10"
                        style={{ left: '35%' }}
                      >
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-sm" />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
