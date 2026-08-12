'use client';

import BackgroundSlider from './BackgroundSlider';
import ContactButton from './ContactButton';
import ScrollReveal from '@/components/ScrollReveal';

export default function Hero() {
  return (
    <section className="relative min-h-dvh w-full flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 xs:pt-28 xs:pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 bg-[#050505]">
      {/* Background Cinematic Slider */}
      <BackgroundSlider />

      {/* Hero Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-3 xs:px-5 sm:px-8 w-full max-w-5xl lg:max-w-6xl mx-auto my-auto">
        <div className="flex flex-col items-center justify-center w-full">
          
          {/* Subtitle Badge */}
          <ScrollReveal variant="blur-in" delay={0.1}>
            <p className="font-[family-name:var(--font-cormorant)] text-[10px] xs:text-xs sm:text-sm lg:text-base text-[#efe9e5]/90 font-semibold tracking-[0.3em] xs:tracking-[0.35em] sm:tracking-[0.4em] uppercase mb-20 sm:mb-4 lg:mb-15 pl-[0.3em] xs:pl-[0.35em] sm:pl-[0.4em] select-none leading-snug [text-shadow:0_2px_12px_rgba(0,0,0,0.8)] mt-5">
              LUPON <span className="text-[#f97316] mx-1.5 xs:mx-2 sm:mx-3 opacity-80">•</span> PHILIPPINES
            </p>
          </ScrollReveal>

          {/* Heading 1 (h1) - Cinzel */}
          <ScrollReveal variant="blur-in" delay={0.25}>
            <h1 className="font-[family-name:var(--font-cinzel)] text-[28px] xs:text-[36px] sm:text-[46px] md:text-[58px] lg:text-[70px] xl:text-[84px] 2xl:text-[92px] text-white/95 font-bold leading-[1.1] tracking-wide select-none [text-shadow:0_4px_30px_rgba(0,0,0,0.7)]">
              Timeless Beauty
            </h1>
          </ScrollReveal>

          {/* Heading 2 (h2) - Playfair Italic */}
          <ScrollReveal variant="blur-in" delay={0.4}>
            <h2 className="font-[family-name:var(--font-playfair)] italic mt-1 xs:mt-2 sm:mt-3 md:mt-4 text-[30px] xs:text-[38px] sm:text-[48px] md:text-[62px] lg:text-[74px] xl:text-[88px] 2xl:text-[96px] text-[#f97316] font-semibold leading-[1.05] tracking-wide select-none [text-shadow:0_4px_24px_rgba(0,0,0,0.6)]">
              Budget Friendly
            </h2>
          </ScrollReveal>
        </div>

        {/* Primary CTA Button */}
        <ScrollReveal variant="fade-up" delay={0.55}>
          <div className="mt-20 sm:mt-4 lg:mt-6 relative inline-block group">
            <button
              type="button"
              className="font-[family-name:var(--font-cormorant)] border border-[#f97316]/50 bg-black/10 backdrop-blur-md text-[#f6f2e6] font-semibold text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.25em] px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 rounded-full hover:bg-[#f97316]/15 hover:border-[#f97316] hover:shadow-[0_0_24px_rgba(249,115,22,0.25)] hover:tracking-[0.3em] active:scale-95 transition-all duration-500 ease-out relative z-10 flex items-center justify-center focus:outline-none focus:ring-1 focus:ring-[#f97316]/50 select-none overflow-hidden"
            >
              {/* Subtle inner shine effect on hover */}
              <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative">SHOP NOW</span>
            </button>
          </div>
        </ScrollReveal>
      </div>

      {/* Floating Global Contact Button */}
      <ContactButton />
    </section>
  );
}