import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.akamai.steamstatic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.cloudflare.steamstatic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn2.unrealengine.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.onlinegames.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cloud.onlinegames.io',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
