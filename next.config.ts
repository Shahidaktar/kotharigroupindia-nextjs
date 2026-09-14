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
    ];
  },
};

export default nextConfig;
