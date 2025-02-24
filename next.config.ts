/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/folio' : '',
  images: {
    unoptimized: true,

    domains: [
      'api.microlink.io', // Microlink Image Preview
      'assets.aceternity.com',
      'pbs.twimg.com',
      'private-user-images.githubusercontent.com',
      'images.unsplash.com',
    ],
  },
  /**
   * Enable static exports.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: 'export',
};

module.exports = nextConfig;
