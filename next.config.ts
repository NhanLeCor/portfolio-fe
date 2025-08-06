import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  webpack: (config) => {
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };

    // config webpack for svgr to use icon as React component
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        { loader: "@svgr/webpack", options: { typescript: true } },
      ],
    });

    config.resolve.fallback = { fs: false, net: false, tls: false };

    return config;
  },
};

export default nextConfig;
