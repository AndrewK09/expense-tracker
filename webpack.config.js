const webpack = require('webpack');
const path = require('path');

const config = {
  entry: path.join(__dirname, 'client/src/index.js'),
  output: {
    path: path.join(__dirname, 'client/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = config;
