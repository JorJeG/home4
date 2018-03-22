const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: [
    './src/js/index.js',
    './src/css/main.css',
  ],
  output: {
    filename: 'js/bundle.js',
    path: path.join(__dirname, '../static'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true,
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
    new ExtractTextPlugin({
      filename: './css/style.bundle.css',
      allChunks: true,
    }),
    new CopyWebpackPlugin([
      {
        from: './src/fonts',
        to: './fonts',
      },
      {
        from: './src/favicon',
        to: './favicon',
      },
      {
        from: './src/img',
        to: './img',
      },
      {
        from: './src/index.html',
        to: './',
      },
    ]),
  ],
};
