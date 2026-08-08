'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Cormorant } from 'next/font/google';
import MobileMenu from './MobileMenu';

// Initialize Cormorant Google Font
const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
  }

  // Scroll effect detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Split Navigation Links
  const leftLinks = [
    { name: 'HOME', path: '/', badge: 4 },
    { name: 'ABOUT US', path: '/about' },
  ];

  const rightLinks = [
    { name: 'CATEGORIES', path: '/categories' },
    { name: 'REVIEWS', path: '/reviews' },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  return (
    <header className="fixed top-2.5 xs:top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-2.5 xs:px-4 sm:px-8 transition-all duration-300">
      {/* Glass Transparent Floating Capsule Container */}
      <nav 
        className={`w-full max-w-5xl backdrop-blur-md border rounded-full px-3 xs:px-4 sm:px-6 py-1.5 sm:py-2 flex justify-between items-center relative transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/30 border-white/20 shadow-[0_12px_35px_rgba(0,0,0,0.35)] scale-[0.99]' 
            : 'bg-white/10 border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)]'
        }`}
        aria-label="Main Navigation"
      >
        {/* Left Desktop Links (Reduced Font Size) */}
        <ul className={`hidden lg:flex items-center space-x-1 xl:space-x-2 ${cormorant.className} text-sm xl:text-base font-semibold tracking-wide`}>
          {leftLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={`px-3 xl:px-3.5 py-1 rounded-full transition-all duration-300 flex items-center gap-1.5 select-none whitespace-nowrap ${
                    isActive
                      ? 'bg-[#f97316] text-white shadow-md shadow-orange-500/30'
                      : 'text-white/90 hover:text-white hover:bg-[#f97316]/25'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{link.name}</span>
                  {link.badge !== undefined && (
                    <span 
                      className={`w-4 h-4 rounded-full text-[10px] font-sans font-bold flex items-center justify-center transition-colors ${
                        isActive 
                          ? 'bg-white text-[#f97316]' 
                          : 'bg-white/20 text-white'
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

        {/* LOGO BADGE */}
        <div className="flex items-center z-40 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <Link 
            href="/" 
            className="flex items-center space-x-1 sm:space-x-1.5 py-1 px-1 sm:px-2 rounded-full transition-transform hover:scale-105 active:scale-95 focus:outline-none"
            aria-label="Mon's Craft Home"
          >
            <span className="text-[#f97316] text-xs sm:text-sm select-none">✨</span>
            <Image
              src="/images/logo.png"
              alt="Mon's Craft Logo"
              width={200}
              height={50}
              priority
              quality={90}
              className="h-7 xs:h-8 sm:h-9 lg:h-10 w-auto object-contain drop-shadow-md transition-transform duration-200 hover:scale-105"
            />
            <span className="text-[#f97316] text-xs sm:text-sm select-none">✨</span>
          </Link>
        </div>

        {/* Right Desktop Links (Reduced Font Size) */}
        <ul className={`hidden lg:flex items-center space-x-1 xl:space-x-2 ${cormorant.className} text-sm xl:text-base font-semibold tracking-wide`}>
          {rightLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={`px-3 xl:px-3.5 py-1 rounded-full transition-all duration-300 flex items-center gap-1.5 select-none whitespace-nowrap ${
                    isActive
                      ? 'bg-[#f97316] text-white shadow-md shadow-orange-500/30'
                      : 'text-white/90 hover:text-white hover:bg-[#f97316]/25'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{link.name}</span>
                  {link.badge !== undefined && (
                    <span 
                      className={`w-4 h-4 rounded-full text-[10px] font-sans font-bold flex items-center justify-center transition-colors ${
                        isActive 
                          ? 'bg-white text-[#f97316]' 
                          : 'bg-white/20 text-white'
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

        {/* Mobile View Hamburger Button */}
        <button 
          type="button"
          className="lg:hidden text-white z-50 focus:outline-none ml-auto p-2 rounded-full bg-white/10 hover:bg-[#f97316] border border-white/15 active:scale-95 transition-all duration-300 shadow-sm flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu Drawer */}
        <MobileMenu 
          isOpen={isMobileMenuOpen} 
          links={allLinks} 
          closeMenu={() => setIsMobileMenuOpen(false)} 
        />
      </nav>
    </header>
  );
}