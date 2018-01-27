const webpack = require('webpack');

const config = {
    devtool: 'eval-source-map',
    entry:  __dirname + "/app/App.js",
    output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
    },
    module: {
      loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015','react']
            }
          }
      ]
    },
    devServer: {
      contentBase: "./dist",
      // colors: true,
      historyApiFallback: true,
      inline: true
    }
};

if (process.env.NODE_ENV === 'production') {
  config.devtool = false;
  config.plugins = [
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({comments: false}),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')}
    })
  ];
}

module.exports = config;
