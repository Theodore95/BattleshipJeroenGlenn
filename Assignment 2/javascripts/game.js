var main = function() {
    console.log("hello");
//Set the size of the rows and columns
var columns = 10;
var rows = 10;


//assign the html <div class="MyGridContainer"> to the js var MyGridContainer
//var myGridContainer = document.getElementsByClassName("myGridContainer");

//create the columns and rows in the html file
for (i = 0; i < columns; i++) {
    for(j = 0; j < rows; j++) {
        
        //append <div> elements that represent 
        //$("main").append("<p>Hello World!</p>");
        $(".myGridContainer").append("<div class=\"myGridCell\" id=" + i + "" + j +"> </div>");
        $(".opponentsGridContainer").append("<div class=\"opponentsGridCell\"> </div>");
        


    }
}
}
$(document).ready(main);


