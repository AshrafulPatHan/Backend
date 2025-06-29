import mongoose from "mongoose";

const TestData = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    aeg:{
        type:String,
        required:true
    },
}, {timestamps:true})

// module.exports = mongoose.model('PoseData' ,TestData) => wrong ❎

const PoseData = mongoose.model('PoseData', TestData);

export default PoseData;

