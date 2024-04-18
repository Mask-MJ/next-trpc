// import dns from 'dns'
await import('./src/env.mjs')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // typedRoutes: true,
  },
}
// dns.setDefaultResultOrder('ipv4first')

export default nextConfig

