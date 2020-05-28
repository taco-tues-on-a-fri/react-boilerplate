const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin')

module.exports = {
  entry: './src/App.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
      { 
        test: /\.(png|svg|jpg|gif)$/,
        use: [ 
          'file-loader',
        ]
      }
    ]
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  node: {
    fs: 'empty'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      // template: 'src/index.html'
      template: path.resolve('public/index.html'),
    }),
    new CopyPlugin({
      patterns: [
        { from: '_redirects'}
        // {from: path.resolve(__dirname, '../src/static')}
        // { from: 'source', to: 'dest' },
        // { from: 'other', to: 'public' },
      ],
    }),
    // new CopyPlugin([
    //   patterns: [
    //     {from: path.resolve(__dirname, '../src/static')},
    //     // { from: '_redirects'}
    //   ]
    // ])
  ],
  devServer: {
    historyApiFallback: true
  }
};