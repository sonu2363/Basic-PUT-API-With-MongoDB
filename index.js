const express=require('express')
const app=express()
const dbConnect=require('./mongodb')
app.use(express.json())//middleware

app.put('/:RoutePath',async(req,res)=>{
   
    let data=await dbConnect();
    data.updateOne(
        {name:req.params.RoutePath},{$set:req.body})
    
    res.send({result:"update"})

})
app.listen(5000)