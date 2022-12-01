require('dotenv/config');
const path = require('path');
const webpack = require('webpack');
const clientPath = path.join(__dirname, 'client');
const serverPublicPath = path.join(__dirname, 'server', 'public');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  mode: process.env.NODE_ENV,
  entry: [
    clientPath,
    isDevelopment && 'webpack-hot-middleware/client?timeout=1000'
  ].filter(Boolean),
  resolve: {
    extensions: ['.js']
  },
  output: {
    path: serverPublicPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ],
            plugins: [
              '@babel/plugin-transform-block-scoping',
              '@babel/plugin-transform-arrow-functions'
            ].filter(Boolean)
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  stats: 'minimal',
  devtool: isDevelopment ? 'cheap-module-source-map' : 'source-map',
  plugins: [
    new webpack.EnvironmentPlugin(['API']),
    isDevelopment && new webpack.NoEmitOnErrorsPlugin(),
    isDevelopment && new webpack.HotModuleReplacementPlugin()
  ].filter(Boolean)
};
