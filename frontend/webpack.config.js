const path = require('path');
const debug = process.env.NODE_ENV !== "production";

module.exports = {
  resolve: {
    extensions: ['.js', '.css']
  },
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        exclude: path.join(__dirname, 'node_modules'),
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src'),
        exclude: path.join(__dirname, 'node_modules'),
        loaders:['style-loader', 'css-loader']
      },
    ],
  }
};
