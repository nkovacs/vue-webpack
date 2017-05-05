// http://eslint.org/docs/user-guide/configuring

{{indent 0 ~}}  module.exports = {
{{indent 1 ~}}    root: true,
{{indent 1 ~}}    parser: 'babel-eslint',
{{indent 1 ~}}    parserOptions: {
{{indent 2 ~}}      sourceType: 'module',
{{indent 1 ~}}    },
{{indent 1 ~}}    env: {
{{indent 2 ~}}      browser: true,
{{indent 1 ~}}    },
{{indent 1 ~}}    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
                  {{#if_eq lintConfig "4space;"}}
{{indent 1 ~}}    extends: 'nkovacs',
                  {{/if_eq}}
                  {{#if_eq lintConfig "go"}}
{{indent 1 ~}}    extends: 'nkovacs/go.js',
                  {{/if_eq}}
{{indent 1 ~}}    // required to lint *.vue files
{{indent 1 ~}}    plugins: [
{{indent 2 ~}}      'html',
{{indent 1 ~}}    ],
{{indent 1 ~}}    // check if imports actually resolve
                  {{#unless_eq lintConfig "none"}}
{{indent 1 ~}}    settings: {
{{indent 2 ~}}      'import/resolver': {
{{indent 3 ~}}        webpack: {
{{indent 4 ~}}          config: 'build/webpack.base.conf.js',
{{indent 3 ~}}        },
{{indent 2 ~}}      },
{{indent 1 ~}}    },
                  {{/unless_eq}}
{{indent 1 ~}}    // add your custom rules here
{{indent 1 ~}}    rules: {
                    {{#unless_eq lintConfig "none"}}
{{indent 2 ~}}      // don't require .vue extension when importing
{{indent 2 ~}}      'import/extensions': ['error', 'always', {
{{indent 3 ~}}        js: 'never',
{{indent 3 ~}}        vue: 'never',
{{indent 2 ~}}      }],
{{indent 2 ~}}      // allow optionalDependencies
{{indent 2 ~}}      'import/no-extraneous-dependencies': ['error', {
{{indent 3 ~}}        devDependencies: [
{{indent 4 ~}}          'build/**',
{{indent 4 ~}}          'config/**',
{{indent 4 ~}}          'test/**',
{{indent 3 ~}}        ],
{{indent 3 ~}}        optionalDependencies: ['test/unit/index.js'],
{{indent 2 ~}}      }],
                    {{/unless_eq}}
{{indent 2 ~}}      // allow debugger and console during development
{{indent 2 ~}}      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
{{indent 2 ~}}      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
{{indent 1 ~}}    },
{{indent 0 ~}}  }{{semi}}
