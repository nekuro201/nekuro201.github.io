/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['github.com'],
    loader: "akamai",
    path: undefined,
  },
}

module.exports = nextConfig
