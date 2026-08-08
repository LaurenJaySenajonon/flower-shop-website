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

// Google Script Font for "hannah" (Replaces local Halimum.ttf)
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

export const metadata = {
  title: "A Timeless Beauty | Premium Handcrafted Floral Arrangements",
  description: "Luxury handcrafted flower arrangements for birthdays, anniversaries, weddings and every special occasion.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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