const mongoose = require('mongoose');
const connectDB = require('../db/db');
connectDB();

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true
    },
    image:String,
    description:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const userModel = mongoose.model('User',userSchema);
module.exports=userModel; 