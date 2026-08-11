'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const TRANSITION_MS = 400;

export default function MobileMenu({ isOpen, links, onClose, closeMenu }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Support both onClose and closeMenu prop names safely
  const handleClose = useCallback(() => {
    if (onClose) onClose();
    if (closeMenu) closeMenu();
  }, [onClose, closeMenu]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Smooth frame timing for mobile GPUs
  useEffect(() => {
    let rafId1;
    let rafId2;
    let closeTimer;

    if (isOpen) {
      setIsRendered(true);
      rafId1 = requestAnimationFrame(() => {
        rafId2 = requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
    } else {
      setIsVisible(false);
      closeTimer = window.setTimeout(() => setIsRendered(false), TRANSITION_MS);
    }

    return () => {
      if (rafId1) cancelAnimationFrame(rafId1);
      if (rafId2) cancelAnimationFrame(rafId2);
      if (closeTimer) clearTimeout(closeTimer);
    };
  }, [isOpen]);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isRendered) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') handleClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isRendered, handleClose]);

  if (!mounted || !isRendered) return null;

  return createPortal(
    <div id="mobile-menu" className="fixed inset-0 z-[9999] lg:hidden" role="presentation">
      {/* Dimmed Backdrop with Smooth Fade */}
      <button
        type="button"
        className={`absolute inset-0 bg-black/65 backdrop-blur-md transition-opacity duration-500 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
        aria-label="Close menu"
      />

      {/* Floating Glass Drawer */}
      <div
        className={`fixed inset-y-3 right-3 flex h-[calc(100dvh-1.5rem)] w-[calc(100vw-3.5rem)] max-w-[18rem] flex-col rounded-3xl bg-slate-950/90 text-white backdrop-blur-2xl border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu will-change-transform ${
          isVisible 
            ? 'translate-x-0 opacity-100 scale-100' 
            : 'translate-x-[115%] opacity-0 scale-95'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center space-x-1 sm:space-x-1.5">
            <span className="text-[#f97316] text-xs select-none">✨</span>
            <Image
              src="/images/Logo.png"
              alt="Mon's Craft Floral Boutique logo"
              width={140}
              height={35}
              priority
              quality={90}
              className="h-6 w-auto object-contain drop-shadow-md"
            />
            <span className="text-[#f97316] text-xs select-none">✨</span>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="rounded-full p-1.5 text-white/70 hover:bg-white/10 hover:text-white active:scale-90 transition-all duration-200"
            aria-label="Close navigation menu"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-5" aria-label="Mobile">
          <ul className="flex flex-col gap-2">
            {links.map((link, index) => {
              const isActive = pathname === link.path;

              return (
                <li
                  key={link.name}
                  style={{
                    transitionDelay: isVisible ? `${120 + index * 50}ms` : '0ms',
                  }}
                  className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isVisible
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-6 opacity-0'
                  }`}
                >
                  <Link
                    href={link.path}
                    onClick={handleClose}
                    className="group font-[family-name:var(--font-cormorant)] flex items-center justify-between px-3 py-2.5 text-base font-semibold tracking-wide transition-colors duration-200"
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {/* Underline attached precisely to the word text width */}
                    <span
                      className={`relative py-0.5 transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-[#f97316] after:transition-all after:duration-300 ${
                        isActive
                          ? 'text-white after:w-full'
                          : 'text-white/80 group-hover:text-white after:w-0 group-hover:after:w-full'
                      }`}
                    >
                      {link.name}
                    </span>

                    {link.badge !== undefined && (
                      <span
                        className={`flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-[10px] font-sans font-bold transition-colors ${
                          isActive ? 'bg-[#f97316] text-white' : 'bg-white/20 text-white'
                        }`}
                      >
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer Subtitle */}
        <div className="border-t border-white/10 px-5 py-4">
          <p className="font-[family-name:var(--font-cormorant)] text-[11px] uppercase tracking-[0.2em] text-white/50">
            Lupon • Philippines
          </p>
          <p className="mt-0.5 font-[family-name:var(--font-cormorant)] text-xs font-semibold text-[#f97316]">
            Mon&apos;s Craft Floral Boutique
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}