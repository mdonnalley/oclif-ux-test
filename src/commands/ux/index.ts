import {Command, Flags, ux} from '@oclif/core'
// eslint-disable-next-line unicorn/import-style
import * as chalk from 'chalk'

type TreeNode = {
  name: string
  children?: TreeNode[]
}

const THINGS = [
  {
    name: 'thing1', children: [{name: 'thing1.1'}],
  },
  {
    name: 'thing2', children: [{name: 'thing2.1'}, {name: 'thing2.2'}],
  },
  {
    name: 'thing3',
    children: [
      {name: 'thing3.1'},
      {name: 'thing3.2', children: [{name: 'thing3.2.1'}]},
    ],
  },
]

export default class Ux extends Command {
  static summary = 'Test oclif ux methods'

  static flags = {
    all: Flags.boolean(),
    spinner: Flags.boolean(),
    info: Flags.boolean(),
    warn: Flags.boolean(),
    table: Flags.boolean(),
    tree: Flags.boolean(),
    trace: Flags.boolean(),
    debug: Flags.boolean(),
    url: Flags.boolean(),
    styledHeader: Flags.boolean(),
    styledObject: Flags.boolean(),
    styledJSON: Flags.boolean(),
  }

  // eslint-disable-next-line complexity
  async run(): Promise<void> {
    const {flags} = await this.parse(Ux)

    if (flags.all || flags.spinner) await this.spinner()
    if (flags.all || flags.info) this.info()
    if (flags.all || flags.warn) this.doWarn()
    if (flags.all || flags.table) this.table()
    if (flags.all || flags.tree) this.tree()
    if (flags.all || flags.trace) this.trace()
    if (flags.all || flags.debug) this.doDebug()
    if (flags.all || flags.url) this.url()
    if (flags.all || flags.styledHeader) this.styledHeader()
    if (flags.all || flags.styledObject) this.styledObject()
    if (flags.all || flags.styledJSON) this.styledJSON()
  }

  private logTestName(name: string): void {
    this.log(`\n# ${chalk.bold.cyan(name)}\n`)
  }

  private async spinner(): Promise<void> {
    this.logTestName('Testing spinner')
    ux.action.start('starting spinner')
    await ux.wait(2500)
    ux.action.status = 'still going'
    await ux.wait(2500)
    ux.action.stop()
  }

  private info(): void {
    this.logTestName('Testing ux.info')
    ux.info('info!')
  }

  private table(): void {
    this.logTestName('Testing ux.table')
    const data = Array.from({length: 10}).fill({id: '123', name: 'foo', value: 'bar'}) as Record<string, unknown>[]
    const columns = {
      id: {header: 'ID'},
      name: {},
      value: {header: 'TEST'},
    }

    ux.table(data, columns)
  }

  private tree(): void {
    this.logTestName('Testing ux.tree')

    const createTree = (thing?: TreeNode) => {
      const tree = ux.tree()
      for (const child of thing?.children ?? []) {
        tree.insert(child.name, createTree(child))
      }

      return tree
    }

    const tree = createTree()
    for (const thing of THINGS) {
      tree.insert(thing.name, createTree(thing))
    }

    tree.display()
  }

  private trace(): void {
    this.logTestName('Testing ux.trace')
    const orig = ux.config.outputLevel
    ux.config.outputLevel = 'trace'
    ux.trace('trace!')
    ux.config.outputLevel = orig
  }

  private doWarn(): void {
    this.logTestName('Testing ux.warn')
    ux.warn('warn!')
  }

  private doDebug(): void {
    this.logTestName('Testing ux.debug')
    const orig = ux.config.outputLevel
    ux.config.outputLevel = 'debug'
    ux.debug('debug!')
    ux.config.outputLevel = orig
  }

  private url(): void {
    this.logTestName('Testing ux.url')
    ux.url('oclif', 'https://oclif.io')
  }

  private styledHeader(): void {
    this.logTestName('Testing ux.styledHeader')
    ux.styledHeader('header!')
  }

  private styledObject(): void {
    this.logTestName('Testing ux.styledObject')
    ux.styledObject({foo: 'bar', baz: 'qux'})
  }

  private styledJSON(): void {
    this.logTestName('Testing ux.styledJSON')
    ux.styledJSON(THINGS)
  }
}
