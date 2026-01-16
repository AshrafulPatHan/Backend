const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors');
const Login = require('./src/login'); 
const Signup = require('./src/registration'); 
const PORT = 3000;


app.use(cors());
app.use(express.json());

// home route
app.get('/',(req,res)=>{
    res.send("Server is running version 0.1")
})

// use file routes
app.use('/',Login); //login file
app.use('/',Signup); // registration file

// render client
app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'client','index.html')); // home
});
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'client','login.html')); // login
});
app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'client','registration.html')); // registration
});

// app.use(express.static(path.join(__dirname,'client'))); # for rendering full clint 

// listening port
app.listen(PORT,()=>{
    console.log(`Express app listening on port ${PORT}`);
    
})
