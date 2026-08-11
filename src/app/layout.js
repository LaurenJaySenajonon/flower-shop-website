import {
  Playfair_Display,
  Montserrat,
  Praise,
  Great_Vibes,
  Sacramento,
  Cormorant_Garamond,
  Cinzel_Decorative,
} from 'next/font/google';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import JsonLd from '../components/JsonLd';

import {
  floristJsonLd,
  viewport,
  websiteJsonLd,
} from '../lib/seo';

import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const praise = Praise({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-praise',
  display: 'swap',
});

const scriptFont = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
});

const sacramento = Sacramento({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-sacramento',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const cinzel = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cinzel',
  display: 'swap',
});

const siteUrl = 'https://monscraft.netlify.app';

export const metadata = {
  metadataBase: new URL(siteUrl),

  // 🔹 ADDED TAB LOGO / FAVICON CONFIGURATION
  icons: {
    icon: '/images/Logo.png',
    shortcut: '/images/Logo.png',
    apple: '/images/Logo.png',
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
    canonical: '/',
  },

  openGraph: {
    title: "Mon's Craft | Handcrafted Floral Boutique in Lupon",
    description:
      "Discover handcrafted floral arrangements, custom bouquets, and gifts from Mon's Craft in Lupon, Davao Oriental.",
    url: siteUrl,
    siteName: "Mon's Craft",
    locale: 'en_PH',
    type: 'website',

    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Mon's Craft Floral Boutique in Lupon, Davao Oriental",
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: "Mon's Craft | Handcrafted Floral Boutique",
    description:
      "Handcrafted floral arrangements, custom bouquets, and gifts from Mon's Craft in Lupon, Davao Oriental.",
    images: ['/images/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export { viewport };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${scriptFont.variable} ${montserrat.variable} ${praise.variable} ${sacramento.variable} ${cormorant.variable} ${cinzel.variable} font-sans antialiased text-gray-900 bg-white`}
      >
        {/* Structured Data - Local Business */}
        <JsonLd data={floristJsonLd} />

        {/* Structured Data - Website */}
        <JsonLd data={websiteJsonLd} />

        {/* Main Navigation */}
        <Navbar />

        {/* Page Content */}
        {children}

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}