const path = require('path');

module.exports = {
  mode: 'none',
  entry: "./src/style.scss",
  output: {
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        type: "asset/resource",
        generator: {
          filename: "bundle.css",
        },
        use: ["sass-loader"]
      },
    ],
  }
};