// try out "npx nodemmon index.js" instead of "node index.js"

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// function middleware1(req, res, next) {
//     console.log()
//     next()
// }

// app.use(middelware1);
app.use(bodyParser.json());

function calculateSum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function callbackFn(req, res) {
  // let counter = req.query.counter;
  // console.log(req.body);
  counter = req.body.counter;
  let calculatedSum = calculateSum(counter);
  let obj = {
    "sum": calculatedSum,
  }
  res.send(obj);
}
// below is how we send html to the server
// function secondFn(req, res) {
//     res.send(`<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <title>Document</title>
//     </head>
//     <body>
//         Hello world
//     </body>
//     </html>`)
// }
// app.get('/ss', secondFn);

// app.get('/', callbackFn)
app.post('/mycode', callbackFn);
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
function porto() {
  console.log(`Example app listening on port ${port}`)
}

app.listen(port, porto)

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })



// let calculatedSum = calculateSum(100);
// console.log(calculatedSum);
