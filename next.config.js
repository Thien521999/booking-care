/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async rewrites() {
    return !!process.env.API_PROXY_URI
      ? [
          {
            source: '/:path*',
            destination: `${process.env.API_PROXY_URI}/api/:path*`, // Proxy to Backend
          },
        ]
      : [];
  },
}

module.exports = nextConfig
