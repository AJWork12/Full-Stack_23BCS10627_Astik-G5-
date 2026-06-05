let seconds = 0;
let timer = null;

function updateDisplay(){
    let hrs = Math.floor(seconds/3600);
    let mins = Math.floor((seconds%3600)/60);
    let secs = seconds%60;

    document.getElementById("time").textContent =
        String(hrs).padStart(2,"0")+":"+
        String(mins).padStart(2,"0")+":"+
        String(secs).padStart(2,"0");
}

function start(){
    if(timer) return;

    timer = setInterval(()=>{
        seconds++;
        updateDisplay();
    },1000);
}

function pause(){
    clearInterval(timer);
    timer = null;
}

function reset(){
    pause();
    seconds = 0;
    updateDisplay();
}