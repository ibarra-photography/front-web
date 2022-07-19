/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      images: {
        loader: "custom",
      },
      env: {
        API_URL: "http://localhost:4000",

        // "https://ibarra-photography.herokuapp.com/",
      },
    };
  }
};
return {
  reactStrictMode: true,
  images: {
    loader: "custom",
  },
  env: {
    API_URL: "https://ibarra-photography.herokuapp.com/",
    //  "http://localhost:4000",

    // "https://ibarra-photography.herokuapp.com/",
  },
};

module.exports = nextConfig;
