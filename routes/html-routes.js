module.exports = function (app) {
    //route to load index... get articles from DB
    // display data using handlebars
    app.get("/", function(req,res){
        // db.Article.find({}).then(function)
        res.render("index")
    })
}
