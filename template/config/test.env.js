var merge = require({{string 'webpack-merge'}}){{semi}}
var devEnv = require({{string './dev.env'}}){{semi}}

{{indent 0 ~}}  module.exports = merge(devEnv, {
{{indent 1 ~}}    NODE_ENV: {{string '"testing"'}},
{{indent 0 ~}}  }){{semi}}
