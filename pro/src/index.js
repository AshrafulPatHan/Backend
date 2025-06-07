













// first pro use but no one use
/*
import mongoose from "mongoose";
import { DB_NAME } from './constants';
import express from 'express';
const app = express() 


( async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/{DB_NAME}`)
        app.on("error",(error)=>{
            console.log("app is not work and error",error);
            throw error
        })

        // listen port
        app.listen(process.env.PORT,()=>{
            console.log(`the port is ${process.env.PORT}`);
            
        })
    }catch(error){
        console.error('error is mongoose',error)
        throw error
    }
})()
*/

