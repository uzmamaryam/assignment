var min = 0;
var sec = 0;
var msec = 0;
var minTime = document.getElementById("min");
var secTime = document.getElementById("sec");
var msecTime = document.getElementById("msec");
var interval;
function timer(){
    msec++
    msecTime.innerHTML = msec;
    if(msec >= 100){
        sec++
        secTime.innerHTML = sec;
        msec =0 ;
    }else if(sec >= 60){
        min++
      minTime.innerHTML = min;
      sec = 0
    }
} 
function start(){
    interval = setInterval(timer,10)
}
function stop(){
    clearInterval(interval)
}
function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    minTime.innerHTML = min;
    secTime.innerHTML = sec;
    msecTime.innerHTML = msec;
    stop()
}
