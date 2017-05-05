require('./check-versions')(){{semi}}

var config = require('../config'){{semi}}
{{indent 0 ~}}  if (!process.env.NODE_ENV) {
{{indent 1 ~}}    process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV){{semi}}
{{indent 0 ~}}  }

var opn = require('opn'){{semi}}
var path = require('path'){{semi}}
var express = require('express'){{semi}}
var webpack = require('webpack'){{semi}}
var proxyMiddleware = require('http-proxy-middleware'){{semi}}
{{indent 0 ~}}  var webpackConfig = {{#if_or unit e2e}}process.env.NODE_ENV === 'testing' ?
{{indent 1 ~}}    require('./webpack.prod.conf') :
{{indent 1 ~}}    {{/if_or}}require('./webpack.dev.conf'){{semi}}

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port{{semi}}
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser{{semi}}
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable{{semi}}

var app = express(){{semi}}
var compiler = webpack(webpackConfig){{semi}}

{{indent 0 ~}}  var devMiddleware = require('webpack-dev-middleware')(compiler, {
{{indent 1 ~}}    publicPath: webpackConfig.output.publicPath,
{{indent 1 ~}}    quiet: true,
{{indent 0 ~}}  }){{semi}}

{{indent 0 ~}}  var hotMiddleware = require('webpack-hot-middleware')(compiler, {
{{indent 1 ~}}    log: () => {},
{{indent 0 ~}}  }){{semi}}
{{indent 0 ~}}  // force page reload when html-webpack-plugin template changes
{{indent 0 ~}}  compiler.plugin('compilation', (compilation) => {
{{indent 1 ~}}    compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
{{indent 2 ~}}      hotMiddleware.publish({ action: 'reload' }){{semi}}
{{indent 2 ~}}      cb(){{semi}}
{{indent 1 ~}}    }){{semi}}
{{indent 0 ~}}  }){{semi}}

// proxy api requests
{{indent 0 ~}}  Object.keys(proxyTable).forEach((context) => {
{{indent 1 ~}}    var options = proxyTable[context]{{semi}}
{{indent 1 ~}}    if (typeof options === 'string') {
{{indent 2 ~}}      options = { target: options }{{semi}}
{{indent 1 ~}}    }
{{indent 1 ~}}    app.use(proxyMiddleware(options.filter || context, options)){{semi}}
{{indent 0 ~}}  }){{semi}}

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')()){{semi}}

// serve webpack bundle output
app.use(devMiddleware){{semi}}

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware){{semi}}

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory){{semi}}
app.use(staticPath, express.static('./static')){{semi}}

var uri = 'http://localhost:' + port{{semi}}

{{indent 0 ~}}  console.log('> Starting dev server...'){{semi}}
{{indent 0 ~}}  var readyPromise = new Promise((resolve) => {
{{indent 1 ~}}    devMiddleware.waitUntilValid(() => {
{{indent 2 ~}}      console.log('> Listening at ' + uri + '\n'){{semi}}
{{indent 2 ~}}      // when env is testing, don't need open it
{{indent 2 ~}}      if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
{{indent 3 ~}}        opn(uri){{semi}}
{{indent 2 ~}}      }
{{indent 2 ~}}      resolve(){{semi}}
{{indent 1 ~}}    }){{semi}}
{{indent 0 ~}}  }){{semi}}

var server = app.listen(port){{semi}}

{{indent 0 ~}}  module.exports = {
{{indent 1 ~}}    ready: readyPromise,
{{indent 1 ~}}    close: () => {
{{indent 2 ~}}      server.close(){{semi}}
{{indent 1 ~}}    },
{{indent 0 ~}}  }{{semi}}
