"use client";

import { useEffect, useState } from "react";
const STORAGE_KEY = "monscraft-theme";
const getTheme = () =>
  localStorage.getItem(STORAGE_KEY) === "dark" ? "dark" : "light";

const applyTheme = (theme) => {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem(STORAGE_KEY, theme);
};
export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = getTheme();
    setTheme(savedTheme);
    applyTheme(savedTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

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
        h-6
        w-11
        shrink-0
        items-center
        rounded-full
        border
       bg-(--surface-soft)
     
        p-1
        shadow-sm
        transition-all
        duration-300
        hover:shadow-md
        active:scale-95
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-(--brand)
        focus-visible:ring-offset-2
        focus-visible:ring-offset-transparent

        sm:h-7
        sm:w-12
       sm:p-0.75
      "
    >
      {/* Toggle knob */}
      <span
        className={`
          flex
          h-4
          w-4
          items-center
          justify-center
          rounded-full
         bg-(--brand)
          text-background
          shadow-sm
          transition-transform
          duration-300
          ease-out

          sm:h-5
          sm:w-5

          ${mounted && isDark ? "translate-x-5" : "translate-x-0"}
        `}
      >
        {mounted && isDark ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  );
}

/* ==================================================
   ICONS
================================================== */

function SunIcon() {
  return (
    <svg
      className="h-2.5 w-2.5 sm:h-3 sm:w-3"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" fill="currentColor" />

      <path
        d="
          M12 2V4
          M12 20V22
          M4.93 4.93L6.34 6.34
          M17.66 17.66L19.07 19.07
          M2 12H4
          M20 12H22
          M4.93 19.07L6.34 17.66
          M17.66 6.34L19.07 4.93
        "
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      className="h-2.5 w-2.5 sm:h-3 sm:w-3"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 15.5A8.5 8.5 0 0 1 8.5 4A8.5 8.5 0 1 0 20 15.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
