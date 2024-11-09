require ('dotenv').config()

const express=require('express')
const cors=require('cors')
const server=express()

server.use(express.json())
server.use(cors())
require('./connection/connection')


const route=require('./routes/routes')

server.use(route)

const PORT=process.env.PORT || 4500

server.use('/upload',express.static('./uploads'))



server.listen(PORT,()=>{
    console.log('server is running successfully at PORT:',PORT)
})
server.get('/',(req,res)=>{
    res.send("server is running live")
})