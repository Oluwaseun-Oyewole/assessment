/** @type {import('next').NextConfig} */
const nextConfig = {
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

export default nextConfig;
