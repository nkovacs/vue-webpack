require({{string 'eventsource-polyfill'}}){{semi}}
var hotClient = require({{string 'webpack-hot-middleware/client?noInfo=true&reload=true'}}){{semi}}

/* eslint-env browser */

{{indent 0 ~}}  hotClient.subscribe((event) => {
{{indent 1 ~}}    if (event.action === {{string 'reload'}}) {
{{indent 2 ~}}      window.location.reload(){{semi}}
{{indent 1 ~}}    }
{{indent 0 ~}}  }){{semi}}
