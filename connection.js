// importing mongoose
var mongoose=require('mongoose');

// conntecting with db
// mongoose.connect("connection string").then(),catch()
mongoose.connect("mongodb+srv://Abhirami:anjujaya4@cluster0.idqsrck.mongodb.net/Database1?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connection to db");
})
.catch((err)=>{console.log(err)});