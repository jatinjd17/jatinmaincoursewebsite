// const withVideos = require("next-videos");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:5328/api/:path*"
            : "/api/",
      },
    ];
  },
  reactStrictMode: false,
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
// module.exports = withVideos();
