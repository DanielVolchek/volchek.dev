/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/danielvolchek',
        permanent: true
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/daniel-volchek-aa0172224/',
        permanent: true
      },
    ]
  }
}

module.exports = nextConfig;

