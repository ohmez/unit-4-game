// Jquery used for everything required
$(document).ready(function() {
var ready = false; 
    $(".click").on("click", function(event) {
        var clicked = this;
        $(clicked).attr("id","picked");
        console.log(clicked.id);
        $("#picked").appendTo("#chosen");
       
        // this doesn't work yet to simultaniously attach unclicked to enemies and clicked to chosen
        setTimeout(function() {
            var unclicked = [];
            for (var x = 0; x < 4; x++) {
                unclicked[x] = $("#photos");
                console.log(unclicked);
            $(unclicked[x]).attr("id","enemies");
            $(unclicked[x]).prependTo("#enemyarea");
        } // end for loop contained in timeoutdelay
        },500);
        //$("#photos").attr("class","enemies").delay(200);
       console.log($("#photos"));
        // notclicked.appendTo("#enemies");
    });









});
// anything below this is outside the doc.ready 