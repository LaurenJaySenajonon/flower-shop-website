'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scrolling while loader is active
    document.body.style.overflow = 'hidden';

    // Set duration for preloader reveal (2 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = '';
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0f172a] select-none overflow-hidden"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute w-[450px] h-[450px] bg-[#f97316]/10 blur-[150px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center px-4">
            
            {/* Minimal Unboxed Logo */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-16 h-16 sm:w-20 sm:h-20 mb-6"
            >
              <Image
                src="/images/Logo.png"
                alt="Mon's Craft Logo"
                fill
                sizes="80px"
                className="object-contain drop-shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                priority
              />
            </motion.div>

            {/* Light High-Fashion Serif Title */}
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl text-white font-light tracking-[0.45em] uppercase mb-1.5"
            >
              MON&apos;S CRAFT
            </motion.h1>

            {/* Subtle Subtitle Tag */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="font-[family-name:var(--font-cantora)] text-[10px] sm:text-xs text-[#f97316] tracking-[0.4em] uppercase mb-10 font-medium"
            >
              Floral Boutique
            </motion.p>

            {/* Ultra-Fine Hairline Progress Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-24 sm:w-32 h-[1px] bg-white/10 relative overflow-hidden"
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 1.5, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
                className="w-full h-full bg-[#f97316] shadow-[0_0_8px_#f97316]"
              />
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}