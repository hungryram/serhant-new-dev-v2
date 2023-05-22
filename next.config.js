/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        remotePatterns: [
            { hostname: 'cdn.sanity.io' },
            { hostname: 'source.unsplash.com' },
            { hostname: 'images.unsplash.com' },
        ],
    },
    reactStrictMode: false,
    experimental: {
      appDir: true,
      serverActions: true
    },
    typescript: {
        // Set this to false if you want production builds to abort if there's type errors
        ignoreBuildErrors: process.env.VERCEL_ENV === 'production',
    },
    eslint: {
        /// Set this to false if you want production builds to abort if there's lint errors
        ignoreDuringBuilds: process.env.VERCEL_ENV === 'production',
    },
}
