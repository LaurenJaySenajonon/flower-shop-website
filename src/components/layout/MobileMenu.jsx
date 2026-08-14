"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ThemeToggle from "./ThemeToggle";

const TRANSITION_MS = 450;

export default function MobileMenu({
  isOpen,
  links = [],
  onClose,
  closeMenu,
}) {
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  /* ==================================================
     CLOSE HANDLER
  ================================================== */

  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    }

    if (closeMenu) {
      closeMenu();
    }
  }, [onClose, closeMenu]);

  /* ==================================================
     MOUNT PORTAL
  ================================================== */

  useEffect(() => {
    setMounted(true);
  }, []);

  /* ==================================================
     OPEN / CLOSE ANIMATION
  ================================================== */

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

      closeTimer = window.setTimeout(() => {
        setIsRendered(false);
      }, TRANSITION_MS);
    }

    return () => {
      if (rafId1) cancelAnimationFrame(rafId1);
      if (rafId2) cancelAnimationFrame(rafId2);
      if (closeTimer) clearTimeout(closeTimer);
    };
  }, [isOpen]);

  /* ==================================================
     LOCK BODY SCROLL
  ================================================== */

  useEffect(() => {
    if (!isRendered) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isRendered, handleClose]);

  /* ==================================================
     DON'T RENDER BEFORE CLIENT
  ================================================== */

  if (!mounted || !isRendered) {
    return null;
  }

  return createPortal(
    <div
      id="mobile-menu"
      className="fixed inset-0 z-[9999] lg:hidden"
      role="presentation"
    >
      {/* ==================================================
          BACKDROP
      ================================================== */}

      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={handleClose}
        className={`
          absolute
          inset-0
          bg-black/30
          backdrop-blur-[2px]
          transition-opacity
          duration-[450ms]
          ease-out
          ${isVisible ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* ==================================================
          MOBILE MENU PANEL
      ================================================== */}

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`
          fixed
          right-0
          top-0
          flex
          h-[100dvh]
          w-[88vw]
          max-w-[400px]
          flex-col
          bg-[var(--background)]
          text-[var(--foreground)]
          shadow-[-15px_0_50px_rgba(0,0,0,0.12)]
          dark:shadow-[-15px_0_50px_rgba(0,0,0,0.35)]
          transition-transform
          duration-[450ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          transform-gpu
          will-change-transform
          ${
            isVisible
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* ==================================================
            HEADER
        ================================================== */}

        <div
          className="
            flex
            shrink-0
            items-start
            justify-between
            px-6
            pb-5
            pt-7
            sm:px-8
            sm:pt-8
          "
        >
          {/* Menu Title */}

          <div>
            <h2
              className="
                font-[family-name:var(--font-montserrat)]
                text-[22px]
                font-semibold
                leading-none
                tracking-[-0.03em]
                text-[var(--foreground)]
                sm:text-[24px]
              "
            >
              Menu
            </h2>

            <p
              className="
                mt-2
                font-[family-name:var(--font-montserrat)]
                text-[11px]
                font-normal
                tracking-[-0.01em]
                text-[var(--brand-muted)]
                sm:text-[12px]
              "
            >
              Explore categories
            </p>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />

          {/* Close Button */}

          <button
            type="button"
            onClick={handleClose}
            aria-label="Close navigation menu"
            className="
              -mr-2
              -mt-1
              flex
              h-10
              w-10
              items-center
              justify-center
              text-[var(--foreground)]
              transition-transform
              duration-300
              hover:scale-105
              active:scale-90
            "
          >
            <svg
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 5L19 19"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              <path
                d="M19 5L5 19"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
          </div>
        </div>

        {/* ==================================================
            NAVIGATION AREA
        ================================================== */}

        <nav
          aria-label="Mobile navigation"
          className="
            flex-1
            overflow-y-auto
            overscroll-contain
            px-6
            sm:px-8
          "
        >
          <ul className="mt-5">
            {links.map((link, index) => {
              const isActive =
                link.path === "/"
                  ? pathname === "/"
                  : pathname === link.path ||
                    pathname.startsWith(`${link.path}/`);

              return (
                <li
                  key={`${link.name}-${link.path}`}
                  style={{
                    transitionDelay: isVisible
                      ? `${100 + index * 55}ms`
                      : "0ms",
                  }}
                  className={`
                    transition-all
                    duration-500
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${
                      isVisible
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0"
                    }
                  `}
                >
                  <Link
                    href={link.path}
                    onClick={handleClose}
                    aria-current={
                      isActive ? "page" : undefined
                    }
                    className="
                      group
                      flex
                      min-h-[62px]
                      items-center
                      justify-between
                      py-4
                      transition-colors
                      duration-300
                    "
                  >
                    {/* ==================================================
                        LINK NAME
                    ================================================== */}

                    <span
                      className={`
                        font-[family-name:var(--font-montserrat)]
                        text-[17px]
                        leading-none
                        tracking-[-0.02em]
                        transition-all
                        duration-300
                        sm:text-[18px]
                        ${
                          isActive
                            ? "font-semibold text-[var(--foreground)]"
                            : "font-normal text-[var(--foreground)]/65 group-hover:text-[var(--foreground)]"
                        }
                      `}
                    >
                      {link.name}
                    </span>

                    {/* ==================================================
                        ACTIVE ARROW
                    ================================================== */}

                    <span
                      className={`
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
                        }
                      `}
                    >
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 12H19"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                        />

                        <path
                          d="M13 6L19 12L13 18"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* ==================================================
            BOTTOM CTA
        ================================================== */}
{/* ==================================================
    BOTTOM CTA
================================================== */}

<div
  className={`
    shrink-0
    px-6
    pb-7
    pt-5
    sm:px-8
    sm:pb-8
    transition-all
    duration-700
    ease-[cubic-bezier(0.16,1,0.3,1)]
    ${
      isVisible
        ? "translate-y-0 opacity-100"
        : "translate-y-5 opacity-0"
    }
  `}
>
  <Link
    href="/categories"
    onClick={handleClose}
    className="
      group
      flex
      min-h-[54px]
      w-full
      items-center
      justify-center
      rounded-[5px]
      border
      border-[var(--brand-border)]
      bg-transparent
      px-6
      font-[family-name:var(--font-montserrat)]
      text-[10px]
      font-semibold
      uppercase
      tracking-[0.2em]
      text-[var(--brand)]
      transition-all
      duration-500
      hover:border-[var(--brand)]
      hover:bg-[var(--brand)]
      hover:text-[var(--background)]
      active:scale-[0.98]
    "
  >
    <span>Explore Collection</span>

    <span
      className="
        ml-3
        inline-block
        transition-transform
        duration-500
        group-hover:translate-x-1
      "
    >
      →
    </span>
  </Link>
</div>
      </aside>
    </div>,
    document.body
  );
}