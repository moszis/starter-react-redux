var paths = require('./paths');

var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  app_src: paths.appSrc,
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
     paths.appSrc + '/index.js',
  ],
  output: {
    path: paths.appPublic + '/js',
    publicPath: 'js/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      }
    ],
  },
  devServer: {
    contentBase: paths.appPublic,
  },
  plugins: [
    new CleanWebpackPlugin(['css/main.css', 'js/bundle.js'], {
      root: paths.appPublic,
      verbose: true,
      dry: false,
    }),
  ],
};
