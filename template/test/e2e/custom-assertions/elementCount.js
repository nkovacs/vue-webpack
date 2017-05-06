// A custom Nightwatch assertion.
// the name of the method is the filename.
// can be used in tests like this:
//
//   browser.assert.elementCount(selector, count)
//
// for how to write custom assertions see
// http://nightwatchjs.org/guide#writing-custom-assertions

/* eslint-env browser */

{{indent 0 ~}}  exports.assertion = function elementCount(selector, count) {
{{indent 1 ~}}    this.message = {{string 'Testing if element <'}} + selector + {{string '> has count: '}} + count{{semi}}
{{indent 1 ~}}    this.expected = count{{semi}}
{{indent 1 ~}}    this.pass = function pass(val) {
{{indent 2 ~}}      return val === this.expected{{semi}}
{{indent 1 ~}}    }{{semi}}
{{indent 1 ~}}    this.value = function value(res) {
{{indent 2 ~}}      return res.value{{semi}}
{{indent 1 ~}}    }{{semi}}
{{indent 1 ~}}    this.command = function command(cb) {
{{indent 2 ~}}      var self = this{{semi}}
{{indent 2 ~}}      return this.api.execute(sel => document.querySelectorAll(sel).length, [selector], (res) => {
{{indent 3 ~}}        cb.call(self, res){{semi}}
{{indent 2 ~}}      }){{semi}}
{{indent 1 ~}}    }{{semi}}
{{indent 0 ~}}  }{{semi}}
