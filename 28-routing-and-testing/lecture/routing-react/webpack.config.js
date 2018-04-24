const HtmlPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  entry: './src/app.jsx',
  plugins: [new HtmlPlugin({template: __dirname + '/src/index.html'})],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: ["babel-loader"],
        exclude: /node_modules/
      },
      {test: /\.(scss|css)$/, loader: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]},
    ]
  }
}

module.exports = config;
