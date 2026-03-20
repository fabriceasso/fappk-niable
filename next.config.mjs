/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/fappk-niable',
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
