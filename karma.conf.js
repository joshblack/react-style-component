var webpack = require('webpack');

module.exports = function (config) {
  config.set({

    browserNoActivityTimeout: 30000,
    browsers: [ process.env.CONTINUOUS_INTEGRATION ? 'Firefox' : 'Chrome' ],
    singleRun: process.env.CONTINUOUS_INTEGRATION === 'true',
    frameworks: ['mocha'],
    files: ['tests.webpack.js'],
    preprocessors: {
      'src/__test__/**/*.js': ['babel'],
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    reporters: ['dots'],
    babelPreprocessor: {
      options: { sourceMap: 'inline' }
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] }
        ],
        plugins: [
          new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('test')
          })
        ]
      }
    },

    webpackServer: { noInfo: true }
  });
}
