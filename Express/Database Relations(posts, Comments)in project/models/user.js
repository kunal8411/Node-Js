const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    }
},  {
        timestamps: true
});



//this will create database having name user and schema declared in userSchema 
const User=mongoose.model('User',userSchema); // here instead of user it should us User with capital U


module.exports= User;
