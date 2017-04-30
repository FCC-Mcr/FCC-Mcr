// @TODO - May need to define a publicPath property

const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: './',
    filename: 'bundle.js'
  },
  module:{
    rules: [
      {
        test: /\.(jpg|png|svg)$/,
          use: 'file-loader?name=[name].[ext]&outputPath=/img/'
      },
      {
        test: /\.sass$|\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [ "css-loader", "postcss-loader", "sass-loader" ]
        })
      },
    ]
  },
  plugins:[
    new ExtractTextPlugin("styles.css")
  ]
}
