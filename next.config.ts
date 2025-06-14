import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    // This is needed for browserslist
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
};

export default nextConfig;
