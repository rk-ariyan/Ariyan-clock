let clock = document.querySelector('.clock')


function digitalClock(){
let newTime = new Date()
clock.innerHTML = newTime.toLocaleTimeString('en-EN',{
 hour:'2-digit',
 minute:'2-digit',
 second:'2-digit'
})



}

setInterval(digitalClock,1000)