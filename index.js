// importing express
var express=require('express');
require('./connection');
var sampleModel=require('./model');
// 2.Intialization
var app=express();
//  midddleware
app.use(express.json())
// api

// to add datato db
app.post('/add',async(req,res)=>{
    try{
       await sampleModel(req.body).save()
       res.send({message:"data added"})
    }catch(error){
        console.log(error);
    }
})
// api to view data
app.get('/view',async(req,res)=>{
    try{
        var output= await sampleModel.find();
        res.send(output);
    }catch(error)
    {
        console.log(error);
    }
})
// api to delete a document
app.delete('/remove/:id',async(req,res)=>{
    console.log(req.params.id);
    try{
        var id= req.params.id
        await sampleModel.findByIdAndDelete(id)
        res.send("data deleted")
    }catch(error){
        console.log(error)
    }
})
// api to update a document
app.put('/update/:id',async(req,res)=>{
    try{
        var id=req.params.id
        var output = await sampleModel.findByIdAndUpdate(id,req.body)
        res.send({message:"updated",output})
    }catch(error){
        console.log(error)
    }
})
// port assigning
app.listen('3000',()=>{
    console.log("port is up and running");
})
