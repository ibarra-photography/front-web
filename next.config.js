/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "custom",
  },
  env: {
    API_URL: "http://localhost:4000",
  },
};

module.exports = nextConfig;
