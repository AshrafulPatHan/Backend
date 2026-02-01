const express = require("express");
const app = express();
require('dotenv').config();
const cors = require('cors');
const port = 3000;
const User = require('./routes/user');
const Login = require('./routes/login');
const Registration = require('./routes/registration');

app.use(express.json());
app.use(cors())

// home route
app.get('/',(req,res)=>{
    res.send('Server is running 0.1');
});

// use multiple routes
app.use('/api/user',User);
app.use('/api/login',Login);
app.use('/api/singup',Registration);

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
    
})