const path = require('path');

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
          include: [
                path.resolve(__dirname, 'src')
          ],
          use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  }
};
