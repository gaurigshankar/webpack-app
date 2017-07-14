var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');


var isProd = process.env.NODE_ENV === 'production';
var cssDev = [ "style-loader", "css-loader", "sass-loader" ];
var cssProd = ExtractTextWebpackPlugin.extract({
    fallback: "style-loader" ,
    use: [ "css-loader", "sass-loader" ],
    publicPath: '/dist'
  });
var cssConfig = isProd ? cssProd : cssDev ;

module.exports = {
  //https://webpack.github.io/docs/multiple-entry-points.html
  entry: {
    a: "./src/js/app.js",
    b: "./src/js/app2.js"
  },
  output: {
    path: __dirname + '/dist',
    filename: "[name]-bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: cssConfig
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "Webpack Demo Title set in conf file",
      template: "./src/index.html",
      filename: "./../index.html"
    }),
    new ExtractTextWebpackPlugin({
      filename: "styles.css",
      disable: !isProd,
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    inline: true,
    compress: true,
    port: 9000,
    open: true,
    hot: true
  }
}
