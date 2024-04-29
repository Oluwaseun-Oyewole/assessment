/** @type {import('next').NextConfig} */
import nextPWA from "next-pwa";

const nextConfig = {
  output: "standalone",
  swcMinify: true,
  compiler: {
    // eslint-disable-next-line no-undef
    removeConsole: process.env.NODE_ENV !== "development",
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/budget",
        permanent: false,
      },
    ];
  },
};

const withPWA = nextPWA({
  dest: "public",
  register: true,
  // eslint-disable-next-line no-undef
  disable: process.env.NODE_ENV === "development",
});
export default withPWA(nextConfig);
