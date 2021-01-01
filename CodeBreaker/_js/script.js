"use strict";

const randomFirstDigit = randomIntFromInterval(1, 9);
const randomSecondDigit = randomIntFromInterval(1, 9);
const randomThirdDigit = randomIntFromInterval(1, 9);
const randomCode = generateCode(randomFirstDigit, randomSecondDigit, randomThirdDigit);
// console.log("randomFirstDigit = " + randomFirstDigit);
// console.log("randomSecondDigit = " + randomSecondDigit);
// console.log("randomThirdDigit = " + randomThirdDigit);
// console.log("randomCode = " + randomCode);

output.addEventListener("click", gameRules);
right.addEventListener("click", resetGame);
btn.addEventListener("click", startLogic);
btnclose.addEventListener("click", closeRules);

let roundCount = 1;
let inputs = [];
let i = 0;

function startLogic() {
    
    let stDigitInput = stDigit.value;
    let ndDigitInput = ndDigit.value;
    let rdDigitInput = rdDigit.value;
    // console.log("st = " + stDigitInput);
    // console.log("nd = " + ndDigitInput);
    // console.log("rd = " + rdDigitInput);

    if (checkValidInput(stDigitInput, ndDigitInput, rdDigitInput) == true) {
        // console.log("inputs are all numbers");
        document.getElementsByClassName("instruct-smaller")[0].classList.remove("color-red");
        document.getElementsByClassName("instruct-smaller")[0].innerHTML = 12 - roundCount + " rounds to try!";

       if (roundCount < 12) {
            
            document.getElementsByClassName("rounds")[0].innerHTML = roundCount++;
            inputs.push(stDigitInput, ndDigitInput, rdDigitInput); 
            document.getElementsByClassName("guessedCodes")[0].innerHTML += "<div><span id='"+[i]+"'>" + inputs[i] + "</span>-<span id='"+[i+1]+"'>" + inputs[i+1] + "</span>-<span id='"+[i+2]+"'>" + inputs[i+2] + "</span>, " + "</div>";
           
            //first
            if(inputs[i] == randomCode.charAt(0)) {
                document.getElementById(i).style.color = "green";
            }
            else if(inputs[i] == randomCode.charAt(1) || inputs[i] == randomCode.charAt(2)) {
                document.getElementById(i).style.color = "orange";
            }
            //second
            if(inputs[i+1] == randomCode.charAt(1)) {
                document.getElementById(i+1).style.color = "green";
            }
            else if(inputs[i+1] == randomCode.charAt(0) || inputs[i+1] == randomCode.charAt(2)) {
                document.getElementById(i+1).style.color = "orange";
            }
            
            //third
            if(inputs[i+2] == randomCode.charAt(2)) {
                document.getElementById(i+2).style.color = "green";
            }
            else if(inputs[i+2] == randomCode.charAt(0) || inputs[i+2] == randomCode.charAt(1)) {
                document.getElementById(i+2).style.color = "orange";
            }

            if(inputs[i] == randomCode.charAt(0) && inputs[i+1] == randomCode.charAt(1) && inputs[i+2] == randomCode.charAt(2)) {

                document.getElementsByClassName("rounds")[0].innerHTML = roundCount++;
                formAll.classList.add("no-select");
                document.getElementsByClassName("instruct-smaller")[0].classList.add("color-green");
                document.getElementsByClassName("instruct-smaller")[0].innerHTML = "you won! start a new game!";
        
            }
            stDigit.value = "";
            ndDigit.value = "";
            rdDigit.value = "";
            i +=3;
        
        } else {
        
            document.getElementsByClassName("rounds")[0].innerHTML = roundCount++;
            formAll.classList.add("no-select");
            document.getElementsByClassName("instruct-smaller")[0].classList.add("color-red");
            document.getElementsByClassName("instruct-smaller")[0].innerHTML = "you lose! reset game!";
        
        }

    } else {
        console.log("inputs are no numbers");
        document.getElementsByClassName("instruct-smaller")[0].classList.add("color-red");
        document.getElementsByClassName("instruct-smaller")[0].innerHTML = "provide inputs as numbers!";
        // alert("inputs should be numbers! remake your inputs!");
        
    }
}

function gameRules() {
    box.classList.remove("dnone");
}
function closeRules() {
    box.classList.add("dnone");
}
function resetGame() {
    window.location.href=window.location.href;
}
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function generateCode (x, y, z) {
    let randomCode = String(x + "" + y + "" + z);    
    return randomCode;
}
function checkValidInput (x, y, z) {
    if (isNaN(x) || isNaN(y) || isNaN(z) || 
        x == "" || y == "" || z == "") {  
        return false;
    } else {
        return true;
    }
}