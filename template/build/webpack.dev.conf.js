var utils = require({{string './utils'}}){{semi}}
var webpack = require({{string 'webpack'}}){{semi}}
var config = require({{string '../config'}}){{semi}}
var merge = require({{string 'webpack-merge'}}){{semi}}
var baseWebpackConfig = require({{string './webpack.base.conf'}}){{semi}}
var HtmlWebpackPlugin = require({{string 'html-webpack-plugin'}}){{semi}}
var FriendlyErrorsPlugin = require({{string 'friendly-errors-webpack-plugin'}}){{semi}}

// add hot-reload related code to entry chunks
{{indent 0 ~}}  Object.keys(baseWebpackConfig.entry).forEach((name) => {
{{indent 1 ~}}    baseWebpackConfig.entry[name] = [{{string './build/dev-client'}}].concat(baseWebpackConfig.entry[name]){{semi}}
{{indent 0 ~}}  }){{semi}}

{{indent 0 ~}}  module.exports = merge(baseWebpackConfig, {
{{indent 1 ~}}    module: {
{{indent 2 ~}}      rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap }),
{{indent 1 ~}}    },
{{indent 1 ~}}    // cheap-module-eval-source-map is faster for development
{{indent 1 ~}}    devtool: {{string '#cheap-module-eval-source-map'}},
{{indent 1 ~}}    plugins: [
{{indent 2 ~}}      new webpack.DefinePlugin({
{{indent 3 ~}}        {{string 'process.env'}}: config.dev.env,
{{indent 2 ~}}      }),
{{indent 2 ~}}      // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
{{indent 2 ~}}      new webpack.HotModuleReplacementPlugin(),
{{indent 2 ~}}      new webpack.NoEmitOnErrorsPlugin(),
{{indent 2 ~}}      // https://github.com/ampedandwired/html-webpack-plugin
{{indent 2 ~}}      new HtmlWebpackPlugin({
{{indent 3 ~}}        filename: {{string 'index.html'}},
{{indent 3 ~}}        template: {{string 'index.html'}},
{{indent 3 ~}}        inject: {{#if_eq lintConfig "go"}}  {{/if_eq}}true,
{{indent 2 ~}}      }),
{{indent 2 ~}}      new FriendlyErrorsPlugin(),
{{indent 1 ~}}    ],
{{indent 0 ~}}  }){{semi}}
