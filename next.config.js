/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER, PHASE_TEST } = require('next/constants');

const baseNextConfig = {
  experimental: {
    appDir: true
  }
};

const developConfig = {
  env: {
    API_URL: 'http://localhost:4000'
    // NEXT_PUBLIC_API_MOCKING: "false",
  }
};

const testConfig = {
  env: {
    API_URL: 'http://localhost:4000'
    // NEXT_PUBLIC_API_MOCKING: "false",
  }
};

const productionConfig = {
  env: {
    API_URL: 'https://backend-production-43ba.up.railway.app'
  }
};

const nextConfig = phase => {
  console.log('phase', phase);

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...baseNextConfig,
      ...developConfig
    };
  }
  if (phase === PHASE_TEST) {
    return {
      ...baseNextConfig,
      ...testConfig
    };
  }

  return {
    ...baseNextConfig,
    ...productionConfig
  };
};

module.exports = nextConfig;
