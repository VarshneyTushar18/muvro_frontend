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
      {
        source: "/software/:slug",
        destination: "/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
