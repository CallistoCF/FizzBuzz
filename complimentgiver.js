
var names = ['Abe', 'Bob', 'Ted', 'Frankenstein'];
var compliment = "is great!";
function complimentgiver(array, string){
	for (var i = array.length -1; i >= 0; i--) {
		console.log(array[i]+" "+string);
	}
};

complimentgiver(names, compliment);

var glob = 0;
function counter(){
	return glob+=1;
}
console.log(counter());
console.log(counter());
console.log(counter());

function adder(x) {
  return function(y) {
    return x + y;
  }
}

var add3 = adder(3);
var add5 = adder(5);

console.log(add3(5)); // 8
console.log(add5(5)); // 10