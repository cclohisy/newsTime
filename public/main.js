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
        })
    })
})
