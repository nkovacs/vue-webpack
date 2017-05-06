// 1. start the dev server using production config
process.env.NODE_ENV = {{string 'testing'}}{{semi}}
var server = require({{string '../../build/dev-server.js'}}){{semi}}
var spawn = require({{string 'cross-spawn'}}){{semi}}

{{indent 0 ~}}  server.ready.then(() => {
{{indent 1 ~}}    // 2. run the nightwatch test suite against it
{{indent 1 ~}}    // to run in additional browsers:
{{indent 1 ~}}    //    1. add an entry in test/e2e/nightwatch.conf.json under "test_settings"
{{indent 1 ~}}    //    2. add it to the --env flag below
{{indent 1 ~}}    // or override the environment flag, for example: `npm run e2e -- --env chrome,firefox`
{{indent 1 ~}}    // For more information on Nightwatch's config file, see
{{indent 1 ~}}    // http://nightwatchjs.org/guide#settings-file
{{indent 1 ~}}    var opts = process.argv.slice(2){{semi}}
{{indent 1 ~}}    if (opts.indexOf({{string '--config'}}) === -1) {
{{indent 2 ~}}      opts = opts.concat([{{string '--config'}}, {{string 'test/e2e/nightwatch.conf.js'}}]){{semi}}
{{indent 1 ~}}    }
{{indent 1 ~}}    if (opts.indexOf({{string '--env'}}) === -1) {
{{indent 2 ~}}      opts = opts.concat([{{string '--env'}}, {{string 'chrome'}}]){{semi}}
{{indent 1 ~}}    }

{{indent 1 ~}}    var runner = spawn({{string './node_modules/.bin/nightwatch'}}, opts, { stdio: {{string 'inherit'}} }){{semi}}

{{indent 1 ~}}    runner.on({{string 'exit'}}, (code) => {
{{indent 2 ~}}      server.close(){{semi}}
{{indent 2 ~}}      process.exit(code){{semi}}
{{indent 1 ~}}    }){{semi}}

{{indent 1 ~}}    runner.on({{string 'error'}}, (err) => {
{{indent 2 ~}}      server.close(){{semi}}
{{indent 2 ~}}      throw err{{semi}}
{{indent 1 ~}}    }){{semi}}
{{indent 0 ~}}  }).catch((err) => {
{{indent 1 ~}}    console.error({{string 'Failed to start server'}}, err){{semi}}
{{indent 1 ~}}    process.exit(1){{semi}}
{{indent 0 ~}}  }){{semi}}
