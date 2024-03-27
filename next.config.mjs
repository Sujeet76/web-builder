/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uploadthing.com",
        pathname: "",
        port: "",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "",
        port: "",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
        pathname: "",
        port: "",
      },
      {
        protocol: "https",
        hostname: "subdomain",
        pathname: "",
        port: "",
      },
      {
        protocol: "https",
        hostname: "files.stripe.com",
        pathname: "",
        port: "",
      },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
