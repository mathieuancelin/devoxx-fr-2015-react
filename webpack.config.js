var webpack = require('webpack');

module.exports = {
  output: {
    path: './dist/',
    publicPath: '/assets/',
    filename: 'demo.js',
    library: 'Demo',
    libraryTarget: 'umd'
  },
  entry: {
    app: ['./src/main.js']
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel-loader?experimental&optional=runtime'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
