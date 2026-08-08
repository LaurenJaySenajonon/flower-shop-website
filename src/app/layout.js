import { Playfair_Display, Montserrat, Praise, Great_Vibes, Sacramento, Cormorant_Garamond } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

// Serif Font for Titles
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

// Sans Font for Body
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

// Praise Font for "A Timeless Beauty at Budget-Friendly"
const praise = Praise({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-praise',
  display: 'swap',
});

// Google Script Font for "hannah"
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

// Netlify live domain
const siteUrl = 'https://monscraft.netlify.app';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mon's Craft | Handcrafted Floral Boutique in Lupon",
    template: "%s | Mon's Craft",
  },
  description:
    "Timeless beauty at budget-friendly prices. Mon's Craft Floral Boutique offers luxury handcrafted flower arrangements, custom bouquets, and gifts in Lupon, Davao Oriental.",
  keywords: [
    "Mon's Craft",
    "monscraft",
    "Mon Craft",
    "Mon's Craft Floral Boutique",
    "flower shop Lupon",
    "floral boutique Philippines",
    "custom flower arrangements",
    "handcrafted bouquets Lupon",
    "Davao Oriental florist",
    "budget friendly flowers",
    "Hannah Diamond Balquin",
  ],
  authors: [{ name: "Mon's Craft" }],
  creator: "Mon's Craft",
  publisher: "Mon's Craft",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Mon's Craft | Floral Boutique",
    description: "Timeless beauty at budget-friendly prices. Premium handcrafted floral arrangements in Lupon, Philippines.",
    url: siteUrl,
    siteName: "Mon's Craft",
    locale: 'en_PH',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Mon's Craft Floral Boutique",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mon's Craft | Floral Boutique",
    description: "Timeless beauty at budget-friendly prices. Premium handcrafted floral arrangements.",
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

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  // Google Structured Data (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Florist',
    name: "Mon's Craft Floral Boutique",
    alternateName: ["monscraft", "Mon's Craft", "Mon Craft"],
    image: `${siteUrl}/images/logo.png`,
    '@id': siteUrl,
    url: siteUrl,
    priceRange: '₱₱',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lupon',
      addressRegion: 'Davao Oriental',
      addressCountry: 'PH',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '08:00',
      closes: '18:00',
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body 
        className={`${playfair.variable} ${scriptFont.variable} ${montserrat.variable} ${praise.variable} ${sacramento.variable} ${cormorant.variable} font-sans antialiased text-gray-900 bg-white`}
      >
        <Navbar />
        
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}