oclif-ux-test
=================

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

```
git clone https://github.com/mdonnalley/oclif-ux-test.git
cd oclif-ux-test
yarn && yarn build
bin/dev ux --help
```

```
Test oclif ux methods

USAGE
  $ oclif-ux-test ux [--all] [--spinner] [--info] [--warn] [--table] [--tree] [--trace] [--debug] [--url]
    [--styledHeader] [--styledObject] [--styledJSON]

FLAGS
  --all
  --debug
  --info
  --spinner
  --styledHeader
  --styledJSON
  --styledObject
  --table
  --trace
  --tree
  --url
  --warn
```

```
~/repos/mdonnalley/oclif-ux-test (main) » bin/dev ux --all                                                  mdonnalley@mdonnal-ltmghj6

# Testing spinner

starting spinner... done

# Testing ux.info

info!

# Testing ux.warn

Warning: warn!
    at Object.warn (/Users/mdonnalley/repos/mdonnalley/oclif-ux-test/node_modules/@oclif/core/lib/errors/index.js:49:15)
    at Ux.doWarn (/Users/mdonnalley/repos/mdonnalley/oclif-ux-test/src/commands/ux/index.ts:121:8)
    at Ux.run (/Users/mdonnalley/repos/mdonnalley/oclif-ux-test/src/commands/ux/index.ts:50:39)
    at async Ux._run (/Users/mdonnalley/repos/mdonnalley/oclif-ux-test/node_modules/@oclif/core/lib/command.js:107:22)
    at async Config.runCommand (/Users/mdonnalley/repos/mdonnalley/oclif-ux-test/node_modules/@oclif/core/lib/config/config.js:298:25)

# Testing ux.table

 ID  Name TEST
 ─── ──── ────
 123 foo  bar
 123 foo  bar
 123 foo  bar
 123 foo  bar
 123 foo  bar
 123 foo  bar
 123 foo  bar
 123 foo  bar
 123 foo  bar
 123 foo  bar

# Testing ux.tree

├─ thing1
│  └─ thing1.1
├─ thing2
│  ├─ thing2.1
│  └─ thing2.2
└─ thing3
   ├─ thing3.1
   └─ thing3.2
      └─ thing3.2.1

# Testing ux.trace

trace!

# Testing ux.debug

debug!

# Testing ux.url

oclif

# Testing ux.styledHeader

=== header!


# Testing ux.styledObject

baz: qux
foo: bar

# Testing ux.styledJSON

[
  {
    "name": "thing1",
    "children": [
      {
        "name": "thing1.1"
      }
    ]
  },
  {
    "name": "thing2",
    "children": [
      {
        "name": "thing2.1"
      },
      {
        "name": "thing2.2"
      }
    ]
  },
  {
    "name": "thing3",
    "children": [
      {
        "name": "thing3.1"
      },
      {
        "name": "thing3.2",
        "children": [
          {
            "name": "thing3.2.1"
          }
        ]
      }
    ]
  }
]
```
