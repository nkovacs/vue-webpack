// 1. start the dev server using production config
process.env.NODE_ENV = 'testing'{{semi}}
var server = require('../../build/dev-server.js'){{semi}}
var spawn = require('cross-spawn'){{semi}}

{{indent 0 ~}}  server.ready.then(() => {
{{indent 1 ~}}    // 2. run the nightwatch test suite against it
{{indent 1 ~}}    // to run in additional browsers:
{{indent 1 ~}}    //    1. add an entry in test/e2e/nightwatch.conf.json under "test_settings"
{{indent 1 ~}}    //    2. add it to the --env flag below
{{indent 1 ~}}    // or override the environment flag, for example: `npm run e2e -- --env chrome,firefox`
{{indent 1 ~}}    // For more information on Nightwatch's config file, see
{{indent 1 ~}}    // http://nightwatchjs.org/guide#settings-file
{{indent 1 ~}}    var opts = process.argv.slice(2){{semi}}
{{indent 1 ~}}    if (opts.indexOf('--config') === -1) {
{{indent 2 ~}}      opts = opts.concat(['--config', 'test/e2e/nightwatch.conf.js']){{semi}}
{{indent 1 ~}}    }
{{indent 1 ~}}    if (opts.indexOf('--env') === -1) {
{{indent 2 ~}}      opts = opts.concat(['--env', 'chrome']){{semi}}
{{indent 1 ~}}    }

{{indent 1 ~}}    var runner = spawn('./node_modules/.bin/nightwatch', opts, { stdio: 'inherit' }){{semi}}

{{indent 1 ~}}    runner.on('exit', (code) => {
{{indent 2 ~}}      server.close(){{semi}}
{{indent 2 ~}}      process.exit(code){{semi}}
{{indent 1 ~}}    }){{semi}}

{{indent 1 ~}}    runner.on('error', (err) => {
{{indent 2 ~}}      server.close(){{semi}}
{{indent 2 ~}}      throw err{{semi}}
{{indent 1 ~}}    }){{semi}}
{{indent 0 ~}}  }).catch((err) => {
{{indent 1 ~}}    console.error('Failed to start server', err);
{{indent 1 ~}}    process.exit(1);
{{indent 0 ~}}  }){{semi}}
