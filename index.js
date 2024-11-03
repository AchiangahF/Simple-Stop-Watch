// Accessing the watch timers values from the html document

let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let milliseconds = document.getElementById('milliseconds');
let display_lap = document.getElementById("display-lap");

// Accessing stop-watch buttons from the html document

let startBtn = document.getElementById('start-btn');
let stopBtn = document.getElementById('stop-btn');
let lapBtn = document.getElementById('lap-btn');
let resetBtn = document.getElementById('reset-btn');

let check = false;

// Creating a new instance of Audio 

let audio = new Audio('back-tick-107822.mp3');

let i = 0;
let lapNumber = 1;

// Function controlling the start button

function start(){
    
    let timer = setInterval(()=>{
        if(check == true){
            milliseconds.innerText = Math.floor(milliseconds.innerText) + 1;
            milliseconds.innerText = milliseconds.innerText.padStart(2,'0');
            startBtn.value = 'Stop';
            startBtn.style.backgroundColor = 'red';
            audio.play();
        }
        if(milliseconds.innerText == '59'){
            seconds.innerText = Math.floor(seconds.innerText)+1;
            seconds.innerText = seconds.innerText.padStart(2, '0');
            milliseconds.innerText = '00';
        }
        if(check != true){
            clearInterval(timer);
            startBtn.value = 'Start';
            startBtn.style.backgroundColor = 'lime';
        }
    }, 10);

    check = !check;

}

// Function controlling the reset button

function resetTimer(){
    if(check == false){
        minutes.innerText = '00';
        seconds.innerText = '00';
        milliseconds.innerText = '00';
        
        display_lap.innerHTML = ""; // clears all the laps in the div
        lapNumber = 1;              // re-inizializes lapNumber to 1
    }
}

// function controlling the lap button

function getLapNumber(){
    if(check == true){
        text = `Lap ${lapNumber} : ${minutes.innerText} : ${seconds.innerText} : ${milliseconds.innerText}`;
        lapNumber += 1;

        let lap = document.createElement('p'); // creating a paragrah element 
        lap.setAttribute('id', 'plap');        // giving it an id so it can be styled
        lap.innerText = text;
        display_lap.appendChild(lap);          // placing it inside the display div
    }
}

// Setting the click events for the various buttons 

startBtn.addEventListener('click', start);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', getLapNumber);