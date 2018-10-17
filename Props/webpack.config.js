const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
      path: path.join(__dirname, '/dist'),
      filename: 'index_bundle.js'
   }, 
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'         
         }
      ]
   },
   plugins:[
       new HtmlWebpackPlugin({
           template: './src/index.html'
       })
   ]
}