"use strict";
window.onload = function(){
	$("boundary1").onmouseover = overBoundary;
};

function overBoundary(){
	$("boundary1").style.backgroundColor = "red";
	$("boundary1").addClassName("boundary");

}

var loser = false;

window.onload = function() {
    $("start").onclick = startClick;
    $("end").onmouseover = overEnd;
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
    }
};

function overBoundary() {
    loser = true;
    $("status").textContent = "You lose (-_-)";
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].addClassName("youlose");
    }
}

function startClick() {
    loser = false;
    $("status").textContent = "Find the end!";
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].removeClassName("youlose");
    }
}

function overEnd() {
    if (!loser) {
        $("status").textContent = "You win! (^_^)";
    }
}
