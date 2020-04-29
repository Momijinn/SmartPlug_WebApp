const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./config')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css'
    }),
  ],
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { //babel
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/env",
              "@babel/preset-react"
            ],
            plugins: [
              "react-hot-loader/babel"
            ]
          }
        }
      },
      {// css saas
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          }
        ]
      },
      { // eslint
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'eslint-loader'
          }
        ]
      },
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,

    proxy: {
      "/plug_on": {
        target: 'https://maker.ifttt.com/trigger/smartPlug_ON/with/key/' + config.API, // Please rewrite {smartPlug_ON}
        pathRewrite: { '^/plug_on': '' },
        secure: false,
        changeOrigin: true
      },
      "/plug_off": {
        target: 'https://maker.ifttt.com/trigger/smartPlug_OFF/with/key/' + config.API, // Please rewrite {smartPlug_OFF}
        pathRewrite: { '^/plug_off': '' },
        secure: false,
        changeOrigin: true
      },
    }
  }
}