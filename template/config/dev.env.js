var merge = require({{string 'webpack-merge'}}){{semi}}
var prodEnv = require({{string './prod.env'}}){{semi}}

{{indent 0 ~}}  module.exports = merge(prodEnv, {
{{indent 1 ~}}    NODE_ENV: {{string '"development"'}},
{{indent 0 ~}}  }){{semi}}
