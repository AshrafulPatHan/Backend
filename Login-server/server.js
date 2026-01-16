const express = require("express");
const app = express();
const PORT = 3000;


// home route
app.get('/',(req,res)=>{
    res.send("Server is running version 0.1")
})

// listening port
app.listen(PORT,()=>{
    console.log(`Express app listening on port ${PORT}`);
    
})
