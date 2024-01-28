var countDownDate = new Date("Mar 1, 2024 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("min").innerHTML=minutes;
    document.getElementById("sec").innerHTML=seconds;
    // document.getElementById("days").innerHTML=days;
},1000);