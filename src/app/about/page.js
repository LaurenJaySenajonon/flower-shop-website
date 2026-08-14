import JsonLd from '../../components/seo/JsonLd';
import { absoluteUrl, SITE_FULL_NAME } from '../../lib/site';

export const metadata = {
  title: 'About Mon\'s Craft | Flower Shop in Lupon',
  description:
    'Learn about Mon\'s Craft, a flower shop in Lupon, Davao Oriental offering handcrafted arrangements for birthdays, weddings, anniversaries, and special occasions.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Mon\'s Craft | Flower Shop in Lupon',
    description:
      'Learn about Mon\'s Craft, a flower shop in Lupon, Davao Oriental offering handcrafted arrangements for birthdays, weddings, anniversaries, and special occasions.',
    url: absoluteUrl('/about'),
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where is Mon\'s Craft located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mon\'s Craft is located in Lupon, Davao Oriental, Philippines.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of flower arrangements does Mon\'s Craft offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mon\'s Craft creates handcrafted flower arrangements for birthdays, weddings, anniversaries, graduations, and other special occasions.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I contact Mon\'s Craft?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can contact Mon\'s Craft by phone or through Messenger. Visit the Contact page for current contact details.',
      },
    },
  ],
};

export default function About() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <main className="mx-auto max-w-6xl px-6 pt-32">
        <h1 className="mb-6 text-5xl font-bold">About {SITE_FULL_NAME}</h1>

        <p className="leading-8 text-gray-600">
          We specialize in creating beautiful flower arrangements for birthdays,
          weddings, anniversaries, and every special occasion in Lupon, Davao Oriental.
        </p>

        <section className="mt-10 space-y-6" aria-labelledby="about-faq-heading">
          <h2 id="about-faq-heading" className="text-2xl font-semibold text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900">Where is Mon&apos;s Craft located?</h3>
              <p>Mon&apos;s Craft is based in Lupon, Davao Oriental, Philippines.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">What occasions do you create flowers for?</h3>
              <p>
                We create arrangements for birthdays, weddings, anniversaries, graduations,
                and other celebrations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">How can I place an order?</h3>
              <p>
                Contact us by phone or Messenger through our{' '}
                <a href="/contact" className="text-[#f97316] hover:underline">
                  Contact page
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
