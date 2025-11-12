import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // disable the built-in image optimizer to avoid native-image libs (sharp)
    // crashing on systems with incompatible native binaries. This is a
    // temporary workaround — remove or adjust when native modules are fixed.
    unoptimized: true,
  },
};

export default nextConfig;
