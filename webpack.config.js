const path = require(`path`);
const webpack = require(`webpack`);

// change for production build on different server path
const publicPath = `/`;

const config = {
  entry: [
    `./src/js/script.js`
  ],
  output: {
    path: path.resolve(`./dist`),
    filename: `js/script.js`,
    publicPath: publicPath
  },
  devtool: `sourcemap`,
  devServer: {
    contentBase: `./src`,
    historyApiFallback: true,
    hot: true,
    port: 3000
  },
  resolve: {
    extensions: [`.js`]
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: `babel-loader`
          },
          {
            loader: `eslint-loader`,
            options: {
              fix: true
            }
          }
        ]
      }
    ]
  }
};

if (process.env.NODE_ENV === `production`) {
  const {UglifyJsPlugin} = webpack.optimize;
  config.plugins = [
    new UglifyJsPlugin({
      sourceMap: true, // false returns errors.. -p + plugin conflict
      comments: false
    })
  ];
} else {
  config.performance = {
    hints: false
  };
  config.plugins = [
    new webpack.HotModuleReplacementPlugin()
  ];
}

module.exports = config;
