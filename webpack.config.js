var path = require('path')
var webpack = require('webpack');
var webpackConfig

webpackConfig = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './js/index.js'
  ],
  output: {
    path: path.join(__dirname, '_dist/js'),
    filename: 'bundle.js',
    publicPath: '/js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: path.join(__dirname, 'js/'),
      exclude: 'node_modules/',
      loaders: ['react-hot-loader', 'babel-loader']
    }]
  }
}

module.exports = webpackConfig;
