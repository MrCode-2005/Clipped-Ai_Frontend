'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function LinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 20 20">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.6"
        strokeWidth="1.25"
        d="M11.672 10c0-2.076-1.93-4.164-4.286-4.164H5.958C3.59 5.836 1.672 7.7 1.672 10c0 1.982 1.425 3.64 3.333 4.061q.46.103.953.103"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.6"
        strokeWidth="1.25"
        d="M8.328 10c0 2.076 1.93 4.164 4.286 4.164h1.428c2.367 0 4.286-1.864 4.286-4.165 0-1.982-1.425-3.64-3.333-4.061a4.4 4.4 0 0 0-.953-.103"
      />
    </svg>
  );
}

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [videoLink, setVideoLink] = useState('');

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past ~60% of viewport height
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('#', '_blank');
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="floating-cta"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
          className="fixed bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4"
        >
          <form
            onSubmit={handleSubmit}
            className="pointer-events-auto flex items-center gap-0 bg-[#191919] border border-white/10 rounded-full shadow-[0_8px_40px_rgba(0,0,0,0.6)] overflow-hidden"
            style={{ backdropFilter: 'blur(16px)' }}
          >
            {/* Link icon + input */}
            <div className="flex items-center pl-5 pr-3 py-1 gap-2 flex-1 min-w-[220px]">
              <span className="text-white shrink-0">
                <LinkIcon />
              </span>
              <input
                type="text"
                value={videoLink}
                onChange={(e) => setVideoLink(e.target.value)}
                placeholder="Drop a video link"
                className="bg-transparent border-none outline-none text-white placeholder:text-white/45 text-[15px] font-medium py-[14px] w-full min-w-0"
              />
            </div>

            {/* CTA Button */}
            <button
              type="submit"
              className="bg-white text-black text-[15px] font-semibold px-6 py-[14px] rounded-full mr-1 hover:bg-white/90 transition-colors shrink-0"
            >
              Get free clips
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
