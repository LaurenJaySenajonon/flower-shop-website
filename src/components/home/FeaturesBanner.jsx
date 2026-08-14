'use client';

import { Cantora_One } from 'next/font/google';

// Initialize Cantora One Font
const cantora = Cantora_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const features = [
  {
    id: 1,
    title: 'Free Delivery',
    subtitle: 'Within Lupon, Davao Oriental',
    icon: (
      /* Sleek Luxury Location Dispatch Pin */
      <svg className="w-5 h-5 text-[#f97316]" fill="none" stroke="currentColor" strokeWidth={1.25} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Handcrafted Quality',
    subtitle: 'Freshly arranged with care',
    icon: (
      /* Elegant Artisan Sparkle / Craft Bloom */
      <svg className="w-5 h-5 text-[#f97316]" fill="none" stroke="currentColor" strokeWidth={1.25} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Secure Packing',
    subtitle: 'Packed with care, delivered safely',
    icon: (
      /* Minimalist Ribbon Parcel / Box */
      <svg className="w-5 h-5 text-[#f97316]" fill="none" stroke="currentColor" strokeWidth={1.25} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H4.5A1.5 1.5 0 013 19.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-9-13.5h18" />
      </svg>
    ),
  },
];

export default function FeaturesBanner() {
  return (
    <section className="w-full bg-[var(--banner-bg)] py-8 sm:py-10 px-4 sm:px-8 relative overflow-hidden select-none">
      {/* Subtle Background Glow Accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f97316]/5 to-transparent pointer-events-none" />

      {/* Main Outer Container */}
      <div className="w-full max-w-5xl mx-auto relative z-10">
        {/* Unified Luxury Glass Strip */}
        <div className="bg-[#0b1329]/90 border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl rounded-none">
          <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {features.map((item) => (
              <div
                key={item.id}
                className="shrink-0 w-[85vw] sm:w-[320px] md:w-auto snap-center flex items-center justify-start md:justify-center gap-4 px-6 sm:px-8 py-5 sm:py-6 border-r border-white/10 last:border-r-0 hover:bg-white/[0.02] transition-colors duration-300"
              >
                {/* Inset Luxury Icon Container */}
                <div className="shrink-0 p-2.5 border border-[#f97316]/40 bg-[#f97316]/10 flex items-center justify-center rounded-none shadow-sm">
                  {item.icon}
                </div>

                {/* Typography Stack */}
                <div className="flex flex-col">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-sm sm:text-base font-bold text-white tracking-[0.18em] uppercase leading-tight">
                    {item.title}
                  </h3>
                  <p className={`${cantora.className} text-[11px] sm:text-xs text-white/60 mt-1 tracking-wider font-light`}>
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}