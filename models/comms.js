//dependencies....
var mongoose = require("mongoose")

//set Schema reference
var Schema = mongoose.Schema

// create new commente schema

var CommSchema = new Schema({
    content :{
        type: String
        //set characte limit maybe,..... 
    }
})

var Comm = mongoose.model("Comment", CommSchema)

module.exports = Comm
