import type { NextConfig } from "next";

// Get the repository name from the environment or use a default
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'action-driving';

// Check if we're in production (GitHub Pages deployment)
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    // This is needed for browserslist
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
  // Generate static output for GitHub Pages
  output: 'export',
  // Set the base path and asset prefix for GitHub Pages
  ...(isProduction ? {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
    images: {
      unoptimized: true,
    },
  } : {}),
};

export default nextConfig;
