/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/SOP-DESIGN-SYSTEM',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
