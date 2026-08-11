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
    subtitle: 'within Lupon, Davao Oriental',
    icon: (
      /* Sleek Luxury Location Dispatch Pin */
      <svg className="w-6 h-6 text-[#f97316]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Handcrafted Quality',
    subtitle: 'freshly arranged with care',
    icon: (
      /* Elegant Artisan Sparkle / Craft Bloom */
      <svg className="w-6 h-6 text-[#f97316]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Secure Packing',
    subtitle: 'packed with care, delivered safely',
    icon: (
      /* Minimalist Ribbon Parcel / Box */
      <svg className="w-6 h-6 text-[#f97316]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H4.5A1.5 1.5 0 013 19.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-9-13.5h18" />
      </svg>
    ),
  },
];

export default function FeaturesBanner() {
  return (
    <section className="w-full bg-[#0f172a] border-t border-white/10 py-8 md:py-10 px-2.5 xs:px-4 sm:px-8 flex justify-center">
      {/* Outer wrapper max-width matches Navbar container exactly */}
      <div className="w-full max-w-5xl mx-auto">
        {/* Responsive Swipe Flex on Mobile | 3-Column Grid on Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 md:gap-4 pb-2 md:pb-0 md:grid md:grid-cols-3 md:overflow-visible [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {features.map((item) => (
            <div
              key={item.id}
              className="shrink-0 w-[85vw] sm:w-[300px] md:w-auto snap-center flex items-center gap-4 px-6 py-4 sm:py-4.5 bg-slate-900/90 border border-white/10 shadow-lg backdrop-blur-md rounded-none first:rounded-l-full last:rounded-r-full"
            >
              {/* Bare Icon Container */}
              <div className="shrink-0 flex items-center justify-center">
                {item.icon}
              </div>

              {/* Text Stack */}
              <div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-base sm:text-lg font-bold text-white tracking-wide leading-tight">
                  {item.title}
                </h3>
                
                <p className={`${cantora.className} text-[11px] sm:text-xs text-white/70 mt-0.5 tracking-wide leading-snug`}>
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}