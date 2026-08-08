import {
  SITE_URL,
  SITE_NAME,
  SITE_FULL_NAME,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  OG_IMAGE,
  BUSINESS,
  absoluteUrl,
} from '../lib/site';

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  alternateName: SITE_FULL_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
};

export const floristJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Florist',
  name: SITE_FULL_NAME,
  url: SITE_URL,
  logo: absoluteUrl('/images/Logo.png'),
  image: absoluteUrl('/images/4.png'),
  description: DEFAULT_DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    addressLocality: BUSINESS.location.locality,
    addressRegion: BUSINESS.location.region,
    addressCountry: BUSINESS.location.country,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: BUSINESS.hours.weekdays.opens,
      closes: BUSINESS.hours.weekdays.closes,
    },
  ],
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: OG_IMAGE,
    apple: OG_IMAGE,
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_PH',
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_FULL_NAME} logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
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
