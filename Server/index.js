// const express = require('express')
import express from "express"
const app = express()
const port = 5022



app.use(express.json());


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

// post data

app.post('/post-data',async (req,res)=>{
  const BodyData = req.body;
  const data = JSON.stringify(BodyData);
  console.log(`the body data is => ${data}`);
  try{
    res.send(data)
  }catch(error){
    console.error('Error is send',error);
    res.status(500).send('Internal Server Error');
  }
});

// post data and do something with date
app.post('/do',async(req,res)=>{
  const Body = req.body;
  console.log(`this is body data -> ${Body}`);
  try{
    const Text = Body.data;
    console.log(`This is result -> ${Text}`);
    res.send(Text)
  }catch(error){
    console.error('error is coming for something do',error)
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


