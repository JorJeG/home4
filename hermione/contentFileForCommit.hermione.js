const { assert } = require('chai');

describe('Дерево файлов', function() {
  it('Отображение содержимого файла для коммита из ветки', function() {
    return this.browser
      .url('/')
      .click('.commit-item__link=Тест')
      .click('.files-item__link_color_darkgreen=config')
      .click('.files-item__link_color_blue=webpack.config.dev.js')
      .getText('.content')
      .then((content) => {
        assert.equal(content, `\
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
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
        test: /\\.css$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              minimize: false,
              sourceMap: true,
            },
          },
          ],
        }),
      },
      {
        test: /\\.js$/,
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
  watch: true,
};`)
      })
      .click('=Back')
      .getText('.files-list')
      .then((files) => {
        assert.equal(files, `\
webpack.config.dev.js\n\
webpack.config.prod.js`);
      });
  });
});
