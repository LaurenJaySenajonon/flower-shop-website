import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { flowerCollections } from "@/data/flowers";

export default async function FlowerDesignPage({ params }) {
  const { flower: flowerId, design: designId } = await params;

  const flower = flowerCollections.find(
    (item) => item.id === flowerId
  );

  const design = flower?.designs.find(
    (item) => item.id === designId
  );

  if (!flower || !design) {
    notFound();
  }

  return (
    <main className="min-h-screen theme-bg">
      <div
        className="
          mx-auto
          w-full
          max-w-[1800px]
          px-5
          pb-20
          pt-32

          sm:px-8
          sm:pt-36

          md:px-10

          lg:px-14
          lg:pt-40

          xl:px-20
          2xl:px-24
        "
      >
        {/* BACK */}

        <Link
          href="/flowers"
          className="
            inline-flex
            items-center
            gap-2
            font-[family-name:var(--font-montserrat)]
            text-[8px]
            font-medium
            uppercase
            tracking-[0.22em]
            theme-brand-muted
            transition-colors
            hover:theme-brand
          "
        >
          ← BACK TO FLOWER DESIGNS
        </Link>

        {/* HEADER */}

        <header className="mt-10">
          <span
            className="
              block
              font-[family-name:var(--font-montserrat)]
              text-[8px]
              font-medium
              uppercase
              tracking-[0.3em]
              theme-brand-muted
            "
          >
            {flower.name}
          </span>

          <h1
            className="
              mt-2
              font-[family-name:var(--font-serif)]
              text-[36px]
              font-medium
              leading-none
              theme-brand

              sm:text-[44px]
              md:text-[52px]
            "
          >
            {design.name}
          </h1>

          <p
            className="
              mt-4
              max-w-xl
              font-[family-name:var(--font-montserrat)]
              text-[10px]
              leading-[1.8]
              theme-brand-muted
            "
          >
            Explore the details of this handcrafted {flower.name.toLowerCase()}{" "}
            design.
          </p>
        </header>

        {/* DESIGN IMAGES */}

        <section
          className="
            mt-10
            grid
            grid-cols-1
            gap-5

            sm:grid-cols-2
            sm:gap-6

            lg:grid-cols-3
          "
        >
          {design.images.map((image, index) => (
            <div
              key={image}
              className="
                relative
                aspect-square
                overflow-hidden
                rounded-[5px]
                theme-surface-soft
              "
            >
              <Image
                src={image}
                alt={`${flower.name} ${design.name} view ${index + 1}`}
                fill
                priority={index === 0}
                sizes="
                  (max-width: 639px) 90vw,
                  (max-width: 1023px) 45vw,
                  30vw
                "
                className="
                  object-cover
                  object-center
                "
              />
            </div>
          ))}
        </section>

        {/* ORDER AREA */}

        <section
          className="
            mt-12
            border-t
            border-[var(--brand-border)]
            pt-8

            sm:mt-16
            sm:pt-10
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5

              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div>
              <span
                className="
                  block
                  font-[family-name:var(--font-montserrat)]
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  theme-brand-muted
                "
              >
                SELECTED DESIGN
              </span>

              <h2
                className="
                  mt-2
                  font-[family-name:var(--font-serif)]
                  text-[24px]
                  font-medium
                  theme-brand
                "
              >
                {design.name}
              </h2>
            </div>

            <button
              type="button"
              className="
                w-full
                rounded-[5px]
                bg-[var(--brand)]
                px-7
                py-4
                font-[family-name:var(--font-montserrat)]
                text-[8px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-white
                transition-opacity
                hover:opacity-90

                sm:w-auto
              "
            >
              BUY THIS DESIGN
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}