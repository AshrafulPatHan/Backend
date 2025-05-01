const express = require('express')
const app = express()
const port = 5022

app.get('/', (req, res) => {
  res.send('Server is running !')
})

app.get('/data', (req,res) => {
  res.send('hello')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


