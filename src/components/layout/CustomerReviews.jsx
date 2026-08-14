'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import ScrollReveal from '@/components/ui/ScrollReveal';

const testimonials = [
  {
    id: 1,
    quote:
      "Excellent work! The arrangements feel cohesive, stylish, and perfectly aligned with my vision. You can really see the care and passion behind Mon's Craft. I'm very happy with the result!",
    name: "Hannah Diamond Balquin",
    role: "Verified Client",
    image: "/images/Reviews/1.jpg",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "The floral details for our event were beyond breathtaking. Timeless elegance, fresh blooms, and exceptional service. Mon's Craft made our celebration truly unforgettable!",
    name: "Lauren Jay Senajonon",
    role: "Verified Client",
    image: "/images/Reviews/2.jpg",
    rating: 5,
  },
];

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide every 5 seconds (5000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  // Touch handlers for swipe support
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  const current = testimonials[currentIndex];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 60 : -60,
      opacity: 0,
    }),
  };

  return (
    <section className="relative w-full bg-[var(--banner-bg)] py-20 sm:py-28 overflow-hidden select-none">
      {/* Luminous Ambient Glow Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#f97316]/12 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f97316]/5 to-transparent pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex justify-between items-end mb-10 sm:mb-12">
          <ScrollReveal variant="slide-left">
            <div>
              <span className="font-[family-name:var(--font-cantora)] text-[#f97316] text-xs sm:text-sm font-semibold tracking-[0.4em] uppercase block mb-2">
                Kind Words
              </span>
              <h2 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-4xl text-white/95 font-bold tracking-wide">
                WHAT CUSTOMERS SAY
              </h2>
            </div>
          </ScrollReveal>

          {/* Luxury Control Buttons */}
          <ScrollReveal variant="slide-right" className="hidden sm:block">
            <div className="flex items-center gap-2.5">
              <button
                onClick={handlePrev}
                type="button"
                className="w-9 h-9 rounded-none border border-white/20 bg-white/5 text-white flex items-center justify-center hover:bg-[#f97316] hover:border-[#f97316] transition-all duration-300 cursor-pointer focus:outline-none"
                aria-label="Previous review"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                type="button"
                className="w-9 h-9 rounded-none border border-white/20 bg-white/5 text-white flex items-center justify-center hover:bg-[#f97316] hover:border-[#f97316] transition-all duration-300 cursor-pointer focus:outline-none"
                aria-label="Next review"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Swipeable Floating Glass Container */}
        <div 
          className="w-full max-w-3xl mx-auto overflow-hidden relative cursor-grab active:cursor-grabbing touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full bg-[#0b1329]/90 border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl rounded-none p-6 sm:p-10 relative overflow-hidden"
            >
              {/* Subtle Ambient Inner Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#f97316]/10 blur-3xl rounded-full pointer-events-none" />

              {/* Decorative Watermark Quotation Icon */}
              <span className="absolute -bottom-10 -left-4 font-[family-name:var(--font-cormorant)] text-[150px] sm:text-[190px] leading-none text-white/[0.04] select-none pointer-events-none font-bold">
                &ldquo;
              </span>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center relative z-10">
                
                {/* Left Column: Text & Rating */}
                <div className="md:col-span-7 flex flex-col justify-center order-2 md:order-1 text-center md:text-left">
                  
                  {/* 5-Star Rating */}
                  <div className="flex items-center justify-center md:justify-start gap-1.5 mb-5">
                    {[...Array(current.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-[#f97316] fill-current drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>

                  {/* Review Quote Text */}
                  <p className="font-[family-name:var(--font-cormorant)] text-white/90 text-base sm:text-lg md:text-xl italic leading-relaxed font-light mb-6">
                    &ldquo;{current.quote}&rdquo;
                  </p>

                  {/* Hairline Orange Divider */}
                  <div className="w-10 h-[1.5px] bg-[#f97316]/60 mx-auto md:mx-0 mb-4" />

                  {/* Customer Details */}
                  <div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-white text-lg sm:text-xl font-bold tracking-wider uppercase">
                      {current.name}
                    </h3>
                    <span className="font-[family-name:var(--font-cantora)] text-[#f97316] text-[11px] sm:text-xs tracking-[0.25em] uppercase mt-1 block font-semibold">
                      {current.role}
                    </span>
                  </div>
                </div>

                {/* Right Column: Framed Image with Vibrant Orange Glow Shadow */}
                <div className="md:col-span-5 order-1 md:order-2 flex justify-center md:justify-end">
                  <div className="relative w-full max-w-[190px] sm:max-w-[220px] aspect-[4/5] rounded-none overflow-hidden shadow-[0_0_35px_rgba(249,115,22,0.35)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(249,115,22,0.5)]">
                    <Image
                      src={current.image}
                      alt={current.name}
                      fill
                      sizes="(max-width: 768px) 190px, 220px"
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimalist Slide Indicator Line */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-[2px] transition-all duration-500 cursor-pointer focus:outline-none ${
                idx === currentIndex ? 'w-10 bg-[#f97316]' : 'w-4 bg-white/20 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}