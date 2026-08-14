import {
  Playfair_Display,
  Montserrat,
  Praise,
  Great_Vibes,
  Sacramento,
  Cormorant_Garamond,
  Cinzel_Decorative,
  Cantora_One,
} from "next/font/google";

import Navbar from "../components/layout/Navbar";
import FeaturesBanner from "../components/home/FeaturesBanner";
import CustomerReviews from "../components/layout/CustomerReviews";
import Footer from "../components/home/Footer";
import JsonLd from "../components/seo/JsonLd";
import ContactButton from "../components/layout/ContactButton";
import SmoothScroll from "../components/utilities/SmoothScroll";
import UnderDevelopmentModal from "../components/utilities/UnderDevelopmentModal";
import Preloader from "../components/ui/Preloader";

import {
  floristJsonLd,
  viewport,
  websiteJsonLd,
} from "../lib/seo";

import "./globals.css";

/* ==================================================
   FONTS
================================================== */

const cantora = Cantora_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cantora",
  display: "swap",
});

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

const scriptFont = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
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

/* ==================================================
   SITE URL
================================================== */

const siteUrl = "https://monscraft.netlify.app";

/* ==================================================
   METADATA
================================================== */

export const metadata = {
  metadataBase: new URL(siteUrl),

  icons: {
    icon: "/images/Logo.png",
    shortcut: "/images/Logo.png",
    apple: "/images/Logo.png",
  },

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
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        {/* ==================================================
            THEME INITIALIZER

            Runs before the page becomes visible.
            Prevents light/dark flash on refresh.
        ================================================== */}

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var theme = localStorage.getItem("monscraft-theme");

                  if (theme === "dark") {
                    document.documentElement.classList.add("dark");
                  } else {
                    document.documentElement.classList.remove("dark");
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>

      <body
        className={`
          ${playfair.variable}
          ${scriptFont.variable}
          ${montserrat.variable}
          ${praise.variable}
          ${sacramento.variable}
          ${cormorant.variable}
          ${cinzel.variable}
          ${cantora.variable}

          font-[family-name:var(--font-sans)]
          antialiased

          bg-[var(--background)]
          text-[var(--foreground)]

          transition-colors
          duration-500
        `}
      >
        {/* ==================================================
            PRELOADER
        ================================================== */}

        <Preloader />

        <SmoothScroll>
          {/* ==================================================
              DEVELOPMENT MODAL
          ================================================== */}

          <UnderDevelopmentModal />

          {/* ==================================================
              STRUCTURED DATA
          ================================================== */}

          <JsonLd data={floristJsonLd} />
          <JsonLd data={websiteJsonLd} />

          {/* ==================================================
              NAVIGATION
          ================================================== */}

          <Navbar />

          {/* ==================================================
              PAGE CONTENT
          ================================================== */}

          {children}

          {/* ==================================================
              GLOBAL SECTIONS
          ================================================== */}

          <FeaturesBanner />

          <ContactButton />

          <CustomerReviews />

          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}