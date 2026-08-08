export default function robots() {
  // Replace with your actual live Netlify URL or custom domain
  const baseUrl = 'https://monscraft.netlify.app';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}