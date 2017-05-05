// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path'){{semi}}
var prodEnv = require('./prod.env'){{semi}}
var devEnv = require('./dev.env'){{semi}}

{{indent 0 ~}}  module.exports = {
{{indent 1 ~}}    build: {
{{indent 2 ~}}      env: prodEnv,
{{indent 2 ~}}      index: path.resolve(__dirname, '../dist/index.html'),
{{indent 2 ~}}      assetsRoot: path.resolve(__dirname, '../dist'),
{{indent 2 ~}}      assetsSubDirectory: 'static',
{{indent 2 ~}}      assetsPublicPath: '/',
{{indent 2 ~}}      productionSourceMap: true,
{{indent 2 ~}}      // Gzip off by default as many popular static hosts such as
{{indent 2 ~}}      // Surge or Netlify already gzip all static assets for you.
{{indent 2 ~}}      // Before setting to `true`, make sure to:
{{indent 2 ~}}      // npm install --save-dev compression-webpack-plugin
{{indent 2 ~}}      productionGzip: false,
{{indent 2 ~}}      productionGzipExtensions: ['js', 'css'],
{{indent 2 ~}}      // Run the build command with an extra argument to
{{indent 2 ~}}      // View the bundle analyzer report after build finishes:
{{indent 2 ~}}      // `npm run build --report`
{{indent 2 ~}}      // Set to `true` or `false` to always turn it on or off
{{indent 2 ~}}      bundleAnalyzerReport: process.env.npm_config_report,
{{indent 1 ~}}    },
{{indent 1 ~}}    dev: {
{{indent 2 ~}}      env: devEnv,
{{indent 2 ~}}      port: 8080,
{{indent 2 ~}}      autoOpenBrowser: true,
{{indent 2 ~}}      assetsSubDirectory: 'static',
{{indent 2 ~}}      assetsPublicPath: '/',
{{indent 2 ~}}      proxyTable: {},
{{indent 2 ~}}      // CSS Sourcemaps off by default because relative paths are "buggy"
{{indent 2 ~}}      // with this option, according to the CSS-Loader README
{{indent 2 ~}}      // (https://github.com/webpack/css-loader#sourcemaps)
{{indent 2 ~}}      // In our experience, they generally work as expected,
{{indent 2 ~}}      // just be aware of this issue when enabling this option.
{{indent 2 ~}}      cssSourceMap: false,
{{indent 1 ~}}    },
{{indent 0 ~}}  }{{semi}}
