"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const NAV_COLOR = "#643610";

export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /* --------------------------------------------------
     CLOSE MOBILE MENU WHEN ROUTE CHANGES
  -------------------------------------------------- */
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  /* --------------------------------------------------
     SCROLL DETECTION
  -------------------------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* --------------------------------------------------
     LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
  -------------------------------------------------- */
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const links = [
    {
      name: "HOME",
      path: "/",
    },
    {
      name: "ABOUT US",
      path: "/about",
    },
    {
      name: "SERVICES",
      path: "/services",
    },
    {
      name: "GALLERIES",
      path: "/galleries",
    },
  ];

  return (
    <>
      <header
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50
          w-full
          transition-all
          duration-500
          ease-out
          ${
            isScrolled
              ? "bg-[#241e1a]/40 backdrop-blur-sm"
              : "bg-transparent"
          }
        `}
      >
        <nav
          aria-label="Main Navigation"
          className="
            mx-auto
            flex
            w-full
            max-w-[1800px]
            items-center
            justify-between
            gap-6
            px-5
            py-2.5
            sm:px-8
            sm:py-3
            md:px-10
            lg:px-14
            lg:py-3.5
            xl:px-20
            2xl:px-24
          "
        >
          {/* ==================================================
              LOGO
          ================================================== */}

          <Link
            href="/"
            aria-label="Mon's Craft Home"
            className="
              group
              relative
              flex
              shrink-0
              items-center
              transition-transform
              duration-300
              hover:scale-[1.02]
              active:scale-[0.98]
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-white/70
              focus-visible:ring-offset-2
              focus-visible:ring-offset-transparent
            "
          >
         <Image
  src="/images/Logo.png"
  alt="Mon's Craft"
  width={220}
  height={55}
  priority
  quality={100}
  className="
    h-auto
    w-[65px]
    object-contain
    drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]
    transition-all
    duration-500
    group-hover:drop-shadow-[0_4px_14px_rgba(0,0,0,0.5)]
    
    xs:w-[72px]
    sm:w-[82px]
    md:w-[92px]
    lg:w-[105px]
    xl:w-[118px]
    2xl:w-[130px]
  "
/>
          </Link>

          {/* ==================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <ul
            className={`
              hidden
              items-center
              justify-end
              gap-7
              lg:flex
              xl:gap-9
              2xl:gap-12
              ${montserrat.className}
            `}
          >
            {links.map((link) => {
              const isActive =
                link.path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.path);

              return (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    aria-current={isActive ? "page" : undefined}
                    className={`
                      group
                      relative
                      inline-flex
                      items-center
                      whitespace-nowrap
                      py-2
                      text-[10px]
                      font-medium
                      tracking-[0.16em]
                      transition-colors
                      duration-300
                      xl:text-[11px]
                      xl:tracking-[0.18em]
                      2xl:text-[12px]
                      2xl:tracking-[0.20em]
                      ${
                        isActive
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                      }
                    `}
                  >
                    <span>{link.name}</span>

                    {/* Luxury underline */}
                    <span
                      className={`
                        absolute
                        left-0
                        right-0
                        -bottom-[2px]
                        h-[1px]
                        origin-left
                        transition-transform
                        duration-500
                        ease-out
                        ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }
                      `}
                      style={{
                        backgroundColor: NAV_COLOR,
                      }}
                    />

                    {/* Small gold/brown accent */}
                    <span
                      className={`
                        absolute
                        -bottom-[5px]
                        left-1/2
                        h-[3px]
                        w-[3px]
                        -translate-x-1/2
                        rounded-full
                        transition-all
                        duration-500
                        ${
                          isActive
                            ? "scale-100 opacity-100"
                            : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                        }
                      `}
                      style={{
                        backgroundColor: NAV_COLOR,
                      }}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ==================================================
              DESKTOP THEME TOGGLE
          ================================================== */}

          <div className="hidden shrink-0 items-center lg:flex">
            <ThemeToggle />
          </div>

          {/* ==================================================
              MOBILE CONTROLS
          ================================================== */}

          <div className="flex shrink-0 items-center gap-3 lg:hidden">
            <ThemeToggle />

            {/* Mobile Menu Button */}

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
              className="
                relative
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                bg-transparent
                transition-transform
                duration-300
                active:scale-95
                focus:outline-none
              "
            >
              <span className="sr-only">Open menu</span>

              <span className="flex w-[20px] flex-col gap-[5px]">
                <span className="h-[1.5px] w-full bg-white shadow-sm" />
                <span className="h-[1.5px] w-full bg-white shadow-sm" />
                <span className="ml-auto h-[1.5px] w-[70%] bg-white shadow-sm" />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* ==================================================
          MOBILE MENU
      ================================================== */}

      <MobileMenu
        isOpen={isMobileMenuOpen}
        links={links}
        closeMenu={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}