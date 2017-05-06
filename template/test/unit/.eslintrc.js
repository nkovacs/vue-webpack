{{indent 0 ~}}  module.exports = {
{{indent 1 ~}}    extends: {{#if_eq lintConfig "go"}}{{/if_eq}}{{string 'nkovacs/mocha.js'}},
{{indent 1 ~}}    env: {{#if_eq lintConfig "go"}}    {{/if_eq}}{
{{indent 2 ~}}      mocha: true,
{{indent 1 ~}}    },
{{indent 1 ~}}    globals: {
{{indent 2 ~}}      expect: {{#if_eq lintConfig "go"}}{{/if_eq}}true,
{{indent 2 ~}}      sinon: {{#if_eq lintConfig "go"}} {{/if_eq}}true,
{{indent 1 ~}}    },
{{indent 0 ~}}  }{{semi}}
