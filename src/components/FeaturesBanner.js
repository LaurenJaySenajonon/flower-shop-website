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
      <svg className="w-6 h-6 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Handcrafted Quality',
    subtitle: 'freshly arranged with care',
    icon: (
      <svg className="w-6 h-6 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="6" cy="6" r="3" strokeWidth={1.8} />
        <circle cx="6" cy="18" r="3" strokeWidth={1.8} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Secure Packing',
    subtitle: 'packed with care, delivered safely',
    icon: (
      <svg className="w-6 h-6 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
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
          {/* Minimal Icon Badge */}
          <div className="p-2.5 rounded-full bg-[#f97316]/10 border border-[#f97316]/20 shrink-0">
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