const path = require('path');

module.exports = {
  mode: 'development',
  // entry: ['./src/home.js', './src/about.js', './src/contact.js'],
  entry: {
    home: './src/home.js',
    about: ['./src/home.js', './src/about.js'],
    contact: {
      import: './src/contact.js',
      filename: '[name].[contenthash].js',
      // dependOn: 'home',
      // chunkLoading: 'jsonp',
      asyncChunks: true, // Create async chunks that are loaded on demand.
      // layer: 'name of layer', // set the layer for an entry point
    },
  },
  output: {
    clean: true
  }
};