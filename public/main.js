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
        //get and store id of article var
        var articleId = $(this).attr("article-id")
        //ajax get exsisting comments... 
        $.ajax("/article/comments/" + articleId,
            {
                type: "GET"
            }).then(function (data) {
                console.log(data)
                 //display results in commentModal
                //append headline
                $("#articleHeadline").append(data[0].headline)
                // for loop to display exsisting comments
                var commArray = data[0].comments
                for(var i = 0; i< commArray.length; i++){
                    var comment = commArray[i].content
                    var listItem = $("<li>")
                    listItem.addClass("list-group-item")
                    var deleteBtn = $("<button>")
                    deleteBtn.addClass("btn float-right deleteCommBtn")
                    deleteBtn.text("X")
                    listItem.append(deleteBtn)
                    listItem.append(comment)
                    $("#commentList").append(listItem)
                    
                }

            })

        //toggle modal 
        $("#commentModal").modal("toggle")
    })

    //on click of add note button 
})
