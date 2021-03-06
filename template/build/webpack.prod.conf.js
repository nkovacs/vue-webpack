var path = require({{string 'path'}}){{semi}}
var utils = require({{string './utils'}}){{semi}}
var webpack = require({{string 'webpack'}}){{semi}}
var config = require({{string '../config'}}){{semi}}
var merge = require({{string 'webpack-merge'}}){{semi}}
var baseWebpackConfig = require({{string './webpack.base.conf'}}){{semi}}
var CopyWebpackPlugin = require({{string 'copy-webpack-plugin'}}){{semi}}
var HtmlWebpackPlugin = require({{string 'html-webpack-plugin'}}){{semi}}
var ExtractTextPlugin = require({{string 'extract-text-webpack-plugin'}}){{semi}}
var OptimizeCSSPlugin = require({{string 'optimize-css-assets-webpack-plugin'}}){{semi}}

{{indent 0 ~}}  var env = {{#if_or unit e2e}}process.env.NODE_ENV === {{string 'testing'}} ?
{{indent 1 ~}}    require({{string '../config/test.env'}}) :
{{indent 1 ~}}    {{/if_or}}config.build.env{{semi}}

{{indent 0 ~}}  var webpackConfig = merge(baseWebpackConfig, {
{{indent 1 ~}}    module: {
{{indent 2 ~}}      rules: utils.styleLoaders({
{{indent 3 ~}}        sourceMap: {{#if_eq lintConfig "go"}}{{/if_eq}}config.build.productionSourceMap,
{{indent 3 ~}}        extract: {{#if_eq lintConfig "go"}}  {{/if_eq}}true,
{{indent 2 ~}}      }),
{{indent 1 ~}}    },
{{indent 1 ~}}    devtool: config.build.productionSourceMap ? {{string '#source-map'}} : false,
{{indent 1 ~}}    output: {{#if_eq lintConfig "go"}} {{/if_eq}}{
{{indent 2 ~}}      path: {{#if_eq lintConfig "go"}}         {{/if_eq}}config.build.assetsRoot,
{{indent 2 ~}}      filename: {{#if_eq lintConfig "go"}}     {{/if_eq}}utils.assetsPath({{string 'js/[name].[chunkhash].js'}}),
{{indent 2 ~}}      chunkFilename: {{#if_eq lintConfig "go"}}{{/if_eq}}utils.assetsPath({{string 'js/[id].[chunkhash].js'}}),
{{indent 1 ~}}    },
{{indent 1 ~}}    plugins: [
{{indent 2 ~}}      // http://vuejs.github.io/vue-loader/en/workflow/production.html
{{indent 2 ~}}      new webpack.DefinePlugin({
{{indent 3 ~}}        {{string 'process.env'}}: env,
{{indent 2 ~}}      }),
{{indent 2 ~}}      new webpack.optimize.UglifyJsPlugin({
{{indent 3 ~}}        compress: {
{{indent 4 ~}}          warnings: false,
{{indent 3 ~}}        },
{{indent 3 ~}}        sourceMap: true,
{{indent 2 ~}}      }),
{{indent 2 ~}}      // extract css into its own file
{{indent 2 ~}}      new ExtractTextPlugin({
{{indent 3 ~}}        filename: utils.assetsPath({{string 'css/[name].[contenthash].css'}}),
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
{{indent 3 ~}}        filename: {{#if_or unit e2e}}process.env.NODE_ENV === {{string 'testing'}} ?
{{indent 4 ~}}          {{string 'index.html'}} :
{{indent 4 ~}}          {{/if_or}}config.build.index,
{{indent 3 ~}}        template: {{#if_eq lintConfig "go"}}{{/if_eq}}{{string 'index.html'}},
{{indent 3 ~}}        inject: {{#if_eq lintConfig "go"}}  {{/if_eq}}true,
{{indent 3 ~}}        minify: {{#if_eq lintConfig "go"}}  {{/if_eq}}{
{{indent 4 ~}}          removeComments: {{#if_eq lintConfig "go"}}       {{/if_eq}}true,
{{indent 4 ~}}          collapseWhitespace: {{#if_eq lintConfig "go"}}   {{/if_eq}}true,
{{indent 4 ~}}          removeAttributeQuotes: {{#if_eq lintConfig "go"}}{{/if_eq}}true,
{{indent 4 ~}}          // more options:
{{indent 4 ~}}          // https://github.com/kangax/html-minifier#options-quick-reference
{{indent 3 ~}}        },
{{indent 3 ~}}        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
{{indent 3 ~}}        chunksSortMode: {{string 'dependency'}},
{{indent 2 ~}}      }),
{{indent 2 ~}}      // split vendor js into its own file
{{indent 2 ~}}      new webpack.optimize.CommonsChunkPlugin({
{{indent 3 ~}}        name: {{#if_eq lintConfig "go"}}     {{/if_eq}}{{string 'vendor'}},
{{indent 3 ~}}        minChunks: {{#if_eq lintConfig "go"}}{{/if_eq}}function minChunks(module) {
{{indent 4 ~}}          // any required modules inside node_modules are extracted to vendor
{{indent 4 ~}}          return (
{{indent 5 ~}}            module.resource &&
{{indent 5 ~}}            /\.js$/.test(module.resource) &&
{{indent 5 ~}}            module.resource.indexOf(
{{indent 6 ~}}              path.join(__dirname, {{string '../node_modules'}})
{{indent 5 ~}}            ) === 0
{{indent 4 ~}}          ){{semi}}
{{indent 3 ~}}        },
{{indent 2 ~}}      }),
{{indent 2 ~}}      // extract webpack runtime and module manifest to its own file in order to
{{indent 2 ~}}      // prevent vendor hash from being updated whenever app bundle is updated
{{indent 2 ~}}      new webpack.optimize.CommonsChunkPlugin({
{{indent 3 ~}}        name: {{#if_eq lintConfig "go"}}  {{/if_eq}}{{string 'manifest'}},
{{indent 3 ~}}        chunks: {{#if_eq lintConfig "go"}}{{/if_eq}}[{{string 'vendor'}}],
{{indent 2 ~}}      }),
{{indent 2 ~}}      // copy custom static assets
{{indent 2 ~}}      new CopyWebpackPlugin([
{{indent 3 ~}}        {
{{indent 4 ~}}          from: {{#if_eq lintConfig "go"}}  {{/if_eq}}path.resolve(__dirname, {{string '../static'}}),
{{indent 4 ~}}          to: {{#if_eq lintConfig "go"}}    {{/if_eq}}config.build.assetsSubDirectory,
{{indent 4 ~}}          ignore: {{#if_eq lintConfig "go"}}{{/if_eq}}[{{string '.*'}}],
{{indent 3 ~}}        },
{{indent 2 ~}}      ]),
{{indent 1 ~}}    ],
{{indent 0 ~}}  }){{semi}}

{{indent 0 ~}}  if (config.build.productionGzip) {
{{indent 1 ~}}    // eslint-disable-next-line global-require
{{indent 1 ~}}    var CompressionWebpackPlugin = require({{string 'compression-webpack-plugin'}}){{semi}}

{{indent 1 ~}}    webpackConfig.plugins.push(
{{indent 2 ~}}      new CompressionWebpackPlugin({
{{indent 3 ~}}        asset: {{#if_eq lintConfig "go"}}    {{/if_eq}}{{string '[path].gz[query]'}},
{{indent 3 ~}}        algorithm: {{#if_eq lintConfig "go"}}{{/if_eq}}{{string 'gzip'}},
{{indent 3 ~}}        test: {{#if_eq lintConfig "go"}}     {{/if_eq}}new RegExp(
{{indent 4 ~}}          {{string '\\.('}} +
{{indent 4 ~}}          config.build.productionGzipExtensions.join({{string '|'}}) +
{{indent 4 ~}}          {{string ')$'}}
{{indent 3 ~}}        ),
{{indent 3 ~}}        threshold: 10240,
{{indent 3 ~}}        minRatio: {{#if_eq lintConfig "go"}} {{/if_eq}}0.8,
{{indent 2 ~}}      })
{{indent 1 ~}}    ){{semi}}
{{indent 0 ~}}  }

{{indent 0 ~}}  if (config.build.bundleAnalyzerReport) {
{{indent 1 ~}}    // eslint-disable-next-line global-require
{{indent 1 ~}}    var BundleAnalyzerPlugin = require({{string 'webpack-bundle-analyzer'}}).BundleAnalyzerPlugin{{semi}}
{{indent 1 ~}}    webpackConfig.plugins.push(new BundleAnalyzerPlugin()){{semi}}
{{indent 0 ~}}  }

module.exports = webpackConfig{{semi}}
