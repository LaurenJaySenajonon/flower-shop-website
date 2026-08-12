'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function UnderDevelopmentModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted in this session
    const hasSeenNotice = sessionStorage.getItem('mons_craft_dev_notice');
    if (!hasSeenNotice) {
      setIsOpen(true);
      // Lock page scrolling while modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem('mons_craft_dev_notice', 'true');
    // Unlock scrolling when button is clicked
    document.body.style.overflow = '';
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Dark Glass Backdrop - NO onClick handler attached */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-not-allowed select-none"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 25, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.96, y: 15, filter: 'blur(6px)' }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative w-full max-w-lg bg-[#0f172a]/95 border border-white/15 shadow-[0_0_50px_rgba(249,115,22,0.18)] backdrop-blur-2xl p-6 sm:p-10 text-center z-10 overflow-hidden"
          >
            {/* Ambient Warm Glow Accent */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-56 h-56 bg-[#f97316]/20 blur-3xl rounded-full pointer-events-none" />

            {/* Official Mon's Craft Logo Header */}
            <div className="mb-4 flex justify-center">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                <Image
                  src="/images/Logo.png"
                  alt="Mon's Craft Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Tagline Badge */}
            <span className="font-[family-name:var(--font-cormorant)] text-[#f97316] text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase block mb-2">
              Official Notice
            </span>

            {/* Heading */}
            <h2 className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl text-white font-bold tracking-wide mb-6">
              WELCOME TO MON&apos;S CRAFT
            </h2>

            {/* Bulleted Message Body */}
            <div className="border-y border-white/10 py-6 my-6">
              <ul className="space-y-3.5 text-white/85 text-xs sm:text-sm leading-relaxed text-left font-light">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] mt-2 shrink-0" />
                  <span>
                    Our website is currently under development as we work to create a beautiful and seamless experience for you.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] mt-2 shrink-0" />
                  <span>
                    Please note that some content, features, links, and buttons are not yet functional and are still being developed.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] mt-2 shrink-0" />
                  <span>
                    We&apos;re carefully working behind the scenes to bring everything together. Thank you for your patience and support while we put the finishing touches on Mon&apos;s Craft.
                  </span>
                </li>
              </ul>

              <p className="italic text-[#f97316] font-medium pt-5 text-center text-xs sm:text-sm">
                We&apos;ll be ready to serve you soon. 💐
              </p>
            </div>

            {/* Signature */}
            <p className="font-[family-name:var(--font-cormorant)] text-sm text-white/60 tracking-widest uppercase mb-8">
              — Mon&apos;s Craft
            </p>

            {/* Minimal Underlined Action Button */}
            <button
              type="button"
              onClick={handleDismiss}
              className="w-full font-[family-name:var(--font-cormorant)] text-[#f97316] hover:text-white font-bold text-xs sm:text-sm tracking-[0.3em] uppercase underline underline-offset-8 decoration-[#f97316]/70 hover:decoration-white transition-all duration-300 ease-out py-2 select-none focus:outline-none cursor-pointer"
            >
              I UNDERSTAND
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}