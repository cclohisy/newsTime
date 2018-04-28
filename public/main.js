console.log("js linked")

$(function () {
$(".saveBtn").on("click", function(event){
    event.preventDefault()
    console.log("save click working")
    var articleId = $(this).attr("article-id")
    console.log("article id: " + articleId)

    $.ajax("/api/save/" + articleId,
        {
            type: "PUT",
        }
    ).then(function () {
        location.reload()
    })
})


})
