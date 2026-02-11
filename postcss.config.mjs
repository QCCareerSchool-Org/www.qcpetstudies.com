const isProd = process.env.NODE_ENV === 'production';

/** @type {import('@fullhuman/postcss-purgecss').UserDefinedOptions} */
const purgeCssOptions = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-bootstrap/**/*.js',
  ],
  safelist: {
    deep: [ /modal-/u, /show/u, /fade/u, /nav/u ],
    greedy: [ /^Toastify/u, /^react-multi-carousel/u, /^react-multiple-carousel/u ],
  },
  defaultExtractor: content => content.match(/[\w\-/:]+(?<!:)/gu) ?? [],
};

/** @type {import('postcss-preset-env').pluginOptions} */
const postCSSPresetEnvOptions = {
  autoprefixer: { flexbox: 'no-2009' },
  stage: 3,
  features: { 'custom-properties': false },
};

/** @type {import('postcss-load-config').Config} */
const postCSSConfig = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': postCSSPresetEnvOptions,
    ...(isProd ? { '@fullhuman/postcss-purgecss': purgeCssOptions } : {}),
  },
};

export default postCSSConfig;
