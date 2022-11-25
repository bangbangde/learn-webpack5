如果你选择使用 webpack-dev-middleware 而不是 webpack-dev-server，请使用 webpack-hot-middleware 包在你的自定义服务器或应用程序上启用HMR。

## 手动启用 HMR
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 const webpack = require("webpack");

  module.exports = {
    entry: {
       app: './src/index.js',
      print: './src/print.js',
      // Runtime code for hot module replacement
      hot: 'webpack/hot/dev-server.js',
      // Dev server client for web socket transport, hot and live reload logic
      client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
    },
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
     // Dev server client for web socket transport, hot and live reload logic
     hot: false,
     client: false,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Hot Module Replacement',
      }),
     // Plugin for hot module replacement
     new webpack.HotModuleReplacementPlugin(),
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
  };
```