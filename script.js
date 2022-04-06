var myTimer;
   function clock() {
     myTimer = setInterval(myClock, 1000);
     var c = 60;

     function myClock() {
       document.getElementById("countdownTimer").innerHTML = "Time: " + --c;
       if (c == 0) {
         clearInterval(myTimer);
       }
     }
   }