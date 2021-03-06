var utils = require({{string './utils'}}){{semi}}
var config = require({{string '../config'}}){{semi}}
var isProduction = process.env.NODE_ENV === {{string 'production'}}{{semi}}

{{indent 0 ~}}  module.exports = {
{{indent 1 ~}}    loaders: utils.cssLoaders({
{{indent 2 ~}}      sourceMap: isProduction ?
{{indent 3 ~}}        config.build.productionSourceMap :
{{indent 3 ~}}        config.dev.cssSourceMap,
{{indent 2 ~}}      extract: isProduction,
{{indent 1 ~}}    }),
{{indent 0 ~}}  }{{semi}}
