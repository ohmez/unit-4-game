// Jquery used for everything required
var winning = 0;
$(document).ready(function() {
var heroR = false;
var defenderR = false;   
var heroH;
var defenderH;
var attacked = false;
var lastdamage = 0;
var hh;
var dh;

    $(document).on("click", ".click", function (event) {
        heroH = this.lastElementChild.innerHTML;
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
        console.log(this.firstElementChild.innerText +" has " +this.lastElementChild.innerText + " health.");
    });
    $(document).on("click", ".enemies", ".clicked", function (event) {
        console.log(this.firstElementChild.innerText +" has " + this.lastElementChild.innerText + " health.");
        $(this).addClass("defender").removeClass("enemies").appendTo(".defend");
        $("#picked").appendTo(".fightsection");
        setTimeout(function () {
            $(".enemies").css('display', 'none');
            $("p.chosen").css('display', 'none');
            defenderH = $(".defender")[0].attributes[2].value;
        },50);
        // end timeout function
        defense();
        
    });
    $(document).on("click", ".defender", ".clicked", function (event) {
        console.log(this.firstElementChild.innerHTML +" has " + this.lastElementChild.innerHTML + " health.");
        
    });
    $(document).on("click", "#attack", function (event) {
        if (heroR && defenderR) {
            attack();
            
        } // below is out of if statement
        
    });

function lose () {
    $("body").html('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Loser</title><link rel="stylesheet" type="text/css" href="assets/css/style.css"></head><body><div class="container"><div class="row"><div class="col"><h1> SORRY BUT YOUVE LOST </h1></div></div></div>');
    setTimeout(function() {
        document.location.reload(true);
    }, 5000);
};

function win () {
    $("body").html('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Loser</title><link rel="stylesheet" type="text/css" href="assets/css/style.css"></head><body><div class="container"><div class="row"><div class="col"><h1> GREAT JOB YOU WON!!! </h1></div></div></div>');
    setTimeout(function() {
        document.location.reload(true);
    }, 5000);
    
};
function end () {
    console.log(winning);
    if (defenderH <= 0) {
        $(".hero")[0].children[2].innerHTML = $(".hero")[0].attributes[2].value;
        heroH = parseInt($(".hero")[0].attributes[2].value);
        hh = heroH;
        defenderR = false;
        $(".defender").addClass("dead").removeClass("enemies").removeClass("defender");
        $("#picked").appendTo("#chosen");
        winning++;
        console.log(winning);
        setTimeout(function() {
            $(".enemies").removeAttr('style');
            $("p.chosen").removeAttr('style');
            $(".enemies").appendTo("#enemyarea");
            
            
            console.log("you've won");
        },500);
        // end timeout still within if
    }
    if (heroH <= 0) {
        defenderR = false;
        lose();
        console.log("you've lost");
    }
    
    if (winning === 3) {
        win();
    }

};

function attack () {

    // creates numbers for math
     hh = parseInt(heroH);
     dh = parseInt(defenderH);
    // creates random attack numbers 
    var da = getRandoNum(9,13);
    var ha = getRandoNum(4,6);
    // if statement to check if first attack has happened.
    if (attacked === false) { 
        lastdamage = parseInt(ha);
        setTimeout(function(){
            attacked = true;
        },30);
    }
    if (attacked === true) {
        ha = ha + parseInt(lastdamage);
    }
    // does attack math
    setTimeout(function() {
    dh = dh - ha;
    hh = hh - da;
    
    // pushes results of attack to global variable
    heroH = hh;
    defenderH = dh;
},50);
    // push global variables to innher html
    $(".defender")[0].children[2].innerHTML = defenderH;
    $(".hero")[0].children[2].innerHTML = heroH;
    
    $("#fighttext").html(
        "<h1> Your Hero Attacked For " + ha +"</h1>" +
        "<h1> The Defender Attacked Back For " + da +"</h1>"
    );
    // I admit stealing this from the web was way better than coming up with a way to do this
    function getRandoNum (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    end();
    
};
                    
    function defense () {
        defenderR = true;
    };              
                    
    function firstClick () {
    $(".click").addClass("clicked");
    $(".click").removeClass("click");
        heroR = true;
    };
    
});
// anything below this is outside the doc.ready 