//import Axios from "axios"; auto added again... 
var db = require("../models");
var axios = require("axios"); //- not sure what this is doing...
var cheerio = require("cheerio");

module.exports = function (app) {

    //test rout4e for scraping - storing in DB 
    //this should be in a click handler... only scrape on click 
    app.get("/scrape", function (req, res) {
        //grab html 
        axios.get("http://www.bbc.com/news").then(function (response) {
            //set up cheerio in $
            var $ = cheerio.load(response.data)
            //grab things will class below... do i need it all? 
            // nw-c-top-stories--international
            // $("div.nw-c-top-stories").each(function (i, element) {
            $("div").attr("id", "latest-stories-tab-container").each(function (i, each) {
                //set empty results obj
                var result = {}

                //grab headline
                result.headline = $(this).children("a").text()

                //grab summary
                result.summary = $(this).children("p").text()

                //grab link
                result.link = $(this).children("a").attr("href")

                //grab image src, or at least try :).... NOT WORKING?
                result.image = $(this).children("img").attr("src")
                
                db.Article.create(result)
                    .then(function (dbArticle) {

                        console.log(dbArticle)
                    }).catch(function (err) {

                        return res.json(err)
                    })
            })
            //scrape was successful... send message for testing
            res.send("stuff scrapped")
        })
    })

    //get articles 
    app.get("/articles", function (req, res) {
        db.Article.find({
        }).then(
            function (dbArticle) {
                res.json(dbArticle)
            }).catch(function (err) {
                res.json(err)
            })
    })
    //find  a specific article 
    app.get("/articles/:id", function (req, res) {
        db.Article.findOne({ _id: req.params.id })
            .then(function (data) {
                res.json(data)
            }).catch(function (err) { res.json(err) })
    })
    //update exsisting article to saved: true in db
    app.put("/article/save/:id", function (req, res) {
        db.Article.update({
            _id: req.params.id
        },
            {
                $set: { saved: true }
            }).then(function(updatedArticle){
                res.json(updatedArticle)
            }).catch(function(err){res.json(err)})
    })
    //get saved articles and display... maybe html route? - if using handlebars
    app.get("/saved", function (req, res) {
        db.Article.find({ saved: true }).then(
            function (savedData) {
                res.json(savedData)
            }).catch(function(err){res.json(err)})
    })
    //route to "delete" article from saved (saved: falsee)
    app.put("/article/delete/:id", function (req, res) {
        db.Article.update({
            _id: req.params.id
        },
            {
                $set: { saved: false }
            }).then(function(updatedArticle){
                res.json(updatedArticle)
            }).catch(function(err){res.json(err)})
    })


}
