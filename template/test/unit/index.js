import Vue from 'vue'{{semi}}

Vue.config.productionTip = false{{semi}}

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/){{semi}}
testsContext.keys().forEach(testsContext){{semi}}

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/){{semi}}
srcContext.keys().forEach(srcContext){{semi}}
