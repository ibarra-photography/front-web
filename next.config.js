/** @type {import('next').NextConfig} */
const { PHASE_BUILD_SERVER } = require("next/constants");

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "custom",
  },
  env: {
    API_URL: PHASE_BUILD_SERVER
      ? "https://ibarra-photography.herokuapp.com/"
      : "http://localhost:4000",

    // "https://ibarra-photography.herokuapp.com/",
  },
};

module.exports = nextConfig;
