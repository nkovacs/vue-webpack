require({{string 'babel-register'}}){{semi}}
var config = require({{string '../../config'}}){{semi}}
var seleniumServer = require({{string 'selenium-server'}}){{semi}}
var chromedriver = require({{string 'chromedriver'}}){{semi}}

// http://nightwatchjs.org/gettingstarted#settings-file
{{indent 0 ~}}  module.exports = {
{{indent 1 ~}}    src_folders: {{#if_eq lintConfig "go"}}           {{/if_eq}}[{{string 'test/e2e/specs'}}],
{{indent 1 ~}}    output_folder: {{#if_eq lintConfig "go"}}         {{/if_eq}}{{string 'test/e2e/reports'}},
{{indent 1 ~}}    custom_assertions_path: {{#if_eq lintConfig "go"}}{{/if_eq}}[{{string 'test/e2e/custom-assertions'}}],

{{indent 1 ~}}    selenium: {
{{indent 2 ~}}      start_process: {{#if_eq lintConfig "go"}}{{/if_eq}}true,
{{indent 2 ~}}      server_path: {{#if_eq lintConfig "go"}}  {{/if_eq}}seleniumServer.path,
{{indent 2 ~}}      host: {{#if_eq lintConfig "go"}}         {{/if_eq}}{{string '127.0.0.1'}},
{{indent 2 ~}}      port: {{#if_eq lintConfig "go"}}         {{/if_eq}}4444,
{{indent 2 ~}}      cli_args: {{#if_eq lintConfig "go"}}     {{/if_eq}}{
{{indent 3 ~}}        {{string 'webdriver.chrome.driver'}}: chromedriver.path,
{{indent 2 ~}}      },
{{indent 1 ~}}    },

{{indent 1 ~}}    test_settings: {
{{indent 2 ~}}      default: {
{{indent 3 ~}}        selenium_port: {{#if_eq lintConfig "go"}}{{/if_eq}}4444,
{{indent 3 ~}}        selenium_host: {{#if_eq lintConfig "go"}}{{/if_eq}}{{string 'localhost'}},
{{indent 3 ~}}        silent: {{#if_eq lintConfig "go"}}       {{/if_eq}}true,
{{indent 3 ~}}        globals: {{#if_eq lintConfig "go"}}      {{/if_eq}}{
{{indent 4 ~}}          devServerURL: {{string 'http://localhost:'}} + (process.env.PORT || config.dev.port),
{{indent 3 ~}}        },
{{indent 2 ~}}      },

{{indent 2 ~}}      chrome: {
{{indent 3 ~}}        desiredCapabilities: {
{{indent 4 ~}}          browserName: {{#if_eq lintConfig "go"}}      {{/if_eq}}{{string 'chrome'}},
{{indent 4 ~}}          javascriptEnabled: {{#if_eq lintConfig "go"}}{{/if_eq}}true,
{{indent 4 ~}}          acceptSslCerts: {{#if_eq lintConfig "go"}}   {{/if_eq}}true,
{{indent 3 ~}}        },
{{indent 2 ~}}      },

{{indent 2 ~}}      firefox: {
{{indent 3 ~}}        desiredCapabilities: {
{{indent 4 ~}}          browserName: {{#if_eq lintConfig "go"}}      {{/if_eq}}{{string 'firefox'}},
{{indent 4 ~}}          javascriptEnabled: {{#if_eq lintConfig "go"}}{{/if_eq}}true,
{{indent 4 ~}}          acceptSslCerts: {{#if_eq lintConfig "go"}}   {{/if_eq}}true,
{{indent 3 ~}}        },
{{indent 2 ~}}      },
{{indent 1 ~}}    },
{{indent 0 ~}}  }{{semi}}
