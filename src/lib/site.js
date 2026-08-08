export const SITE_URL = 'https://monscraft.netlify.app';

export const SITE_NAME = "Mon's Craft";

export const SITE_FULL_NAME = "Mon's Craft Floral Boutique";

export const DEFAULT_TITLE = "Mon's Craft | Flower Shop in Lupon, Davao Oriental";

export const DEFAULT_DESCRIPTION =
  "Discover handcrafted flower arrangements and bouquets from Mon's Craft in Lupon, Davao Oriental, made for birthdays, graduations, celebrations, and special occasions.";

export const OG_IMAGE = '/images/Logo.png';

export const PUBLIC_ROUTES = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/flowers', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
];

/** Verified from site content — replace placeholders when real details are available. */
export const BUSINESS = {
  name: SITE_FULL_NAME,
  location: {
    locality: 'Lupon',
    region: 'Davao Oriental',
    country: 'PH',
  },
  /** Listed on /contact — confirm this is your real number before relying on it in Search Console. */
  telephone: '+639123456789',
  hours: {
    weekdays: { opens: '09:00', closes: '18:00' },
    sundayClosed: true,
  },
};

export function absoluteUrl(path = '/') {
  return path.startsWith('http') ? path : `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
