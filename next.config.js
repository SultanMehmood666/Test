const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add the CaseSensitivePathsPlugin
    if (dev) {
      config.plugins.push(new CaseSensitivePathsPlugin());
    }
    return config;
  },
};

module.exports = nextConfig;



// async function (defaultPathMap) {
//   const paths = {
//     '/': { page: '/' },
//     '/about': { page: '/about' },
//     '/add-listing': { page: '/add-listing' },
//     '/api': { page: '/api' },
//     '/blog': { page: '/blog' },
//     '/cart': { page: '/cart' },
//     '/Constwork': {page: '/Constwork'},
//     '/Intdesign': {page: '/Intdesign'},
//     '/RealState': {page: '/RealState'},
//     '/RealEstate': {page: '/RealEstate'},
//     '/checkout': { page: '/checkout' },
//     '/coming-soon': { page: '/coming-soon' },
//     '/contact': { page: '/contact' },
//     '/faq': { page: '/faq' },
//     '/Get-In-Touch': { page: '/Get-In-Touch' },
//     '/locations': { page: '/locations' },
//     '/login': { page: '/login' },
//     '/Maps': { page: '/Maps' },
//     '/my-account': { page: '/my-account' },
//     '/order-tracking': { page: '/order-tracking' },
//     '/portfolio': { page: '/portfolio' },
//     '/Privacy-Policy': { page: '/Privacy-Policy' },
//     '/register': { page: '/register' },
//     '/service': { page: '/service' },
//     '/team': { page: '/team' },
//     '/wishlist': { page: '/wishlist' },
//     '/history': { page: '/history' },
//     "/404": {page: "/404"}
//   };
//     return paths;
//   },