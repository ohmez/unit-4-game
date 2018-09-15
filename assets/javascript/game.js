// Jquery used for everything required
$(document).ready(function() {
var heroR = false;
var defenderR = false;   
    
});
// anything below this is outside the doc.ready 
$(document).on("click", ".click", function (event) {
    $(this).attr("id", "picked");
    $(this).addClass("hero");
    $("#picked").appendTo("#chosen");
    console.log("start of function");
    
    // this doesn't work yet to simultaniously attach unclicked to enemies and clicked to chosen
    setTimeout(function () {
        var unclicked = [];
        for (var x = 0; x < 4; x++) {
            unclicked[x] = $("#photos");
            $(unclicked[x]).attr("id", "enemies");
            $(unclicked[x]).addClass("enemy"+x).addClass("enemies");
            $(unclicked[x]).appendTo("#enemyarea");
        } // end for loop contained in timeoutdelay
        $(".chose").css('display', 'none');      // this needs to be reset when game ends
    }, 100);
    // end of timeout contained in on click function
    console.log("this function selected your character");
    firstClick();   
});
// end on click function

$(document).on("click", ".hero", ".clicked", function (event) {
    console.log(this.attributes[2].value);
    console.log(this.firstElementChild.innerText +" has " +this.lastElementChild.innerText + " health.");
    console.log($(".hero"));
});
$(document).on("click", ".enemies", ".clicked", function (event) {
    console.log(this.firstElementChild.innerText +" has " + this.lastElementChild.innerText + " health.");
    console.log(this);
    $(this).addClass("defender").removeClass("enemies").appendTo(".defend");
    $("#picked").appendTo(".fightsection");
    setTimeout(function () {
        $(".enemies").css('display', 'none');
        $("p.chosen").css('display', 'none');
    },50);
    // end timeout function
    defense();
    
});
$(document).on("click", ".defender", ".clicked", function (event) {
    console.log(this.firstElementChild.innerHTML +" has " + this.lastElementChild.innerHTML + " health.");
    
});
$(document).on("click", "#attack", function (event) {
    if (heroR && defenderR) {
        console.log("hero and defender is true");
    }
    console.log(this);
});
                
function defense () {
    defenderR = true;
};              
                
function firstClick () {
$(".click").addClass("clicked");
$(".click").removeClass("click");
    heroR = true;
};