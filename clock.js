function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  var grab = document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i){
  if(i<10) {
    i = "0" + i;
  };
  return i;
}



// 1. change the color to black if it is an odd minute another color if it is //
//even minute
//2. Change the background to a random color every 5 minutes
//3.Change the text color to a different color of the clock every hour selected
//from an array of colors

$(document).ready(function(){
  var currentHour = 0;
  var currentFive = 0;

  var cssColor = ['red', 'blue', 'yellow', 'green', 'orange', 'pink', 'purple', 'lightblue', 'lightgreen', 'brown', 'gray']
  var randomNum2 = Math.floor(Math.random()* (10 - 0)) + 0;



  function displayTime(){
     var date = new Date;
     var hours = date.getHours();
     var minutes = date.getMinutes();
     var seconds = date.getSeconds();
     var milliseconds = date.getMilliseconds();

     $('#hours').text(hours);
     $("#minutes").text(formatMinutesAndSeconds(minutes));
     $("#seconds").text(formatMinutesAndSeconds(seconds));
     $("#milliseconds").text(milliseconds);

     ifMinOdd(minutes);
     ifFiveMin(minutes);
     ifHour(hours);
  }

  function formatMinutesAndSeconds(value) {
     if (value < 10){
        return '0' + value;
     } else {
        return value;
     }
  }

  function ifMinOdd(min){
    if (min % 2 === 0){
      $('#minutes').css('color', 'red');
    }else {
      $('#minutes').css('color', 'black');
    }
  }

  function ifFiveMin(min){
    if(min > currentFive){
       $('#timeContainer').css('background-color', cssColor[randomNum2]);
       currentFive = min + 4;
       if(currentFive >= 60){
        currentFive = 0;
       }
     }
  }

  function ifHour(newHour){
    var randomNum = Math.floor(Math.random()* (10 - 0)) + 0;
    if(newHour !== currentHour){
      $('#hours').css('background-color', cssColor[randomNum]);
      currentHour = newHour;
    }
  }



  window.setInterval(displayTime, 1);



})