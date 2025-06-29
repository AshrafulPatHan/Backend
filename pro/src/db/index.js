import mongoose from "mongoose";
import { DB_NAME } from "../constants";


const connectDB = async() =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB is !! DB HOST: ${connectionInstance}`);
        
    }catch(error){
        console.error("the error is coming of connect database",error);
        // throw error
        process.exit(1)
    }
}

