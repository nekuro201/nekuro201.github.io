/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['github.com'],
    loader: "akamai",
    path: "https://nekuro201.github.io/",
  },
}

module.exports = nextConfig
