"use strict";

module.exports = {
  module: {
    rules: [{
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    }]
  }
};
//# sourceMappingURL=webpack.config.dev.js.map
