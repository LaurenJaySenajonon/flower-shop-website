import Hero from '../components/Hero';
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, SITE_URL } from '../lib/site';

export const metadata = {
  title: {
    absolute: DEFAULT_TITLE,
  },
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Hero />
    </div>
  );
}
