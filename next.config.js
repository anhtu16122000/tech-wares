/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // ssr and displayName are configured by default
    // styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'theme.hstatic.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
