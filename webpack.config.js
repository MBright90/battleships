const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Battleships',
      favicon: 'src/assets/images/favicon/favicon.ico',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/assets/images/favicon',
          to: 'assets/images/favicon',
        },
        {
          from: 'src/assets/images',
          to: 'assets/images',
        },
      ],
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [

      // Filetype loaders
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      // Asset/resource management
      {
        test: /\.(woff|woff2|otf|ttf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[ext]',
        },
      },
      {
        test: /\.(svg|jpeg|jpg|gif|png)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name].[ext]',
        },
      },
      {
        test: /\.ico$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/favicon/[name].[ext]',
        },
      },
    ],
  },
}
