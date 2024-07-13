// importing mongoose
var mongoose = require("mongoose");


// schema creation
var schema = mongoose.Schema({
    sname:String,
    age:Number,
    place:String
})

// model creations
var Database1Model= mongoose.model("sample",schema)

// exporting
module.exports = Database1Model