import { renderModuleFactory } from '@angular/platform-server'
import 'zone.js'


const { AppServerModuleNgFactory } = require('./dist/server/main')

renderModuleFactory(AppServerModuleNgFactory, {
  document: '<html></html>',
  url: 'https://localhost'
}).then(result => {
  console.log(result)
})
