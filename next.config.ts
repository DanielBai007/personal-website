import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静态导出配置
  output: 'export',
  trailingSlash: true,
  
  // 图片优化配置
  images: {
    unoptimized: true,
  },
  
  // GitHub Pages路径配置
  basePath: '/personal-website',
  assetPrefix: '/personal-website/',
  
  // 禁用开发模式调试和错误显示
  reactStrictMode: false,
  swcMinify: true,
  
  // 构建时忽略错误
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // 禁用开发时的错误边界和警告
  experimental: {
    optimizePackageImports: [],
  },
};

export default nextConfig;
