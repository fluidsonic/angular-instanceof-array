const fs = require('fs')
const vm = require('vm')
const Context = require('@dollarshaveclub/cloudworker/lib/runtime').Context

vm.runInNewContext(fs.readFileSync('dist/server.js', 'utf8'), new Context(
  () => undefined,
  null,
  { XMLHttpRequest: undefined }
))
