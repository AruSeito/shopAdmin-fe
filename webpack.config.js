const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.jsx',
  resolve: {
    alias: {
      Page: path.resolve(__dirname, 'src/page'),
      Component: path.resolve(__dirname, 'src/component')
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'js/app.js'
  },
  module: {
    rules: [
      //jsx文件的处理
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      //css文件的处理
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      //sass、scss文件的处理
      {
        test: /\.s[ac]ss$/i,
        use:
          ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", "sass-loader"]
          })
      },
      //图片与字体的配置
      {
        test: /\.(png|jpg|gif|ttf|woff2|woff|eot|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'resource/[name].[ext]'
            },
          },
        ],
      },


    ]
  },
  plugins: [
    //处理HTML文件
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    //独立css文件
    new ExtractTextPlugin('css/[name].css'),
    //提取公共模块
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'js/base.js'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    inline: true,
    port: 18080,
    historyApiFallback: {
      index: '/dist/index.html'
    },
  }
};