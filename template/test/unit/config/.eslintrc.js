{{indent 0 ~}}  module.exports = {
{{indent 1 ~}}    // prevent loading .eslintrc.js
{{indent 1 ~}}    root: {{#if_eq lintConfig "go"}}   {{/if_eq}}true,
{{indent 1 ~}}    // use .eslintrc-build.js instead
{{indent 1 ~}}    extends: {{#if_eq lintConfig "go"}}{{/if_eq}}{{string '../../../.eslintrc-build.js'}},
{{indent 0 ~}}  }{{semi}}
