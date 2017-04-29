const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module:{
    rules: [
      {
        test: /\.(jpg|png|svg)$/,
          use: 'file-loader'
      },
      {
        test: /\.sass$|\.scss$/,
          use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      }
    ]
  },
  devServer: {
    watchContentBase: true
  }
}
