{{indent 0 ~}}  module.exports = {
{{indent 1 ~}}    extends: {{string 'nkovacs/mocha.js'}},
{{indent 1 ~}}    env: {
{{indent 2 ~}}      mocha: true,
{{indent 1 ~}}    },
{{indent 1 ~}}    globals: {
{{indent 2 ~}}      expect: true,
{{indent 2 ~}}      sinon: true,
{{indent 1 ~}}    },
{{indent 0 ~}}  }{{semi}}
