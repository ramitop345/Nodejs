const {readFileSync,writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/test1.txt','utf8')
const second = readFileSync('./content/test2.txt','utf8')

writeFileSync(
  './content/result-sync.txt',
  `here is the result: ${first}, ${second}`,
  {flag: 'a'}
)
console.log('done with this task')
console.log('starting the next one')

//const result = readFileSync('./content/result-sync.txt','utf8')
//console.log(result)

