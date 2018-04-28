//import { mongo } from "mongoose"; dont know how this got here.........

//depencies
var mongoose = require("mongoose")

//save mogoose.Schema to schema var
var Schema = mongoose.Schema

var ArticleSchema = new Schema({
    //article headline - must be unique
    headline: {
        type: String,
        required: true,
        unique: true
    },
    //article summary 
    summary: {
        type: String,
        required: true,

    },
    //link
    link :{
        type: String,
        required: true
    },
    //not working
    image :{
        type: String,
        required:false
    },
    //boolean store true if book saved 
    saved: {
        type: Boolean,
        default: false
    },
    //array of comments object ids... link to comms model
    //will populate Article with comments
    comments:[
        {
            type: Schema.Types.ObjectId,
            //references what is set up on line 40 here but in comms model
            ref: "Comment"
    }
]
    //extras.....tbfd

})

var Article = mongoose.model("Article", ArticleSchema)

module.exports = Article