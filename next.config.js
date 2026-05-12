const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  const isDevelopmentServer = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    reactStrictMode: true,
    distDir: process.env.NEXT_DIST_DIR || (isDevelopmentServer ? '.next' : '.next-build'),
    trailingSlash: true,
    experimental: {
      cpus: 1,
    },
    output: 'export',
    images: {
      unoptimized: true,
    },
  };
};
