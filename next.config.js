/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['github.com'],
    loader: "akamai",
    path: "",
  },
  basePath: "/nekuro201.github.io",
  assetPrefix: "/nekuro201.github.io",
}

module.exports = nextConfig
