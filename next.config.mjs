const isProd = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isProd && !isVercel ? '/fappk-niable' : '');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: basePath,
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
