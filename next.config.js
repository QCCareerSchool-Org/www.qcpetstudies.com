/** @type {import('next').NextConfig} */

const withPurgeCss = require('next-purgecss');

module.exports = withPurgeCss({
  reactStrictMode: true,
  purgeCssPaths: [
    'src/pages/**/*',
    'src/components/**/*',
  ],
  purgeCss: {
    whitelistPatterns: () => [ /^nav-/u, /^navbar-/u, /^dropdown-/u ],
    whitelist: () => [
      'nav',
      'navbar',
      'dropdown',
      'tab-content',
      'tab-pane',
      'fade',
      'active',
      'collapsing',
      'collapse',
      'show',
      'bg-white',
    ],
  },
});
