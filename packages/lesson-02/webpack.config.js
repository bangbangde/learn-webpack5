const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: ['./loader1.js']
      },
      {
        test: /\/index\.js$/i,
        use: ['./loader2.js']
      }
    ]
  }
};