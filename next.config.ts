import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    agentUpgrade: 'latest',
  },
  sassOptions: {
    quietDeps: true, // hide deprecation warnings from node_modules
    // If your sass-loader / Sass version supports it, you can also do:
    silenceDeprecations: [ 'import', 'global-builtin' ],
  },
};

export default nextConfig;
