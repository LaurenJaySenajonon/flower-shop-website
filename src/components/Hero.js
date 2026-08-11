"use client";

import BackgroundSlider from "./BackgroundSlider";
import ContactButton from "./ContactButton";

export default function Hero() {
  return (
    <section className="relative min-h-dvh w-full flex flex-col items-center justify-center overflow-hidden py-16 sm:py-20 md:py-24">
      {/* Background Slideshow */}
      <BackgroundSlider />

      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 w-full max-w-6xl mx-auto my-auto">
        <div className="flex flex-col items-center justify-center w-full">
          {/* Subtitle / Location Tag */}
          <p className="font-[family-name:var(--font-cormorant)] flex items-center justify-center text-center w-full text-[11px] sm:text-xs md:text-sm lg:text-base text-[#efe9e5] font-semibold tracking-[0.35em] sm:tracking-[0.4em] uppercase mb-4 sm:mb-6 md:mb-8 drop-shadow-md pl-[0.35em] sm:pl-[0.4em]">
            LUPON <span className="text-[#efe9e5] mx-2 sm:mx-3">•</span> PHILIPPINES
          </p>

          {/* Main Headline - Cinzel Decorative */}
          <h1 className="font-[family-name:var(--font-cinzel)] text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[92px] text-white font-bold drop-shadow-lg leading-[1.25] tracking-wide select-none mt-7">
            Timeless Beauty
          </h1>

          {/* Cursive Sub-headline - Sacramento */}
          <h2 className="font-[family-name:var(--font-sacramento)] mt-2 sm:mt-3 md:mt-4 lg:mt-6 text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[105px] 2xl:text-[115px] text-[#f97316] font-bold drop-shadow-lg leading-[1.15] tracking-wide select-none">
            Budget Friendly
          </h2>
        </div>

        {/* Call to Action Button */}
        <div className="mt-8 sm:mt-10 md:mt-12 relative inline-block">
          <button
            type="button"
            className="font-[family-name:var(--font-cormorant)] border border-[#f97316] bg-transparent text-[#f6f2e6] font-semibold text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.25em] px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 rounded-full hover:bg-[#f97316]/20 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md relative z-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#f97316]/50"
          >
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Bottom Floating Contact Button */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-20">
        <ContactButton />
      </div>
    </section>
  );
}