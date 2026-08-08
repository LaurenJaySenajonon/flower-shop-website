"use client";

import BackgroundSlider from "./BackgroundSlider";
import ContactButton from "./ContactButton";

export default function Hero() {
  return (
    <section className="relative min-h-dvh w-full flex flex-col items-center justify-center overflow-hidden">
      <BackgroundSlider />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 w-full max-w-6xl mx-auto my-auto">
        <div className="flex flex-col items-center justify-center w-full mt-10 sm:mt-14 md:mt-16">
         
          <h1 className="font-[family-name:var(--font-sacramento)] text-[42px] xs:text-5xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[115px] 2xl:text-[125px] text-white font-bold drop-shadow-lg leading-[1.0] tracking-wide select-none">
            Timeless Beauty 
          </h1>

          <h2
            className="font-[family-name:var(--font-sacramento)] -mt-1 sm:-mt-2 md:-mt-3 lg:-mt-4 text-[42px] xs:text-5xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[115px] 2xl:text-[125px] text-[#f97316] font-bold drop-shadow-lg leading-[1.0] tracking-wide select-none"
          >
            Budget Friendly
          </h2>
        </div>

        {/* Shop Now Button */}
        <div className="mt-8 sm:mt-10 md:mt-12 relative inline-block">
          <button
            type="button"
            className="font-[family-name:var(--font-cormorant)] border border-[#f97316] bg-transparent text-[#f6f2e6] font-semibold text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.25em] px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 rounded-full hover:bg-[#f97316]/20 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md relative z-10 flex items-center justify-center focus:outline-none focus:ring-2"
          >
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Bottom Floating Contact Button */}
      <div className="absolute bottom-6 right-4 sm:bottom-8 sm:right-8 md:right-12 z-20">
        <ContactButton />
      </div>
    </section>
  );
}
