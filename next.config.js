/** @type {import('next').NextConfig} */

const withPurgeCss = require('next-purgecss');

module.exports = withPurgeCss({
  reactStrictMode: true,
  purgeCssPaths: [
    'src/pages/**/*',
    'src/components/**/*',
  ],
  purgeCss: {
    whitelistPatterns: () => [ /^nav-/u, /^navbar-/u, /^dropdown-/u, /^modal-/u ],
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
      'bg-white',
    ],
  },
});
