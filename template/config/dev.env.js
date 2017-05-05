var merge = require('webpack-merge'){{semi}}
var prodEnv = require('./prod.env'){{semi}}

{{indent 0 ~}}  module.exports = merge(prodEnv, {
{{indent 1 ~}}    NODE_ENV: '"development"',
{{indent 0 ~}}  }){{semi}}
