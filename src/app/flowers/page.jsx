import Image from "next/image";
import Link from "next/link";
import { flowerCollections } from "@/data/flowers";

export const metadata = {
  title: "Flower Bouquets | Mon's Craft",
  description:
    "Explore handmade tulips, satin, rose, and lilies flower bouquet designs from Mon's Craft.",
  alternates: {
    canonical: "/flowers",
  },
};

export default function FlowersPage() {
  return (
    <main className="min-h-screen theme-bg transition-colors duration-300">
      <div
        className="
          mx-auto w-full max-w-[1800px]
          px-5 pb-20 pt-32
          sm:px-8 sm:pb-24 sm:pt-36
          md:px-10
          lg:px-14 lg:pb-28 lg:pt-40
          xl:px-20
          2xl:px-24
        "
      >
        {/* HEADER */}
        <header className="mb-12 sm:mb-16 md:mb-20">
          <span
            className="
              block
              font-[family-name:var(--font-montserrat)]
              text-[8px] font-medium uppercase
              tracking-[0.32em]
              theme-brand-muted
              sm:text-[9px] sm:tracking-[0.38em]
              md:text-[10px]
            "
          >
            HOMEMADE FLOWER BOQUETS
          </span>

          <h1
            className="
              mt-2
              font-[family-name:var(--font-serif)]
              text-[32px] font-medium leading-none
              tracking-[-0.025em]
              theme-brand
              sm:text-[40px]
              md:text-[48px]
              lg:text-[56px]
              xl:text-[60px]
            "
          >
            OUR FLOWER DESIGNS
          </h1>

          <p
            className="
              mt-5 max-w-xl
              font-[family-name:var(--font-montserrat)]
              text-[9px] font-medium leading-[1.8]
              tracking-[0.02em]
              theme-brand-muted
              sm:text-[10px]
              md:text-[11px]
            "
          >
            Explore our handmade flower designs, thoughtfully crafted to make
            every occasion a little more special.
          </p>
        </header>

        {/* FLOWER COLLECTIONS */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {flowerCollections.map((flower) => (
            <section key={flower.id}>
              {/* FLOWER HEADER */}
              <div
                className="
                  mb-6 flex items-center gap-4
                  sm:mb-8 sm:gap-5
                "
              >
                <h2
                  className="
                    shrink-0
                    font-[family-name:var(--font-serif)]
                    text-[24px] font-medium leading-none
                    theme-brand
                    sm:text-[30px]
                    md:text-[34px]
                  "
                >
                  {flower.name}
                </h2>

                <div className="h-px flex-1 theme-brand-muted opacity-20" />
              </div>

              {/* PRODUCT GRID */}
              <div
                className="
                  grid grid-cols-1 gap-5
                  sm:grid-cols-2 sm:gap-6
                  lg:grid-cols-3 lg:gap-5
                  xl:gap-6
                "
              >
                {flower.designs.map((design) => (
                  <Link
                    key={design.id}
                    href={`/flowers/${flower.id}/${design.id}`}
                    className="group block"
                  >
                    {/* IMAGE BOX */}
                    <div
                      className="
                        relative
                        aspect-square
                        w-full
                        overflow-hidden
                        rounded-[5px]
                        theme-surface-soft
                      "
                    >
                      {design.image ? (
                        <Image
                          src={design.image}
                          alt={`${flower.name} ${design.name}`}
                          fill
                          sizes="
                            (max-width: 639px) 90vw,
                            (max-width: 1023px) 45vw,
                            (max-width: 1279px) 30vw,
                            28vw
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
                      ) : (
                        <div
                          className="
                            absolute inset-0
                            flex items-center justify-center
                            theme-surface-soft
                          "
                        >
                          <span
                            className="
                              font-[family-name:var(--font-montserrat)]
                              text-[7px]
                              font-medium
                              uppercase
                              tracking-[0.2em]
                              theme-brand-muted
                            "
                          >
                            IMAGE UNAVAILABLE
                          </span>
                        </div>
                      )}
                    </div>

                    {/* PRODUCT INFORMATION */}
                    <div className="mt-3 sm:mt-4">
                      <div className="flex items-center justify-between gap-4">
                        <div className="min-w-0">
                          <h3
                            className="
                              truncate
                              font-[family-name:var(--font-serif)]
                              text-[16px]
                              font-medium
                              leading-none
                              theme-brand
                              sm:text-[18px]
                            "
                          >
                            {design.name}
                          </h3>

                          <span
                            className="
                              mt-1.5 block
                              font-[family-name:var(--font-montserrat)]
                              text-[7px]
                              font-medium
                              uppercase
                              tracking-[0.22em]
                              theme-brand-muted
                              sm:text-[8px]
                            "
                          >
                            {flower.name}
                          </span>
                        </div>

                        {/* CHOOSE DESIGN */}
                        <span
                          className="
                            shrink-0
                            rounded-[5px]
                            border
                            border-[var(--brand-border)]
                            px-3
                            py-2
                            font-[family-name:var(--font-montserrat)]
                            text-[7px]
                            font-medium
                            uppercase
                            tracking-[0.18em]
                            theme-brand
                            transition-all
                            duration-300
                            group-hover:bg-[var(--brand)]
                            group-hover:text-white
                            sm:px-4
                            sm:py-2.5
                            sm:text-[8px]
                          "
                        >
                          CHOOSE DESIGN
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* BACK TO SHOP */}
        <div className="mt-20 sm:mt-24">
          <Link
            href="/"
            className="
              inline-flex
              items-center
              gap-2
              font-[family-name:var(--font-montserrat)]
              text-[8px]
              font-medium
              uppercase
              tracking-[0.25em]
              theme-brand-muted
              transition-colors
              hover:theme-brand
            "
          >
            <span aria-hidden="true">←</span>
            <span>BACK TO SHOP</span>
          </Link>
        </div>
      </div>
    </main>
  );
}