import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          'ChatGPT-User',
          'Meta-ExternalFetcher',
          'Amazonbot',
          'Applebot',
          'OAI-SearchBot',
          'PerplexityBot',
          'YouBot',
          'Applebot-Extended',
          'Bytespider',
          'CCBot',
          'ClaudeBot',
          'Diffbot',
          'FacebookBot',
          'Google-Extended',
          'GPTBot',
          'Meta-ExternalAgent',
          'omgili',
          'anthropic-ai',
          'Claude-Web',
          'cohere-ai',
          'Ai2Bot',
          'Ai2Bot-Dolma',
          'FriendlyCrawler',
          'GoogleOther',
          'GoogleOther-Image',
          'GoogleOther-Video',
          'ICC-Crawler',
          'ImagesiftBot',
          'PetalBot',
          'Scrapy',
          'Timpibot',
          'VelenPublicWebCrawler',
          'Webzio-Extended',
          'facebookexternalhit',
          'img2dataset',
        ],
        disallow: '/',
      },
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
