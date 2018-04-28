module.exports = function (app) {
    //route to load index... get articles from DB
    app.get("/", function(req,res){
        res.render("index")
    })
}
