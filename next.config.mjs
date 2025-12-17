/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    quietDeps: true,
    silenceDeprecations: [ 'import', 'global-builtin' ],
  },
};

export default nextConfig;
