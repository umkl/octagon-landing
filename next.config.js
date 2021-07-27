// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

// module.exports = withBundleAnalyzer({
//   webpack(config) {
//     config.module.rules.push(
//       {
//         test: /\.svg$/,
//         use: ["@svgr/webpack"],
//       },
//       {
//         test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf)(\?[a-z0-9=.]+)?$/,
//         use: ["url-loader"],
//       }
//     );
//     return config;
//   },
// });

module.exports = {
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf)(\?[a-z0-9=.]+)?$/,
        use: ["url-loader"],
      }
    );
    return config;
  },
};
