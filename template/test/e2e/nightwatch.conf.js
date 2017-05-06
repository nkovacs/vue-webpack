require({{string 'babel-register'}}){{semi}}
var config = require({{string '../../config'}}){{semi}}
var seleniumServer = require({{string 'selenium-server'}});
var chromedriver = require({{string 'chromedriver'}});

// http://nightwatchjs.org/gettingstarted#settings-file
{{indent 0 ~}}  module.exports = {
{{indent 1 ~}}    src_folders: [{{string 'test/e2e/specs'}}],
{{indent 1 ~}}    output_folder: {{string 'test/e2e/reports'}},
{{indent 1 ~}}    custom_assertions_path: [{{string 'test/e2e/custom-assertions'}}],

{{indent 1 ~}}    selenium: {
{{indent 2 ~}}      start_process: true,
{{indent 2 ~}}      server_path: seleniumServer.path,
{{indent 2 ~}}      host: {{string '127.0.0.1'}},
{{indent 2 ~}}      port: 4444,
{{indent 2 ~}}      cli_args: {
{{indent 3 ~}}        {{string 'webdriver.chrome.driver'}}: chromedriver.path,
{{indent 2 ~}}      },
{{indent 1 ~}}    },

{{indent 1 ~}}    test_settings: {
{{indent 2 ~}}      default: {
{{indent 3 ~}}        selenium_port: 4444,
{{indent 3 ~}}        selenium_host: {{string 'localhost'}},
{{indent 3 ~}}        silent: true,
{{indent 3 ~}}        globals: {
{{indent 4 ~}}          devServerURL: {{string 'http://localhost:'}} + (process.env.PORT || config.dev.port),
{{indent 3 ~}}        },
{{indent 2 ~}}      },

{{indent 2 ~}}      chrome: {
{{indent 3 ~}}        desiredCapabilities: {
{{indent 4 ~}}          browserName: {{string 'chrome'}},
{{indent 4 ~}}          javascriptEnabled: true,
{{indent 4 ~}}          acceptSslCerts: true,
{{indent 3 ~}}        },
{{indent 2 ~}}      },

{{indent 2 ~}}      firefox: {
{{indent 3 ~}}        desiredCapabilities: {
{{indent 4 ~}}          browserName: {{string 'firefox'}},
{{indent 4 ~}}          javascriptEnabled: true,
{{indent 4 ~}}          acceptSslCerts: true,
{{indent 3 ~}}        },
{{indent 2 ~}}      },
{{indent 1 ~}}    },
{{indent 0 ~}}  }{{semi}}
