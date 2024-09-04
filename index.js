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

let audio = new Audio('back-tick-107822.mp3');

let i = 0;
let lapNumber = 1;


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

function resetTimer(){
    if(check == false){
        minutes.innerText = '00';
        seconds.innerText = '00';
        milliseconds.innerText = '00';
        
        display_lap.innerHTML = "";
    }
}

function getLapNumber(){
    if(check == true){
        text = `Lap ${lapNumber} : ${minutes.innerText} : ${seconds.innerText} : ${milliseconds.innerText}`;
        lapNumber += 1;

        let lap = document.createElement('p');
        lap.setAttribute('id', 'plap');
        lap.innerText = text;
        display_lap.appendChild(lap);
    }
}

startBtn.addEventListener('click', start);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', getLapNumber);