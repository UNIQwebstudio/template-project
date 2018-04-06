import path from 'path';

export default {
  entry: './src/index.js',
  mode: 'development',

  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /.(png|jpe?g)$/,
        use: 'url-loader'
      }
    ]
  },

  output: {
    path: path.resolve(__dirname, './public/bundle'),
    filename: 'index.bundle.js'
  },

  devServer: {
    contentBase: './public',
    publicPath: '/bundle'
  }
}
