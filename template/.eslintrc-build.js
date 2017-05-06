// http://eslint.org/docs/user-guide/configuring
// This .eslintrc file is for the build scripts and config files.
// It is mostly es5, to support node 4.

{{indent 0 ~}}  module.exports = {
{{indent 1 ~}}    root: {{#if_eq lintConfig "go"}}   {{/if_eq}}true,
                  {{#if_eq lintConfig "4space;"}}
{{indent 1 ~}}    extends: {{string 'nkovacs/es5.js'}},
                  {{/if_eq}}
                  {{#if_eq lintConfig "go"}}
{{indent 1 ~}}    extends: {{string 'nkovacs/go-es5.js'}},
                  {{/if_eq}}
{{indent 1 ~}}    // add your custom rules here
{{indent 1 ~}}    rules: {{#if_eq lintConfig "go"}}  {{/if_eq}}{
{{indent 2 ~}}      {{string 'no-console'}}: {{#if_eq lintConfig "go"}}             {{/if_eq}}{{string 'off'}},
{{indent 2 ~}}      {{string 'unicorn/no-process-exit'}}: {{string 'off'}},
{{indent 2 ~}}      {{string 'no-param-reassign'}}: {{#if_eq lintConfig "go"}}      {{/if_eq}}{{string 'off'}},
                    {{#unless_eq lintConfig "none"}}
{{indent 2 ~}}      // node 4 supports arrow functions, use them
{{indent 2 ~}}      {{string 'prefer-arrow-callback'}}: {{#if_eq lintConfig "go"}}  {{/if_eq}}[{{string 'error'}}, {
{{indent 3 ~}}        allowNamedFunctions: false,
{{indent 3 ~}}        allowUnboundThis: {{#if_eq lintConfig "go"}}   {{/if_eq}}true,
{{indent 2 ~}}      }],
{{indent 2 ~}}      {{string 'arrow-body-style'}}: [{{string 'error'}}, {{string 'as-needed'}}, {
{{indent 3 ~}}        requireReturnForObjectLiteral: false,
{{indent 2 ~}}      }],
{{indent 2 ~}}      {{string 'arrow-parens'}}: [{{string 'error'}}, {{string 'as-needed'}}, {
{{indent 3 ~}}        requireForBlockBody: true,
{{indent 2 ~}}      }],
{{indent 2 ~}}      {{string 'arrow-spacing'}}: {{#if_eq lintConfig "go"}}     {{/if_eq}}[{{string 'error'}}, { before: true, after: true }],
{{indent 2 ~}}      {{string 'no-confusing-arrow'}}: [{{string 'error'}}, {
{{indent 3 ~}}        allowParens: true,
{{indent 2 ~}}      }],
                    {{/unless_eq}}
{{indent 1 ~}}    },
{{indent 0 ~}}  }{{semi}}
