'use client';

import { useState, useEffect } from 'react';

const images = [
  '/images/4.png',
  '/images/5.png',
  '/images/6.png',
  '/images/7.png',
];

export default function BackgroundSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="absolute inset-0 z-0 min-h-full overflow-hidden bg-blue-900">
      {images.map((src, index) => {
        const isActive = index === currentIndex;

        return (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'z-10 opacity-100' : 'pointer-events-none z-0 opacity-0'
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`Handcrafted flower arrangement from Mon's Craft in Lupon, Davao Oriental (${index + 1})`}
              className="h-full w-full select-none object-cover object-center"
              loading={index <= 1 ? 'eager' : 'lazy'}
              decoding="async"
            />
          </div>
        );
      })}

      {/* Visual overlays */}
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-linear-to-b from-blue-300/30 to-white/15"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-black/10"
        aria-hidden="true"
      />

      {/* Transparent Bottom Pagination */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-5 sm:gap-7 px-4 py-1.5 sm:px-6 sm:py-2 select-none sm:bottom-8">
        {/* Previous Button (-) in Orange */}
        <button
          type="button"
          onClick={handlePrev}
          className="text-[#f97316] hover:scale-110 active:scale-95 transition-all duration-200 p-1 focus:outline-none flex items-center justify-center drop-shadow-md"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" />
          </svg>
        </button>

        {/* Counter (X / Y) in Dark Blue */}
        <span className="`font-sans` text-sm sm:text-base font-bold text-[#0a192f] tracking-widest whitespace-nowrap drop-shadow-md">
          {currentIndex + 1} / {images.length}
        </span>

        {/* Next Button (>) in Orange */}
        <button
          type="button"
          onClick={handleNext}
          className="text-[#f97316] hover:scale-110 active:scale-95 transition-all duration-200 p-1 focus:outline-none flex items-center justify-center drop-shadow-md"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}