const path = require('path');
const webpack = require('webpack');
 
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './src/index.js',
  output: { path: __dirname, filename: 'build/bundle.js' },
  watch: true,
  plugins: [
    /**
     * DefinePlugin allows us to define free variables, in any webpack build, you can
     * use it to create separate builds with debug logging or adding global constants!
     * Here, we use it to specify a development build.
     */
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ],
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};