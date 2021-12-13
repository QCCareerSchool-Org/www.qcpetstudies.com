/** @type {import('next').NextConfig} */

const withPurgeCss = require('next-purgecss');

module.exports = withPurgeCss({
  reactStrictMode: true,
  swcMinify: true,
  purgeCssPaths: [
    'src/pages/**/*',
    'src/components/**/*',
  ],
  purgeCss: {
    whitelistPatterns: () => [
      /^nav-/u,
      /^navbar-/u,
      /^dropdown-/u,
      /^modal-/u,
      /^bg-/u,
    ],
    whitelistPatternsChildren: () => [
      /^imageShadowWrapper/u,
    ],
    whitelist: () => [
      'nav',
      'navbar',
      'dropdown',
      'tab-content',
      'tab-pane',
      'fade',
      'modal',
      'active',
      'collapsing',
      'collapse',
      'show',
      'btn-close',
    ],
  },
});
