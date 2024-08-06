/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/login",
        has: [
          {
            type: "cookie",
            key: "LIAGToken",
          },
        ],
        destination: "/",
        permanent: false,
      },
      {
        source: "/signup",
        has: [
          {
            type: "cookie",
            key: "LIAGToken",
          },
        ],
        destination: "/",
        permanent: false,
      },
      {
        source: "/",
        missing: [
          {
            type: "cookie",
            key: "LIAGToken",
          },
        ],
        destination: "/login",
        permanent: false,
      },
      {
        source: "/missions",
        missing: [
          {
            type: "cookie",
            key: "LIAGToken",
          },
        ],
        destination: "/login",
        permanent: false,
      },
      {
        source: "/achievements",
        missing: [
          {
            type: "cookie",
            key: "LIAGToken",
          },
        ],
        destination: "/login",
        permanent: false,
      },
      {
        source: "/profile",
        missing: [
          {
            type: "cookie",
            key: "LIAGToken",
          },
        ],
        destination: "/login",
        permanent: false,
      },
    ];
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
