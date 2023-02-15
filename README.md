oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g oclif-ux-test
$ oclif-ux-test COMMAND
running command...
$ oclif-ux-test (--version)
oclif-ux-test/0.0.0 darwin-arm64 node-v18.7.0
$ oclif-ux-test --help [COMMAND]
USAGE
  $ oclif-ux-test COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclif-ux-test hello PERSON`](#oclif-ux-test-hello-person)
* [`oclif-ux-test hello world`](#oclif-ux-test-hello-world)
* [`oclif-ux-test help [COMMANDS]`](#oclif-ux-test-help-commands)
* [`oclif-ux-test plugins`](#oclif-ux-test-plugins)
* [`oclif-ux-test plugins:install PLUGIN...`](#oclif-ux-test-pluginsinstall-plugin)
* [`oclif-ux-test plugins:inspect PLUGIN...`](#oclif-ux-test-pluginsinspect-plugin)
* [`oclif-ux-test plugins:install PLUGIN...`](#oclif-ux-test-pluginsinstall-plugin-1)
* [`oclif-ux-test plugins:link PLUGIN`](#oclif-ux-test-pluginslink-plugin)
* [`oclif-ux-test plugins:uninstall PLUGIN...`](#oclif-ux-test-pluginsuninstall-plugin)
* [`oclif-ux-test plugins:uninstall PLUGIN...`](#oclif-ux-test-pluginsuninstall-plugin-1)
* [`oclif-ux-test plugins:uninstall PLUGIN...`](#oclif-ux-test-pluginsuninstall-plugin-2)
* [`oclif-ux-test plugins update`](#oclif-ux-test-plugins-update)

## `oclif-ux-test hello PERSON`

Say hello

```
USAGE
  $ oclif-ux-test hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/mdonnalley/oclif-ux-test/blob/v0.0.0/dist/commands/hello/index.ts)_

## `oclif-ux-test hello world`

Say hello world

```
USAGE
  $ oclif-ux-test hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oclif-ux-test hello world
  hello world! (./src/commands/hello/world.ts)
```

## `oclif-ux-test help [COMMANDS]`

Display help for oclif-ux-test.

```
USAGE
  $ oclif-ux-test help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for oclif-ux-test.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.4/src/commands/help.ts)_

## `oclif-ux-test plugins`

List installed plugins.

```
USAGE
  $ oclif-ux-test plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ oclif-ux-test plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.3.0/src/commands/plugins/index.ts)_

## `oclif-ux-test plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ oclif-ux-test plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ oclif-ux-test plugins add

EXAMPLES
  $ oclif-ux-test plugins:install myplugin 

  $ oclif-ux-test plugins:install https://github.com/someuser/someplugin

  $ oclif-ux-test plugins:install someuser/someplugin
```

## `oclif-ux-test plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ oclif-ux-test plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ oclif-ux-test plugins:inspect myplugin
```

## `oclif-ux-test plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ oclif-ux-test plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ oclif-ux-test plugins add

EXAMPLES
  $ oclif-ux-test plugins:install myplugin 

  $ oclif-ux-test plugins:install https://github.com/someuser/someplugin

  $ oclif-ux-test plugins:install someuser/someplugin
```

## `oclif-ux-test plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ oclif-ux-test plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ oclif-ux-test plugins:link myplugin
```

## `oclif-ux-test plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ oclif-ux-test plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ oclif-ux-test plugins unlink
  $ oclif-ux-test plugins remove
```

## `oclif-ux-test plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ oclif-ux-test plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ oclif-ux-test plugins unlink
  $ oclif-ux-test plugins remove
```

## `oclif-ux-test plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ oclif-ux-test plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ oclif-ux-test plugins unlink
  $ oclif-ux-test plugins remove
```

## `oclif-ux-test plugins update`

Update installed plugins.

```
USAGE
  $ oclif-ux-test plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
