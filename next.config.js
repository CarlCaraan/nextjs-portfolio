/** @type {import('next').NextConfig} */

// Minified JS
const withPlugins = require("next-compose-plugins");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = withPlugins([
  {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.optimization.minimizer = [
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true,
              },
            },
          }),
        ];
      }
      return config;
    },
  },
]);

const nextConfig = {
  reactStrictMode: true,
};
module.exports = nextConfig;
