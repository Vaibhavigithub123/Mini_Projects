const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

//need two years 

//current year
const currYear = new Date().getFullYear();

//new year time
const newYearTime = new Date(`January 01 ${currYear+1} 00:00:00`)

//Calculate coundowntime

function updateCountDown(){
    const currTime = new Date();
    const Timediff = newYearTime - currTime;  //time difference in mili sec
    // console.log(Timediff)   

    const d = Math.floor(Timediff / 1000 / 60/ 60/24);
    const h = Math.floor(Timediff / 1000 / 60 / 60 ) % 24;
    const m = Math.floor(Timediff/1000/60) %60;
    const s = Math.floor(Timediff/1000) % 60

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}
setInterval(updateCountDown,1000);