"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "monscraft-theme";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";

  return document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme(getInitialTheme());
  }, []);

  const applyTheme = useCallback((nextTheme) => {
    const html = document.documentElement;

    if (nextTheme === "dark") {
      html.classList.add("dark");
      localStorage.setItem(STORAGE_KEY, "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem(STORAGE_KEY, "light");
    }

    setTheme(nextTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    applyTheme(theme === "dark" ? "light" : "dark");
  }, [applyTheme, theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="
        group
        relative
        flex
        h-7
        w-12
        shrink-0
        items-center
        rounded-full
        border
        border-[var(--brand-border)]
        bg-[var(--surface-soft)]
        p-[3px]
        shadow-sm
        transition-all
        duration-300
        hover:shadow-md
        active:scale-95
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-[var(--brand)]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-transparent
      "
    >
      <span
        className={`
          flex
          h-5
          w-5
          items-center
          justify-center
          rounded-full
          bg-[var(--brand)]
          text-[var(--background)]
          shadow-sm
          transition-transform
          duration-300
          ease-out
          ${mounted && isDark ? "translate-x-5" : "translate-x-0"}
        `}
      >
        {mounted && isDark ? (
          <svg
            className="h-3 w-3"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M20 15.5A8.5 8.5 0 0 1 8.5 4A8.5 8.5 0 1 0 20 15.5Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            className="h-3 w-3"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="12"
              cy="12"
              r="4"
              fill="currentColor"
            />

            <path
              d="M12 2V4
                 M12 20V22
                 M4.93 4.93L6.34 6.34
                 M17.66 17.66L19.07 19.07
                 M2 12H4
                 M20 12H22
                 M4.93 19.07L6.34 17.66
                 M17.66 6.34L19.07 4.93"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        )}
      </span>
    </button>
  );
}