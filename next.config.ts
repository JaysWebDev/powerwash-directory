import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        // consolidated duplicate guide (kept the by-service-and-region version)
        source: "/guides/best-time-to-power-wash",
        destination: "/guides/best-time-power-wash",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
