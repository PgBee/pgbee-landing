import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  // Lint is enforced in dev/PR, not at deploy time (the flat eslint config
  // can't resolve eslint-config-next on the build image).
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
