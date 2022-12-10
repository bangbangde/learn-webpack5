const path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/home.js',
  output: {
    filename: '[name].[contenthash].js', // chunk 级别
    crossOriginLoading: 'use-credentials',
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
};