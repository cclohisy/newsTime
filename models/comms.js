//dependencies....
var mongoose = require("mongoose")

//set Schema reference
var Schema = mongoose.Schema

// create new commente schema

var CommSchema = new Schema({
    content :{
     //set characte limit maybe,..... 
    }
})

var Comm = mongoose.model("Comments", CommSchema)

module.exports = Comm
