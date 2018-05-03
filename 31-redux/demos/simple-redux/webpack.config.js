const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: `${__dirname}/src/main.js`,
  plugins: [new HtmlPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ]
  }
}

