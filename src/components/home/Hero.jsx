import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond, Montserrat } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export default function Hero() {
  return (
    <section className="relative flex min-h-svh w-full flex-col justify-between overflow-x-hidden bg-[#332a23] text-white">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/BG/2.png"
          alt="MonsCraft handmade and creative collection background"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#3b3028]/45" />
        <div className="absolute inset-0 bg-linear-to-b from-black/25 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-[#6b513e]/10" />
      </div>
      <div className="relative z-10 h-4 w-full shrink-0 pointer-events-none sm:h-10 [@media(max-height:500px)]:h-1" />
      <div className="relative z-10 my-auto flex w-full flex-col items-center justify-center px-4 py-4 sm:px-8 sm:py-8 [@media(max-height:500px)]:py-1">
        
        {/* BRAND TITLE + TAGLINE */}
        <div className="relative inline-flex max-w-full flex-col items-center lg:items-end">
          <h1
            className={`
              ${cormorant.className}
              text-center uppercase whitespace-nowrap select-none font-semibold lg:font-normal
              leading-[0.82] tracking-wide text-[#f8f1e9]
              text-[clamp(2.6rem,13vw,6.5rem)] lg:text-[clamp(7rem,12vw,13rem)]
              [@media(max-height:500px)]:text-[clamp(2rem,11.5vh,4rem)]
              drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)]
            `}
            style={{
              WebkitTextStroke: "clamp(1px, 0.2vw, 1.8px) #4a000e",
              paintOrder: "stroke fill",
            }}
          >
            MONSCRAFT
          </h1>

          <p
            className={`
              ${montserrat.className}
              whitespace-nowrap uppercase font-medium text-white/90
              text-center lg:text-right
              text-[7.5px] xs:text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px]
              [@media(max-height:500px)]:text-[7px]
              tracking-[0.25em] sm:tracking-[0.32em] md:tracking-[0.38em]
              mt-1 sm:mt-2 md:mt-3 [@media(max-height:500px)]:mt-0.5
              pr-0 lg:pr-[1%]
              drop-shadow-[0_2px_5px_rgba(0,0,0,0.65)]
            `}
          >
            TIMELESS BEAUTY AT BUDGET FRIENDLY
          </p>
        </div>

        <div className="mt-8 xs:mt-12 sm:mt-18 md:mt-22 [@media(max-height:500px)]:mt-3 flex w-full max-w-60 xs:max-w-[280px] sm:max-w-120 md:max-w-125 flex-col items-center justify-center gap-2.5 sm:flex-row sm:gap-4">
          
          {/* EXPLORE PRODUCTS */}
          <Link
            href="/#ShopByCategory"
            className={`
              ${montserrat.className}
              flex w-full sm:w-auto items-center justify-center
              px-3.5 xs:px-4 sm:px-5 md:px-6
              h-9 xs:h-[40px] sm:h-12 md:h-13
              [@media(max-height:500px)]:h-7.5 [@media(max-height:500px)]:px-3
              rounded-lg xs:rounded-xl sm:rounded-2xl
              border border-transparent bg-[#d4a373]
              text-[8px] xs:text-[9px] sm:text-[11px] md:text-[12px] [@media(max-height:500px)]:text-[7.5px]
              font-medium uppercase tracking-[0.14em] xs:tracking-[0.16em] sm:tracking-[0.20em]
              text-white shadow-lg
              transition-all duration-300 ease-out
              hover:bg-[#680014] hover:shadow-xl
              active:scale-[0.98]
            `}
          >
            EXPLORE PRODUCTS
          </Link>

          <Link
            href="/services"
            className={`
              ${montserrat.className}
              flex w-full max-w-50 xs:max-w-[220px] sm:w-auto sm:flex-1 sm:max-w-60
              items-center justify-center
              px-5 xs:px-6 sm:px-7 md:px-8
              h-9 xs:h-[40px] sm:h-12 md:h-13
              [@media(max-height:500px)]:h-7.5 [@media(max-height:500px)]:px-4
              rounded-lg xs:rounded-xl sm:rounded-2xl
              border border-white/40 bg-black/10 backdrop-blur-[2px]
              text-[8px] xs:text-[9px] sm:text-[11px] md:text-[12px] [@media(max-height:500px)]:text-[7.5px]
              font-medium uppercase tracking-[0.16em] sm:tracking-[0.22em]
              text-white/90
              transition-all duration-300 ease-out
              hover:border-white hover:bg-white/10 hover:text-white
              active:scale-[0.98]
            `}
          >
            EXPLORE SERVICES
          </Link>
        </div>
      </div>


      <div className="relative z-10 flex w-full shrink-0 justify-center px-4 pt-2 pb-4 sm:pb-8 [@media(max-height:500px)]:pb-1">
        <p
          className={`
            ${montserrat.className}
            text-center uppercase font-normal text-white/85
            text-[8px] xs:text-[9px] sm:text-[10px] md:text-[12px]
            [@media(max-height:500px)]:text-[7.5px]
            tracking-[0.28em] sm:tracking-[0.38em] md:tracking-[0.45em]
            drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)]
          `}
        >
          LUPON - DAVAO ORIENTAL
        </p>
      </div>
    </section>
  );
}