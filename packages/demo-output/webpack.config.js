const path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/home.js',
  output: {
    asyncChunks: false,
    clean: true
  },
};