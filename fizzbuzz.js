$(document).ready(function(){
  console.log("Ready!");
  var a = 1;

  while (a < 101){
    if (a % 3 == 0 && a % 5 != 0){
      $("p").append("Fizz" + "<br>");
    }
    if (a % 3 != 0 && a % 5 == 0){
      $("p").append("Buzz" + "<br>");
    }
    if (a % 3 == 0 && a % 5 == 0){
      $("p").append("FizzBuzz" + "<br>");
    }
    if (a % 3 != 0 && a % 5 != 0){
      $("p").append(a + "<br>");   
    }
    a++;
  }
});