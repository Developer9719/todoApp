const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/script/index.js',
  
  plugins: [ // Creates a basic HTML structure file with the bundled js in the script tag
    new HtmlWebpackPlugin()
  ],
  
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Removes previous build files before rebuilding the project
  },
};