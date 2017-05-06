var chalk = require({{string 'chalk'}}){{semi}}
var semver = require({{string 'semver'}}){{semi}}
var packageConfig = require({{string '../package.json'}}){{semi}}
var shell = require({{string 'shelljs'}}){{semi}}
var childProcess = require({{string 'child_process'}}){{semi}}

{{indent 0 ~}}  function exec(cmd) {
{{indent 1 ~}}    return childProcess.execSync(cmd).toString().trim(){{semi}}
{{indent 0 ~}}  }

{{indent 0 ~}}  var versionRequirements = [
{{indent 1 ~}}    {
{{indent 2 ~}}      name: {{#if_eq lintConfig "go"}}              {{/if_eq}}{{string 'node'}},
{{indent 2 ~}}      currentVersion: {{#if_eq lintConfig "go"}}    {{/if_eq}}semver.clean(process.version),
{{indent 2 ~}}      versionRequirement: {{#if_eq lintConfig "go"}}{{/if_eq}}packageConfig.engines.node,
{{indent 1 ~}}    },
{{indent 0 ~}}  ]{{semi}}

{{indent 0 ~}}  if (shell.which({{string 'npm'}})) {
{{indent 1 ~}}    versionRequirements.push({
{{indent 2 ~}}      name: {{#if_eq lintConfig "go"}}              {{/if_eq}}{{string 'npm'}},
{{indent 2 ~}}      currentVersion: {{#if_eq lintConfig "go"}}    {{/if_eq}}exec({{string 'npm --version'}}),
{{indent 2 ~}}      versionRequirement: {{#if_eq lintConfig "go"}}{{/if_eq}}packageConfig.engines.npm,
{{indent 1 ~}}    }){{semi}}
{{indent 0 ~}}  }

{{indent 0 ~}}  module.exports = function checkVersion() {
{{indent 1 ~}}    var warnings = []{{semi}}
{{indent 1 ~}}    var i{{semi}}
{{indent 1 ~}}    for (i = 0; i < versionRequirements.length; i++) {
{{indent 2 ~}}      var mod = versionRequirements[i]{{semi}}
{{indent 2 ~}}      if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
{{indent 3 ~}}        warnings.push(mod.name + {{string ': '}} +
{{indent 3 ~}}          chalk.red(mod.currentVersion) + {{string ' should be '}} +
{{indent 3 ~}}          chalk.green(mod.versionRequirement)
{{indent 3 ~}}        ){{semi}}
{{indent 2 ~}}      }
{{indent 1 ~}}    }

{{indent 1 ~}}    if (warnings.length > 0) {
{{indent 2 ~}}      console.log({{string ''}}){{semi}}
{{indent 2 ~}}      console.log(chalk.yellow({{string 'To use this template, you must update following to modules:'}})){{semi}}
{{indent 2 ~}}      console.log(){{semi}}
{{indent 2 ~}}      for (i = 0; i < warnings.length; i++) {
{{indent 3 ~}}        var warning = warnings[i]{{semi}}
{{indent 3 ~}}        console.log({{string '  '}} + warning){{semi}}
{{indent 2 ~}}      }
{{indent 2 ~}}      console.log(){{semi}}
{{indent 2 ~}}      process.exit(1){{semi}}
{{indent 1 ~}}    }
{{indent 0 ~}}  }{{semi}}
