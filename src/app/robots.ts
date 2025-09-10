import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [ 'Baiduspider', 'Yandex' ],
        disallow: '/',
      },
      {
        userAgent: '*',
        disallow: [
          '/wp-admin',
          '/blog/wp-admin',
          '/*?*playAgain=',
        ],
        allow: '/blog/wp-admin/admin-ajax.php',
        crawlDelay: 10,
      },
    ],
    sitemap: 'https://www.qcpetstudies.com/sitemap_index.xml',
  };
}
