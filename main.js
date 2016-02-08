var a = "bill"; //declaring a variable, string

1 // number
"bill" //string
true //boolean


var array = [1, 2, 3, 4] //declaring an array

function add(x, y){
  console.log(x + y);
}
function subtract(x, y){
  console.log(x - y);
}
function multiply(x, y){
  alert(x * y)
}

function check(x){
  if(x < 10){
    alert(x + " is less than 10!");
  } else {
    console.log(x + " is greater than 10, or 10 ");
  }
}

function kissass(){
  console.log("New York Code and Design Academy rules!");
}

function whatname(x){
  console.log("You have entered name:" + x);
}

var poolgames = [["9-ball", "8-ball"], ["straight pool", "cut-throat"]]
console.log(poolgames[1][0]);

var paCities = ["Warren", "Washington", "Wilkes-Barre", "Williamsport", "York"];
var shortCities = [];
function checkCities(){

  for (var i = 0; i < paCities.length; i++){
    var city = paCities[i];
    if (city.length < 8) {
      shortCities.push(paCities[i]);
    }
  }
   console.log(shortCities);
   return shortCities.join();
}

function printCity(x){
  console.log(x);

}
function prizeDoor(x) {
  if (x === 1){
    alert("You win a brand new CAR!");
  } else if (x === 2){
    alert("You win a free trip to Jamaica!!");
  }else if (x === 3) {
    alert("You win a day of hard labor in the salt mines!")
  }else {
    alert("That is not a prize door, you win NOTHING")
  }
}

