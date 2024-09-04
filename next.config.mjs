/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['github.com'], // Allows images from GitHub to be optimized
    },
    experimental: {
      appDir: true, // Enable experimental app directory support (if needed)
    },
  };
  
  export default nextConfig;
  