const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 module.exports = {
 entry: './src/index.js',
 output: {
 filename: 'bundle.js',
 path: path.resolve(__dirname, 'dist'),
 clean: true,
 },
 module: {
 rules: [
 { test: /\.css$/, use: ['style-loader', 'css-loader'] },
 { test: /\.(mp3|wav)$/, use: ['file-loader'] },
 { test: /\.(png|jpe?g|gif)$/i, type: 'asset/resource'},
 { test: /\.html$/, use: 'html-loader'},
 ],
 },
 plugins: [
 new HtmlWebpackPlugin({
 template: './src/index.html',
 }),
 ],
 devServer: {
 static: './dist',
 port: 8080,
 hot: true,
 open: true,
 },
 mode: 'development', // or 'production' include minimization
};