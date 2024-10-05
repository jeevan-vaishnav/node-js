//CommonJS, every file is module ( by default)
//Modules - Ecapsulated Coe ( only share minimum)
const names = require('./3-name')
const sayHello = require('./4-utils')
const data = require('./5-alternative-flavor')
require('./6-mind-grenade')
console.log(data);
sayHello(names.jeevan);
sayHello(names.vaishnav)