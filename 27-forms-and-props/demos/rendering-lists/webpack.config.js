const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: "development",
  entry: "./src/app.js",
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader'},
      {test: /\.css$/, loader: ['style-loader', 'css-loader']},
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
}

module.exports = config;
