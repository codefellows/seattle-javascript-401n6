const config = {
  mode: "development",
  entry: "./src/app.js",
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader'},
      {test: /\.css$/, loader: ['style-loader', 'css-loader']},
    ]
  }
}

module.exports = config;
