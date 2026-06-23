import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/website-v2.0" : "",
  assetPrefix: isProd ? "/website-v2.0/" : "",
};

export default nextConfig;