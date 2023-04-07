/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
module.exports = nextConfig;

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
