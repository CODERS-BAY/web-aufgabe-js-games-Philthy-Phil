"use strict";

function resetGame() {
    window.location.href=window.location.href;
}

var randomNumber;
var valueMaxRounds;
var count = 0;

function checkInput() {

    let valueMaxNumber = maxNumber.value;
    valueMaxRounds = maxRounds.value;
    randomNumber = Math.floor(Math.random() * valueMaxNumber);
    
    // console.log("randomNumber firstPart: " + randomNumber);
    // console.log("valueMaxRounds firstPart: " + valueMaxRounds);

    if (isNaN(valueMaxNumber) || valueMaxNumber == "" || 
        isNaN(valueMaxRounds) || valueMaxRounds == "") {
        start.classList.add("dnone");
        notValid.classList.remove("dnone");  
        return false;
    } else {
        start.classList.add("dnone");
        notValid.classList.add("dnone"); 
        valid.classList.remove("dnone");
        btn1.classList.add("dnone");
        btn2.classList.remove("dnone");
        maxNumber.classList.add("dnone");
        maxRounds.classList.add("dnone");
        guessNumber.classList.remove("dnone");
        valueMaxRounds = valueMaxRounds;
    }
}

function guess() {

    let guessedNumber = Number(guessNumber.value);
    
    // console.log("guessedNumber: " + guessedNumber);
    // console.log("randomNumber secondPart: " + randomNumber);
    // console.log("valueMaxRounds secondPart: " + valueMaxRounds);

    left.classList.remove("dnone");
    if (guessedNumber == randomNumber) {
        left.innerHTML = "you guessed the right number!";
        right.classList.remove("dnone");
        btn2.classList.add("no-select");
    } else {
        left.innerHTML = "you guessed wrong!<br> try again!";
        count++;            
    }
    console.log(count);
    if (count == valueMaxRounds) {
        left.innerHTML = "you lost!<br> reset game!";
        right.classList.remove("dnone");
        btn2.classList.add("no-select");
        valid.classList.add("dnone");
        end.classList.remove("dnone");
        end.innerHTML = "<h6>game ends! <br> the number<br> to guess was <br> '" + randomNumber + "'</h6>";
    }
}