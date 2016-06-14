const binToOps = require('./index.js')

var data = new Buffer('6107608061000e600039', 'hex')
console.log(binToOps(data))
