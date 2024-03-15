const mongoose=require('mongoose')

const Userschema=new mongoose.Schema({
    Name:{type:String,required:true},
    Email:{type:String,required:true,unique:true},
    Mobile:{type:String,required:true},
    Address:{type:String,required:true},
    Password:{type:String,required:true}
})

module.exports=mongoose.model('NodeNew',Userschema)