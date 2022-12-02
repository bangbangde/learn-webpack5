const path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/home.js',
  output: {
    clean: true
  },
  optimization: {
    runtimeChunk: 'single',
  }
};