"use client";

import Image from "next/image";

const galleryImages = [
  {
    src: "/images/Gallaries/5.png",
    alt: "Mon's Craft graphic design work",
  },
  {
    src: "/images/Gallaries/2.png",
    alt: "Mon's Craft handmade flower bouquet",
  },
  {
    src: "/images/Gallaries/3.png",
    alt: "Mon's Craft handmade crochet tulips",
  },
  {
    src: "/images/Gallaries/4.png",
    alt: "Mon's Craft floral bouquet creation",
  },
];

export default function GallerySection() {
  /*
   * Duplicate the images.
   * The second set follows the first set seamlessly.
   */
  const loopImages = [...galleryImages, ...galleryImages];

  return (
    <section
      aria-label="Mon's Craft Gallery"
      className="w-full overflow-hidden bg-[var(--surface)]"
    >
      {/* ==================================================
          INFINITE GALLERY TRACK
      ================================================== */}

      <div className="gallery-carousel">
        <div className="gallery-track">
          {loopImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="
                gallery-item
                group
                relative
                shrink-0
                overflow-hidden
                bg-[#f4f0eb]

                h-[320px]
                w-[75vw]

                sm:h-[380px]
                sm:w-[50vw]

                md:h-[430px]
                md:w-[33.333vw]

                lg:h-[450px]
                lg:w-[25vw]

                xl:h-[490px]

                2xl:h-[520px]
              "
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index < 4}
                quality={90}
                sizes="(max-width: 639px) 75vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33.333vw, 25vw"
                className="
                  object-cover
                  object-center
                  transition-transform
                  duration-1000
                  ease-out
                  group-hover:scale-[1.04]
                "
              />

              {/* Subtle overlay */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-black/0
                  transition-colors
                  duration-700
                  group-hover:bg-black/[0.04]
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}