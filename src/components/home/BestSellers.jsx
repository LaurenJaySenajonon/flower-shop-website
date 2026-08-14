"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "FLOWER BOUQUET",
    price: "1,999",
    rating: 5,
    image: "/images/BestSellers/1.1.png",
    alt: "Mon's Craft flower bouquet",
  },
  {
    name: "BUTTON PIN",
    price: "1,999",
    rating: 5,
    image: "/images/BestSellers/2.png",
    alt: "Mon's Craft button pin",
  },
  {
    name: "CROCHET",
    price: "1,999",
    rating: 5,
    image: "/images/BestSellers/3.png",
    alt: "Mon's Craft crochet bouquet",
  },
];

export default function BestSellers() {
  return (
    <section
      id="best-sellers"
      aria-label="Mon's Craft Best Sellers"
      className="w-full overflow-hidden theme-bg transition-colors duration-300"
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
            SECTION HEADER
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
          {/* LEFT — TITLE */}
          <div>
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
              BEST SELLERS
            </span>

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
              CUSTOMER FAVORITES
            </h2>
          </div>

          {/* RIGHT — VIEW ALL */}
          <Link
            href="/categories"
            className="
              group
              mb-1
              hidden
              shrink-0
              items-center
              gap-3
              sm:flex
            "
          >
            <span
              className="
                font-[family-name:var(--font-montserrat)]
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.25em]
                theme-brand
                transition-opacity
                duration-300
                group-hover:opacity-60
                sm:text-[9px]
                md:text-[10px]
              "
            >
              VIEW ALL PRODUCTS
            </span>

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

        {/* ==================================================
            PRODUCT GRID
        ================================================== */}

        <div
          className="
            grid
            grid-cols-2
            gap-x-3
            gap-y-8
            sm:grid-cols-3
            sm:gap-x-5
            md:gap-x-7
            lg:gap-x-8
            xl:gap-x-10
          "
        >
          {products.map((product, index) => (
            <Link
              href={`/products/${product.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              key={`${product.name}-${index}`}
              className="
                group
                block
              "
            >
              {/* ==================================================
                  PRODUCT IMAGE
              ================================================== */}

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
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="
                    (max-width: 639px) 47vw,
                    (max-width: 1023px) 31vw,
                    30vw
                  "
                  quality={90}
                  className="
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.035]
                  "
                />

                {/* Subtle hover overlay */}
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

              {/* ==================================================
                  PRODUCT INFORMATION
              ================================================== */}

              <div className="pt-3 sm:pt-4">
                {/* PRODUCT NAME */}
                <h3
                  className="
                    font-[family-name:var(--font-serif)]
                    text-[13px]
                    font-medium
                    leading-none
                    tracking-[-0.01em]
                    theme-brand
                    sm:text-[15px]
                    md:text-[17px]
                    lg:text-[18px]
                  "
                >
                  {product.name}
                </h3>

                {/* PRICE */}
                <p
                  className="
                    mt-1.5
                    font-[family-name:var(--font-montserrat)]
                    text-[8px]
                    font-medium
                    tracking-[0.22em]
                    theme-brand-muted
                    sm:mt-2
                    sm:text-[9px]
                    md:text-[10px]
                  "
                >
                  {product.price}
                </p>

                {/* ==================================================
                    STAR RATING
                ================================================== */}

                <div
                  className="
                    mt-2
                    flex
                    items-center
                    gap-[2px]
                    sm:mt-2.5
                  "
                  aria-label={`${product.rating} out of 5 stars`}
                >
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      className="
                        h-3
                        w-3
                        fill-[var(--brand)]
                        sm:h-3.5
                        sm:w-3.5
                        md:h-4
                        md:w-4
                      "
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.47L12 17.31l-5.8 3.06 1.11-6.47-4.7-4.58 6.49-.94L12 2.5z" />
                    </svg>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ==================================================
            MOBILE — VIEW ALL
        ================================================== */}

        <div className="mt-10 flex justify-center sm:hidden">
          <Link
            href="/categories"
            className="
              group
              inline-flex
              items-center
              gap-3
            "
          >
            <span
              className="
                font-[family-name:var(--font-montserrat)]
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.22em]
                theme-brand
              "
            >
              VIEW ALL PRODUCTS
            </span>

            <svg
              className="
                h-3.5
                w-7
                theme-brand
                transition-transform
                duration-500
                group-hover:translate-x-1
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
    </section>
  );
}