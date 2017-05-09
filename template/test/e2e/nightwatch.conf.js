require({{string 'babel-register'}}){{semi}}
var config = require({{string '../../config'}}){{semi}}
var seleniumServer = require({{string 'selenium-server'}}){{semi}}
var chromedriver = require({{string 'chromedriver'}}){{semi}}
var geckodriver = require({{string 'geckodriver'}}){{semi}}
var phantomjs = require({{string 'phantomjs-prebuilt'}}){{semi}}

var phantomProcess{{semi}}

{{indent 0 ~}}  var browsers = {
{{indent 1 ~}}    chrome: (opts) => {
{{indent 2 ~}}      var settings = {
{{indent 3 ~}}        desiredCapabilities: {
{{indent 4 ~}}          browserName: {{#if_eq lintConfig "go"}}      {{/if_eq}}{{string 'chrome'}},
{{indent 4 ~}}          javascriptEnabled: {{#if_eq lintConfig "go"}}{{/if_eq}}true,
{{indent 4 ~}}          acceptSslCerts: {{#if_eq lintConfig "go"}}   {{/if_eq}}true,
{{indent 3 ~}}        },
{{indent 2 ~}}      }{{semi}}
{{indent 2 ~}}      if (opts && opts.headless) {
{{indent 3 ~}}        settings.desiredCapabilities.chromeOptions = {
{{indent 4 ~}}          args: [{{string 'headless'}}],
{{indent 3 ~}}        }{{semi}}
{{indent 2 ~}}      }
{{indent 2 ~}}      if (opts && opts.standalone) {
{{indent 3 ~}}        settings.selenium = {
{{indent 4 ~}}          start_process: false,
{{indent 3 ~}}        }{{semi}}
{{indent 3 ~}}        settings.selenium_port = 9515{{semi}}
{{indent 3 ~}}        settings.selenium_host = {{string 'localhost'}}{{semi}}
{{indent 3 ~}}        settings.default_path_prefix = {{string ''}}{{semi}}
{{indent 3 ~}}        settings.globals = {
{{indent 4 ~}}          before: (done) => {
{{indent 5 ~}}            console.log({{string 'Starting chromedriver'}}){{semi}}
{{indent 5 ~}}            chromedriver.start(){{semi}}
{{indent 5 ~}}            done(){{semi}}
{{indent 4 ~}}          },

{{indent 4 ~}}          after: (done) => {
{{indent 5 ~}}            chromedriver.stop(){{semi}}
{{indent 5 ~}}            done(){{semi}}
{{indent 4 ~}}          },
{{indent 3 ~}}        }{{semi}}
{{indent 2 ~}}      }
{{indent 2 ~}}      return settings{{semi}}
{{indent 1 ~}}    },
{{indent 1 ~}}    firefox: (opts) => {
{{indent 2 ~}}      var settings = {
{{indent 3 ~}}        desiredCapabilities: {
{{indent 4 ~}}          browserName: {{#if_eq lintConfig "go"}}      {{/if_eq}}{{string 'firefox'}},
{{indent 4 ~}}          javascriptEnabled: {{#if_eq lintConfig "go"}}{{/if_eq}}true,
{{indent 4 ~}}          acceptSslCerts: {{#if_eq lintConfig "go"}}   {{/if_eq}}true,
{{indent 3 ~}}        },
{{indent 2 ~}}      }{{semi}}
{{indent 2 ~}}      if (opts && opts.standalone) {
{{indent 3 ~}}        settings.selenium = {
{{indent 4 ~}}          start_process: false,
{{indent 3 ~}}        }{{semi}}
{{indent 3 ~}}        settings.selenium_port = 4444{{semi}}
{{indent 3 ~}}        settings.selenium_host = {{string 'localhost'}}{{semi}}
{{indent 3 ~}}        settings.default_path_prefix = {{string ''}}{{semi}}
{{indent 3 ~}}        settings.globals = {
{{indent 4 ~}}          before: (done) => {
{{indent 5 ~}}            console.log({{string 'Starting geckodriver'}}){{semi}}
{{indent 5 ~}}            geckodriver.start(){{semi}}
{{indent 5 ~}}            done(){{semi}}
{{indent 4 ~}}          },

{{indent 4 ~}}          after: (done) => {
{{indent 5 ~}}            geckodriver.stop(){{semi}}
{{indent 5 ~}}            done(){{semi}}
{{indent 4 ~}}          },
{{indent 3 ~}}        }{{semi}}
{{indent 2 ~}}      }
{{indent 2 ~}}      return settings{{semi}}
{{indent 1 ~}}    },
{{indent 1 ~}}    phantomjs: (opts) => {
{{indent 2 ~}}      var settings = {
{{indent 3 ~}}        desiredCapabilities: {
{{indent 4 ~}}          browserName: {{#if_eq lintConfig "go"}}            {{/if_eq}}{{string 'phantomjs'}},
{{indent 4 ~}}          javascriptEnabled: {{#if_eq lintConfig "go"}}      {{/if_eq}}true,
{{indent 4 ~}}          acceptSslCerts: {{#if_eq lintConfig "go"}}         {{/if_eq}}true,
{{indent 4 ~}}          {{string 'phantomjs.binary.path'}}: phantomjs.path,
{{indent 3 ~}}        },
{{indent 2 ~}}      }{{semi}}
{{indent 2 ~}}      if (opts && opts.standalone) {
{{indent 3 ~}}        settings.selenium = {
{{indent 4 ~}}          start_process: false,
{{indent 3 ~}}        }{{semi}}
{{indent 3 ~}}        settings.selenium_port = 4444{{semi}}
{{indent 3 ~}}        settings.selenium_host = {{string 'localhost'}}{{semi}}
{{indent 3 ~}}        settings.globals = {
{{indent 4 ~}}          before: (done) => {
{{indent 5 ~}}            console.log({{string 'Starting phantomjs'}}){{semi}}
{{indent 5 ~}}            phantomjs.run({{string '--webdriver=4444'}}).then((program) => {
{{indent 6 ~}}              phantomProcess = program{{semi}}
{{indent 6 ~}}              done(){{semi}}
{{indent 5 ~}}            }).catch((err) => {
{{indent 6 ~}}              console.log(err){{semi}}
{{indent 5 ~}}            }){{semi}}
{{indent 4 ~}}          },

{{indent 4 ~}}          after: (done) => {
{{indent 5 ~}}            if (phantomProcess) {
{{indent 6 ~}}              phantomProcess.kill(){{semi}}
{{indent 5 ~}}            }
{{indent 5 ~}}            done(){{semi}}
{{indent 4 ~}}          },
{{indent 3 ~}}        }{{semi}}
{{indent 2 ~}}      }
{{indent 2 ~}}      return settings{{semi}}
{{indent 1 ~}}    },
{{indent 0 ~}}  }{{semi}}

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

{{indent 2 ~}}      chrome: browsers.chrome(),

{{indent 2 ~}}      firefox: browsers.firefox(),

{{indent 2 ~}}      phantomjs: browsers.phantomjs(),

{{indent 2 ~}}      phantomjs_standalone: browsers.phantomjs({ standalone: true }),

{{indent 2 ~}}      chrome_standalone: browsers.chrome({ standalone: true }),

{{indent 2 ~}}      chrome_headless: browsers.chrome({ standalone: true, headless: true }),

{{indent 2 ~}}      // Doesn't work, nightwatch is not compatible with newer geckodriver.
{{indent 2 ~}}      firefox_standalone: browsers.firefox({ standalone: true }),

{{indent 1 ~}}    },
{{indent 0 ~}}  }{{semi}}
