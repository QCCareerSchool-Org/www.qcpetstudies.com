import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/*?*playAgain=',
      ],
      crawlDelay: 10,
    },
    sitemap: 'https://www.qcpetstudies.com/sitemap_index.xml',
  };
}
