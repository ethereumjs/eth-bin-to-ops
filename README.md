### eth-bin-to-ops

Simple tool for parsing EVM bytecode into opcodes.
The primary difference from the raw code is that inline PUSH data is attached to the opcode metadata.

example:
```js
const binToOps = require('./index.js')

var data = new Buffer('6107608061000e600039', 'hex')
console.log(binToOps(data))
```

gives you:
```js
[ { name: 'PUSH2',
    fee: 3,
    in: 0,
    out: 1,
    dynamic: false,
    async: undefined,
    pc: 0,
    pushData: <Buffer 07 60> },
  { name: 'DUP1',
    fee: 3,
    in: 0,
    out: 1,
    dynamic: false,
    async: undefined,
    pc: 3 },
  { name: 'PUSH2',
    fee: 3,
    in: 0,
    out: 1,
    dynamic: false,
    async: undefined,
    pc: 4,
    pushData: <Buffer 00 0e> },
  { name: 'PUSH1',
    fee: 3,
    in: 0,
    out: 1,
    dynamic: false,
    async: undefined,
    pc: 7,
    pushData: <Buffer 00> },
  { name: 'CODECOPY',
    fee: 3,
    in: 3,
    out: 0,
    dynamic: false,
    async: undefined,
    pc: 9 } ]
```