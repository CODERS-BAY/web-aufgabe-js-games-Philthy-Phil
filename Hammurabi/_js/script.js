"use strict";

rules.addEventListener("click", gameRules);
right.addEventListener("click", resetGame);
btnclose.addEventListener("click", closeRules);






function gameRules() {
    box.classList.remove("dnone");
}
function closeRules() {
    box.classList.add("dnone");
}
function resetGame() {
    window.location.href=window.location.href;
}
function checkValidInput (x, y, z) {
    if (isNaN(x) || isNaN(y) || isNaN(z) || 
        x == "" || y == "" || z == "") {  
        return false;
    } else {
        return true;
    }
}