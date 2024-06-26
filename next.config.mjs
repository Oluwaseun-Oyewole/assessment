/** @type {import('next').NextConfig} */
import nextPWA from "next-pwa";

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/budget",
        permanent: true,
      },
    ];
  },
  swcMinify: true,
  compiler: {
    // eslint-disable-next-line no-undef
    removeConsole: process.env.NODE_ENV !== "development",
  },
};
const withPWA = nextPWA({
  dest: "public",
  register: true,
  // eslint-disable-next-line no-undef
  disable: process.env.NODE_ENV === "development",
});
export default withPWA(nextConfig);
