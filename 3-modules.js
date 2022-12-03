// COMMONJS, every file by default is a module
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
console.log(sayHi)
console.log(names)
console.log(data)
require('./7-mind-grenade')
sayHi('SUZAN')
sayHi(names.john)
sayHi(names.peter)

//Built-in Modules