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
    
    var $newUL = $("<ul>");
    var $newParagraphElement = $("<p>");
    $newParagraphElement.text("this is a paragraph");
    

};
$(document).ready(main);