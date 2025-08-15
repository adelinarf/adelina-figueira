/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  distDir: 'build',
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/adelina-figueira/' : '',
  basePath: isProd ? '/adelina-figueira' : '',
  output: 'export'
};

module.exports = nextConfig;

