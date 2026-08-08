import { PUBLIC_ROUTES, SITE_URL } from '../lib/site';

export default function sitemap() {
  return PUBLIC_ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: path === '/' ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
