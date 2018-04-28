
//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars")
// Require all models
var db = require("./models");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios"); //- not sure what this is doing...
//left it in as it was being used in cklass scrape example...
var cheerio = require("cheerio");

//define Port
var PORT = 3000

// Initialize Express
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// using the handlebars views
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Use morgan logger to automatically log stuff
app.use(logger("dev"));

//require routes
//_____________________________________
// api routes
require("./routes/api-routes.js")(app)
// //html routes
// require("./routes/html-routes")(app)

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/mongoHeadlines");

//testing in server

// app.get("/scrape", function (req, res) {
//     //grab html 
//     axios.get("http://www.bbc.com/news").then(function (response) {
//         //set up cheerio in $
//         var $ = cheerio.load(response.data)
//         //grab things will class below... do i need it all? 
//         // nw-c-top-stories--international
//         // $("div.nw-c-top-stories").each(function (i, element) {
//             $("div").attr("id", "latest-stories-tab-container").each(function(i, each){
//             //set empty results obj
//             var result = {}

//             //grab headline
//             result.headline = $(this).children("a").text()

//             //grab summary
//             result.summary = $(this).children("p").text()
            
//             //grab link
//             result.link = $(this).children("a").attr("href")
//             db.Article.create(result)
//             .then(function (dbArticle) {
                
//                 console.log(dbArticle)
//             }).catch(function (err) {
                
//                 return res.json(err)
//             })
//         })
//         //scrape was successful... send message for testing
//         res.send("stuff scrapped")
//     })
// })

// Start the server
app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});