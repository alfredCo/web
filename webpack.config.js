"use strict";
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  context:__dirname,
  entry:{
    "app":[
      './src/js/app.js',
      './src/less/index.less'
    ]
  },
  output:{
    path:`${__dirname}/built`,
    publicPath: "/",
    filename:"./js/[name].js"
  },
  devtool:"source-map",
  module:{
    rules:[
      { test: /\.gif|png|jpg|jpeg|svg|ttf|woff2?|eot/,
        use: [
          {
            loader:"url-loader",
            options: {
              limit:'3336',
              name: "img/[name].[hash].[ext]"
            }
          }
        ]
      },
      {
        test:/\.js$/,
        exclude:/node_module/,
        use:{
          loader:"babel-loader"
        }
      },
      { 
        test: /\.less$/,
        use: ExtractTextPlugin.extract(["css-loader","less-loader"])
      }
    ]
  },
  plugins:[
    new ExtractTextPlugin("./css/[name].css")/*,
    new webpack.optimize.UglifyJsPlugin({
      except: ['$super', '$', 'exports', 'require']
    })*/
  ],
  devServer:{
    port:10086,
    host:"0.0.0.0",
    disableHostCheck: true,
    //compress:true,
    contentBase:`${__dirname}/src`
  }
}