/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['github.com'],
    loader: "custom",
    loaderFile: "./loader.js",
  },
}

module.exports = nextConfig
