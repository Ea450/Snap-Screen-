import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'ea-snapscreen.b-cdn.net', protocol: 'https', port: '', pathname: '/**' },
    ]
  }
};

export default nextConfig;
