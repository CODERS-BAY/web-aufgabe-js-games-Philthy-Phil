"use strict";

rules.addEventListener("click", gameRules);
right.addEventListener("click", resetGame);
btnclose.addEventListener("click", closeRules);
btn.addEventListener("click", startLogic);


var yearCount = 2021;
var landPriceCount = 5;

landPrice.innerHTML = landPriceCount;
year.innerHTML = yearCount;




function startLogic() {

    gameEndYearCondition();
    gameLandPrice();

}



function gameLandPrice() {
    landPriceCount = Math.floor(Math.random() * 10) + 1;
    if(yearCount > 2021) {
        landPrice.innerHTML = landPriceCount;
    }
}

function gameEndCondition() {
    yearCount++;
    year.innerHTML = yearCount;

    if(yearCount == 2021 + 20 || citizenAmound < 1 || farmLand < 1) {
        btn.classList.add("no-select");
    }
}


feedCitzienAmount.oninput = function() {
    outputFeedCitzienAmount.innerHTML = this.value;
}
farmCornAmount.oninput = function() {
    outputFarmCornAmount.innerHTML = this.value;
}
realizeFarmLand.oninput = function() {
    outputRealizeFarmLand.innerHTML = this.value;
}




function gameRules() {
    box.classList.remove("dnone");
}

function closeRules() {
    box.classList.add("dnone");
}

function resetGame() {
    window.location.reload();
}
