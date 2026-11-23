import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Required by OpenNext (produces .next/standalone for the Cloudflare bundle).
  output: 'standalone',
};

export default nextConfig;
