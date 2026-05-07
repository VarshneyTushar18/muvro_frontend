/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/technology",
        destination: "/technologies",
        permanent: true,
      },
      {
        source: "/technologgy",
        destination: "/technologies",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
