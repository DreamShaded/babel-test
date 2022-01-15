const path = require('path');
const webpack = require('webpack');

const config = {
  entry: './src/index.js',
  output: {
    environment: {
      arrowFunction: false,
      dynamicImport: false,
      destructuring: false
    },
    path: path.join(__dirname, './dist/'),
    assetModuleFilename: 'assets/[hash][ext]',
    filename: '[name].js',
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude:  [path.resolve(__dirname, 'node_modules')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve(__dirname, 'babel.config.js'),
              cacheDirectory: true,
              sourceMaps: true,
              sourceType: 'unambiguous',
              compact: true,
              minified: true
            }
          }
      ]
    },
    ]
  },
};

module.exports = config;
