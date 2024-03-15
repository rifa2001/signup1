const router=require('express').Router()
const user=require('../Model/Userschema')



router.post('/signup',async (req,res)=>{
    console.log("req,body?......",req.body);
    
        const newData=new user(req.body)

    const saveData=await newData.save()
    console.log("saveData",saveData);
res.status(200).send('success')
    
   
})

router.get('/getData',async(req,res)=>{
    try{
    const allData=await user.find()
    console.log("Database Data",allData);
    res.status(200).json(allData)
    }catch(err){
    res.status(500).json(err.message)

    }
})


router.get('/getDataone',async(req,res)=>{
    try{
    const GetDatabaseData=await user.findOne({Email:req.body.email})
    console.log("Database Data",GetDatabaseData);
    res.status(200).json(GetDatabaseData)
    }catch(err){
    res.status(500).json(err)

    }
})


router.get('/getDataid/:id',async(req,res)=>{
    console.log("-------------------",req.params.id);
    try{
    const GetDatabaseData=await user.findById(req.params.id)
    console.log("Database Data",GetDatabaseData);
    res.status(200).json(GetDatabaseData)
    }catch(err){
    res.status(500).json(err)

    }
})

router.delete('/deleteData/:id',async (req,res)=>{
    try{
await user.findByIdAndDelete(req.params.body)
res.status(200).json('Deleted')
    }catch(err){
        res.status(500).json(err.message)
    }
})

router.put('/updatedata/:id',async(req,res)=>{
    try{
        const updatedata=await user.findByIdAndUpdate(req.params.id,{
            $set:{Email:req.body.email,Name:req.body.name,Mobile:req.body.mobile,Address:req.body.address,Password:req.body.password}
        },{new:true})
        res.status(200).json(updatedata)
    }catch(err){
        res.status(500).json(err.message)
    }

})

router.get('/getquerydata',async(req,res)=>{
    console.log("req.body in getData",req.query);
    try{
    const DatabaseData=await user.findOne({Email:req.body.email})
    console.log("DatabaseData");
    res.status(200).json(DatabaseData)
    }catch(err){
    res.status(500).json(err.message)
    }
})

module.exports=router