// DB/db.js
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async ()=> {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("✅ the mongodb is connect");
    } catch(error) {
        console.error('❌ MongoDB connection failed:', error);
        process.exit(1);
    }
};

export default connectDB


