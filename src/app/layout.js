import { Playfair_Display, Montserrat, Praise, Great_Vibes, Sacramento, Cormorant_Garamond } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import JsonLd from '../components/JsonLd';
import { floristJsonLd, metadata, viewport, websiteJsonLd } from '../lib/seo';
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

export { metadata, viewport };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${scriptFont.variable} ${montserrat.variable} ${praise.variable} ${sacramento.variable} ${cormorant.variable} font-sans antialiased text-gray-900 bg-white`}
      >
        <JsonLd data={websiteJsonLd} />
        <JsonLd data={floristJsonLd} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
