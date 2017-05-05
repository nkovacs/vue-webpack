var chalk = require('chalk'){{semi}}
var semver = require('semver'){{semi}}
var packageConfig = require('../package.json'){{semi}}
var shell = require('shelljs'){{semi}}
var childProcess = require('child_process'){{semi}}

{{indent 0 ~}}  function exec(cmd) {
{{indent 1 ~}}    return childProcess.execSync(cmd).toString().trim(){{semi}}
{{indent 0 ~}}  }

{{indent 0 ~}}  var versionRequirements = [
{{indent 1 ~}}    {
{{indent 2 ~}}      name: 'node',
{{indent 2 ~}}      currentVersion: semver.clean(process.version),
{{indent 2 ~}}      versionRequirement: packageConfig.engines.node,
{{indent 1 ~}}    },
{{indent 0 ~}}  ]{{semi}}

{{indent 0 ~}}  if (shell.which('npm')) {
{{indent 1 ~}}    versionRequirements.push({
{{indent 2 ~}}      name: 'npm',
{{indent 2 ~}}      currentVersion: exec('npm --version'),
{{indent 2 ~}}      versionRequirement: packageConfig.engines.npm,
{{indent 1 ~}}    }){{semi}}
{{indent 0 ~}}  }

{{indent 0 ~}}  module.exports = function checkVersion() {
{{indent 1 ~}}    var warnings = []{{semi}}
{{indent 1 ~}}    var i{{semi}}
{{indent 1 ~}}    for (i = 0; i < versionRequirements.length; i++) {
{{indent 2 ~}}      var mod = versionRequirements[i]{{semi}}
{{indent 2 ~}}      if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
{{indent 3 ~}}        warnings.push(mod.name + ': ' +
{{indent 3 ~}}          chalk.red(mod.currentVersion) + ' should be ' +
{{indent 3 ~}}          chalk.green(mod.versionRequirement)
{{indent 3 ~}}        ){{semi}}
{{indent 2 ~}}      }
{{indent 1 ~}}    }

{{indent 1 ~}}    if (warnings.length > 0) {
{{indent 2 ~}}      console.log(''){{semi}}
{{indent 2 ~}}      console.log(chalk.yellow('To use this template, you must update following to modules:')){{semi}}
{{indent 2 ~}}      console.log(){{semi}}
{{indent 2 ~}}      for (i = 0; i < warnings.length; i++) {
{{indent 3 ~}}        var warning = warnings[i]{{semi}}
{{indent 3 ~}}        console.log('  ' + warning){{semi}}
{{indent 2 ~}}      }
{{indent 2 ~}}      console.log(){{semi}}
{{indent 2 ~}}      process.exit(1){{semi}}
{{indent 1 ~}}    }
{{indent 0 ~}}  }{{semi}}
