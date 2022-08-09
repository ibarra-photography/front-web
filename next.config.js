/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER, PHASE_TEST } = require("next/constants");

const nextConfig = (phase) => {
  console.log("phase:", phase);
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      images: {
        loader: "custom",
      },
      env: {
        API_URL: "http://localhost:4000",
        NEXT_PUBLIC_API_MOCKING: "true",

        // "https://ibarra-photography.herokuapp.com/",
      },
    };
  }
  if (phase === PHASE_TEST) {
    return {
      reactStrictMode: true,
      images: {
        loader: "custom",
      },
      env: {
        API_URL: "http://localhost:4000",
        NEXT_PUBLIC_API_MOCKING: "true",

        // "https://ibarra-photography.herokuapp.com/",
      },
    };
  }
  return {
    reactStrictMode: true,
    images: {
      loader: "custom",
    },
    env: {
      API_URL: "https://ibarra-photography.herokuapp.com",
      //  "http://localhost:4000",

      // "https://ibarra-photography.herokuapp.com/",
    },
  };
};

module.exports = nextConfig;
