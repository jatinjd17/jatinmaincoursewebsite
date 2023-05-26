/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    forceSwcTransforms: true,
  },
  async headers() {
    return [
      {
        source: "/user",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self' 'http://blog.logrocket.com'; image-src 'https://unsplash.com'; script-src 'self' https://www.google-analytics.com; font-src 'self' 'https://fonts.googleapis.com'",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
