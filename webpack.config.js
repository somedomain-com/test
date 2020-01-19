const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  output: {
    filename: '[name].[hash:5].js'
    // path: __dirname + '/dist/static',
    // publicPath: 'we/[path]'
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ],
  resolve: {
    // A relative path will be scanned similarly to how Node scans for node_modules, by looking through the current directory as well as its ancestors (i.e. ./ node_modules, ../node_modules, and on).
    modules: [__dirname, 'node_modules']
  }
}
