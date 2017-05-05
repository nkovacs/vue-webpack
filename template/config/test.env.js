var merge = require('webpack-merge'){{semi}}
var devEnv = require('./dev.env'){{semi}}

{{indent 0 ~}}  module.exports = merge(devEnv, {
{{indent 1 ~}}    NODE_ENV: '"testing"',
{{indent 0 ~}}  }){{semi}}
