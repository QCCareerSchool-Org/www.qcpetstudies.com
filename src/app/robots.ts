import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/*?*playAgain=',
      ],
    },
    sitemap: 'https://www.qcdesignschool.com/sitemap_index.xml',
  };
}
