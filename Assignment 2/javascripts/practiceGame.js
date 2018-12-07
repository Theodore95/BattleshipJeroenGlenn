var main = function() {
    "use strict";
    console.log("Hello world");
    $("main").append("<p>Hello World!</p>");
    $(".myGridContainer").append("<div class=\"myGridCell\"> </div>");
    $(".opponentsGridContainer").append("<div class=\"opponentsGridCell\"> </div>");
}
$(document).ready(main);
