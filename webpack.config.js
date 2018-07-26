module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
      },
      {
          test: /\.scss$/,
          use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  }
};
