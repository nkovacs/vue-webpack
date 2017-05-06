// http://eslint.org/docs/user-guide/configuring

{{indent 0 ~}}  module.exports = {
{{indent 1 ~}}    root: true,
{{indent 1 ~}}    parser: {{string 'babel-eslint'}},
{{indent 1 ~}}    parserOptions: {
{{indent 2 ~}}      sourceType: {{string 'module'}},
{{indent 1 ~}}    },
{{indent 1 ~}}    env: {
{{indent 2 ~}}      browser: true,
{{indent 1 ~}}    },
{{indent 1 ~}}    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
                  {{#if_eq lintConfig "4space;"}}
{{indent 1 ~}}    extends: {{string 'nkovacs'}},
                  {{/if_eq}}
                  {{#if_eq lintConfig "go"}}
{{indent 1 ~}}    extends: {{string 'nkovacs/go.js'}},
                  {{/if_eq}}
{{indent 1 ~}}    // required to lint *.vue files
{{indent 1 ~}}    plugins: [
{{indent 2 ~}}      {{string 'html'}},
{{indent 1 ~}}    ],
{{indent 1 ~}}    // check if imports actually resolve
                  {{#unless_eq lintConfig "none"}}
{{indent 1 ~}}    settings: {
{{indent 2 ~}}      {{string 'import/resolver'}}: {
{{indent 3 ~}}        webpack: {
{{indent 4 ~}}          config: {{string 'build/webpack.base.conf.js'}},
{{indent 3 ~}}        },
{{indent 2 ~}}      },
{{indent 1 ~}}    },
                  {{/unless_eq}}
{{indent 1 ~}}    // add your custom rules here
{{indent 1 ~}}    rules: {
                    {{#unless_eq lintConfig "none"}}
{{indent 2 ~}}      // don't require .vue extension when importing
{{indent 2 ~}}      {{string 'import/extensions'}}: [{{string 'error'}}, {{string 'always'}}, {
{{indent 3 ~}}        js: {{string 'never'}},
{{indent 3 ~}}        vue: {{string 'never'}},
{{indent 2 ~}}      }],
{{indent 2 ~}}      // allow optionalDependencies
{{indent 2 ~}}      {{string 'import/no-extraneous-dependencies'}}: [{{string 'error'}}, {
{{indent 3 ~}}        devDependencies: [
{{indent 4 ~}}          {{string 'build/**'}},
{{indent 4 ~}}          {{string 'config/**'}},
{{indent 4 ~}}          {{string 'test/**'}},
{{indent 3 ~}}        ],
{{indent 3 ~}}        optionalDependencies: [{{string 'test/unit/index.js'}}],
{{indent 2 ~}}      }],
                    {{/unless_eq}}
{{indent 2 ~}}      // allow debugger and console during development
{{indent 2 ~}}      {{string 'no-console'}}: process.env.NODE_ENV === {{string 'production'}} ? {{string 'warn'}} : {{string 'off'}},
{{indent 2 ~}}      {{string 'no-debugger'}}: process.env.NODE_ENV === {{string 'production'}} ? 2 : 0,
{{indent 1 ~}}    },
{{indent 0 ~}}  }{{semi}}
