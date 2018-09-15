// Jquery used for everything required
$(document).ready(function() {
    
    
});
// anything below this is outside the doc.ready 
$(document).on("click", ".click", function (event) {
    $(this).attr("id", "picked");
    $("#picked").appendTo("#chosen");
    console.log("start of function");

    // this doesn't work yet to simultaniously attach unclicked to enemies and clicked to chosen
    setTimeout(function () {
        var unclicked = [];
        for (var x = 0; x < 4; x++) {
            unclicked[x] = $("#photos");
            $(unclicked[x]).attr("id", "enemies");
            $(unclicked[x]).prependTo("#enemyarea");
        } // end for loop contained in timeoutdelay
        console.log(unclicked);
        $(".chose").css('display', 'none');      // this needs to be reset when game ends
    }, 100);
    // end of timeout contained in on click function
    console.log("this function selected your character");
    firstClick();   
});
// end on click function

$(document).on("click", ".clicked", "#enemies", function (event) {
    console.log(this);
});
                
                
                
                
                
function firstClick () {
$(".click").addClass("clicked");
$(".click").removeClass("click");
};