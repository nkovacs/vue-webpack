// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

{{indent 0 ~}}  module.exports = {
{{indent 1 ~}}    'default e2e tests'(browser) {
{{indent 2 ~}}      // automatically uses dev Server port from /config.index.js
{{indent 2 ~}}      // default: http://localhost:8080
{{indent 2 ~}}      // see nightwatch.conf.js
{{indent 2 ~}}      const devServer = browser.globals.devServerURL{{semi}}

{{indent 2 ~}}      browser.
{{indent 3 ~}}        url(devServer).
{{indent 3 ~}}        waitForElementVisible('#app', 5000).
{{indent 3 ~}}        assert.elementPresent('.hello').
{{indent 3 ~}}        assert.containsText('h1', 'Welcome to Your Vue.js App').
{{indent 3 ~}}        assert.elementCount('img', 1).
{{indent 3 ~}}        end(){{semi}}
{{indent 1 ~}}    },
{{indent 0 ~}}  }{{semi}}
