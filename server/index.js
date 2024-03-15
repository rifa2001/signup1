const express=require('express')
const app=express()
const dotenv=require('dotenv')
const mongoos=require('mongoose')
const cors=require('cors')
dotenv.config()

app.use(cors())
const userRouter=require('./Router/Userrouter')
const userLogin=require('./Router/Login')


mongoos.connect(process.env.Mongourl).then(()=>{
    console.log("connected");
}).catch(()=>{
    console.log("error");
})

app.use(express.json())
app.use('/api',userRouter)
app.use('/htp',userLogin)

app.listen(9000,()=>{
    console.log("port is connected");
}) 