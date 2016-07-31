require('readline');
var birthdayYear = 1984;
console.log(birthdayYear);
console.log(typeof birthdayYear);
var a = "Chris";
console.log(typeof a);
var b = a.length;
console.log(b);
console.log("Hello \t tommorrow \n\n nextline \n\r return");
var c = 225;
console.log(c.length);
console.log(a.charAt(1));
var d = 35;
if (d > 30)
	console.log("d is " + d);
else 
	console.log(d);

console.log("next!");
if("not empty"){
	console.log("evaluated to true");
}
if (" "){
	console.log("will never run");
}

if (true) {
  console.log("truthy");
}

if ({}) {
  console.log("truthy");
}

if ("false") {
  console.log("truthy");
}

for (var i = 10; i >= 0; i--) {
	console.log(i);
}

var a = 5

while (a > 0){
	console.log(a);
	a--;
}

var arri = new Array();
arri[0] = "hello";
arri[1] = "again";
arri[2] = "friend";
console.log(arri);
console.log(arri[0]);
console.log(arri[2]);
console.log(arri.length);
console.log(arri.indexOf("friend"));
console.log(arri.sort());