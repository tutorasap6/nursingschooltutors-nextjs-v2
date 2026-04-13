/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['nursingschooltutors.com'],
  },
  async redirects() {
    return [
      {
        source: '/blog/page/:page',
        destination: '/blog?page=:page',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
