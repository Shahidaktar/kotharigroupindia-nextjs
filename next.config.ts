import type { NextConfig } from "next";

// Catch stray unhandled rejections (e.g. from slow WP fetches) so they
// log instead of crashing the Next.js server process.
process.on('unhandledRejection', (reason) => {
  console.error('[server] Unhandled rejection:', reason);
});

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/agriculture-division',
        destination: '/irrigation-division',
        permanent: true,
      },
      {
        source: '/agriculture-division/:path*',
        destination: '/irrigation-division/:path*',
        permanent: true,
      },
      {
        source: '/news',
        destination: '/press-release',
        permanent: true,
      },
      {
        source: '/news/:path*',
        destination: '/press-release/:path*',
        permanent: true,
      },
      {
        source: '/our-board',
        destination: '/our-management',
        permanent: true,
      },
      {
        source: '/our-board/:path*',
        destination: '/our-management/:path*',
        permanent: true,
      },
      {
        source: '/videos',
        destination: '/KothariTV',
        permanent: true,
      },
      {
        source: '/videos/:path*',
        destination: '/KothariTV/:path*',
        permanent: true,
      },
      {
        source: '/success-stories',
        destination: '/successstories',
        permanent: true,
      },
      {
        source: '/success-stories/:path*',
        destination: '/successstories/:path*',
        permanent: true,
      },
      {
        source: '/downloads',
        destination: '/Download',
        permanent: true,
      },
      {
        source: '/downloads/:path*',
        destination: '/Download/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
