/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ["lh3.googleusercontent.com", "vercel.com", "api.dicebear.com"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/jurrianlammerts/WebStash",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
