"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cormorant } from "next/font/google";
import MobileMenu from "./MobileMenu";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const leftLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
  ];
  const rightLinks = [
    { name: "CATEGORIES", path: "/#ShopByCategory" },
    { name: "FAQ", path: "/" },
  ];
  const allLinks = [...leftLinks, ...rightLinks];
  return (
    <header className="fixed top-4 sm:top-6 lg:top-8 left-0 right-0 z-50 flex justify-center px-4 sm:px-8 transition-all duration-700 ease-in-out">
      <nav
        /* Changed rounded-full to rounded-2xl */
        className={`w-full max-w-6xl backdrop-blur-xl rounded-2xl px-5 sm:px-8 py-2.5 sm:py-3 lg:py-4 flex justify-between items-center relative transition-all duration-700 ease-out ${
          isScrolled
            ? "bg-black/60 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
            : "bg-black/10 border border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
        }`}
        aria-label="Main Navigation"
      >
        <ul
          className={`hidden lg:flex items-center space-x-10 xl:space-x-14 ${cormorant.className} text-[13px] xl:text-[14px] font-medium tracking-[0.25em] uppercase`}
        >
          {leftLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={`group relative py-2 transition-colors duration-500 flex items-center gap-1.5 select-none whitespace-nowrap ${
                    isActive ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{link.name}</span>

                  <span
                    className={`absolute bottom-0 left-0 h-[1px] bg-[#f97316] transition-all duration-500 ease-out ${
                      isActive
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  />

                  {link.badge !== undefined && (
                    <span
                      className={`w-1.5 h-1.5 rounded-full absolute -top-1 -right-3 transition-colors duration-500 ${
                        isActive
                          ? "bg-[#f97316]"
                          : "bg-white/20 group-hover:bg-[#f97316]/50"
                      }`}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center z-40 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <Link
            href="/"
            className="flex items-center group py-1 px-2 transition-transform duration-500 hover:scale-[1.03] active:scale-95 focus:outline-none"
            aria-label="Mon's Craft Home"
          >
            <Image
              src="/images/Logo.png"
              alt="Mon's Craft logo"
              width={220}
              height={55}
              priority
              quality={100}
              className="h-8 xs:h-9 sm:h-10 lg:h-11 w-auto object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:drop-shadow-[0_4px_16px_rgba(249,115,22,0.3)]"
            />
          </Link>
        </div>

        <ul
          className={`hidden lg:flex items-center space-x-10 xl:space-x-14 ${cormorant.className} text-[13px] xl:text-[14px] font-medium tracking-[0.25em] uppercase`}
        >
          {rightLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={`group relative py-2 transition-colors duration-500 flex items-center gap-1.5 select-none whitespace-nowrap ${
                    isActive ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{link.name}</span>

                  <span
                    className={`absolute bottom-0 left-0 h-[1px] bg-[#f97316] transition-all duration-500 ease-out ${
                      isActive
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  />

                  {link.badge !== undefined && (
                    <span
                      className={`w-1.5 h-1.5 rounded-full absolute -top-1 -right-3 transition-colors duration-500 ${
                        isActive
                          ? "bg-[#f97316]"
                          : "bg-white/20 group-hover:bg-[#f97316]/50"
                      }`}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="lg:hidden text-white/80 hover:text-white z-50 focus:outline-none ml-auto p-1.5 active:scale-95 transition-all duration-300 flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M9 18h11" />
          </svg>
        </button>

        <MobileMenu
          isOpen={isMobileMenuOpen}
          links={allLinks}
          closeMenu={() => setIsMobileMenuOpen(false)}
        />
      </nav>
    </header>
  );
}