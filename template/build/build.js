require({{string './check-versions'}})(){{semi}}

process.env.NODE_ENV = {{string 'production'}}{{semi}}

var ora = require({{string 'ora'}}){{semi}}
var rm = require({{string 'rimraf'}}){{semi}}
var path = require({{string 'path'}}){{semi}}
var chalk = require({{string 'chalk'}}){{semi}}
var webpack = require({{string 'webpack'}}){{semi}}
var config = require({{string '../config'}}){{semi}}
var webpackConfig = require({{string './webpack.prod.conf'}}){{semi}}

var spinner = ora({{string 'building for production...'}}){{semi}}
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
{{indent 3 ~}}        colors: {{#if_eq lintConfig "go"}}      {{/if_eq}}true,
{{indent 3 ~}}        modules: {{#if_eq lintConfig "go"}}     {{/if_eq}}false,
{{indent 3 ~}}        children: {{#if_eq lintConfig "go"}}    {{/if_eq}}false,
{{indent 3 ~}}        chunks: {{#if_eq lintConfig "go"}}      {{/if_eq}}false,
{{indent 3 ~}}        chunkModules: {{#if_eq lintConfig "go"}}{{/if_eq}}false,
{{indent 2 ~}}      }) + {{string '\n\n'}}){{semi}}

{{indent 2 ~}}      console.log(chalk.cyan({{string '  Build complete.\n'}})){{semi}}
{{indent 2 ~}}      console.log(chalk.yellow(
{{indent 3 ~}}        {{string '  Tip: built files are meant to be served over an HTTP server.\n'}} +
{{indent 3 ~}}        {{string '  Opening index.html over file:// won\'t work.\n'}}
{{indent 2 ~}}      )){{semi}}
{{indent 1 ~}}    }){{semi}}
{{indent 0 ~}}  }){{semi}}
