import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // fewer size steps = the same few files get reused (and cached) for every visitor
    deviceSizes: [640, 828, 1080, 1440, 1920],
    imageSizes: [128, 256, 384],
    // site images never change at the same URL, so keep optimised copies for a year
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
