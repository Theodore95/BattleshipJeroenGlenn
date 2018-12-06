var main = function () {
    "use strict";
    
    var $newUL = $("<ul>");
    var $newParagraphElement = $("<p>");

    $newParagraphElement.text("this is a pragraph");

    $("footer").append($newParagraphElement);
};
$(document).ready(main);