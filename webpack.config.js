/* global module, __dirname */

module.exports = {
    entry: './src/js/entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.scss/,
          loaders: ["style-loader", "css-loader", "sass-loader"]
        },
      ]
    }
};