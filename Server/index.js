// const express = require('express')
import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 5000
// const PostData = './models/Test';
import PostData from './models/Test.js';
import connectDB from "./DB/db.js";



// const mongoose = require(mongoose); => this type os mongoose declamation is wrong




app.use(express.json());

connectDB()


app.get('/', (req, res) => {
  res.send('Server is running !')
})

// strate site
// app.use(express.static('dist'));


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


// ------------------- mongoose -------------------
app.post('/mongoose', async (req,res)=>{
  const BodyData = req.body;
  const data = JSON.stringify(BodyData);
  console.log(data);
  try{
    const saveData = await PostData.create(BodyData);
    res.status(201).json(saveData)
  }catch(error){
    console.error('error is appear in mongoose section',error);
    res.status(500).send("server error")
  }
  
})

// ✅ READ all data
app.get("/mongoose", async (req, res) => {
  try {
    const allData = await PostData.find();
    res.json(allData);
  } catch (error) {
    res.status(500).send("Server error while fetching");
  }
});

// ✅ READ single data by ID
app.get("/mongoose/:id", async (req, res) => {
  try {
    const singleData = await PostData.findById(req.params.id);
    if (!singleData) return res.status(404).send("Data not found");
    res.json(singleData);
  } catch (error) {
    res.status(500).send("Server error while fetching single data");
  }
});

// ✅ UPDATE data by ID
app.put("/mongoose/:id", async (req, res) => {
  try {
    const updatedData = await PostData.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedData) return res.status(404).send("Data not found");
    res.json(updatedData);
  } catch (error) {
    res.status(500).send("Server error while updating");
  }
});

// ✅ DELETE data by ID
app.delete("/mongoose/:id", async (req, res) => {
  try {
    const deleted = await PostData.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).send("Data not found");
    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).send("Server error while deleting");
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


