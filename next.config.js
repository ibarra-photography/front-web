/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  env: {
    API_URL: 'http://localhost:4000'
  }
};

module.exports = nextConfig;
