/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
   images: {
    domains: ["odis-unneurotic-unenviably.ngrok-free.dev"], // ✅ if your backend serves images from localhost
    remotePatterns: [
      {
        protocol: "https",
        hostname: "odis-unneurotic-unenviably.ngrok-free.dev",
        port: "4000", // your backend port
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
