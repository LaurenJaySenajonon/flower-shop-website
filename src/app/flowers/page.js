import { absoluteUrl } from '../../lib/site';

export const metadata = {
  title: 'Flower Bouquets & Arrangements',
  description:
    'Browse handcrafted flower bouquets and arrangements from Mon\'s Craft in Lupon, Davao Oriental for birthdays, weddings, anniversaries, and special occasions.',
  alternates: {
    canonical: '/flowers',
  },
  openGraph: {
    title: 'Flower Bouquets & Arrangements | Mon\'s Craft',
    description:
      'Browse handcrafted flower bouquets and arrangements from Mon\'s Craft in Lupon, Davao Oriental for birthdays, weddings, anniversaries, and special occasions.',
    url: absoluteUrl('/flowers'),
  },
};

export default function Flowers() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 pt-32">
      <h1 className="mb-4 text-4xl font-bold">Flower Bouquets &amp; Arrangements</h1>

      <p className="mb-6 text-gray-600">
        Welcome to Mon&apos;s Craft in Lupon, Davao Oriental. We create handcrafted flower
        arrangements for birthdays, weddings, anniversaries, graduations, and other special occasions.
      </p>

      <p className="text-gray-600">
        Ready to order?{' '}
        <a href="/contact" className="text-[#f97316] hover:underline">
          Contact Mon&apos;s Craft
        </a>{' '}
        or{' '}
        <a href="/about" className="text-[#f97316] hover:underline">
          learn more about us
        </a>
        .
      </p>
    </main>
  );
}
