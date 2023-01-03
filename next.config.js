/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/miscellaneous/about",
        destination: "/",
        permanent: false,
      },
      {
        source: "/old-blog/:id",
        destination: "/new-blog/:id",
        permanent: true,
      },
    ];
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
