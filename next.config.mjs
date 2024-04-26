import pwa from "next-pwa";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "data.bmkg.go.id",
      },
      {
        hostname: "openweathermap.org",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

const withPWA = pwa({
  dest: "public", // Destination directory for the PWA files
  disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
  register: true, // Register the PWA service worker
  skipWaiting: true, // Skip waiting for service worker activation
});

// Export the combined configuration for Next.js with PWA support
export default withPWA(nextConfig);
