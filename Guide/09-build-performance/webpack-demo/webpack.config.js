const path = require('path');

module.exports = (env) => {
  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.resolve(__dirname, 'src'), // 限制范围提升性能
          loader: 'babel-loader',
        },
      ],
    },
  };
};