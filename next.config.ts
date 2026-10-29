import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Keep prerender work modest on this development machine.
  experimental: { cpus: 1 },
};

export default nextConfig;
