const camelCase = require('camelcase');
const path = require('path');
const webpack = require('webpack');
const pkg = require(path.join(process.cwd(), 'package.json'));
const shouldMininimize = process.argv.indexOf('--min') !== -1;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const imageOpts = {
  bypassOnDebug: true,
  optipng: {
    optimizationLevel: 7
  },
  gifsicle: {
    interlaced: false
  }
};

module.exports = {
    watch: true,
    target: 'electron-renderer',
    entry: './src/components/app/index.js',
    output: {
        path: __dirname + '/build',
        publicPath: 'build/',
        filename: 'bundle.js'
    },
    module: {
      loaders: [
        {

          test: /\.scss$/,
          loaders: ['style', 'css', 'sass']
        }, {
          test: /\.html$/,
          loader: 'html'
        }, {
          test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
          loader: 'file'
        }, {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['react', 'es2015']
          }
        }, {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: ['file-loader?hash=sha512&digest=hex&name=[hash].[ext]', `image-webpack-loader?${JSON.stringify(imageOpts)}`]
        }
      ]
    },

    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery', 'window.jQuery': 'jquery', 'window.$': 'jquery', 'Popper': 'popper.js'
      }),
      new webpack.optimize.UglifyJsPlugin({include: /\.min\.js$/, minimize: true})
    ]

};
