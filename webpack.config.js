var nodeExternals = require('webpack-node-externals');

module.exports = {
  context: __dirname + "/app",
  entry: "./app.js",
  target: "node",
  externals: [nodeExternals()],

  output: {
    filename: "app.js",
    path: __dirname + "/js",
  },
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react']
        }
     }],
  },
}