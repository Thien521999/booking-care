/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  async rewrites() {
    return !!process.env.API_PROXY_URI
      ? [
          {
            source: '/:path*',
            destination: `${process.env.API_PROXY_URI}/:path*`, // Proxy to Backend
          },
        ]
      : [];
  },
}

module.exports = nextConfig
