// see http://vuejs-templates.github.io/webpack for documentation.
var path = require({{string 'path'}}){{semi}}
var prodEnv = require({{string './prod.env'}}){{semi}}
var devEnv = require({{string './dev.env'}}){{semi}}

{{indent 0 ~}}  module.exports = {
{{indent 1 ~}}    build: {
{{indent 2 ~}}      env: {{#if_eq lintConfig "go"}}                     {{/if_eq}}prodEnv,
{{indent 2 ~}}      index: {{#if_eq lintConfig "go"}}                   {{/if_eq}}path.resolve(__dirname, {{string '../dist/index.html'}}),
{{indent 2 ~}}      assetsRoot: {{#if_eq lintConfig "go"}}              {{/if_eq}}path.resolve(__dirname, {{string '../dist'}}),
{{indent 2 ~}}      assetsSubDirectory: {{#if_eq lintConfig "go"}}      {{/if_eq}}{{string 'static'}},
{{indent 2 ~}}      assetsPublicPath: {{#if_eq lintConfig "go"}}        {{/if_eq}}{{string '/'}},
{{indent 2 ~}}      productionSourceMap: {{#if_eq lintConfig "go"}}     {{/if_eq}}true,
{{indent 2 ~}}      // Gzip off by default as many popular static hosts such as
{{indent 2 ~}}      // Surge or Netlify already gzip all static assets for you.
{{indent 2 ~}}      // Before setting to `true`, make sure to:
{{indent 2 ~}}      // npm install --save-dev compression-webpack-plugin
{{indent 2 ~}}      productionGzip: {{#if_eq lintConfig "go"}}          {{/if_eq}}false,
{{indent 2 ~}}      productionGzipExtensions: {{#if_eq lintConfig "go"}}{{/if_eq}}[{{string 'js'}}, {{string 'css'}}],
{{indent 2 ~}}      // Run the build command with an extra argument to
{{indent 2 ~}}      // View the bundle analyzer report after build finishes:
{{indent 2 ~}}      // `npm run build --report`
{{indent 2 ~}}      // Set to `true` or `false` to always turn it on or off
{{indent 2 ~}}      bundleAnalyzerReport: {{#if_eq lintConfig "go"}}    {{/if_eq}}process.env.npm_config_report,
{{indent 1 ~}}    },
{{indent 1 ~}}    dev: {
{{indent 2 ~}}      env: {{#if_eq lintConfig "go"}}               {{/if_eq}}devEnv,
{{indent 2 ~}}      port: {{#if_eq lintConfig "go"}}              {{/if_eq}}8080,
{{indent 2 ~}}      autoOpenBrowser: {{#if_eq lintConfig "go"}}   {{/if_eq}}true,
{{indent 2 ~}}      assetsSubDirectory: {{#if_eq lintConfig "go"}}{{/if_eq}}{{string 'static'}},
{{indent 2 ~}}      assetsPublicPath: {{#if_eq lintConfig "go"}}  {{/if_eq}}{{string '/'}},
{{indent 2 ~}}      proxyTable: {{#if_eq lintConfig "go"}}        {{/if_eq}}{},
{{indent 2 ~}}      // CSS Sourcemaps off by default because relative paths are "buggy"
{{indent 2 ~}}      // with this option, according to the CSS-Loader README
{{indent 2 ~}}      // (https://github.com/webpack/css-loader#sourcemaps)
{{indent 2 ~}}      // In our experience, they generally work as expected,
{{indent 2 ~}}      // just be aware of this issue when enabling this option.
{{indent 2 ~}}      cssSourceMap: {{#if_eq lintConfig "go"}}      {{/if_eq}}false,
{{indent 1 ~}}    },
{{indent 0 ~}}  }{{semi}}
