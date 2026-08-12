"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ShopByCategory() {
  const scrollRef = useRef(null);

  const categories = [
    {
      id: 1,
      name: "TULIPS",
      image: "/images/Tulips/1.png",
      href: "/categories/tulips",
    },
    {
      id: 2,
      name: "DAHILA",
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

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 3;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="ShopByCategory"
      className="relative w-full bg-[#0f172a] py-20 sm:py-28 overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-end mb-12 sm:mb-16">
          <ScrollReveal variant="slide-left">
            <div>
              <span className="font-[family-name:var(--font-cantora)] text-[#f97316] text-xs sm:text-sm font-semibold tracking-[0.4em] uppercase block mb-3">
                Curated Collections
              </span>
              <h2 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-4xl text-white/95 font-bold tracking-wide">
                SHOP BY CATEGORY
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slide-right" className="hidden sm:block">
            <div className="flex items-center gap-3">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 text-white flex items-center justify-center hover:bg-[#f97316] hover:border-[#f97316] transition-all duration-300"
                aria-label="Previous categories"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 text-white flex items-center justify-center hover:bg-[#f97316] hover:border-[#f97316] transition-all duration-300"
                aria-label="Next categories"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Swipeable Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 focus:outline-none scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="min-w-[80%] xs:min-w-[60%] sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-start flex flex-col select-none"
            >
              {/* Category Card Reveal with Staggered Delay */}
              <ScrollReveal variant="zoom-in" delay={index * 0.12}>
                <div className="flex flex-col group">
                  {/* Card Image Wrapper with Sharp Corners */}
                  <div className="relative aspect-[1/1.12] w-full bg-slate-900 rounded-none overflow-hidden border border-white/10 shadow-xl">
                    <Image
                      src={category.image}
                      alt={`${category.name} flower arrangement`}
                      fill
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center"
                    />

                    {/* Heart / Wishlist Button */}
                    <button
                      type="button"
                      className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white/90 flex items-center justify-center hover:text-[#f97316] hover:bg-black/60 transition-all duration-300 shadow-md z-10"
                      aria-label="Add to wishlist"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={1.8}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Card Information Layout */}
                  <div className="mt-4 flex justify-between items-center px-1">
                    <div>
                      <h3 className="text-lg sm:text-xl text-white/95 tracking-wide group-hover:text-[#f97316] transition-colors duration-300">
                        {category.name}
                      </h3>
                    </div>

                    <Link
                      href={category.href}
                      className="text-xs sm:text-sm tracking-wider text-white/70 hover:text-[#f97316] uppercase underline underline-offset-4 transition-colors duration-300"
                    >
                      Select
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
