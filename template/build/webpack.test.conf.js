// This is the webpack config used for unit tests.

var utils = require({{string './utils'}}){{semi}}
var webpack = require({{string 'webpack'}}){{semi}}
var merge = require({{string 'webpack-merge'}}){{semi}}
var baseConfig = require({{string './webpack.base.conf'}}){{semi}}
var testEnv = require({{string '../config/test.env'}}){{semi}}

{{indent 0 ~}}  var webpackConfig = merge(baseConfig, {
{{indent 1 ~}}    // use inline sourcemap for karma-sourcemap-loader
{{indent 1 ~}}    module: {
{{indent 2 ~}}      rules: utils.styleLoaders(),
{{indent 1 ~}}    },
{{indent 1 ~}}    devtool: '#inline-source-map',
{{indent 1 ~}}    resolveLoader: {
{{indent 2 ~}}      alias: {
{{indent 3 ~}}        // necessary to to make lang="scss" work in test when using vue-loader's ?inject option
{{indent 3 ~}}        // see discussion at https://github.com/vuejs/vue-loader/issues/724
{{indent 3 ~}}        {{string 'scss-loader'}}: {{string 'sass-loader'}},
{{indent 2 ~}}      },
{{indent 1 ~}}    },
{{indent 1 ~}}    plugins: [
{{indent 2 ~}}      new webpack.DefinePlugin({
{{indent 3 ~}}        {{string 'process.env'}}: testEnv,
{{indent 2 ~}}      }),
{{indent 1 ~}}    ],
{{indent 0 ~}}  }){{semi}}

// no need for app entry during tests
delete webpackConfig.entry{{semi}}

module.exports = webpackConfig{{semi}}
