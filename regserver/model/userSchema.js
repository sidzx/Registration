const mongoose=require('mongoose')
const validators=require('validator')

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    profile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:false,
        validate:[validators.isEmail,"Invalid Email"]
    },
    password:{
        type:String,
        required:true
    }
})
const users=mongoose.model("users",userSchema)
module.exports=users