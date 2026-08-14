"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const categories = [
  {
    id: 1,
    name: "TULIPS",
    image: "/images/Tulips/1.png",
    href: "/categories/tulips",
  },
  {
    id: 2,
    name: "DAHLIA",
    image: "/images/Dahlia/1.png",
    href: "/categories/dahlia",
  },
  {
    id: 3,
    name: "ROSE",
    image: "/images/Rose/1.png",
    href: "/categories/rose",
  },
  {
    id: 4,
    name: "LILIES",
    image: "/images/Liliies/1.png",
    href: "/categories/lilies",
  },
];

export default function ShopByCategory() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth / 3;

    scrollRef.current.scrollTo({
      left:
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="ShopByCategory"
      aria-label="Shop by Category"
      className="
        relative
        w-full
        overflow-hidden
        theme-bg
        transition-colors
        duration-300
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1800px]
          px-5
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-20
          2xl:px-24
          py-16
          sm:py-20
          md:py-24
          lg:py-28
          xl:py-32
        "
      >
        {/* ==================================================
            HEADER
        ================================================== */}

        <div
          className="
            mb-8
            flex
            items-end
            justify-between
            gap-6
            sm:mb-10
            md:mb-12
            lg:mb-14
          "
        >
          <ScrollReveal variant="slide-left">
            <div>
              {/* SMALL LABEL */}
              <span
                className="
                  block
                  font-[family-name:var(--font-montserrat)]
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.32em]
                  theme-brand-muted
                  sm:text-[9px]
                  sm:tracking-[0.38em]
                  md:text-[10px]
                "
              >
                SHOP BY CATEGORY
              </span>

              {/* HEADING */}
              <h2
                className="
                  mt-2
                  font-[family-name:var(--font-serif)]
                  text-[28px]
                  font-medium
                  leading-none
                  tracking-[-0.025em]
                  theme-brand
                  sm:text-[34px]
                  md:text-[40px]
                  lg:text-[44px]
                  xl:text-[48px]
                "
              >
                FIND SOMETHING MADE FOR YOU
              </h2>
            </div>
          </ScrollReveal>

          {/* ==================================================
              DESKTOP NAVIGATION BUTTONS
          ================================================== */}

          <ScrollReveal
            variant="slide-right"
            className="hidden shrink-0 sm:block"
          >
            <div className="flex items-center gap-2">
              {/* PREVIOUS */}
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Previous categories"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-[3px]
                  border
                  border-[var(--brand-border)]
                  bg-transparent
                  theme-brand
                  transition-all
                  duration-300
                  hover:bg-[var(--brand)]
                  hover:text-white
                  active:scale-95
                  sm:h-10
                  sm:w-10
                "
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* NEXT */}
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Next categories"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-[3px]
                  border
                  border-[var(--brand-border)]
                  bg-transparent
                  theme-brand
                  transition-all
                  duration-300
                  hover:bg-[var(--brand)]
                  hover:text-white
                  active:scale-95
                  sm:h-10
                  sm:w-10
                "
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* ==================================================
            CATEGORY CAROUSEL
        ================================================== */}

        <div
          ref={scrollRef}
          className="
            flex
            gap-4
            overflow-x-auto
            scroll-smooth
            snap-x
            snap-mandatory
            pb-3
            overscroll-x-contain
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            sm:gap-5
            md:gap-6
          "
        >
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="
                min-w-[82%]
                snap-start
                select-none
                xs:min-w-[70%]
                sm:min-w-[calc(50%-10px)]
                lg:min-w-[calc(33.333%-16px)]
                xl:min-w-[calc(33.333%-16px)]
              "
            >
              <ScrollReveal
                variant="zoom-in"
                delay={index * 0.1}
              >
                <div className="group block">
                  {/* ==================================================
                      IMAGE CONTAINER
                  ================================================== */}

                  <Link
                    href={category.href}
                    aria-label={`Explore ${category.name}`}
                    className="block"
                  >
                    <div
                      className="
                        relative
                        aspect-square
                        w-full
                        overflow-hidden
                        rounded-[3px]
                        theme-surface-soft
                      "
                    >
                      <Image
                        src={category.image}
                        alt={`${category.name} flower arrangement`}
                        fill
                        quality={90}
                        sizes="
                          (max-width: 639px) 82vw,
                          (max-width: 1023px) 50vw,
                          33vw
                        "
                        className="
                          object-cover
                          object-center
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-[1.035]
                        "
                      />

                      {/* Subtle Overlay */}
                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          bg-[var(--brand)]/0
                          transition-colors
                          duration-500
                          group-hover:bg-[var(--brand)]/[0.04]
                        "
                      />
                    </div>
                  </Link>

                  {/* ==================================================
                      CATEGORY INFORMATION
                  ================================================== */}

                  <div
                    className="
                      mt-3
                      flex
                      items-center
                      justify-between
                      sm:mt-4
                    "
                  >
                    <div>
                      {/* CATEGORY NAME */}
                      <h3
                        className="
                          font-[family-name:var(--font-serif)]
                          text-[15px]
                          font-medium
                          leading-none
                          tracking-[-0.01em]
                          theme-brand
                          transition-colors
                          duration-300
                          sm:text-[17px]
                          md:text-[18px]
                          lg:text-[19px]
                        "
                      >
                        {category.name}
                      </h3>

                      {/* SUBTLE LABEL */}
                      <span
                        className="
                          mt-1.5
                          block
                          font-[family-name:var(--font-montserrat)]
                          text-[8px]
                          font-medium
                          uppercase
                          tracking-[0.22em]
                          theme-brand-muted
                          sm:mt-2
                          sm:text-[9px]
                          md:text-[10px]
                        "
                      >
                        EXPLORE NOW
                      </span>
                    </div>

                    {/* INTERACTIVE ARROW */}
                    <Link
                      href={category.href}
                      aria-label={`Explore ${category.name}`}
                      className="
                        group/arrow
                        flex
                        shrink-0
                        items-center
                        theme-brand
                      "
                    >
                      <svg
                        className="
                          h-4
                          w-8
                          theme-brand
                          transition-transform
                          duration-500
                          group-hover:translate-x-1
                          md:w-10
                        "
                        viewBox="0 0 40 12"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M0 6H36"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M31 1L36 6L31 11"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>

        {/* ==================================================
            MOBILE SWIPE INDICATOR
        ================================================== */}

        <div className="mt-8 flex justify-center sm:hidden">
          <div className="flex items-center gap-2">
            <span className="h-px w-7 theme-brand-muted opacity-30" />
            <span
              className="
                font-[family-name:var(--font-montserrat)]
                text-[8px]
                uppercase
                tracking-[0.28em]
                theme-brand-muted
              "
            >
              Swipe to explore
            </span>
            <span className="h-px w-7 theme-brand-muted opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
}