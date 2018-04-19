const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: "development",
  entry: "./app.js",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {test: /\.js$/, loader: "babel-loader"},
      {test: /\.css/, loader: [
        "style-loader", "css-loader"
      ]},
    ]
  },
};

module.exports = config;
