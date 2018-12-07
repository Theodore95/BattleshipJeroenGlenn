var main = function () {
    "use strict";
    
    var addCommentFromInputBox = function() {
        var $new_comment;

        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input input").val())
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");
        }
    };

    $(".comment-input button").on("click", function (event) {
        addCommentFromInputBox();
    });

    $(".comment-input input").on("keypress", function(event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }      
    });

    var $content = $("<div>Hello World!</div>").hide();
    var $moreContent = $("<div>Goodbye World!</div>").hide();
    $("body").append($content);
    $("footer p").fadeOut(1000, function() {
        $("footer p").remove();
    });


    
};
$(document).ready(main);

/*var $newUL = $("<ul>");
    var $newParagraphElement = $("<p>");
    $newParagraphElement.text("this is a paragraph");
    $("footer").append($newParagraphElement);
    $("main").append($newUL);

    //we can chain our creation and call to add the text
    var $listItemOne = $("<li>").text("this is the first list item");
    var $listItemTwo = $("<li>").text("second list item");
    var $listItemThree = $("<li>").text("OMG third list item");

    //now we'll append these elements to the ul element we created earlier
    $newUL.append($listItemOne);
    $newUL.append($listItemTwo);
    $newUL.append($listItemThree);
    
    $("footer p").fadeOut();*/