const express = require("express");
const app = express();
require('dotenv').config();
const cors = require('cors');
const port = 3000;

app.use(express.json());
app.use(cors())

// home route
app.get('/',(req,res)=>{
    res.send('Server is running 0.1');
});

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
    
})