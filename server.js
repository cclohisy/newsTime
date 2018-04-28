//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
// Require all models
var db = require("./models");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
//var axios = require("axios"); - not sure what this is doing...
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
//html routes
require("./routes/html-routes")(app)

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/mongoHeadlines");