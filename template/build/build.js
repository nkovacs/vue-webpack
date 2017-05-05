require('./check-versions')(){{semi}}

process.env.NODE_ENV = 'production'{{semi}}

var ora = require('ora'){{semi}}
var rm = require('rimraf'){{semi}}
var path = require('path'){{semi}}
var chalk = require('chalk'){{semi}}
var webpack = require('webpack'){{semi}}
var config = require('../config'){{semi}}
var webpackConfig = require('./webpack.prod.conf'){{semi}}

var spinner = ora('building for production...'){{semi}}
spinner.start(){{semi}}

{{indent 0 ~}}  rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), (err) => {
{{indent 1 ~}}    if (err) {
{{indent 2 ~}}      throw err{{semi}}
{{indent 1 ~}}    }
{{indent 1 ~}}    webpack(webpackConfig, (err, stats) => { // eslint-disable-line no-shadow
{{indent 2 ~}}      spinner.stop(){{semi}}
{{indent 2 ~}}      if (err) {
{{indent 3 ~}}        throw err{{semi}}
{{indent 2 ~}}      }
{{indent 2 ~}}      process.stdout.write(stats.toString({
{{indent 3 ~}}        colors: true,
{{indent 3 ~}}        modules: false,
{{indent 3 ~}}        children: false,
{{indent 3 ~}}        chunks: false,
{{indent 3 ~}}        chunkModules: false,
{{indent 2 ~}}      }) + '\n\n'){{semi}}

{{indent 2 ~}}      console.log(chalk.cyan('  Build complete.\n')){{semi}}
{{indent 2 ~}}      console.log(chalk.yellow(
{{indent 3 ~}}        '  Tip: built files are meant to be served over an HTTP server.\n' +
{{indent 3 ~}}        '  Opening index.html over file:// won\'t work.\n'
{{indent 2 ~}}      )){{semi}}
{{indent 1 ~}}    }){{semi}}
{{indent 0 ~}}  }){{semi}}
