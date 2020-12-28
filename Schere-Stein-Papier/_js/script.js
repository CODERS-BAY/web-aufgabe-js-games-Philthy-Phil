"use strict";

function resetGame() {
    window.location.href=window.location.href;
}

let roundCount = 1;
let scoreUSERcount = 1;
let scoreCPUcount = 1;

const pathScissors = "<img src='./_img/scissors.svg'>";
const pathRock = "<img src='./_img/rock.svg'>";
const pathPaper = "<img src='./_img/paper.svg'>";

function checkSymbol(value) {
   

        if (scoreCPUcount == 3 || scoreUSERcount == 3) {
            btns.classList.add("no-select");
            scoreCPU.innerText = scoreCPUcount;
            scoreUSER.innerText = scoreUSERcount;

            left.classList.remove("dnone");
            right.classList.remove("dnone");

            if (scoreUSERcount == 3) {
                left.innerHTML = "USER wins!";
            } else {
                left.innerHTML = "CPU wins!";
            }

        }
       
            // set symbol values
            let symbolCPU = Math.round(Math.random() * 2);
            console.log("CPU " + symbolCPU);
            let symbolUSER = value;
            console.log("USER " + symbolUSER);

            // checking symbolUSER
            if(symbolUSER == 0) { resultUSER.innerHTML = pathScissors; }
            if(symbolUSER == 1) { resultUSER.innerHTML = pathRock; }
            if(symbolUSER == 2) { resultUSER.innerHTML = pathPaper; }
            // checking symbolCPU
            if(symbolCPU == 0) { resultCPU.innerHTML = pathScissors; }
            if(symbolCPU == 1) { resultCPU.innerHTML = pathRock; }
            if(symbolCPU == 2) { resultCPU.innerHTML = pathPaper; }

            /* draw */
            if(symbolCPU == symbolUSER) {
                console.log("draw");
                resultUSER.classList.remove("winner");
                resultCPU.classList.remove("winner");
                roundCount++;
            }

            /* CPU wins */
            else if((symbolCPU == 0 && symbolUSER == 2) ||
                (symbolCPU == 1 && symbolUSER == 0) ||
                (symbolCPU == 2 && symbolUSER == 1)) {
                console.log("CPU wins"); 
                resultCPU.classList.add("winner");
                resultUSER.classList.remove("winner");
                scoreCPU.innerText = scoreCPUcount++;
                roundCount++;

            /* USER wins */
            } else {
                console.log("USER wins");   
                resultUSER.classList.add("winner");
                resultCPU.classList.remove("winner");
                scoreUSER.innerText = scoreUSERcount++;
                roundCount++;   
            }
            rounds.innerText = roundCount;

}