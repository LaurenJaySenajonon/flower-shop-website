"use client";

import { useEffect, useRef } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

/* ============================================================
   TESTIMONIAL DATA
============================================================ */

const testimonials = [
  {
    id: 1,
    name: "SOPHIA MARTIN",
    role: "CUSTOMER",
    rating: 5,
    quote:
      "I absolutely loved the arrangement. Everything was beautifully prepared and the details made the gift feel incredibly special.",
    variant: "horizontal",
  },
  {
    id: 2,
    name: "EMILY GRACE",
    role: "CUSTOMER",
    rating: 5,
    quote:
      "Every detail was thoughtfully made. The flowers looked even more beautiful in person and the presentation was perfect.",
    variant: "vertical",
  },
  {
    id: 3,
    name: "MIA ANDERSON",
    role: "CUSTOMER",
    rating: 5,
    quote:
      "Beautiful work, great attention to detail, and such a thoughtful experience from beginning to end.",
    variant: "speech",
  },
  {
    id: 4,
    name: "OLIVIA WILLIAMS",
    role: "CUSTOMER",
    rating: 5,
    quote:
      "The craftsmanship was amazing. You can really feel the care and creativity behind every piece.",
    variant: "horizontal",
  },
  {
    id: 5,
    name: "CHARLOTTE ROSE",
    role: "CUSTOMER",
    rating: 5,
    quote:
      "Such a lovely experience. The final piece was exactly what I imagined and made the occasion even more meaningful.",
    variant: "speech",
  },
];

/* ============================================================
   STAR RATING
============================================================ */

function StarRating({ rating = 5 }) {
  return (
    <div
      className="flex items-center gap-[2px]"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-[11px] leading-none sm:text-xs ${
            star <= rating
              ? "text-[#c79a5b]"
              : "text-[#c79a5b]/20"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

/* ============================================================
   HORIZONTAL TESTIMONIAL
============================================================ */

function HorizontalTestimonial({ testimonial }) {
  return (
    <article
      className="
        group relative h-full overflow-hidden rounded-[5px]
        bg-white p-5 shadow-md transition-all duration-500
        hover:-translate-y-1 hover:shadow-lg
        dark:bg-[#211b17]

        sm:p-6
      "
    >
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute right-4 top-1
          font-[family-name:var(--font-serif)]
          text-[58px] font-medium leading-none
          text-[#643610]/10
          dark:text-[#d4a373]/10
        "
      >
        "
      </span>

      <div className="relative z-10">
        <StarRating rating={testimonial.rating} />

        <p
          className="
            mt-2
            font-[family-name:var(--font-montserrat)]
            text-[9px] font-medium leading-[1.7]
            tracking-[0.02em]
            text-[#643610]/75
            dark:text-[#d4a373]/75

            sm:text-[10px]
          "
        >
          {testimonial.quote}
        </p>

        <div className="mt-3">
          <h3
            className="
              font-[family-name:var(--font-cormorant)]
              text-[13px] font-semibold leading-none
              tracking-[0.02em]
              text-[#643610]
              dark:text-[#d4a373]
            "
          >
            {testimonial.name}
          </h3>

          <span
            className="
              mt-1 block
              font-[family-name:var(--font-montserrat)]
              text-[7px] font-medium uppercase
              tracking-[0.2em]
              text-[#b96532]
              dark:text-[#d4a373]
            "
          >
            {testimonial.role}
          </span>
        </div>
      </div>
    </article>
  );
}

/* ============================================================
   VERTICAL TESTIMONIAL
============================================================ */

function VerticalTestimonial({ testimonial }) {
  return (
    <article
      className="
        group relative flex h-full flex-col items-center
        overflow-hidden rounded-[5px]
        bg-white px-5 py-6 text-center
        shadow-md transition-all duration-500
        hover:-translate-y-1 hover:shadow-lg
        dark:bg-[#211b17]

        sm:px-6 sm:py-7
      "
    >
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute left-4 top-1
          font-[family-name:var(--font-serif)]
          text-[50px] leading-none
          text-[#643610]/10
          dark:text-[#d4a373]/10
        "
      >
        "
      </span>

      <h3
        className="
          font-[family-name:var(--font-cormorant)]
          text-[15px] font-semibold leading-none
          tracking-[0.01em]
          text-[#643610]
          dark:text-[#d4a373]
        "
      >
        {testimonial.name}
      </h3>

      <span
        className="
          mt-1.5
          font-[family-name:var(--font-montserrat)]
          text-[7px] font-medium uppercase
          tracking-[0.2em]
          text-[#b96532]
          dark:text-[#d4a373]
        "
      >
        {testimonial.role}
      </span>

      <p
        className="
          mt-4 max-w-70
          font-[family-name:var(--font-montserrat)]
          text-[9px] font-medium leading-[1.7]
          tracking-[0.02em]
          text-[#643610]/75
          dark:text-[#d4a373]/75
        "
      >
        {testimonial.quote}
      </p>

      <div className="mt-4">
        <StarRating rating={testimonial.rating} />
      </div>
    </article>
  );
}

/* ============================================================
   SPEECH BUBBLE TESTIMONIAL
============================================================ */

function SpeechTestimonial({ testimonial }) {
  return (
    <article className="relative h-full">
      <div
        className="
          group relative rounded-[5px]
          bg-white px-5 py-5
          shadow-md transition-all duration-500
          hover:-translate-y-1 hover:shadow-lg
          dark:bg-[#211b17]

          sm:px-6 sm:py-6
        "
      >
        <span
          aria-hidden="true"
          className="
            absolute right-4 top-1
            font-[family-name:var(--font-serif)]
            text-[52px] leading-none
            text-[#643610]/10
            dark:text-[#d4a373]/10
          "
        >
          "
        </span>

        <p
          className="
            relative z-10 pr-5
            font-[family-name:var(--font-montserrat)]
            text-[9px] font-medium leading-[1.75]
            tracking-[0.02em]
            text-[#643610]/75
            dark:text-[#d4a373]/75

            sm:text-[10px]
          "
        >
          {testimonial.quote}
        </p>

        <div className="mt-4">
          <StarRating rating={testimonial.rating} />
        </div>

        <div
          className="
            absolute -bottom-[8px] left-10
            h-4 w-4 rotate-45
            bg-white
            dark:bg-[#211b17]
          "
        />
      </div>

      <div className="mt-5 pl-4">
        <h3
          className="
            font-[family-name:var(--font-cormorant)]
            text-[13px] font-semibold leading-none
            text-[#643610]
            dark:text-[#d4a373]
          "
        >
          {testimonial.name}
        </h3>

        <span
          className="
            mt-1 block
            font-[family-name:var(--font-montserrat)]
            text-[7px] font-medium uppercase
            tracking-[0.18em]
            text-[#b96532]
            dark:text-[#d4a373]
          "
        >
          {testimonial.role}
        </span>
      </div>
    </article>
  );
}

/* ============================================================
   MAIN TESTIMONIAL SECTION
============================================================ */

export default function Testimonials() {
  const scrollRef = useRef(null);

  /* Automatic mobile carousel */
  useEffect(() => {
    const interval = setInterval(() => {
      const container = scrollRef.current;

      if (!container) return;

      const { scrollLeft, clientWidth, scrollWidth } = container;
      const scrollAmount = clientWidth * 0.85;

      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      aria-label="Customer Testimonials"
      className="
        relative w-full overflow-hidden

        py-16 transition-colors duration-300
        dark:bg-[#181411]

        sm:py-20
        md:py-24
        lg:py-28
        xl:py-32
      "
    >
      <div
        className="
          mx-auto w-full max-w-[1800px]
          px-5
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-20
          2xl:px-24
        "
      >
        {/* HEADER */}

        <div
          className="
            mb-8 flex items-end justify-between gap-6
            sm:mb-10
            md:mb-12
            lg:mb-14
          "
        >
          <ScrollReveal variant="slide-left">
            <div>
              <span
                className="
                  block
                  font-[family-name:var(--font-montserrat)]
                  text-[8px] font-medium uppercase
                  tracking-[0.32em]
                  text-[#b96532]
                  dark:text-[#d4a373]

                  sm:text-[9px]
                  sm:tracking-[0.38em]

                  md:text-[10px]
                "
              >
                CUSTOMER REVIEWS
              </span>

              <h2
                className="
                  mt-2
                  font-[family-name:var(--font-cormorant)]
                  text-[28px] font-medium leading-none
                  tracking-[-0.025em]
                  text-[#643610]
                  dark:text-[#d4a373]

                  sm:text-[34px]
                  md:text-[40px]
                  lg:text-[44px]
                  xl:text-[48px]
                "
              >
                WHAT OUR CUSTOMERS SAY
              </h2>
            </div>
          </ScrollReveal>
        </div>

        {/* DESKTOP TESTIMONIAL GRID */}

        <div
          className="
            hidden
            lg:grid
            lg:grid-cols-12
            lg:gap-4
            xl:gap-5
          "
        >
          {/* LEFT COLUMN */}

          <div className="col-span-4 flex flex-col gap-4">
            <ScrollReveal variant="zoom-in" delay={0}>
              <HorizontalTestimonial testimonial={testimonials[0]} />
            </ScrollReveal>

            <ScrollReveal variant="zoom-in" delay={0.08}>
              <SpeechTestimonial testimonial={testimonials[2]} />
            </ScrollReveal>
          </div>

          {/* CENTER COLUMN */}

          <div className="col-span-4 flex flex-col gap-4">
            <ScrollReveal variant="zoom-in" delay={0.12}>
              <VerticalTestimonial testimonial={testimonials[1]} />
            </ScrollReveal>

            <ScrollReveal variant="zoom-in" delay={0.2}>
              <HorizontalTestimonial testimonial={testimonials[3]} />
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN */}

          <div className="col-span-4 flex flex-col gap-4">
            <ScrollReveal variant="zoom-in" delay={0.16}>
              <SpeechTestimonial testimonial={testimonials[4]} />
            </ScrollReveal>

            <ScrollReveal variant="slide-right" delay={0.24}>
              <div
                className="
                  flex min-h-[150px]
                  items-center justify-center
                  rounded-[5px]
                  bg-[#643610]
                  px-6 py-8
                  text-center shadow-md
                "
              >
                <div>
                  <span
                    className="
                      block
                      font-[family-name:var(--font-cormorant)]
                      text-[32px] leading-none
                      text-[#faf7f1]
                    "
                  >
                    5.0
                  </span>

                  <StarRating rating={5} />

                  <p
                    className="
                      mt-2
                      font-[family-name:var(--font-montserrat)]
                      text-[7px] font-medium uppercase
                      tracking-[0.22em]
                      text-[#faf7f1]/70
                    "
                  >
                    CUSTOMER RATING
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* MOBILE / TABLET CAROUSEL */}

        <div
          ref={scrollRef}
          className="
            flex gap-4 overflow-x-auto
            scroll-smooth snap-x snap-mandatory
            pb-3 overscroll-x-contain

            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden

            sm:gap-5
            sm:[&>*]:min-w-[48%]

            lg:hidden
          "
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="
                min-w-[88%]
                snap-start
                select-none
              "
            >
              <ScrollReveal
                variant="zoom-in"
                delay={index * 0.08}
              >
                {testimonial.variant === "vertical" ? (
                  <VerticalTestimonial testimonial={testimonial} />
                ) : testimonial.variant === "speech" ? (
                  <SpeechTestimonial testimonial={testimonial} />
                ) : (
                  <HorizontalTestimonial testimonial={testimonial} />
                )}
              </ScrollReveal>
            </div>
          ))}
        </div>

        {/* MOBILE SWIPE INDICATOR */}

        <div className="mt-8 flex justify-center sm:hidden">
          <div className="flex items-center gap-2">
            <span className="h-px w-7 bg-[#643610]/20 dark:bg-[#d4a373]/20" />

            <span
              className="
                font-[family-name:var(--font-montserrat)]
                text-[8px] uppercase
                tracking-[0.28em]
                text-[#643610]/50
                dark:text-[#d4a373]/50
              "
            >
              Swipe to explore
            </span>

            <span className="h-px w-7 bg-[#643610]/20 dark:bg-[#d4a373]/20" />
          </div>
        </div>
      </div>
    </section>
  );
}