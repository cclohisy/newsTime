var db = require("../models");


module.exports = function (app) {
    //route to load index... get articles from DB
    // display data using handlebars
    app.get("/", function (req, res) {
        db.Article.find({
        }).then(
            function (articleData) {
                // console.log("article object____________________",articleData)
                var articleObj = {
                    article: articleData
                }
                // console.log("articleObj", articleObj.article)
                // for (var i = 0; i < articleObj.article.length; i++) {
                //     console.log(i + " article info________________________")
                //     console.log("headline: " + articleObj.article[i].headline)
                //     console.log("summary: " + articleObj.article[i].summary)
                //     console.log("link: " + articleObj.article[i].link)
                //     console.log("comments: " + articleObj.article[i].comments)
                // }
                res.render("index", articleObj)

                // res.json(dbArticle)
            }).catch(function (err) {
                res.json(err)
            })
    })
    app.get("/saved", function(req,res){
        db.Article.find({saved: true}).then(
            function(data){
                var savedArticles = {
                    article: data
                }
                console.log(savedArticles)
                res.render("saved", savedArticles)
            }).catch(function(err){res.json(err)})
    })
}
