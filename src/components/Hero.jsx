"use client";

import BackgroundSlider from "./BackgroundSlider";
import ContactButton from "./ContactButton";
import ScrollReveal from "@/components/ScrollReveal";

export default function Hero() {
  return (
    <section className="relative min-h-dvh w-full flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 xs:pt-28 xs:pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 bg-[#050505]">
      {/* Background Slider */}
      <BackgroundSlider />

      {/* Golden Hour Atelier Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] xs:w-[650px] sm:w-[850px] h-[500px] xs:h-[650px] sm:h-[850px] bg-gradient-to-tr from-[#f97316]/10 via-[#d97706]/15 to-transparent blur-[160px] rounded-full pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-transparent to-[#050505]/90 pointer-events-none z-[2]" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-3 xs:px-5 sm:px-8 w-full max-w-5xl lg:max-w-6xl mx-auto my-auto">
        <div className="flex flex-col items-center justify-center w-full">
          
          {/* Location Badge */}
          <ScrollReveal variant="blur-in" delay={0.1}>
            <p className="font-[family-name:var(--font-cormorant)] text-[10px] xs:text-xs sm:text-sm lg:text-base text-[#efe9e5]/90 font-semibold tracking-[0.3em] xs:tracking-[0.35em] sm:tracking-[0.4em] uppercase mb-20 sm:mb-4 lg:mb-15 pl-[0.3em] xs:pl-[0.35em] sm:pl-[0.4em] select-none leading-snug [text-shadow:0_2px_12px_rgba(0,0,0,0.8)] mt-5 flex items-center justify-center gap-2">
              <span className="inline-block w-2 sm:w-3 h-[1px] bg-[#f97316]/60"></span>
              <span>LUPON</span>
              <span className="text-[#f97316] mx-0.5 opacity-90">•</span>
              <span>PHILIPPINES</span>
              <span className="inline-block w-2 sm:w-3 h-[1px] bg-[#f97316]/60"></span>
            </p>
          </ScrollReveal>

          {/* Main Title - Serif */}
          <ScrollReveal variant="blur-in" delay={0.25}>
            <h1 className="font-[family-name:var(--font-cinzel)] text-[28px] xs:text-[36px] sm:text-[46px] md:text-[58px] lg:text-[70px] xl:text-[84px] 2xl:text-[92px] text-white/95 font-semibold leading-[1.1] tracking-wider select-none drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
              Timeless Beauty
            </h1>
          </ScrollReveal>

          {/* Metallic Gold Italic Subtitle */}
          <ScrollReveal variant="blur-in" delay={0.4}>
            <h2 className="font-[family-name:var(--font-playfair)] italic mt-1 xs:mt-2 sm:mt-3 md:mt-4 text-[30px] xs:text-[38px] sm:text-[48px] md:text-[62px] lg:text-[74px] xl:text-[88px] 2xl:text-[96px] text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] via-[#f97316] to-[#ea580c] font-normal leading-[1.05] tracking-wide select-none drop-shadow-[0_8px_25px_rgba(249,115,22,0.3)]">
              Budget Friendly
            </h2>
          </ScrollReveal>

        </div>

        {/* High-Fashion Inverted Glass CTA Button with Border Radius */}
        <ScrollReveal variant="fade-up" delay={0.55}>
          <div className="mt-20 sm:mt-4 lg:mt-6 relative inline-block group">
            <button
              type="button"
              /* CHANGED rounded-none to rounded-md (6px) */
              className="font-[family-name:var(--font-cormorant)] border border-white/15 bg-slate-950/70 backdrop-blur-md text-[#f6f2e6] font-medium text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.25em] px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 rounded-md hover:bg-white hover:text-slate-950 hover:border-white hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:tracking-[0.3em] active:scale-95 transition-all duration-500 ease-out relative z-10 flex items-center justify-center focus:outline-none select-none overflow-hidden cursor-pointer"
            >
              {/* Micro Accent Lines */}
              <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#f97316]/50 to-transparent" />
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#f97316]/50 to-transparent" />
              
              <span className="relative z-10 flex items-center gap-3">
                <span className="w-1.5 h-[1px] bg-[#f97316] group-hover:bg-slate-950 transition-colors"></span>
                EXPLORE COLLECTION
                <span className="w-1.5 h-[1px] bg-[#f97316] group-hover:bg-slate-950 transition-colors"></span>
              </span>
            </button>
          </div>
        </ScrollReveal>
      </div>

      <ContactButton />
    </section>
  );
}