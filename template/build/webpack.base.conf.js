var path = require({{string 'path'}}){{semi}}
var utils = require({{string './utils'}}){{semi}}
var config = require({{string '../config'}}){{semi}}
var vueLoaderConfig = require({{string './vue-loader.conf'}}){{semi}}
var friendlyFormatter = require({{string 'eslint-friendly-formatter'}}){{semi}}

{{indent 0 ~}}  function resolve(dir) {
{{indent 1 ~}}    return path.join(__dirname, {{string '..'}}, dir){{semi}}
{{indent 0 ~}}  }

{{indent 0 ~}}  module.exports = {
{{indent 1 ~}}    entry: {
{{indent 2 ~}}      app: {{string './src/main.js'}},
{{indent 1 ~}}    },
{{indent 1 ~}}    output: {
{{indent 2 ~}}      path: {{#if_eq lintConfig "go"}}      {{/if_eq}}config.build.assetsRoot,
{{indent 2 ~}}      filename: {{#if_eq lintConfig "go"}}  {{/if_eq}}{{string '[name].js'}},
{{indent 2 ~}}      publicPath: {{#if_eq lintConfig "go"}}{{/if_eq}}process.env.NODE_ENV === {{string 'production'}} ?
{{indent 3 ~}}        config.build.assetsPublicPath :
{{indent 3 ~}}        config.dev.assetsPublicPath,
{{indent 1 ~}}    },
{{indent 1 ~}}    resolve: {
{{indent 2 ~}}      extensions: {{#if_eq lintConfig "go"}}{{/if_eq}}[{{string '.js'}}, {{string '.vue'}}, {{string '.json'}}],
{{indent 2 ~}}      alias: {{#if_eq lintConfig "go"}}     {{/if_eq}}{
                      {{#if_eq build "standalone"}}
{{indent 3 ~}}        vue$: {{string 'vue/dist/vue.esm.js'}},
                      {{/if_eq}}
{{indent 3 ~}}        {{string '@'}}: {{#if_eq lintConfig "go"}}{{#if_eq build "standalone"}} {{/if_eq}}{{/if_eq}}resolve({{string 'src'}}),
{{indent 2 ~}}      },
{{indent 1 ~}}    },
{{indent 1 ~}}    module: {
{{indent 2 ~}}      rules: [
                      {{#lint}}
{{indent 3 ~}}        {
{{indent 4 ~}}          test: {{#if_eq lintConfig "go"}}   {{/if_eq}}/\.(js|vue)$/,
{{indent 4 ~}}          loader: {{#if_eq lintConfig "go"}} {{/if_eq}}{{string 'eslint-loader'}},
{{indent 4 ~}}          enforce: {{string 'pre'}},
{{indent 4 ~}}          include: [resolve({{string 'src'}}), resolve({{string 'test'}})],
{{indent 4 ~}}          options: {
{{indent 5 ~}}            formatter: friendlyFormatter,
{{indent 4 ~}}          },
{{indent 3 ~}}        },
                      {{/lint}}
{{indent 3 ~}}        {
{{indent 4 ~}}          test: {{#if_eq lintConfig "go"}}   {{/if_eq}}/\.vue$/,
{{indent 4 ~}}          loader: {{#if_eq lintConfig "go"}} {{/if_eq}}{{string 'vue-loader'}},
{{indent 4 ~}}          options: vueLoaderConfig,
{{indent 3 ~}}        },
{{indent 3 ~}}        {
{{indent 4 ~}}          test: {{#if_eq lintConfig "go"}}   {{/if_eq}}/\.js$/,
{{indent 4 ~}}          loader: {{#if_eq lintConfig "go"}} {{/if_eq}}{{string 'babel-loader'}},
{{indent 4 ~}}          include: [resolve({{string 'src'}}), resolve({{string 'test'}})],
{{indent 3 ~}}        },
{{indent 3 ~}}        {
{{indent 4 ~}}          test: {{#if_eq lintConfig "go"}}   {{/if_eq}}/\.(png|jpe?g|gif|svg)(\?.*)?$/,
{{indent 4 ~}}          loader: {{#if_eq lintConfig "go"}} {{/if_eq}}{{string 'url-loader'}},
{{indent 4 ~}}          options: {
{{indent 5 ~}}            limit: 10000,
{{indent 5 ~}}            name: {{#if_eq lintConfig "go"}} {{/if_eq}}utils.assetsPath({{string 'img/[name].[hash:7].[ext]'}}),
{{indent 4 ~}}          },
{{indent 3 ~}}        },
{{indent 3 ~}}        {
{{indent 4 ~}}          test: {{#if_eq lintConfig "go"}}   {{/if_eq}}/\.(woff2?|eot|ttf|otf)(\?.*)?$/,
{{indent 4 ~}}          loader: {{#if_eq lintConfig "go"}} {{/if_eq}}{{string 'url-loader'}},
{{indent 4 ~}}          options: {
{{indent 5 ~}}            limit: 10000,
{{indent 5 ~}}            name: {{#if_eq lintConfig "go"}} {{/if_eq}}utils.assetsPath({{string 'fonts/[name].[hash:7].[ext]'}}),
{{indent 4 ~}}          },
{{indent 3 ~}}        },
{{indent 2 ~}}      ],
{{indent 1 ~}}    },
{{indent 0 ~}}  }{{semi}}
