//import Axios from "axios"; auto added again... 

module.exports = function (app) {

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

}