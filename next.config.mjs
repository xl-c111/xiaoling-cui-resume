/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", // <-- important for GitHub Pages
  basePath: isProd ? "/xiaoling-cui-portfolio" : "",
  assetPrefix: isProd ? "/xiaoling-cui-portfolio/" : "",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
