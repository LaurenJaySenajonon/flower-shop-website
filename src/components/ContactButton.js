'use client';

import { useState } from 'react';
import { Cormorant } from 'next/font/google';
import ContactModal from './ContactModal';

// Cormorant font matching your navbar
const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
});

export default function ContactButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Floating Pill Button matching your design */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-6 md:right-12 z-40 bg-[#0f172a]/85 backdrop-blur-md text-white border border-white/20 rounded-full p-1.5 pr-6 flex items-center gap-3 shadow-2xl hover:scale-105 hover:border-orange-500/50 hover:shadow-orange-500/20 transition-all duration-300 group"
        aria-label="Open contact information"
      >
        {/* Orange Circular Phone Icon */}
        <span className="w-9 h-9 bg-gradient-to-br from-orange-500 to-amber-600 text-white rounded-full flex items-center justify-center shadow-md shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </span>

        {/* Cormorant Serif Text */}
        <span className={`${cormorant.className} text-sm md:text-base font-bold tracking-widest text-white/95 uppercase`}>
          CONTACT US
        </span>
      </button>

      {/* Render Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
