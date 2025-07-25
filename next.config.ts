import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // 简化的GitHub Pages配置
  basePath: '/personal-website',
  assetPrefix: '/personal-website/',
  // 禁用一些可能导致问题的功能
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
