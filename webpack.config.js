const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;

module.exports = {
  mode: TARGET === 'dev' ? 'development' : 'production',
  entry: [
    './src/js/index.js',
    './src/css/main.css',
  ],
  output: {
    filename: 'js/bundle.js',
    path: path.join(__dirname, 'static'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              minimize: !(TARGET === 'dev'),
              sourceMap: TARGET === 'dev',
            },
          },
          ],
        }),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env'],
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['static']),
    new ExtractTextPlugin({
      filename: './css/style.bundle.css',
      allChunks: true,
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, './src/fonts'),
        to: './fonts',
      },
      {
        from: path.join(__dirname, './src/favicon'),
        to: './favicon',
      },
      {
        from: path.join(__dirname, './src/img'),
        to: './img',
      },
      {
        from: path.join(__dirname, './src/views'),
        to: './views',
      },
    ]),
  ],
  watch: TARGET === 'dev',
};
