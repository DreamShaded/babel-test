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
  optimization: {
    splitChunks: {
      cacheGroups: {
        polyfills: {
          test: /[\\/]node_modules[\\/](@babel|core-js|regenerator-runtime|wildcard)[\\/]/,
          name: 'polyfills',
          chunks: 'initial',
          priority: 60,
          enforce: true,
          reuseExistingChunk: true
        }
      }
    }
  }
};

module.exports = config;
