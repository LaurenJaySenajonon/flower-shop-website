'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Cormorant } from 'next/font/google';

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export default function MobileMenu({ isOpen, links, closeMenu }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex flex-col justify-between bg-slate-950/90 p-6 backdrop-blur-xl transition-all duration-300 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <span className={`${cormorant.className} text-base font-bold uppercase tracking-widest text-[#f97316] sm:text-lg`}>
          NAVIGATION
        </span>
        <button
          type="button"
          onClick={closeMenu}
          className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Close navigation menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <nav className="my-auto py-8">
        <ul className="flex flex-col items-end space-y-6 pr-2">
          {links.map((link) => {
            const isActive = pathname === link.path;

            return (
              <li key={link.name}>
                <Link
                  href={link.path}
                  onClick={closeMenu}
                  className={`flex items-center gap-3 text-2xl font-medium tracking-wide transition-all duration-200 sm:text-3xl ${cormorant.className} ${
                    isActive
                      ? 'scale-105 font-bold text-[#f97316]'
                      : 'text-white/85 hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.badge !== undefined && (
                    <span
                      className={`flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-xs font-sans font-bold transition-colors ${
                        isActive
                          ? 'bg-[#f97316] text-white'
                          : 'bg-white/20 text-white'
                      }`}
                    >
                      {link.badge}
                    </span>
                  )}
                  <span>{link.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-white/10 pt-6 text-right">
        <p className={`${cormorant.className} text-xs uppercase tracking-widest text-white/50`}>
          Lupon • Philippines
        </p>
        <p className={`${cormorant.className} mt-0.5 text-sm font-semibold tracking-wider text-[#f97316]`}>
          Mon&apos;s Craft Floral Boutique
        </p>
      </div>
    </div>,
    document.body
  );
}
