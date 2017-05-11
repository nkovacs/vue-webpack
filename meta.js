module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    },
    "semi": function() {
      return this.lintConfig === 'go' ? '' : ';';
    },
    "indent": function(count, options) {
      if (!options) {
        options = count;
        count = 1;
      }
      var indent = this.lintConfig === 'go' ? '\t' : '    ';
      return indent.repeat(count);
    },
    "indentstyle": function() {
        return this.lintConfig === 'go' ? 'tab' : 'space';
    },
    "string": function(s) {
      if (this.lintConfig === 'go') {
        return '"' + s.replace(/"/g, '\\"') + '"';
      }
      return '\'' + s.replace(/'/g, "\\'") + '\'';
    },
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "override": process.env.VUE_NAME,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "override": process.env.VUE_DESCRIPTION,
      "message": "Project description",
      "default": "A Vue.js project"
    },
    "author": {
      "type": "string",
      "override": process.env.VUE_AUTHOR,
      "message": "Author"
    },
    "build": {
      "type": "list",
      "override": process.env.VUE_BUILD,
      "message": "Vue build",
      "choices": [
        {
          "name": "Runtime + Compiler: recommended for most users",
          "value": "standalone",
          "short": "standalone"
        },
        {
          "name": "Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere",
          "value": "runtime",
          "short": "runtime"
        }
      ]
    },
    "router": {
      "type": "confirm",
      "override": process.env.VUE_ROUTER === undefined ? undefined : (process.env.VUE_ROUTER === 'y'),
      "message": "Install vue-router?"
    },
    "lint": {
      "type": "confirm",
      "override": process.env.VUE_LINT === undefined ? undefined : (process.env.VUE_LINT === 'y'),
      "message": "Use ESLint to lint your code?"
    },
    "lintConfig": {
      "when": "lint",
      "type": "list",
      "override": process.env.VUE_LINTCONFIG,
      "message": "Pick an ESLint preset",
      "choices": [
        {
          "name": "4 space + semicolon",
          "value": "4space;",
          "short": "4space;"
        },
        {
          "name": "Go",
          "value": "go",
          "short": "Go"
        },
        {
          "name": "none (configure it yourself)",
          "value": "none",
          "short": "none"
        }
      ]
    },
    "unit": {
      "type": "confirm",
      "override": process.env.VUE_UNIT === undefined ? undefined : (process.env.VUE_UNIT === 'y'),
      "message": "Setup unit tests with Karma + Mocha?"
    },
    "e2e": {
      "type": "confirm",
      "override": process.env.VUE_E2E === undefined ? undefined : (process.env.VUE_E2E === 'y'),
      "message": "Setup e2e tests with Nightwatch?"
    }
  },
  "filters": {
    ".eslintrc.js": "lint",
    ".eslintrc-build.js": "lint",
    "**/.eslintrc.js": "lint",
    ".eslintignore": "lint",
    "config/test.env.js": "unit || e2e",
    "test/unit/**/*": "unit",
    "build/webpack.test.conf.js": "unit",
    "test/e2e/**/*": "e2e",
    "src/router/**/*": "router"
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};
