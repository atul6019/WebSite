import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "www.nalitesmart.com" },
      { protocol: "https", hostname: "www.yunismart.com" },
      { protocol: "https", hostname: "adiy.in" },
      { protocol: "https", hostname: "soldered.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "media.ncd.io" },
      { protocol: "https", hostname: "spectra.de" },
      { protocol: "https", hostname: "www.compulab.com" }
    ]
  }
};

export default nextConfig;
