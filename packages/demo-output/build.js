const webpack = require("webpack");

webpack({
  mode: 'none',
  entry: './src/home.js',
  output: {
    chunkFilename: (pathData, assetInfo) => {
      return `[id].js`
    },
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.jpg$/i,
        type: "asset/resource"
      }
    ]
  }
}, (err, stats) => {
  if (err) {
    console.log(err);
  }
});