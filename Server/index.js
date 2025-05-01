// const express = require('express')
import express from "express"
const app = express()
const port = 5022

// app.get('/', (req, res) => {
//   res.send('Server is running !')
// })

// strate site
app.use(express.static('dist'));

app.get('/data', (req,res) => {
  res.send('hello')
})

app.get('/snack', (req,res) =>{
  const snack = [
    {
      id:1,
      name:"python"
    },
    {
      id:2,
      name:"king cobra"
    },
    {
      id:3,
      name:"anaconda"
    }
  ]
  res.send(snack)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


