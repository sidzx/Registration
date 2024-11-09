const mongoose=require('mongoose')

const connectString=process.env.DATABASE
mongoose.connect(connectString).then((res)=>{
    console.log("MongoDB connected successfully")
}).catch((rej)=>{
    console.log("connection failed")
})