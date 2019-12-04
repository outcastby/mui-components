module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          require.resolve('sass-loader')
        ],
      },
    ],
  },
}
