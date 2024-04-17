/** @type {import('next').NextConfig} */
const nextConfig = {
  // images.unsplash.com
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
