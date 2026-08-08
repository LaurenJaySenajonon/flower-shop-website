import { absoluteUrl, BUSINESS } from '../../lib/site';

export const metadata = {
  title: 'Contact Mon\'s Craft | Lupon, Davao Oriental',
  description:
    'Contact Mon\'s Craft in Lupon, Davao Oriental to order handcrafted flower arrangements and bouquets for your next celebration.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Mon\'s Craft | Lupon, Davao Oriental',
    description:
      'Contact Mon\'s Craft in Lupon, Davao Oriental to order handcrafted flower arrangements and bouquets for your next celebration.',
    url: absoluteUrl('/contact'),
  },
};

export default function Contact() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-32">
      <h1 className="mb-6 text-5xl font-bold">Contact Mon&apos;s Craft</h1>

      <p className="mb-4 text-gray-600">
        Reach out to order handcrafted flower arrangements in Lupon, Davao Oriental.
      </p>

      <div className="space-y-3 text-gray-600">
        <p>
          <span className="font-semibold text-gray-900">Location:</span>{' '}
          {BUSINESS.location.locality}, {BUSINESS.location.region}, Philippines
        </p>
        <p>
          <span className="font-semibold text-gray-900">Messenger:</span> Your Flower Shop
        </p>
        <p>
          <span className="font-semibold text-gray-900">Phone:</span>{' '}
          <a href={`tel:${BUSINESS.telephone}`} className="text-[#f97316] hover:underline">
            +63 912 345 6789
          </a>
        </p>
        <p>
          <span className="font-semibold text-gray-900">Hours:</span> Monday – Saturday, 9:00 AM – 6:00 PM. Sunday closed.
        </p>
      </div>
    </main>
  );
}
