const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("num");  

let interval;
let timeLeft = 1500; 
function updateTimer(){
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;  
    timerEl.innerHTML = formattedTime;
}

function startTimer(){
    if (!interval) { 
        interval = setInterval(() => {
            timeLeft--;
            updateTimer();
            if(timeLeft === 0){
                clearInterval(interval);
                alert("Time's up!");
                timeLeft = 1500;  
                updateTimer();
                interval = null;  
            }
        }, 1000);
    }
}

function stopTimer(){
    clearInterval(interval);
    interval = null;  
}

function resetTimer(){
    clearInterval(interval);
    interval = null;  
    timeLeft = 1500;  
    updateTimer();
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);

updateTimer();  
