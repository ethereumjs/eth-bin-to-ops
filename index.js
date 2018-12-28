const lookupOpcode = require('ethereumjs-vm/dist/opcodes.js')



module.exports = binToOps

function binToOps(contractCode){
  var ops = []
  for (var index = 0; index < contractCode.length; index++) {
    var currentOp = lookupOpcode(contractCode[index], true)
    // record the program counter
    currentOp.pc = index
    ops.push(currentOp)
    // handle PUSH inline data
    if (currentOp.name.slice(0, 4) === 'PUSH') {
      // load inline data
      var pushDataLength = contractCode[index] - 0x5f
      var pushData = contractCode.slice(index + 1, index + pushDataLength + 1)
      currentOp.pushData = pushData
      // skip read of inline data
      index += pushDataLength
    }
  }
  return ops
}
