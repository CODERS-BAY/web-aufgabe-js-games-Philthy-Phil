"use strict";

// DO SOMETHING
right.addEventListener("click", resetGame);
btnStart.addEventListener("click", playGame);

// set const g's for planets
const gEarth = 9.81;
const gMoon = 1.62;
const gMars = 3.69;
const gJupiter = 24.79;

// set start param
let distanceMonster = Math.round(Math.random() * 90 + 10);
document.getElementsByClassName("monsterAppear")[0].innerHTML = distanceMonster;

outputDegrees.innerHTML = '"' + 45 + '"';
outputSpeed.innerHTML = '"' + 50 + '"';

let maxRounds = 3;
maxRoundCount.innerHTML = "(maxRounds = " + maxRounds + ")";

let roundCount = 1;
let g = 0;
let v0 = 0;
let degrees = 0;

function playGame() {

    // get input values for gPlanet
    let gPlanet = document.querySelector('input[name="gPlanet"]:checked').value;
    // console.log("gPlanet = " + gPlanet);

    // set correct g
    if(gPlanet == 0) { g = gEarth;}
    else if(gPlanet == 1) { g = gMoon;}
    else if(gPlanet == 2) { g = gMars;}
    else if(gPlanet == 3) { g = gJupiter;}
    // console.log("g = " + g);

    // get input value from degrees
    degrees = document.getElementById("degreeRange").value;
    // console.log("degrees = " + degrees);

    //get input values from speed
    v0 = document.getElementById("speedRange").value;
    // console.log("v0 = " + v0);

    // calculate throwing distance with given params
    let throwDistance = Math.round(((v0 * v0) * Math.sin(2 * DegToRad(degrees))) / g);
    // console.log("throwDistance = " + throwDistance);

    let x = document.getElementsByClassName("instruct-smaller")[0];

    if(throwDistance == distanceMonster) {
        // console.log("great! you hit the monster! = " + throwDistance);
        x.innerHTML = "great throw! you hit the monster! restart game!";
        x.classList.add("color-green");
        x.classList.remove("color-red");
        x.classList.remove("color-orange");
        formAll.classList.add("no-select");
    }
    
    else if(throwDistance < distanceMonster) {
        // console.log("your throw was too short! = " + throwDistance);
        x.innerHTML = "your throw was too short! try again!";
        x.classList.add("color-orange");
        x.classList.remove("color-red");
    }

    else if(throwDistance > distanceMonster) {
        // console.log("your throw was too long! = " + throwDistance);
        x.innerHTML = "your throw was too long! try again!";
        x.classList.add("color-red");
        x.classList.remove("color-orange");
    }

    // roundCount
    roundCount++;
    document.getElementsByClassName("rounds")[0].innerHTML = roundCount; 

    // stop conditions
    if(roundCount > maxRounds) {
        formAll.classList.add("no-select"); 
        x.innerHTML = "sorry looser! <br> start a new game!";
        x.classList.remove("color-orange");
        x.classList.add("color-red");  
        document.getElementsByClassName("rounds")[0].innerHTML = "end";  
    }
}

// check maxRounds
// TO-DO

// check speed from range
speedRange.oninput = function() {
    outputSpeed.innerHTML = '"' + this.value + '"';
}
// check degrees from range
degreeRange.oninput = function() {
    outputDegrees.innerHTML = '"' + this.value + '"';
}
// convert degrees to radians
function DegToRad(degrees) {
  return degrees * (Math.PI/180);
}
//reset game
function resetGame() {
    window.location.href=window.location.href;
}
