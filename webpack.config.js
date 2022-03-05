const path = require('path');
const { ProvidePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode: 'none',
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx')
  },
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // Use style-loader in development for improve speed
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 8080,
    compress: true,
    hot: true,
  },
  output: {
    filename: 'application.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.join(__dirname, 'static', 'index.html'),
        inject: false,
    }),
    new MiniCssExtractPlugin(),
    // Webpack 5 no longer support nodejs polyfills, and we need provide they manually
    new ProvidePlugin({
      process: 'process/browser',
    }),
  ]
}