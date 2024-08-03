/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  // domains: ["localhost"],
  // unoptimized: true,
  // loader: "cloudinary",
  // path: "https://res.cloudinary.com/organichatt/image/upload",
  // cloudName: "organichatt",
  // },
  output: "export",
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BACKEND_API_URL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  },
};

export default nextConfig;
