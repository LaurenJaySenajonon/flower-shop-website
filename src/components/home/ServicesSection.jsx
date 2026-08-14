"use client";

import Link from "next/link";

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-label="Mon's Craft Services"
      className="w-full overflow-hidden bg-[var(--background)]"
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
          py-14
          sm:py-18
          md:py-20
          lg:py-24
          xl:py-28
        "
      >
        {/* ==================================================
            EDITORIAL 2 × 2 GRID
        ================================================== */}
        <div
          className="
            grid
            grid-cols-1
            gap-8
            sm:gap-10
            lg:grid-cols-2
            lg:gap-x-10
            lg:gap-y-0
            xl:gap-x-14
            2xl:gap-x-16
          "
        >
          {/* ==================================================
              TOP LEFT — IMAGE COLLAGE PLACEHOLDER
          ================================================== */}
          <div
            className="
              order-1
              aspect-[1.45/1]
              overflow-hidden
              rounded-[5px]
              bg-[var(--surface-soft)]
            "
          >
            <div className="grid h-full w-full grid-cols-2 grid-rows-2">
              {/* Placeholder 1 */}
              <div
                className="
                  border-r
                  border-b
                  border-[var(--background)]
                  bg-[var(--surface-soft)]
                "
              />

              {/* Placeholder 2 */}
              <div
                className="
                  border-b
                  border-[var(--background)]
                  bg-[var(--surface)]
                "
              />

              {/* Placeholder 3 */}
              <div
                className="
                  border-r
                  border-[var(--background)]
                  bg-[var(--surface-soft)]
                "
              />

              {/* Placeholder 4 */}
              <div
                className="
                  bg-[var(--surface)]
                "
              />
            </div>
          </div>

          {/* ==================================================
              TOP RIGHT — CUSTOMIZED PRODUCTS
          ================================================== */}
          <div
            className="
              order-2
              flex
              aspect-[1.45/1]
              flex-col
              justify-center
              rounded-[5px]
              bg-[var(--background)]
              px-6
              sm:px-10
              lg:px-8
              xl:px-12
              2xl:px-14
            "
          >
            <span
              className="
                mb-4
                block
                font-[family-name:var(--font-montserrat)]
                text-[8px]
                font-medium
                uppercase
                tracking-[0.35em]
                text-[var(--brand-muted)]
                sm:text-[9px]
                sm:tracking-[0.4em]
              "
            >
              CUSTOMIZED PRODUCTS
            </span>

            <h2
              className="
                max-w-[520px]
                font-[family-name:var(--font-serif)]
                text-[28px]
                font-medium
                leading-[0.98]
                tracking-[-0.025em]
                text-[var(--brand)]
                sm:text-[34px]
                md:text-[38px]
                lg:text-[36px]
                xl:text-[44px]
                2xl:text-[48px]
              "
            >
              HAVE SOMETHING
              <br />
              SPECIAL IN MIND?
            </h2>

            <p
              className="
                mt-5
                max-w-[420px]
                font-[family-name:var(--font-montserrat)]
                text-[9px]
                font-medium
                uppercase
                leading-[1.7]
                tracking-[0.22em]
                text-[var(--brand-muted)]
                sm:text-[10px]
                sm:tracking-[0.28em]
              "
            >
              TURN YOUR IDEA INTO
              <br />
              SOMETHING UNIQUELY YOURS.
            </p>

            <div className="mt-6 sm:mt-7">
              <Link
                href="/customize"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-[5px]
                  border
                  border-[var(--brand-border)]
                  px-6
                  py-2.5
                  font-[family-name:var(--font-montserrat)]
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[var(--brand)]
                  transition-all
                  duration-500
                  hover:border-[var(--brand)]
                  hover:bg-[var(--brand)]
                  hover:text-[var(--background)]
                  sm:px-7
                  sm:py-3
                  sm:text-[9px]
                "
              >
                CUSTOMIZE NOW
              </Link>
            </div>
          </div>

          {/* ==================================================
              BOTTOM LEFT — OUR SERVICES
          ================================================== */}
          <div
            className="
              order-4
              flex
              aspect-[1.45/1]
              flex-col
              justify-center
              rounded-[5px]
              bg-[var(--background)]
              px-6
              sm:px-10
              lg:order-3
              lg:px-8
              xl:px-12
              2xl:px-14
            "
          >
            <span
              className="
                mb-4
                block
                font-[family-name:var(--font-montserrat)]
                text-[8px]
                font-medium
                uppercase
                tracking-[0.35em]
                text-[var(--brand-muted)]
                sm:text-[9px]
                sm:tracking-[0.4em]
              "
            >
              OUR SERVICES
            </span>

            <h2
              className="
                max-w-[520px]
                font-[family-name:var(--font-serif)]
                text-[28px]
                font-medium
                leading-[0.98]
                tracking-[-0.025em]
                text-[var(--brand)]
                sm:text-[34px]
                md:text-[38px]
                lg:text-[36px]
                xl:text-[44px]
                2xl:text-[48px]
              "
            >
              MORE THAN MADE
              <br />
              PRODUCTS.
            </h2>

            <p
              className="
                mt-5
                max-w-[420px]
                font-[family-name:var(--font-montserrat)]
                text-[9px]
                font-medium
                uppercase
                leading-[1.7]
                tracking-[0.22em]
                text-[var(--brand-muted)]
                sm:text-[10px]
                sm:tracking-[0.28em]
              "
            >
              WE ALSO OFFER CREATIVE GRAPHIC
              <br className="hidden sm:block" />
              DESIGN SERVICES.
            </p>

            <div className="mt-6 sm:mt-7">
              <Link
                href="/services"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-[5px]
                  border
                  border-[var(--brand-border)]
                  px-6
                  py-2.5
                  font-[family-name:var(--font-montserrat)]
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[var(--brand)]
                  transition-all
                  duration-500
                  hover:border-[var(--brand)]
                  hover:bg-[var(--brand)]
                  hover:text-[var(--background)]
                  sm:px-7
                  sm:py-3
                  sm:text-[9px]
                "
              >
                EXPLORE SERVICES
              </Link>
            </div>
          </div>

          {/* ==================================================
              BOTTOM RIGHT — GRAPHIC DESIGN CARD
          ================================================== */}
          <Link
            href="/services"
            className="
              group
              order-3
              relative
              flex
              aspect-[1.45/1]
              overflow-hidden
              rounded-[5px]
              bg-[#b96532]
              px-7
              py-8
              transition-transform
              duration-500
              hover:scale-[0.995]
              lg:order-4
              sm:px-10
              sm:py-10
              lg:px-8
              lg:py-8
              xl:px-12
              xl:py-12
              2xl:px-14
              2xl:py-14
            "
          >
            {/* Inner decorative frame */}
            <div
              className="
                pointer-events-none
                absolute
                inset-4
                rounded-[3px]
                border
                border-white/15
                transition-all
                duration-700
                group-hover:inset-3
                group-hover:border-white/25
                sm:inset-5
                sm:group-hover:inset-4
              "
            />

            {/* Decorative vertical line */}
            <div
              className="
                absolute
                right-5
                top-5
                h-14
                w-px
                bg-white/70
                sm:right-7
                sm:top-7
                sm:h-20
              "
            />

            {/* Content */}
            <div className="relative z-10 flex h-full w-full flex-col">
              <div>
                <span
                  className="
                    block
                    font-[family-name:var(--font-montserrat)]
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.35em]
                    text-white/65
                    sm:text-[9px]
                    sm:tracking-[0.45em]
                  "
                >
                  GRAPHIC DESIGN
                </span>

                <h2
                  className="
                    mt-2
                    font-[family-name:var(--font-serif)]
                    text-[36px]
                    font-medium
                    leading-[0.9]
                    tracking-[-0.025em]
                    text-[#faf7f1]
                    sm:text-[44px]
                    md:text-[48px]
                    lg:text-[44px]
                    xl:text-[52px]
                    2xl:text-[56px]
                  "
                >
                  SERVICES
                </h2>
              </div>

              {/* Bottom content */}
              <div className="mt-auto">
                <p
                  className="
                    font-[family-name:var(--font-sacramento)]
                    text-[32px]
                    leading-none
                    text-white/80
                    sm:text-[38px]
                    md:text-[42px]
                  "
                >
                  Made with creativity
                </p>

                <p
                  className="
                    mt-4
                    max-w-[280px]
                    font-[family-name:var(--font-montserrat)]
                    text-[7px]
                    font-medium
                    uppercase
                    leading-[1.7]
                    tracking-[0.2em]
                    text-white/55
                    sm:text-[8px]
                  "
                >
                  CREATIVE IDEAS, BEAUTIFULLY
                  <br />
                  TRANSFORMED INTO DESIGN.
                </p>
              </div>

              {/* Arrow */}
              <span
                className="
                  absolute
                  bottom-0
                  right-0
                  text-lg
                  text-white/70
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}