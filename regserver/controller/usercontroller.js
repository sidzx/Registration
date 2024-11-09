const users=require('../model/userSchema')

exports.register=async(req,res)=>{
    console.log("inside register function")
    const {name,dob,district,age,gender,email,password}=req.body
    const profile=req.file.filename
    console.log(profile)
    console.log(`name:${name},dob:${dob},district:${district},age:${age},gender:${gender},email:${email},password:${password}`)
    try{
        const existingUser=await users.findOne({email})
        if(existingUser){
            res.status(406).json("Existing user")
        }
        else{
            const newUser=await users({name,dob,district,age,gender,email,password,profile})
            await newUser.save()
            res.status(200).json("Registered successfully")
        }
    }
    catch(err){
        res.status(400).json("Something went wrong"+err)
    }
}
exports.login=async(req,res)=>{
    console.log("inside log in")
    const {email,password }=req.body
    try{
        const existingUser=await users.findOne({email,password})
        console.log(existingUser)
        if(existingUser){
            res.status(200).json(existingUser)
        }
        else{
            res.status(406).json("invalid email or password")
        }
    }
    catch(err){
        res.status(400).json("something went wrong"+err)
    }
}
exports.edit=async(req,res)=>{
    console.log("inside edit fucnction")
    const {name,dob,district,age,gender,email,password}=req.body
    const {uid}=req.params
    const uplodadFile=req.file?req.file.filename:req.body.profile
    try{
        const result=await users.findOneAndUpdate({_id:uid},{name,dob,district,age,gender,email,password,profile:uplodadFile})
        console.log(result)
        res.status(200).json(result)
    }
    catch(err){
        res.status(400).json("failed"+err)
    }
}   

exports.update=async(req,res)=>{
    console.log("inside update")
    const {id}=req.params
    try{
        const result= await users.findById({_id:id})
        console.log(result)
        res.status(200).json(result)
    }
    catch(err){
        res.status(400).json("failed.."+err)
    }
}