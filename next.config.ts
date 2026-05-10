import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Use basePath only in production for GitHub Pages subfolder deployment
  basePath: isProd ? '/Portfolio' : '',
  trailingSlash: true,
};

export default nextConfig;
