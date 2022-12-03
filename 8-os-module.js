const os = require('os')

// info current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
  freeeMem: os.freemem(),
}

console.log(currentOS)