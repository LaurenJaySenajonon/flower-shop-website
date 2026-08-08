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

  const handleDotClick = (index) => {
    setCurrentIndex(index);
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
              alt={`Floral background ${index + 1}`}
              className="h-full w-full select-none object-cover object-center"
              loading={index <= 1 ? 'eager' : 'lazy'}
              decoding="async"
            />
          </div>
        );
      })}

      {/* Same visual overlay without mix-blend-mode (breaks on iOS Safari) */}
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-blue-300/30 to-white/15"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-black/10"
        aria-hidden="true"
      />

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/20 bg-black/30 px-3 py-1 backdrop-blur-md sm:bottom-8 sm:gap-2.5 sm:px-4 sm:py-2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleDotClick(index)}
            className="rounded-full p-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-white sm:p-1"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
          >
            <span
              className={`block h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-6 bg-white opacity-100 shadow-sm sm:w-7'
                  : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
