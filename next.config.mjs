/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "developer.android.com",
      },
      {
        protocol: "https",
        hostname: "i1.wp.com",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com",
      },
    ],
  },
};

export default nextConfig;
