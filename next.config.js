/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "custom",
  },
  env: {
    API_URL: PHASE_DEVELOPMENT_SERVER
      ? "http://localhost:4000"
      : "https://ibarra-photography.herokuapp.com/",
  },
};

module.exports = nextConfig;
