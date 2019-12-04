const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  // optimization: {
  //   minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  // },
  module: {
    rules: [
      {
        test: /\.scss|\.css$/i,
        exclude: /\.module\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              sideEffects: true,
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              import: true,
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.module\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.m?jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
}
