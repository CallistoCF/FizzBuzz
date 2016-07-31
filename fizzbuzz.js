$(document).ready(function(){
  console.log("Ready!");
  var b = prompt("Please Enter a Number");
  counter(parseInt(b));
  
});

function counter(upto){
    var a = 0;
    while (a < upto){
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
}