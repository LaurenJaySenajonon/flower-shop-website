import Hero from '../components/home/Hero';
import GallerySection from "@/components/home/GallerySection";
import ShopByCategory from '../components/home/ShopByCategory';
import ServicesSection from "@/components/home/ServicesSection";
import BestSeller from "@/components/home/BestSellers";
import WhyChooseUs from "@/components/home/WhyChooseUs";
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
            < GallerySection />
                      <ShopByCategory />
            <ServicesSection/>
            <BestSeller/>
            <WhyChooseUs/>
    </div>
  );
}
