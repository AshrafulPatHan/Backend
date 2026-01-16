const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;


// home route
app.get('/',(req,res)=>{
    res.send("Server is running version 0.1")
})

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
