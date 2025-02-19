/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn3d.iconscout.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig; 