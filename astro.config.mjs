// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = 'https://hennessychauffeurs.ie';

// @ts-expect-error - SitemapItem from integration
function sitemapSerialize(item) {
  const path = new URL(item.url).pathname.replace(/\/$/, '') || '/';
  if (path === '/') {
    return { ...item, priority: 1.0 };
  }
  if (['/airportTransfers', '/businessTravel', '/specialOccasions', '/tours'].includes(path)) {
    return { ...item, priority: 0.8 };
  }
  if (['/aboutMe', '/contact'].includes(path)) {
    return { ...item, priority: 0.7 };
  }
  if (['/privacy', '/terms', '/cookies'].includes(path)) {
    return { ...item, priority: 0.5 };
  }
  return { ...item, priority: 0.7 };
}

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('thank-you'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});