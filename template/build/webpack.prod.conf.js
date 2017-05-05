var path = require('path'){{semi}}
var utils = require('./utils'){{semi}}
var webpack = require('webpack'){{semi}}
var config = require('../config'){{semi}}
var merge = require('webpack-merge'){{semi}}
var baseWebpackConfig = require('./webpack.base.conf'){{semi}}
var CopyWebpackPlugin = require('copy-webpack-plugin'){{semi}}
var HtmlWebpackPlugin = require('html-webpack-plugin'){{semi}}
var ExtractTextPlugin = require('extract-text-webpack-plugin'){{semi}}
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin'){{semi}}

{{indent 0 ~}}  var env = {{#if_or unit e2e}}process.env.NODE_ENV === 'testing' ?
{{indent 1 ~}}    require('../config/test.env') :
{{indent 1 ~}}    {{/if_or}}config.build.env{{semi}}

{{indent 0 ~}}  var webpackConfig = merge(baseWebpackConfig, {
{{indent 1 ~}}    module: {
{{indent 2 ~}}      rules: utils.styleLoaders({
{{indent 3 ~}}        sourceMap: config.build.productionSourceMap,
{{indent 3 ~}}        extract: true,
{{indent 2 ~}}      }),
{{indent 1 ~}}    },
{{indent 1 ~}}    devtool: config.build.productionSourceMap ? '#source-map' : false,
{{indent 1 ~}}    output: {
{{indent 2 ~}}      path: config.build.assetsRoot,
{{indent 2 ~}}      filename: utils.assetsPath('js/[name].[chunkhash].js'),
{{indent 2 ~}}      chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
{{indent 1 ~}}    },
{{indent 1 ~}}    plugins: [
{{indent 2 ~}}      // http://vuejs.github.io/vue-loader/en/workflow/production.html
{{indent 2 ~}}      new webpack.DefinePlugin({
{{indent 3 ~}}        'process.env': env,
{{indent 2 ~}}      }),
{{indent 2 ~}}      new webpack.optimize.UglifyJsPlugin({
{{indent 3 ~}}        compress: {
{{indent 4 ~}}          warnings: false,
{{indent 3 ~}}        },
{{indent 3 ~}}        sourceMap: true,
{{indent 2 ~}}      }),
{{indent 2 ~}}      // extract css into its own file
{{indent 2 ~}}      new ExtractTextPlugin({
{{indent 3 ~}}        filename: utils.assetsPath('css/[name].[contenthash].css'),
{{indent 2 ~}}      }),
{{indent 2 ~}}      // Compress extracted CSS. We are using this plugin so that possible
{{indent 2 ~}}      // duplicated CSS from different components can be deduped.
{{indent 2 ~}}      new OptimizeCSSPlugin({
{{indent 3 ~}}        cssProcessorOptions: {
{{indent 4 ~}}          safe: true,
{{indent 3 ~}}        },
{{indent 2 ~}}      }),
{{indent 2 ~}}      // generate dist index.html with correct asset hash for caching.
{{indent 2 ~}}      // you can customize output by editing /index.html
{{indent 2 ~}}      // see https://github.com/ampedandwired/html-webpack-plugin
{{indent 2 ~}}      new HtmlWebpackPlugin({
{{indent 3 ~}}        filename: {{#if_or unit e2e}}process.env.NODE_ENV === 'testing' ?
{{indent 4 ~}}          'index.html' :
{{indent 4 ~}}          {{/if_or}}config.build.index,
{{indent 3 ~}}        template: 'index.html',
{{indent 3 ~}}        inject: true,
{{indent 3 ~}}        minify: {
{{indent 4 ~}}          removeComments: true,
{{indent 4 ~}}          collapseWhitespace: true,
{{indent 4 ~}}          removeAttributeQuotes: true,
{{indent 4 ~}}          // more options:
{{indent 4 ~}}          // https://github.com/kangax/html-minifier#options-quick-reference
{{indent 3 ~}}        },
{{indent 3 ~}}        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
{{indent 3 ~}}        chunksSortMode: 'dependency',
{{indent 2 ~}}      }),
{{indent 2 ~}}      // split vendor js into its own file
{{indent 2 ~}}      new webpack.optimize.CommonsChunkPlugin({
{{indent 3 ~}}        name: 'vendor',
{{indent 3 ~}}        minChunks: function minChunks(module) {
{{indent 4 ~}}          // any required modules inside node_modules are extracted to vendor
{{indent 4 ~}}          return (
{{indent 5 ~}}            module.resource &&
{{indent 5 ~}}            /\.js$/.test(module.resource) &&
{{indent 5 ~}}            module.resource.indexOf(
{{indent 6 ~}}              path.join(__dirname, '../node_modules')
{{indent 5 ~}}            ) === 0
{{indent 4 ~}}          ){{semi}}
{{indent 3 ~}}        },
{{indent 2 ~}}      }),
{{indent 2 ~}}      // extract webpack runtime and module manifest to its own file in order to
{{indent 2 ~}}      // prevent vendor hash from being updated whenever app bundle is updated
{{indent 2 ~}}      new webpack.optimize.CommonsChunkPlugin({
{{indent 3 ~}}        name: 'manifest',
{{indent 3 ~}}        chunks: ['vendor'],
{{indent 2 ~}}      }),
{{indent 2 ~}}      // copy custom static assets
{{indent 2 ~}}      new CopyWebpackPlugin([
{{indent 3 ~}}        {
{{indent 4 ~}}          from: path.resolve(__dirname, '../static'),
{{indent 4 ~}}          to: config.build.assetsSubDirectory,
{{indent 4 ~}}          ignore: ['.*'],
{{indent 3 ~}}        },
{{indent 2 ~}}      ]),
{{indent 1 ~}}    ],
{{indent 0 ~}}  }){{semi}}

{{indent 0 ~}}  if (config.build.productionGzip) {
{{indent 1 ~}}    // eslint-disable-next-line global-require
{{indent 1 ~}}    var CompressionWebpackPlugin = require('compression-webpack-plugin'){{semi}}

{{indent 1 ~}}    webpackConfig.plugins.push(
{{indent 2 ~}}      new CompressionWebpackPlugin({
{{indent 3 ~}}        asset: '[path].gz[query]',
{{indent 3 ~}}        algorithm: 'gzip',
{{indent 3 ~}}        test: new RegExp(
{{indent 4 ~}}          '\\.(' +
{{indent 4 ~}}          config.build.productionGzipExtensions.join('|') +
{{indent 4 ~}}          ')$'
{{indent 3 ~}}        ),
{{indent 3 ~}}        threshold: 10240,
{{indent 3 ~}}        minRatio: 0.8,
{{indent 2 ~}}      })
{{indent 1 ~}}    ){{semi}}
{{indent 0 ~}}  }

{{indent 0 ~}}  if (config.build.bundleAnalyzerReport) {
{{indent 1 ~}}    // eslint-disable-next-line global-require
{{indent 1 ~}}    var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin{{semi}}
{{indent 1 ~}}    webpackConfig.plugins.push(new BundleAnalyzerPlugin()){{semi}}
{{indent 0 ~}}  }

module.exports = webpackConfig{{semi}}
