"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function WhyChooseUs() {
  const reasons = [
    {
      number: "01",
      title: "MADE WITH CARE",
      description:
        "EVERY PIECE IS THOUGHTFULLY PREPARED WITH ATTENTION TO DETAIL, QUALITY, AND PRESENTATION.",
      dark: true,
      numberPosition: "top",
    },
    {
      number: "02",
      title: "DESIGNED FOR YOU",
      description:
        "WHETHER YOU HAVE A SPECIFIC IDEA IN MIND OR NEED INSPIRATION, WE CREATE PIECES THAT REFLECT YOUR OCCASION AND PERSONAL STYLE.",
      dark: false,
      numberPosition: "top",
    },
    {
      number: "03",
      title: "QUALITY IN EVERY DETAIL",
      description:
        "WE VALUE BEAUTIFUL PRESENTATION AND CAREFULLY SELECTED MATERIALS TO MAKE EVERY PIECE FEEL SPECIAL.",
      dark: false,
      numberPosition: "bottom",
    },
    {
      number: "04",
      title: "MORE THAN A GIFT",
      description:
        "WE CREATE MORE THAN PRODUCTS. WE CREATE THOUGHTFUL PIECES MEANT TO EXPRESS APPRECIATION, CELEBRATE MILESTONES, AND MAKE MEANINGFUL MOMENTS MEMORABLE.",
      dark: true,
      numberPosition: "bottom",
    },
  ];

  return (
    <section
      id="why-choose-us"
      aria-label="Why Choose Us"
      className="
        w-full
        overflow-hidden
        bg-[#faf7f1]
        dark:bg-[#181411]
        py-20
        sm:py-24
        md:py-28
        lg:py-32
        xl:py-36
        transition-colors
        duration-300
      "
    >
      {/* ==================================================
          MAIN CONTAINER
      ================================================== */}

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
        "
      >
        {/* ==================================================
            SECTION HEADER
        ================================================== */}

        <ScrollReveal variant="slide-left">
          <div
            className="
              mb-14
              sm:mb-16
              md:mb-18
              lg:mb-20
              xl:mb-22
            "
          >
            {/* SECTION LABEL */}

            <span
              className="
                mb-4
                block
                font-[family-name:var(--font-montserrat)]
                text-[9px]
                font-medium
                uppercase
                leading-none
                tracking-[0.38em]
                text-[#b96532]
                dark:text-[#d4a373]

                sm:text-[10px]
                sm:tracking-[0.45em]

                md:text-[10px]

                lg:text-[11px]

                xl:text-[11px]
              "
            >
              CHOOSE US NOW
            </span>

            {/* SECTION TITLE */}

            <h2
              className="
                font-[family-name:var(--font-cormorant)]
                text-[32px]
                font-normal
                leading-none
                tracking-[-0.02em]
                text-[#643610]
                dark:text-[#d4a373]

                sm:text-[38px]

                md:text-[44px]

                lg:text-[48px]

                xl:text-[52px]
              "
            >
              WHY CHOOSE US
            </h2>
          </div>
        </ScrollReveal>

        {/* ==================================================
            EDITORIAL GRID & COLLAGE
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-2
            lg:grid-cols-[2.2fr_1fr]
            lg:grid-rows-[1fr]
            lg:gap-2
          "
        >
          {/* ==================================================
              LEFT CARDS COLLAGE
          ================================================== */}

          <div
            className="
              grid
              grid-cols-1
              gap-2

              sm:grid-cols-2

              lg:grid-cols-2
              lg:grid-rows-[1fr_0.94fr]
            "
          >
            {/* CARD 01 */}

            <ScrollReveal
              variant="zoom-in"
              delay={0}
              className="h-full"
            >
              <ReasonCard reason={reasons[0]} />
            </ScrollReveal>

            {/* CARD 02 */}

            <ScrollReveal
              variant="zoom-in"
              delay={0.08}
              className="h-full"
            >
              <ReasonCard reason={reasons[1]} />
            </ScrollReveal>

            {/* ==================================================
                BOTTOM ROW
            ================================================== */}

            <div
              className="
                grid
                grid-cols-1
                gap-2

                sm:col-span-2
                sm:grid-cols-[0.78fr_1fr]
              "
            >
              {/* CARD 03 */}

              <ScrollReveal
                variant="zoom-in"
                delay={0.16}
                className="h-full"
              >
                <ReasonCard reason={reasons[2]} />
              </ScrollReveal>

              {/* CARD 04 */}

              <ScrollReveal
                variant="zoom-in"
                delay={0.24}
                className="h-full"
              >
                <ReasonCard reason={reasons[3]} />
              </ScrollReveal>
            </div>
          </div>

          {/* ==================================================
              RIGHT — OWNER IMAGE CARD
          ================================================== */}

          <ScrollReveal
            variant="slide-right"
            className="
              h-full
              min-h-[520px]
              lg:min-h-full
            "
          >
            <div
              className="
                group
                relative
                h-full
                min-h-[520px]
                overflow-hidden
                rounded-[3px]
                bg-[#6f4b35]
                dark:bg-[#2d241e]

                lg:min-h-full
              "
            >
              {/* OWNER IMAGE */}

              <Image
                src="/images/Reviews/1.jpg"
                alt="The person behind Mon's Craft"
                fill
                sizes="
                  (max-width: 639px) 100vw,
                  (max-width: 1023px) 100vw,
                  30vw
                "
                className="
                  object-cover
                  object-center
                  transition-transform
                  duration-1000
                  ease-out
                  group-hover:scale-[1.035]
                "
              />

              {/* IMAGE OVERLAY */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#3c281c]/85
                  via-[#3c281c]/25
                  to-[#3c281c]/5

                  dark:from-[#181411]/90
                  dark:via-[#181411]/40
                  dark:to-[#181411]/10
                "
              />

              {/* INNER FRAME */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-4
                  z-10
                  border
                  border-white/20
                  transition-all
                  duration-700

                  group-hover:inset-3
                  group-hover:border-white/30

                  sm:inset-5
                  sm:group-hover:inset-4
                "
              />

              {/* OWNER CONTENT */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  z-20
                  px-6
                  pb-8
                  text-center

                  sm:px-8
                  sm:pb-9

                  lg:px-6
                  lg:pb-8

                  xl:px-8
                  xl:pb-10
                "
              >
                {/* OWNER HEADING */}

                <h3
                  className="
                    font-[family-name:var(--font-cormorant)]
                    text-[22px]
                    font-medium
                    uppercase
                    leading-[0.95]
                    tracking-[-0.01em]
                    text-[#faf7f1]
                    dark:text-[#d4a373]

                    sm:text-[25px]

                    md:text-[27px]

                    lg:text-[28px]

                    xl:text-[30px]
                  "
                >
                  THE PERSON BEHIND
                  <br />
                  THE CRAFT
                </h3>

                {/* OWNER DESCRIPTION */}

            

                {/* DIVIDER */}

                <span
                  className="
                    mx-auto
                    mt-4
                    block
                    h-px
                    w-8
                    bg-white/50
                    dark:bg-[#d4a373]/50
                  "
                />

                {/* BRAND */}

                <span
                  className="
                    mt-4
                    block
                    font-[family-name:var(--font-montserrat)]
                    text-[8px]
                    font-semibold
                    uppercase
                    leading-none
                    tracking-[0.32em]
                    text-[#faf7f1]
                    dark:text-[#d4a373]

                    sm:text-[8.5px]

                    md:text-[9px]

                    lg:text-[9.5px]

                    xl:text-[10px]
                  "
                >
                  MON'S CRAFT OWNER
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   REASON CARD COMPONENT
============================================================ */

function ReasonCard({ reason }) {
  const isTop = reason.numberPosition === "top";

  return (
    <article
      className={`
        group
        relative
        h-full
        min-h-[245px]
        overflow-hidden
        rounded-[3px]

        px-6
        py-7

        sm:min-h-[250px]
        sm:px-7
        sm:py-8

        lg:min-h-[245px]
        lg:px-6
        lg:py-8

        xl:min-h-[260px]
        xl:px-7
        xl:py-9

        transition-transform
        duration-500
        hover:scale-[0.997]

        ${
          reason.dark
            ? "bg-[#6f4b35] dark:bg-[#3f210c]"
            : "bg-[#f2e9bd] dark:bg-[#241e1a]"
        }
      `}
    >
      {/* ==================================================
          WATERMARK NUMBER
      ================================================== */}

      <span
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          left-[4px]
          z-0
          select-none

          font-[family-name:var(--font-cormorant)]
          text-[135px]
          font-normal
          leading-[0.72]
          tracking-[-0.09em]

          transition-transform
          duration-700
          group-hover:translate-x-1

          sm:text-[145px]

          md:text-[145px]

          lg:text-[145px]

          xl:text-[155px]

          ${isTop ? "top-[5px]" : "bottom-[-7px]"}

          ${
            reason.dark
              ? "text-[#d7c3b1]/20 dark:text-[#d4a373]/15"
              : "text-[#a98d63]/30 dark:text-[#d4a373]/15"
          }
        `}
      >
        {reason.number}
      </span>

      {/* ==================================================
          CARD CONTENT
      ================================================== */}

      <div className="relative z-10">
        {/* CARD TITLE */}

        <h3
          className={`
            max-w-[500px]

            font-[family-name:var(--font-cormorant)]
            text-[23px]
            font-normal
            leading-[1]
            tracking-[-0.01em]

            sm:text-[24px]

            md:text-[25px]

            lg:text-[24px]

            xl:text-[27px]

            ${
              reason.dark
                ? "text-[#faf7f1] dark:text-[#d4a373]"
                : "text-[#643610] dark:text-[#d4a373]"
            }
          `}
        >
          {reason.title}
        </h3>

        {/* CARD DESCRIPTION */}

        <p
          className={`
            mt-4
            max-w-[390px]

            font-[family-name:var(--font-montserrat)]
            text-[9px]
            font-medium
            uppercase
            leading-[1.7]
            tracking-[0.2em]

            sm:text-[9.5px]
            sm:tracking-[0.22em]

            md:text-[10px]

            lg:text-[10.5px]

            xl:text-[11px]

            ${
              reason.dark
                ? "text-[#faf7f1]/75 dark:text-[#d4a373]/80"
                : "text-[#643610]/75 dark:text-[#d4a373]/80"
            }
          `}
        >
          {reason.description}
        </p>
      </div>
    </article>
  );
}