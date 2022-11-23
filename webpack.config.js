const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  // plugins: [
  //     new HtmlWebpackPlugin({
  //         title: "Battleships"
  //     }),
  // ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [

      // Filetype loaders
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
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
