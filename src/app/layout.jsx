import {
  Cantora_One,
  Cinzel_Decorative,
  Cormorant_Garamond,
  Great_Vibes,
  Montserrat,
  Playfair_Display,
  Praise,
  Sacramento,
} from "next/font/google";

import ContactButton from "@/components/layout/ContactButton";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/home/Footer";
import JsonLd from "@/components/seo/JsonLd";
import Preloader from "@/components/ui/Preloader";
import SmoothScroll from "@/components/utilities/SmoothScroll";
import UnderDevelopmentModal from "@/components/utilities/UnderDevelopmentModal";

import {
  floristJsonLd,
  viewport,
  websiteJsonLd,
} from "@/lib/seo";

import "./globals.css";

/* ==================================================
   FONTS
================================================== */

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const praise = Praise({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-praise",
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sacramento",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const cantora = Cantora_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cantora",
  display: "swap",
});

/* ==================================================
   SITE CONFIGURATION
================================================== */

const siteUrl = "https://monscraft.netlify.app";

/* ==================================================
   METADATA
================================================== */

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Mon's Craft | Handcrafted Floral Boutique in Lupon",
    template: "%s | Mon's Craft",
  },

  description:
    "Timeless beauty at budget-friendly prices. Mon's Craft Floral Boutique offers handcrafted flower arrangements, custom bouquets, and gifts in Lupon, Davao Oriental.",

  keywords: [
    "Mon's Craft",
    "Mon's Craft Floral Boutique",
    "flower shop Lupon",
    "flower shop Davao Oriental",
    "flowers in Lupon",
    "flower arrangements Lupon",
    "handcrafted bouquets Lupon",
    "Davao Oriental florist",
    "affordable flowers Lupon",
    "custom flower arrangements",
    "floral boutique Philippines",
  ],

  authors: [
    {
      name: "Mon's Craft",
    },
  ],

  creator: "Mon's Craft",
  publisher: "Mon's Craft",

  icons: {
    icon: "/images/Logo.png",
    shortcut: "/images/Logo.png",
    apple: "/images/Logo.png",
  },

  verification: {
    google: "-cYz3ZPFgiv8B6Hn5sEe5E-HXz0BmrXp5pNyUg8iLHw",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Mon's Craft | Handcrafted Floral Boutique in Lupon",
    description:
      "Discover handcrafted floral arrangements, custom bouquets, and gifts from Mon's Craft in Lupon, Davao Oriental.",
    url: siteUrl,
    siteName: "Mon's Craft",
    locale: "en_PH",
    type: "website",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mon's Craft Floral Boutique in Lupon, Davao Oriental",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mon's Craft | Handcrafted Floral Boutique",
    description:
      "Handcrafted floral arrangements, custom bouquets, and gifts from Mon's Craft in Lupon, Davao Oriental.",
    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export { viewport };

/* ==================================================
   ROOT LAYOUT
================================================== */

export default function RootLayout({ children }) {
  const fontVariables = [
    playfair.variable,
    greatVibes.variable,
    montserrat.variable,
    praise.variable,
    sacramento.variable,
    cormorant.variable,
    cinzel.variable,
    cantora.variable,
  ].join(" ");

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className={`
          ${fontVariables}
          font-[family-name:var(--font-sans)]
          antialiased
          bg-[var(--background)]
          text-[var(--foreground)]
          transition-colors
          duration-500
        `}
      >
        <Preloader />

        <SmoothScroll>
          <UnderDevelopmentModal />

          <JsonLd data={floristJsonLd} />
          <JsonLd data={websiteJsonLd} />

          <Navbar />

          {children}

          <ContactButton />

          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}