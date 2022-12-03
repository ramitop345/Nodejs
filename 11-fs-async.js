//with the asycnchronious approach, we can do other tasks while one task is loaded. this is not possible in the synchronious approach

const {readFile,writeFile} = require('fs')

console.log('start')
readFile('./content/test1.txt', 'utf8', (err,result) => {
  if (err){
    console.log(err)
    return
  }
  const first = result;
  readFile('./content/test2.txt','utf8', (err,result) => {
  if (err){
    console.log(err)
    return
  }
     const second = result
  writeFile('./content/result-async.txt',
           `Here is the result : ${first}, ${second}`,
            (err,result)=>{
             if (err){
               console.log(err)
               return
             } 
              result = first + second
              console.log('done with this task')
            })
  })
 
})

console.log('starting the next one')


