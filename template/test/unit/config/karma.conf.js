// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

{{indent 0 ~}}  var webpackConfig = require('../../../build/webpack.test.conf'){{semi}}

{{indent 0 ~}}  module.exports = function karmaConfig(config) {
{{indent 1 ~}}    config.set({
{{indent 2 ~}}      // to run in additional browsers:
{{indent 2 ~}}      // 1. install corresponding karma launcher
{{indent 2 ~}}      //    http://karma-runner.github.io/0.13/config/browsers.html
{{indent 2 ~}}      // 2. add it to the `browsers` array below.
{{indent 2 ~}}      browsers: ['PhantomJS'],
{{indent 2 ~}}      frameworks: ['mocha', 'sinon-chai', 'phantomjs-shim'],
{{indent 2 ~}}      reporters: ['spec', 'coverage'],
{{indent 2 ~}}      files: ['../index.js'],
{{indent 2 ~}}      preprocessors: {
{{indent 3 ~}}        '../index.js': ['webpack', 'sourcemap'],
{{indent 2 ~}}      },
{{indent 2 ~}}      webpack: webpackConfig,
{{indent 2 ~}}      webpackMiddleware: {
{{indent 3 ~}}        noInfo: true,
{{indent 2 ~}}      },
{{indent 2 ~}}      coverageReporter: {
{{indent 3 ~}}        dir: '../coverage',
{{indent 3 ~}}        reporters: [
{{indent 4 ~}}          { type: 'lcov', subdir: '.' },
{{indent 4 ~}}          { type: 'text-summary' },
{{indent 3 ~}}        ],
{{indent 2 ~}}      },
{{indent 1 ~}}    }){{semi}}
{{indent 0 ~}}  }{{semi}}
