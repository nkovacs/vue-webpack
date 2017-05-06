var path = require({{string 'path'}}){{semi}}
var config = require({{string '../config'}}){{semi}}
var ExtractTextPlugin = require({{string 'extract-text-webpack-plugin'}}){{semi}}

{{indent 0 ~}}  exports.assetsPath = function assetsPath(_path) {
{{indent 1 ~}}    var assetsSubDirectory = process.env.NODE_ENV === {{string 'production'}} ?
{{indent 2 ~}}      config.build.assetsSubDirectory :
{{indent 2 ~}}      config.dev.assetsSubDirectory{{semi}}
{{indent 1 ~}}    return path.posix.join(assetsSubDirectory, _path){{semi}}
{{indent 0 ~}}  }{{semi}}

{{indent 0 ~}}  exports.cssLoaders = function cssLoaders(options) {
{{indent 1 ~}}    options = options || {}{{semi}}

{{indent 1 ~}}    var cssLoader = {
{{indent 2 ~}}      loader: {{#if_eq lintConfig "go"}} {{/if_eq}}{{string 'css-loader'}},
{{indent 2 ~}}      options: {{#if_eq lintConfig "go"}}{{/if_eq}}{
{{indent 3 ~}}        minimize: {{#if_eq lintConfig "go"}} {{/if_eq}}process.env.NODE_ENV === {{string 'production'}},
{{indent 3 ~}}        sourceMap: {{#if_eq lintConfig "go"}}{{/if_eq}}options.sourceMap,
{{indent 2 ~}}      },
{{indent 1 ~}}    }{{semi}}

{{indent 1 ~}}    // generate loader string to be used with extract text plugin
{{indent 1 ~}}    function generateLoaders(loader, loaderOptions) {
{{indent 2 ~}}      var loaders = [cssLoader]{{semi}}
{{indent 2 ~}}      if (loader) {
{{indent 3 ~}}        loaders.push({
{{indent 4 ~}}          loader: {{#if_eq lintConfig "go"}} {{/if_eq}}loader + {{string '-loader'}},
{{indent 4 ~}}          options: {{#if_eq lintConfig "go"}}{{/if_eq}}Object.assign({}, loaderOptions, {
{{indent 5 ~}}            sourceMap: options.sourceMap,
{{indent 4 ~}}          }),
{{indent 3 ~}}        }){{semi}}
{{indent 2 ~}}      }

{{indent 2 ~}}      // Extract CSS when that option is specified
{{indent 2 ~}}      // (which is the case during production build)
{{indent 2 ~}}      if (options.extract) {
{{indent 3 ~}}        return ExtractTextPlugin.extract({
{{indent 4 ~}}          use: {{#if_eq lintConfig "go"}}     {{/if_eq}}loaders,
{{indent 4 ~}}          fallback: {{#if_eq lintConfig "go"}}{{/if_eq}}{{string 'vue-style-loader'}},
{{indent 3 ~}}        }){{semi}}
{{indent 2 ~}}      }
{{indent 2 ~}}      return [{{string 'vue-style-loader'}}].concat(loaders){{semi}}
{{indent 1 ~}}    }

{{indent 1 ~}}    // https://vue-loader.vuejs.org/en/configurations/extract-css.html
{{indent 1 ~}}    return {
{{indent 2 ~}}      css: {{#if_eq lintConfig "go"}}    {{/if_eq}}generateLoaders(),
{{indent 2 ~}}      postcss: {{#if_eq lintConfig "go"}}{{/if_eq}}generateLoaders(),
{{indent 2 ~}}      less: {{#if_eq lintConfig "go"}}   {{/if_eq}}generateLoaders({{string 'less'}}),
{{indent 2 ~}}      sass: {{#if_eq lintConfig "go"}}   {{/if_eq}}generateLoaders({{string 'sass'}}, { indentedSyntax: true }),
{{indent 2 ~}}      scss: {{#if_eq lintConfig "go"}}   {{/if_eq}}generateLoaders({{string 'sass'}}),
{{indent 2 ~}}      stylus: {{#if_eq lintConfig "go"}} {{/if_eq}}generateLoaders({{string 'stylus'}}),
{{indent 2 ~}}      styl: {{#if_eq lintConfig "go"}}   {{/if_eq}}generateLoaders({{string 'stylus'}}),
{{indent 1 ~}}    }{{semi}}
{{indent 0 ~}}  }{{semi}}

{{indent 0 ~}}  // Generate loaders for standalone style files (outside of .vue)
{{indent 0 ~}}  exports.styleLoaders = function styleLoaders(options) {
{{indent 1 ~}}    var output = []{{semi}}
{{indent 1 ~}}    var loaders = exports.cssLoaders(options){{semi}}
{{indent 1 ~}}    Object.keys(loaders).forEach((extension) => {
{{indent 2 ~}}      var loader = loaders[extension]{{semi}}
{{indent 2 ~}}      output.push({
{{indent 3 ~}}        test: {{#if_eq lintConfig "go"}}{{/if_eq}}new RegExp({{string '\\.'}} + extension + {{string '$'}}),
{{indent 3 ~}}        use: {{#if_eq lintConfig "go"}} {{/if_eq}}loader,
{{indent 2 ~}}      }){{semi}}
{{indent 1 ~}}    }){{semi}}
{{indent 1 ~}}    return output{{semi}}
{{indent 0 ~}}  }{{semi}}
