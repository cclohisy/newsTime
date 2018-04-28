console.log("js linked")

$(function () {
    //onclick of save buttonn...
    $(".saveBtn").on("click", function (event) {
        event.preventDefault()
        console.log("save click working")
        //grab id from button
        var articleId = $(this).attr("article-id")
        console.log("article id: " + articleId)
        //run put ajax to update save value to true
        $.ajax("/article/save/" + articleId,
            {
                type: "PUT",
            }
        ).then(function () {
            location.reload()
        }).catch(function (err) { console.log(err) })
    })

    // on click of delete button... 
    $(".deleteArticle").on("click", function (event) {
        event.preventDefault()//? still need to be doing this?
        console.log("delet4e click workin")
        //grab id of article to delete
        var articleId = $(this).attr("article-id")
        console.log("id to delete: " + articleId)
        //run ajax call to delete route
        $.ajax("/article/delete/" + articleId,
            {
                type: "PUT"
            }).then(function () {
                location.reload()
            }).catch(function (err) { console.log(err) })
    })


    // on click of comment button... 
    $(".commentsBtn").on("click", function (event) {
        event.preventDefault()//? still need to be doing this?
        console.log("comment click workin")
    })
})
