/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  webpack: (config) => {
    // This is needed for browserslist
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
};

module.exports = nextConfig;